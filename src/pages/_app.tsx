import "../styles/globals.css";
import ModalProvider from "@/components/modal/ModalProvider";
import { chains, wagmiConfig } from "@/lib/config/wagmiConfig";
import { NextSeo } from "next-seo";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import { WagmiConfig } from "wagmi";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
      retry: 1,
      staleTime: 1000 * 5,
    },
  },
});

const seoSchema = {
  title: "Home",
  name: "Next-Tailwind",
  description:
    "This is definetly easy-way to create web3 next-tailwind project.",
  url: "https://template-test-beige.vercel.app/",
};

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo
        title={seoSchema.title}
        titleTemplate={`%s | ${seoSchema.name}`}
        description={seoSchema.description}
        defaultTitle={seoSchema.name}
        openGraph={{
          type: "website",
          url: seoSchema.url,
          title: seoSchema.title,
          description: seoSchema.description,
        }}
        additionalLinkTags={[]}
        additionalMetaTags={[]}
        robotsProps={{
          noarchive: true,
          nosnippet: false,
          maxSnippet: 50,
          maxImagePreview: "standard",
          notranslate: false,
          unavailableAfter: new Date("2023-08-01").toISOString(),
        }}
      />
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <WagmiConfig config={wagmiConfig}>
            <ModalProvider />
            <Component {...pageProps} />
          </WagmiConfig>
        </QueryClientProvider>
      </RecoilRoot>
    </>
  );
}

export default App;
