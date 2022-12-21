import {use} from 'react';
import ServerContext from './ServerContext';

export default function ServerContextValue() {
  const serverContextValue: string = use(ServerContext);

  return (
    <p>
      Server context value: <span>{serverContextValue}</span>
    </p>
  );
}
