import { extendTheme } from '@chakra-ui/core';
import { createContext } from 'react';

export const DarkThemeContext = createContext({
  darkMode: undefined,
  setDarkMode: undefined,
});

export const darkTheme = {
  primary: '#02A3C1',
  background: '#0f121c',
  highlight: '#e4b04e',
};

export const lightTheme = {
  primary: '#02A3C1',
  background: '#fff',
  highlight: '#707070',
};

export const theme = (darkMode: boolean) =>
  extendTheme({
    config: {
      useSystemColorMode: false,
    },
    colors: darkMode ? darkTheme : lightTheme,
    fonts: {
      body: 'Work Sans, sans-serif',
      heading: 'Work Sans, sans-serif',
      mono: 'Work Sans, sans-serif',
    },
    styles: {
      global: () => ({
        body: {
          lineHeight: 1.6,
        },
      }),
    },
  });
