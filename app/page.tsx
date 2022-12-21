import {use} from 'react';
import ServerContext from './ServerContext';

export default function Home() {
  const serverContextValue = use(ServerContext);

  return (
    <>
      <h1>Home</h1>
      <p>Server context value: {serverContextValue}</p>
    </>
  );
}
