import "../styles/globals.css";
import Layout from "../components/Layout";
import { AppProps } from "next/app";
import React from "react";
//import { Provider as SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      {/* <SessionProvider session={pageProps.session}> */}
        <Component {...pageProps} />
        {/* </SessionProvider> */}
    </Layout>
  );
}

export default MyApp;
