import {use} from 'react';
import ServerContext from '../ServerContext';

export default function Nested() {
  const serverContextValue: string = use(ServerContext);
  return (
    <>
      <h1>Nested</h1>
      {serverContextValue}
    </>
  );
}
