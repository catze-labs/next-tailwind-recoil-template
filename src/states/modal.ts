import { atom } from 'recoil';

import { ModalOptions } from '@/lib/hooks/useModal';

export const modalKey = '@<THIS_PROJECT_NAME>-modal';
export const modalState = atom<{ props: ModalOptions[] }>({
  key: modalKey,
  default: {
    props: [],
  },
});
