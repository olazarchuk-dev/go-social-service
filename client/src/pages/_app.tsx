import '../styles/global.css';
import 'webrtc-adapter';
import Head from 'next/head';
import type { AppProps /*, AppContext */ } from 'next/app';
import { AuthContextProvider } from '../modules/auth_provider';
import { WebSocketProvider } from '../modules/websocket_provider';

export default function SocialServiceApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Social-Service</title>
        <meta name="application-name" content="social-service" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/static/icons/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#1b2224" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#1b2224" />
      </Head>
      <AuthContextProvider>
        <WebSocketProvider>
          <div className="flex flex-col h-full min-h-screen font-sans text-base antialiased transition-all duration-300 md:flex-row">
            <Component {...pageProps} />
          </div>
        </WebSocketProvider>
      </AuthContextProvider>
    </>
  );
}
