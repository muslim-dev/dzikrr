import { extendTheme } from '@chakra-ui/core';

export const theme = extendTheme({
  config: {
    colorMode: 'light',
    useSystemColorMode: false,
  },
  colors: {
    primary: '#02A3C1',
    background: '#fff',
    highlight: '#707070',
  },
  fonts: {
    body: 'Work Sans, sans-serif',
    heading: 'Work Sans, sans-serif',
    mono: 'Work Sans, sans-serif',
  },
  styles: {
    global: () => ({
      body: {
        color: '#38454D',
        lineHeight: 1.6,
      },
    }),
  },
});
