interface StarknetChain {
  id: bigint;  // Cambiado a bigint
  name: string;
  network: string;
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: number;
  };
  rpcUrls: {
    default: {
      http: string[];
    };
    public: {
      http: string[];
    };
  };
  blockExplorers: {
    default: {
      name: string;
      url: string;
    };
  };
}

export const StarknetChains: Record<string, StarknetChain> = {
  mainnet: {
    id: BigInt(1),  // Cambiado a BigInt
    name: "Starknet Mainnet",
    network: "mainnet-alpha",
    nativeCurrency: {
      name: "Ether",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: {
      default: {
        http: ["https://alpha-mainnet.starknet.io"],
      },
      public: {
        http: ["https://alpha-mainnet.starknet.io"],
      },
    },
    blockExplorers: {
      default: {
        name: "Voyager",
        url: "https://voyager.online",
      },
    },
  },
  goerli: {
    id: BigInt(5),  // Cambiado a BigInt
    name: "Starknet Testnet",
    network: "goerli-alpha",
    nativeCurrency: {
      name: "Ether",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: {
      default: {
        http: ["https://alpha4.starknet.io"],
      },
      public: {
        http: ["https://alpha4.starknet.io"],
      },
    },
    blockExplorers: {
      default: {
        name: "Voyager",
        url: "https://goerli.voyager.online",
      },
    },
  },
};

export const defaultChain = StarknetChains.goerli;