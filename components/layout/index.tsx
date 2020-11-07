import { Container } from '@chakra-ui/core';
import React from 'react';

export const Layout: React.FC = ({ children }) => {
  return <Container maxW="420px">{children}</Container>;
};
