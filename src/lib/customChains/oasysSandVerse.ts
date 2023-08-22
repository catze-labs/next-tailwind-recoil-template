import { Chain } from 'wagmi';

export const oasysSandverse = {
  name: 'Oasys Sandverse',
  id: 20197,
  network: 'oasys-sandverse',
  testnet: true,
  nativeCurrency: {
    name: 'OAS',
    symbol: 'OAS',
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ['https://rpc.sandverse.oasys.games'],
    },
    public: {
      http: ['https://rpc.sandverse.oasys.games'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Oasys Sandverse Explorer',
      url: 'https://scan.sandverse.oasys.games',
    },
  },
} as const satisfies Chain;

export default oasysSandverse;
