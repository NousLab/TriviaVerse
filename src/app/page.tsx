import { StarknetProvider } from '@/components/providers/starknet-provider';

export default function Home({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StarknetProvider>{children}</StarknetProvider>
      </body>
    </html>
  );
}