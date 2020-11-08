import { Box } from '@chakra-ui/core';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/dist/client/router';
import React from 'react';

const Index: NextPage = () => {
  const routes = useRouter();

  return (
    <>
      <NextSeo title="Dzikrr" description="Aplikasi Dzikir Pagi dan Petang" />

      <Box h="100vh" overflow="auto" pos="relative" pl={4} pr={4}>
        {routes.query.time}
      </Box>
    </>
  );
};

export default Index;
