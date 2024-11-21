import { useEffect, useState } from 'react';
import { TelegramWebApp, getTelegramWeb } from '@/lib/telegram/config';

export function useTelegram() {
  const [webApp, setWebApp] = useState<TelegramWebApp | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [colorScheme, setColorScheme] = useState<'light' | 'dark'>('light');
  const [user, setUser] = useState<TelegramWebApp['initDataUnsafe']['user']>();

  useEffect(() => {
    const app = getTelegramWeb();
    if (app) {
      setWebApp(app);
      setColorScheme(app.colorScheme);
      setUser(app.initDataUnsafe.user);

      app.ready();
      setIsReady(true);

      // Opcional: expandir la webapp automáticamente
      app.expand();
    }
  }, []);

  // Aplicar los colores de Telegram al tema de la aplicación
  useEffect(() => {
    if (webApp) {
      const root = document.documentElement;
      const theme = webApp.themeParams;

      root.style.setProperty('--tg-bg-color', theme.bg_color);
      root.style.setProperty('--tg-text-color', theme.text_color);
      root.style.setProperty('--tg-hint-color', theme.hint_color);
      root.style.setProperty('--tg-link-color', theme.link_color);
      root.style.setProperty('--tg-button-color', theme.button_color);
      root.style.setProperty('--tg-button-text-color', theme.button_text_color);
    }
  }, [webApp]);

  return {
    webApp,
    isReady,
    colorScheme,
    user,
    close: () => webApp?.close(),
    expand: () => webApp?.expand(),
  } as const;
}