import { Chain } from "wagmi";

export const yooldoVerseMainnet = {
  name: "Yooldo Verse",
  id: 20197,
  network: "yooldo-verse",
  testnet: false,
  nativeCurrency: {
    name: "OAS",
    symbol: "OAS",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.yooldo-verse.xyz/"],
    },
    public: {
      http: ["https://rpc.yooldo-verse.xyz/"],
    },
  },
  blockExplorers: {
    default: {
      name: "Yooldo Verse Explorer",
      url: "https://explorer.yooldo-verse.xyz",
    },
  },
} as const satisfies Chain;

export default yooldoVerseMainnet;
