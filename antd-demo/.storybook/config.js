import { configure, addDecorator } from '@storybook/react';
import React from 'react';

addDecorator((story) => (
  <div>
    <h1>Examples</h1>
    {story()}
  </div>
));

configure(
  () => {
    const req = require.context('../src', true, /.stories.js$/);
    req.keys().forEach((filename) => req(filename));
  },
  module
);

configure(loadStories, module);