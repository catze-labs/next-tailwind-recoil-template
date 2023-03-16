import { addDecorator } from '@storybook/react';
import { RecoilRoot } from 'recoil';

import '../src/styles/globals.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator((storyFn) => (
  <RecoilRoot>
    <>{storyFn()}</>
  </RecoilRoot>
));
