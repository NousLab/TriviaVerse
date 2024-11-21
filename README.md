# TriviaVerse 🎮

A Web3 trivia game built as a Telegram Mini App on the Starknet blockchain.

## 🚀 Project Overview

TriviaVerse is a P2P trivia game that integrates with Starknet blockchain and Telegram Mini Apps. Players can participate in battles, tournaments, and earn rewards through gameplay.

## 🛠 Tech Stack

- **Frontend**: Next.js 14 with App Router
- **Styling**: TailwindCSS
- **Language**: TypeScript
- **Linting**: Biome
- **Blockchain**: Starknet
- **Platform**: Telegram Mini Apps

## ⚙️ Current Implementation

### Starknet Integration

- [x] Wallet connection setup (Argent X & Braavos)
- [x] Network configuration (Testnet/Mainnet)
- [x] Custom hooks for wallet management
- [x] Provider configuration

### Project Structure

```plaintext
src/
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   │   └── page.tsx
│   │   └── layout.tsx
│   ├── (game)/
│   │   ├── battle/
│   │   │   └── page.tsx
│   │   ├── tournament/
│   │   │   └── page.tsx
│   │   ├── practice/
│   │   │   └── page.tsx
│   │   └── layout.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── ui/
│   ├── game/
│   └── wallet/
├── lib/
│   ├── starknet/
│   ├── telegram/
│   └── utils.ts
├── types/
└── hooks/
```

### Key Files

1. `src/components/providers/starknet-provider.tsx`:
   - Main Starknet provider configuration
   - Network setup
   - Wallet connectors configuration

2. `src/lib/starknet/config.ts`:
   - Chain configurations
   - Network constants
   - RPC endpoints setup

3. `src/hooks/use-wallet.ts`:
   - Custom hook for wallet interactions
   - Connection management
   - Balance queries
   - Address formatting

## 🚀 Getting Started

1. Clone the repository:
```bash
git clone [repository-url]
cd triviaverse
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file:
```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_STARKNET_NETWORK=goerli-alpha
NEXT_PUBLIC_TELEGRAM_BOT_USERNAME=your_bot_username
NEXT_PUBLIC_TELEGRAM_BOT_TOKEN=your_bot_token
```

4. Run the development server:
```bash
npm run dev
```

## 📝 Environment Setup

The project requires the following environment variables:

- `NEXT_PUBLIC_APP_URL`: Base URL of your application
- `NEXT_PUBLIC_STARKNET_NETWORK`: Starknet network to connect to
- `NEXT_PUBLIC_TELEGRAM_BOT_USERNAME`: Your Telegram bot username
- `NEXT_PUBLIC_TELEGRAM_BOT_TOKEN`: Your Telegram bot token

## 🔧 Development Tools

- **Biome**: For code formatting and linting
- **TypeScript**: For type safety
- **Next.js**: For server-side rendering and routing

## 🚧 Work in Progress

Current development focus:
- [ ] Telegram Mini App integration
- [ ] Game mechanics implementation
- [ ] Smart contract development
- [ ] User interface design
- [ ] P2P battle system
- [ ] Tournament system

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
