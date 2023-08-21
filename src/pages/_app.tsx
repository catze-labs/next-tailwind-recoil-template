import '../styles/globals.css';

import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import { WagmiConfig } from 'wagmi';

import ModalProvider from '@/components/modal/ModalProvider';
import { chains, wagmiConfig } from '@/lib/config/wagmiConfig';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
      retry: 1,
      staleTime: 1000 * 5,
    },
  },
});

function App({ Component, pageProps }: AppProps) {
  return (
    <>
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
