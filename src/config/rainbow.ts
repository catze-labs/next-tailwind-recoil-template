import { getDefaultWallets } from '@rainbow-me/rainbowkit';
import { Chain, configureChains, createConfig } from 'wagmi';
import { goerli, mainnet, polygon, sepolia } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

const klaytnBaobabChain: Chain = {
  id: 1001,
  name: 'Klaytn Baobab Testnet',
  network: 'klaytn',
  nativeCurrency: {
    name: 'KLAY',
    symbol: 'KLAY',
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ['https://api.baobab.klaytn.net:8651'],
    },
    public: {
      http: ['https://api.baobab.klaytn.net:8651'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Klaytnscope',
      url: 'https://baobab.scope.klaytn.com',
    },
    klaytnScope: {
      name: 'Klaytnscope',
      url: 'https://baobab.scope.klaytn.com',
    },
  },
  testnet: true,
};

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet, goerli, sepolia, polygon, klaytnBaobabChain],
  [publicProvider()],
);

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

export { wagmiConfig, chains };
