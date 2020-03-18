import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { themes } from '@storybook/theming';
import { withA11y } from '@storybook/addon-a11y';
import 'storybook-chromatic';

addParameters({
  options: {
    theme: themes.dark
  }
});

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
