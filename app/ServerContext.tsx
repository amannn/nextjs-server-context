import {createServerContext} from 'react';

export default createServerContext<string>(
  'server',
  'Initial server context value (incorrect)'
);
