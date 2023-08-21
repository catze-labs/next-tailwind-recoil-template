import { Chain, configureChains, createConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';

import { supportedChainSettings } from '@/lib/config/networkConfig';

const { chains, publicClient, webSocketPublicClient } = configureChains(
  supportedChainSettings,
  [publicProvider()],
);

const wagmiConfig = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
});

export { wagmiConfig, chains };
