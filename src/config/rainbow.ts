import { connectorsForWallets } from '@rainbow-me/rainbowkit';
import {
  metaMaskWallet,
  walletConnectWallet,
} from '@rainbow-me/rainbowkit/wallets';
import { Chain, configureChains, createClient } from 'wagmi';
import { goerli, mainnet, polygon } from 'wagmi/chains';
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

const { chains, provider } = configureChains(
  [mainnet, goerli, polygon, klaytnBaobabChain],
  [publicProvider()],
);

const connectors = connectorsForWallets([
  {
    groupName: 'Recommended',
    wallets: [
      //   injectedWallet({ chains }),
      metaMaskWallet({ chains }),
      //   coinbaseWallet({ chains, appName: "Test" }),
      walletConnectWallet({ chains }),
    ],
  },
]);

const wagmiClient = createClient({
  autoConnect: false,
  connectors,
  provider,
});

export { wagmiClient, chains };
