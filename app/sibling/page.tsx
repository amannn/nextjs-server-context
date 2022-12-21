import {use} from 'react';
import ServerContext from '../ServerContext';

export default function Sibling() {
  const serverContextValue: string = use(ServerContext);
  return (
    <>
      <h1>Sibling</h1>
      {serverContextValue}
    </>
  );
}
