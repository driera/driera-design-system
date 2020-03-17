import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import 'storybook-chromatic';

addDecorator(withA11y);
addDecorator(story => (
  <>
    {story()}
  </>
));

// automatically import all files ending in *.stories.js|mdx
configure(
  [
    require.context('../src', true, /\.stories\.(js|mdx)$/),
  ],
  module
);
