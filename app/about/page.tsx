import {use} from 'react';
import ServerContext from '../ServerContext';

export default function About() {
  const serverContextValue: string = use(ServerContext);
  return (
    <>
      <h1>About</h1>
      {serverContextValue}
    </>
  );
}
