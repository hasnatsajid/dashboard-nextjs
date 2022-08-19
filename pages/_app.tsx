import { AppProps } from 'next/app';
import '../scss/index.css';
import '../scss/main.scss';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
