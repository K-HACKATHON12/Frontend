import { Providers } from "./providers.jsx";
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
    return (
      <Providers>
        <Component {...pageProps} />
      </Providers>
    );
  }
  
  export default MyApp;