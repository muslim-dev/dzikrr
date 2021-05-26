import { localStorageManager, ChakraProvider } from '@chakra-ui/core';
import { Layout } from '@components/layout';
import { gaInit, gaLogPageView } from '@utils/googleAnalytics';
import { theme } from '@utils/theme';
import { AppProps } from 'next/app';
import { useRouter } from 'next/dist/client/router';
import React, { useEffect } from 'react';
import { ReactQueryDevtools } from 'react-query-devtools';

const App = ({ Component, pageProps }: AppProps) => {
  const { pathname } = useRouter();

  useEffect(() => {
    if (localStorage.getItem('display_translatedId') === null) {
      localStorage.setItem('display_translatedId', 'active');
    }
    if (localStorage.getItem('display_faedah') === null) {
      localStorage.setItem('display_faedah', 'active');
    }

    gaInit();
  }, []);

  useEffect(() => {
    gaLogPageView();
  }, [pathname]);

  return (
    <ChakraProvider theme={theme} colorModeManager={localStorageManager}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ReactQueryDevtools />
    </ChakraProvider>
  );
};

export default App;
