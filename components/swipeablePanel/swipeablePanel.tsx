import { Box } from '@chakra-ui/core';
import React from 'react';

export const SwipeablePanel: React.FC = ({ children }) => {
  return (
    <Box
      backgroundColor="primary"
      pos="fixed"
      w="100%"
      maxW="xl"
      p={6}
      borderTopRadius="24px"
      left="50%"
      bottom="0"
      transform="translateX(-50%)"
    >
      {children}
    </Box>
  );
};
