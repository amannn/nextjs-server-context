import {useContext} from 'react';
import ServerContext from './ServerContext';

export default function Home() {
  const serverContextValue = useContext(ServerContext);
  return (
    <>
      <h1>Home</h1>
      {serverContextValue}
    </>
  );
}
