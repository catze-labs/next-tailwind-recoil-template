import type { Chain } from 'wagmi';
import { bsc, bscTestnet, goerli, mainnet, sepolia } from 'wagmi/chains';

import oasysMainnet from '@/lib/customChains/oasysMainnet';
import oasysSandverse from '@/lib/customChains/oasysSandVerse';
import yooldoVerseMainnet from '@/lib/customChains/yooldoVerseMainnet';

export interface NetworkSetting {
  chain: Chain;
  name: string;
  abbreviation: string;
  image: string;
}

const ASSET_PATH = '/assets/network/';

const networks: {
  mainnet: NetworkSetting[];
  testnet: NetworkSetting[];
} = {
  mainnet: [
    {
      chain: oasysMainnet,
      name: 'Oasys Mainnet',
      abbreviation: 'Oasys',
      image: `${ASSET_PATH}/oasys-sandverse.png`,
    },
    {
      chain: yooldoVerseMainnet,
      name: 'Yooldo Verse Mainnet',
      abbreviation: 'Yooldo',
      image: `${ASSET_PATH}/yooldo-verse.png`,
    },
    {
      chain: mainnet,
      name: 'Ethereum Mainnet',
      abbreviation: 'Ethereum',
      image: `${ASSET_PATH}/goerli.png`,
    },
    {
      chain: bsc,
      name: 'Binance Smart Chain',
      abbreviation: 'BSC',
      image: `${ASSET_PATH}/bsc-testnet.png`,
    },
  ],
  testnet: [
    {
      chain: oasysSandverse,
      name: 'Oasys Sandverse',
      abbreviation: 'Oasys',
      image: `${ASSET_PATH}/oasys-sandverse.png`,
    },
    {
      chain: goerli,
      name: 'Goerli Testnet',
      abbreviation: 'Goerli',
      image: `${ASSET_PATH}/goerli.png`,
    },
    {
      chain: sepolia,
      name: 'Sepolia Testnet',
      abbreviation: 'Sepolia',
      image: `${ASSET_PATH}/sepolia.png`,
    },
    {
      chain: bscTestnet,
      name: 'BSC Testnet',
      abbreviation: 'BSC',
      image: `${ASSET_PATH}/bsc-testnet.png`,
    },
  ],
};

export const supportednetworks = networks[process.env.NEXT_PUBLIC_CHAIN_ENV];

export const supportedChainSettings: Chain[] = supportednetworks.map(
  (network) => network.chain,
);

export const isTestnetMode = process.env.NEXT_PUBLIC_CHAIN_ENV === 'testnet';

export const getNetworkSetting = (chainId: number): NetworkSetting => {
  const network = supportednetworks.find(
    (network) => network.chain.id === chainId,
  );
  if (!network) {
    throw new Error(`Network not found for chainId ${chainId}`);
  }
  return network;
};
