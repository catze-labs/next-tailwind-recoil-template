import type { Chain } from 'wagmi';
import { bsc, bscTestnet, goerli, sepolia, mainnet } from 'wagmi/chains';

export interface NetworkSetting {
  chain: Chain;
  name: string;
  abbreviation: string;
  image: string;
}

// const networks: {
//   mainnet: NetworkSetting[];
//   testnet: NetworkSetting[];
// } = {
//   mainnet: [
//     {
//       chain: oasysMainnet,
//       name: 'Oasys Mainnet',
//       abbreviation: 'Oasys',
//       image: `${CDN_LINKS.networkBase}/oasys-mainnet.png`,
//     },
//     {
//       chain: mainnet,
//       name: 'Ethereum Mainnet',
//       abbreviation: 'Ethereum',
//       image: `${CDN_LINKS.networkBase}/eth-mainnet.png`,
//     },
//     {
//       chain: bsc,
//       name: 'Binance Smart Chain',
//       abbreviation: 'BSC',
//       image: `${CDN_LINKS.networkBase}/bsc-mainner.png`,
//     },
//   ],
//   testnet: [
//     {
//       chain: oasysSandverse,
//       name: 'Oasys Sandverse',
//       abbreviation: 'Oasys',
//       image: `${CDN_LINKS.networkBase}/oasys-sandverse.png`,
//     },
//     {
//       chain: goerli,
//       name: 'Goerli Testnet',
//       abbreviation: 'Goerli',
//       image: `${CDN_LINKS.networkBase}/goerli.png`,
//     },
//     {
//       chain: sepolia,
//       name: 'Sepolia Testnet',
//       abbreviation: 'Sepolia',
//       image: ``,
//     },
//     {
//       chain: bscTestnet,
//       name: 'BSC Testnet',
//       abbreviation: 'BSC',
//       image: `${CDN_LINKS.networkBase}/bsc-testnet.png`,
//     },
//   ],
// }