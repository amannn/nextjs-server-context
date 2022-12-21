// @ts-expect-error
import {createServerContext} from 'react';

export default createServerContext(
  'server',
  'Initial server context value (incorrect)'
);
