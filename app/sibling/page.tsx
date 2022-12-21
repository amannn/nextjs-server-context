import {use} from 'react';
import ServerContext from '../ServerContext';

export default function Sibling() {
  const serverContextValue = use(ServerContext);

  return (
    <>
      <h1>Sibling</h1>
      <p>Server context value: {serverContextValue}</p>
    </>
  );
}
