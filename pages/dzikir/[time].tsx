import { Box, Flex, Text } from '@chakra-ui/core';
import { useDzikr } from 'api/useDzikr';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import React from 'react';

const Index: NextPage = () => {
  const { data } = useDzikr();

  return (
    <>
      <NextSeo title="Dzikrr" description="Aplikasi Dzikir Pagi dan Petang" />

      <Box pos="relative">
        {data &&
          [...data, ...data, ...data].map((item) => (
            <Box
              _even={{ bgColor: 'rgba(251, 240, 218, 0.24)' }}
              borderBottom="1px solid rgba(0, 0, 0, 0.1)"
            >
              <Flex
                justify="space-between"
                borderBottom="1px solid rgba(0, 0, 0, 0.1)"
                p={4}
                align="baseline"
              >
                <Text fontWeight="600">{item.data.title}</Text>
                <Text fontSize="sm" opacity={0.7}>
                  {item.data.note}
                </Text>
              </Flex>
              <Box p={4}>
                <Box
                  textAlign="right"
                  fontFamily="'Scheherazade', serif"
                  fontWeight="700"
                  fontSize="3xl"
                  mb={4}
                >
                  {item.data.arabic}
                </Box>
                {localStorage.getItem('display_arabicLatin') && (
                  <Text fontStyle="italic" mb={4}>
                    {item.data.arabic_latin}
                  </Text>
                )}
                {localStorage.getItem('display_translatedId') && (
                  <Text>{item.data.translated_id}</Text>
                )}
              </Box>
            </Box>
          ))}
      </Box>
    </>
  );
};

export default Index;
