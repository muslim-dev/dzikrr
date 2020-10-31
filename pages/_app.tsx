import { localStorageManager, ChakraProvider } from '@chakra-ui/core';
import { Layout } from '@components/layout';
import { theme, DarkThemeContext } from '@utils/theme';
import { AppProps } from 'next/app';
import React, { useEffect, useState } from 'react';
import { QueryCache, ReactQueryCacheProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query-devtools';

const queryCache = new QueryCache();

const App = ({ Component, pageProps }: AppProps) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    setDarkMode(localStorageManager.get() === 'dark');
  }, []);

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
