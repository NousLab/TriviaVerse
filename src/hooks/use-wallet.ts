'use client';

import { useAccount, useConnect, useNetwork, useDisconnect } from '@starknet-react/core';
import type { Connector } from '@starknet-react/core';
import { useMemo, useCallback } from 'react';
import { Contract } from 'starknet';

export type WalletStatus = 'connected' | 'disconnected' | 'connecting' | 'reconnecting';

interface ConnectorIcon {
  dark: string;
  light: string;
}

export function useWallet() {
  const { address, status, account } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();
  const { chain } = useNetwork();

  // Formatear la dirección para mostrar
  const shortAddress = useMemo(() => {
    if (!address) return '';
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  }, [address]);

  // Estado de la wallet
  const walletStatus = useMemo((): WalletStatus => {
    if (status === 'connected' && address) return 'connected';
    if (status === 'connecting') return 'connecting';
    if (status === 'reconnecting') return 'reconnecting';
    return 'disconnected';
  }, [status, address]);

  // Conectar wallet específica
  const connectWallet = useCallback(async (walletId: string) => {
    try {
      const connector = connectors.find((c: Connector) => c.id === walletId);
      if (!connector) {
        throw new Error(`No connector found for wallet ${walletId}`);
      }
      await connect({ connector });
    } catch (error) {
      console.error('Error connecting wallet:', error);
      throw error;
    }
  }, [connectors, connect]);

  // Obtener balance usando el contrato de ETH
  const getBalance = useCallback(async () => {
    if (!account || !address) return null;
    try {
      // Dirección del contrato ETH en testnet
      const ethAddress = '0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7';
      
      const ethContract = new Contract(
        ETH_ABI,
        ethAddress,
        account
      );

      const balance = await ethContract.balanceOf(address);
      return balance;
    } catch (error) {
      console.error('Error getting balance:', error);
      return null;
    }
  }, [account, address]);

  // Lista de wallets disponibles con información adicional
  const availableWallets = useMemo(() => {
    return connectors.map((connector: Connector) => ({
      id: connector.id,
      name: connector.name,
      icon: typeof connector.icon === 'string' 
        ? connector.icon 
        : (connector.icon as ConnectorIcon)?.light || '',
    }));
  }, [connectors]);

  return {
    // Estado básico
    address,
    shortAddress,
    status: walletStatus,
    isConnected: walletStatus === 'connected',
    chain,

    // Acciones
    connectWallet,
    disconnect,
    getBalance,

    // Información de wallets
    availableWallets,
    
    // Objetos raw por si se necesitan
    account,
    connectors,
  } as const;
}

// ABI mínimo para el contrato de ETH
const ETH_ABI = [
  {
    members: [
      {
        name: "low",
        offset: 0,
        type: "felt"
      },
      {
        name: "high",
        offset: 1,
        type: "felt"
      }
    ],
    name: "Uint256",
    size: 2,
    type: "struct"
  },
  {
    inputs: [
      {
        name: "account",
        type: "felt"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        name: "balance",
        type: "Uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
] as const;