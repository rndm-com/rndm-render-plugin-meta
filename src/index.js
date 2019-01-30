import React from 'react';
import { use } from '@rndm/render';
import components from './components';

const plugin = {
  key: 'meta',
  components,
};

use(plugin);

export default plugin;
