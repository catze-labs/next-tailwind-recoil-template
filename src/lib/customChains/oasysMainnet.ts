import { Chain } from 'wagmi';

export const oasysMainnet = {
  name: 'Oasys',
  network: 'oasys',
  id: 248,
  testnet: false,
  nativeCurrency: {
    name: 'OAS',
    symbol: 'OAS',
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ['https://rpc.mainnet.oasys.games'],
    },
    public: {
      http: ['https://rpc.mainnet.oasys.games'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Oasys Explorer',
      url: 'https://scan.oasys.games',
    },
  },
} as const satisfies Chain;

export default oasysMainnet;
