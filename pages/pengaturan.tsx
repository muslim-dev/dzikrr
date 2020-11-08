import { Box, Flex, Switch, Text } from '@chakra-ui/core';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import React, { useEffect, useState } from 'react';

const Index: NextPage = () => {
  const [options, setOptions] = useState<{
    [key: string]: {
      text: string;
      active: boolean;
    };
  }>({
    translatedId: {
      text: 'Terjemahan',
      active: false,
    },
    arabicLatin: {
      text: 'Latin',
      active: false,
    },
    faedah: {
      text: 'Keutamaan',
      active: false,
    },
  });

  useEffect(() => {
    const newOptions = { ...options };
    newOptions.translatedId.active = !!localStorage.getItem(
      'display_translatedId',
    );
    newOptions.arabicLatin.active = !!localStorage.getItem(
      'display_arabicLatin',
    );
    newOptions.faedah.active = !!localStorage.getItem('display_faedah');
    setOptions(newOptions);
  }, []);

  const checkOption = ({
    value,
    checked,
  }: {
    value: string;
    checked: boolean;
  }) => {
    const newOptions = { ...options };
    if (checked) {
      localStorage.setItem(`display_${value}`, 'active');
      newOptions[value].active = true;
    } else {
      localStorage.setItem(`display_${value}`, '');
      newOptions[value].active = false;
    }
    setOptions(newOptions);
  };

  return (
    <>
      <NextSeo title="Dzikrr" description="Aplikasi Dzikir Pagi dan Petang" />

      <Box bgColor="#F9F9F9" minH="100vh">
        <Box
          p={4}
          mt={2}
          textTransform="uppercase"
          letterSpacing="1px"
          fontSize="sm"
          opacity={0.7}
        >
          Pengaturan Tampilan
        </Box>

        <Box px={4} bgColor="white" borderBottom="1px solid rgba(0, 0, 0, 0.1)">
          {Object.keys(options).map((option) => (
            <Flex
              align="center"
              justify="space-between"
              py={4}
              borderBottom="1px solid rgba(0, 0, 0, 0.1)"
              _last={{
                borderBottom: 'none',
              }}
              key={option}
            >
              <Text>{options[option].text}</Text>
              <Switch
                size="md"
                colorScheme="cyan"
                isChecked={options[option].active}
                value={option}
                onChange={(e) => checkOption(e.currentTarget)}
              />
            </Flex>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Index;
