import { Connector } from 'wagmi';

import MetaMaskConnector from '@/lib/connectors/metamask';

interface WalletConfig {
  key: string; // Unique key for the wallet
  name: string;
  connector: Connector;
  supportedChainIds?: number[]; // If not provided, all chains (may) available
  className?: string;
  style?: React.CSSProperties;
  image: string;
}

const WALLET_PATH = '/assets/wallet';

export const walletConfigList: WalletConfig[] = [
  {
    key: 'metamask',
    name: 'Metamask',
    connector: MetaMaskConnector,
    image: `${WALLET_PATH}/metamask.png`,
  },
];

export function getWalletConfig(connectorId: string): WalletConfig | null {
  return (
    walletConfigList.find(
      (walletConfig) => walletConfig.connector.id === connectorId,
    ) ?? null
  );
}
