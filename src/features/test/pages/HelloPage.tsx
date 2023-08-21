import { GetServerSideProps, NextPage } from 'next';
import { useConnect, useSignMessage } from 'wagmi';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';

import Counter from '@/features/test/components/Counter';
import TestHeader from '@/features/test/components/TestHeader';
import { useCatFact } from '@/requests/cat';

export const getServerSideProps: GetServerSideProps = async () => {
  return { props: {} };
};

const HelloPage: NextPage = () => {
  const { data: catfact, isLoading } = useCatFact();
  const { connect } = useConnect({
    connector: new MetaMaskConnector(),
  });
  const { signMessage } = useSignMessage({
    message: 'Hello World',
    onSuccess: (result) => {
      console.log(result);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return (
    <div className="flex flex-col gap-4 min-h-screen justify-center items-center">
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-xl font-bold"
        onClick={() => connect()}
      >
        Connect Wallet
      </button>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-xl font-bold"
        onClick={() => signMessage()}
      >
        Sign Messages
      </button>
      <div className="w-64 flex flex-col gap-4">
        <TestHeader />
        {isLoading && <p>Loading...</p>}
        {!isLoading && catfact && <p>{catfact.fact}</p>}
        <Counter />
      </div>
    </div>
  );
};

export default HelloPage;
