import { Box, Flex, Heading, IconButton } from '@chakra-ui/core';
import { startCase, toLower } from 'lodash';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import { FiChevronLeft, FiMoreVertical } from 'react-icons/fi';

const iconButtonProps = {
  variant: 'ghost',
  size: 'sm',
  fontSize: '2xl',
  _hover: {
    bgColor: 'transparent',
  },
  _active: {
    bgColor: 'transparent',
  },
  _visited: {
    bgColor: 'transparent',
  },
};

const Header: React.FC = () => {
  const routes = useRouter();

  return (
    <Box
      backgroundColor="primary"
      p={4}
      color="white"
      pos="fixed"
      top={0}
      left={0}
      w="100%"
      zIndex={1}
    >
      <Flex justify="space-between" align="center">
        <Flex align="center">
          <IconButton
            aria-label="Back"
            icon={<FiChevronLeft />}
            onClick={routes.back}
            {...iconButtonProps}
          />
          <Heading as="h1" fontSize="lg" ml={4}>
            Dzikir {startCase(toLower(routes.query.time as string))}
          </Heading>
        </Flex>

        <IconButton
          aria-label="Options"
          icon={<FiMoreVertical />}
          {...iconButtonProps}
        />
      </Flex>
    </Box>
  );
};

export default Header;
