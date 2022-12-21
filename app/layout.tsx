import Navigation from './Navigation';
import ServerContext from './ServerContext';

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <ServerContext.Provider value="changed">
          <Navigation />
          {children}
        </ServerContext.Provider>
      </body>
    </html>
  );
}
