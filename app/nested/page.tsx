import {use} from 'react';
import ServerContext from '../ServerContext';

export default function Nested() {
  const serverContextValue = use(ServerContext);

  return (
    <>
      <h1>Nested</h1>
      <p>Server context value: {serverContextValue}</p>
    </>
  );
}
