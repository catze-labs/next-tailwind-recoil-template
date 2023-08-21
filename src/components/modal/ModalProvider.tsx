import { AnimatePresence, motion } from 'framer-motion';
import { PropsWithChildren } from 'react';

import useModal from '@/lib/hooks/useModal';

const ModalProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const { modals } = useModal();

  return (
    <AnimatePresence>
      {modals.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={'fixed inset-0 z-50'}
        >
          {modals.map((modal, i) => (
            <div
              key={modal.modalKey}
              className={`fixed inset-0`}
              style={{ zIndex: 100 + i }}
            >
              <div
                className={
                  'flex flex-grow h-full items-center justify-center bg-[rgba(0,0,0,0.5)]'
                }
              >
                <div className={'w-64 rounded-sm bg-white'}>
                  {modal.component}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalProvider;
