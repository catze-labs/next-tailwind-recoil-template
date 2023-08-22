import { GetServerSideProps, NextPage } from 'next';
import { useConnect } from 'wagmi';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';

import Counter from '@/features/test/components/Counter';
import TestCatFunFactModal from '@/features/test/components/TestCatFunFactModal';
import TestForm from '@/features/test/components/TestForm';
import TestHeader from '@/features/test/components/TestHeader';
import useModal from '@/lib/hooks/useModal';

export const getServerSideProps: GetServerSideProps = async () => {
  return { props: {} };
};

const HelloPage: NextPage = () => {
  const { connect } = useConnect({
    connector: new MetaMaskConnector(),
  });
  const { openModal } = useModal();

  const handleModal = () => {
    openModal({
      modalKey: '@funfacts-with-cats-landing',
      component: <TestCatFunFactModal />,
    });
  };

  return (
    <div
      className={
        'w-64 flex flex-col gap-4 min-h-screen justify-center items-center py-16 mx-auto'
      }
    >
      <TestHeader />
      <button
        className={
          'w-full px-4 py-2 bg-blue-500 text-white rounded-xl font-bold'
        }
        onClick={() => connect()}
      >
        Connect Wallet
      </button>
      <button
        className={
          'w-full px-4 py-2 bg-blue-500 text-white rounded-xl font-bold'
        }
        onClick={handleModal}
      >
        Show Cats Fun Facts
      </button>
      <Counter />
      <TestForm />
    </div>
  );
};

export default HelloPage;
