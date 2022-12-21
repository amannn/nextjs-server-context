import {use} from 'react';
import ServerContext from './ServerContext';

export default function Home() {
  const serverContextValue: string = use(ServerContext);
  return (
    <>
      <h1>Home</h1>
      {serverContextValue}
    </>
  );
}
