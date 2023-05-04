import {useContext} from 'react';
import ServerContext from '../ServerContext';

export default function About() {
  const serverContextValue = useContext(ServerContext);
  return (
    <>
      <h1>About</h1>
      {serverContextValue}
    </>
  );
}
