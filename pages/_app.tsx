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
  const { pathname } = useRouter();

  const installPrompt = (e: any) => {
    e.preventDefault();
    e.prompt();
  };

  useEffect(() => {
    if (localStorage.getItem('display_translatedId') === null) {
      localStorage.setItem('display_translatedId', 'active');
    }
    if (localStorage.getItem('display_faedah') === null) {
      localStorage.setItem('display_faedah', 'active');
    }

    setDarkMode(localStorageManager.get() === 'dark');

    gaInit();

    window.addEventListener('beforeinstallprompt', installPrompt);
    return () => {
      window.removeEventListener('beforeinstallprompt', installPrompt);
    };
  }, []);

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
