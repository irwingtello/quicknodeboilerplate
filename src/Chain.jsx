export const hyperspaceTestnet = {
    id: 314_1,
    name: 'Filecoin HyperSpace Testnet',
    network: 'hyperspace testnet',
    nativeCurrency: {
    decimals: 18,
    name: 'Filecoin',
    symbol: 'tFIL',
    },
    rpcUrls: {
    default: { http: process.env.REACT_APP_FILECOIN_HYPERSPACE },
    },
    blockExplorers: {
    default: { name: 'Glif', url: 'https://explorer.glif.io/type/valuex/?network=hyperspacenet' },
    },
    testnet: true,
};

export const avalanche = {
    id: 43_114,
    name: 'Avalanche',
    network: 'avalanche',
    nativeCurrency: {
      decimals: 18,
      name: 'Avalanche',
      symbol: 'AVAX',
    },
    rpcUrls: {
      default: { http: [process.env.REACT_APP_AVALANCHE_MAINNET] },
    },
    blockExplorers: {
      etherscan: { name: 'SnowTrace', url: 'https://snowtrace.io/address/type/valuex' },
      default: { name: 'SnowTrace', url: 'https://snowtrace.io/address/type/valuex' },
    },
  }

  export const avalancheFuji = {
    id: 43_113,
    name: 'Avalanche Fuji',
    network: 'avalanche-fuji',
    nativeCurrency: {
      decimals: 18,
      name: 'Avalanche Fuji',
      symbol: 'AVAX',
    },
    rpcUrls: {
      default: { http: [process.env.REACT_APP_AVALANCHE_FUJI] },
    },
    blockExplorers: {
      etherscan: { name: 'SnowTrace', url: 'https://testnet.snowtrace.io/type/valuex' },
      default: { name: 'SnowTrace', url: 'https://testnet.snowtrace.io/type/valuex' },
    },
    testnet: true,
  }
  export const polygon = {
    id: 137,
    name: 'Polygon',
    network: 'matic',
    nativeCurrency: { name: 'MATIC', symbol: 'MATIC', decimals: 18 },
    rpcUrls: {
      default: {
        http: [process.env.REACT_APP_POLYGON_MAINNET],
      },
    },
    blockExplorers: {
      etherscan: {
        name: 'PolygonScan',
        url: 'https://polygonscan.com/type/valuex',
      },
      default: {
        name: 'PolygonScan',
        url: 'https://polygonscan.com/type/valuex',
      },
    },
  } 
  export const polygonMumbai = {
    id: 80_001,
    name: 'Polygon Mumbai',
    network: 'matic mumbai',
    nativeCurrency: { name: 'MATIC', symbol: 'MATIC', decimals: 18 },
    rpcUrls: {
      default: {
        http: [process.env.REACT_APP_POLYGON_MUMBAI],
      },
    },
    blockExplorers: {
      etherscan: {
        name: 'PolygonScan',
        url: 'https://mumbai.polygonscan.com/type/valuex',
      },
      default: {
        name: 'PolygonScan',
        url: 'https://mumbai.polygonscan.com/type/valuex',
      },
    },
    testnet: true,
  }