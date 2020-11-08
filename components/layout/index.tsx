import { Box, Container } from '@chakra-ui/core';
import Header from '@components/header/header';
import { useRouter } from 'next/dist/client/router';
import React from 'react';

export const Layout: React.FC = ({ children }) => {
  const routes = useRouter();

  if (routes.pathname === '/') {
    return <Container>{children}</Container>;
  }

  return (
    <>
      <Header />
      <Container overflow="auto" p={0}>
        {children}
      </Container>
    </>
  );
};
