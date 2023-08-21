import { XMarkIcon } from '@heroicons/react/24/outline';

import useModal from '@/lib/hooks/useModal';
import { useCatFact } from '@/requests/cat';

const TestCatFunFactModal = () => {
  const { data: catfact, isLoading } = useCatFact();
  const { close } = useModal();
  return (
    <div className="w-full flex flex-col gap-4 p-6">
      <div className={'w-full flex gap-4 justify-between'}>
        <span className={'text-xl font-bold'}>Fun Facts Of Cat</span>
        <button className={'bg-transparent w-6'} onClick={() => close()}>
          <XMarkIcon className={'w-6 self-end'} />
        </button>
      </div>
      {isLoading && <p>Loading...</p>}
      {!isLoading && catfact && <p>{catfact.fact}</p>}
    </div>
  );
};

export default TestCatFunFactModal;
