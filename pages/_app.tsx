import { localStorageManager, ChakraProvider } from '@chakra-ui/core';
import { Layout } from '@components/layout';
import { gaInit, gaLogPageView } from '@utils/googleAnalytics';
import { theme, DarkThemeContext } from '@utils/theme';
import { AppProps } from 'next/app';
import { useRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';
import { QueryCache, ReactQueryCacheProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query-devtools';

const queryCache = new QueryCache();

const App = ({ Component, pageProps }: AppProps) => {
  const [darkMode, setDarkMode] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>();
  const { pathname } = useRouter();

  useEffect(() => {
    if (localStorage.getItem('display_translatedId') === undefined) {
      localStorage.setItem('display_translatedId', 'active');
    }
    setDarkMode(localStorageManager.get() === 'dark');

    gaInit();

    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    });
  }, []);

  useEffect(() => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
    }
  }, [deferredPrompt]);

  useEffect(() => {
    gaLogPageView();
  }, [pathname]);

  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <DarkThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <ChakraProvider
          theme={theme(darkMode)}
          colorModeManager={localStorageManager}
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <ReactQueryDevtools />
        </ChakraProvider>
      </DarkThemeContext.Provider>
    </ReactQueryCacheProvider>
  );
};

export default App;
