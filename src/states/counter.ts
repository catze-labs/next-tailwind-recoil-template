import { atom } from 'recoil';

import localStorageEffect from '@/src/states/localStorageEffect';

export const counterState = atom({
  key: '@counter',
  default: 0,
  effects: [localStorageEffect('@counter')],
});
