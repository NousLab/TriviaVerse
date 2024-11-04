'use client';

import { StarknetConfig, InjectedConnector } from '@starknet-react/core';
import type { ProviderInterface } from 'starknet';
import { RpcProvider } from 'starknet';
import { ReactNode } from 'react';

// Definimos el tipo Chain como un type helper
type Chain = {
  readonly id: bigint;
  readonly name: string;
  readonly network: string;
  readonly nativeCurrency: {
    readonly name: string;
    readonly symbol: string;
    readonly decimals: number;
    readonly address: `0x${string}`;
  };
  readonly rpcUrls: {
    readonly default: {
      readonly http: readonly string[];
    };
    readonly public: {
      readonly http: readonly string[];
    };
  };
};

// Definimos la configuración de la red de pruebas (testnet)
const testnet: Chain = {
  id: BigInt('0x534e5f474f45524c49'),
  name: 'Starknet Testnet',
  network: 'goerli-alpha',
  nativeCurrency: {
    name: 'Ethereum',
    symbol: 'ETH',
    decimals: 18,
    address: '0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7' as `0x${string}`
  },
  rpcUrls: {
    default: {
      http: ['https://alpha4.starknet.io']
    },
    public: {
      http: ['https://alpha4.starknet.io']
    }
  }
} as const;

const connectors = [
  new InjectedConnector({ options: { 
    id: 'braavos',
    name: 'Braavos'
  }}),
  new InjectedConnector({ options: { 
    id: 'argentX',
    name: 'Argent X'
  }}),
];

// Factory que devuelve un provider o null
const providerFactory = (chain: Chain): ProviderInterface | null => {
  return new RpcProvider({ 
    nodeUrl: chain.rpcUrls.default.http[0] 
  });
};

export function StarknetProvider({ children }: { children: ReactNode }) {
  return (
    <StarknetConfig
      chains={[testnet]}
      connectors={connectors}
      provider={providerFactory}
    >
      {children}
    </StarknetConfig>
  );
}