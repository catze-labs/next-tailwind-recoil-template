import { MetaMaskConnector } from 'wagmi/connectors/metaMask';

import { supportedChainSettings } from '@/lib/config/networkConfig';

const connector = new MetaMaskConnector({
  chains: supportedChainSettings,
  options: {
    shimDisconnect: false,
  },
});

export default connector;
