import { Box } from '@chakra-ui/core';
import DzikrItem from '@components/dzikrItem/dzikrItem';
import { useDzikr, IDzikrData } from 'api/useDzikr';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import React from 'react';

const Index: NextPage = () => {
  const { data } = useDzikr();

  return (
    <>
      <NextSeo title="Dzikrr" description="Aplikasi Dzikir Pagi dan Petang" />

      <Box pos="relative">
        {data?.map((item) => (
          <DzikrItem data={item.data as IDzikrData} key={item.id} />
        ))}
      </Box>
    </>
  );
};

export default Index;
