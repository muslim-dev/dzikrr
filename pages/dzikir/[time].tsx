import {
  useDisclosure,
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Text,
} from '@chakra-ui/core';
import { useDzikr } from 'api/useDzikr';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import React, { useState } from 'react';

const Index: NextPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [dzikrTitle, setDzikrTitle] = useState('');
  const [faedahContent, setFaedahContent] = useState('');
  const { data } = useDzikr();

  return (
    <>
      <NextSeo title="Dzikrr" description="Aplikasi Dzikir Pagi dan Petang" />

      <Box pos="relative">
        {data?.map((item) => (
          <Box
            _even={{ bgColor: 'rgba(251, 240, 218, 0.24)' }}
            borderBottom="1px solid rgba(0, 0, 0, 0.1)"
            key={item.id}
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
              {localStorage.getItem('display_faedah') && (
                <Box
                  py={2}
                  mt={4}
                  cursor="pointer"
                  fontSize="sm"
                  opacity={0.7}
                  onClick={() => {
                    onOpen();
                    setDzikrTitle(item.data.title);
                    setFaedahContent(item.data.faedah);
                  }}
                >
                  Lihat Keutamaan
                </Box>
              )}
            </Box>
          </Box>
        ))}
      </Box>

      <Drawer isOpen={isOpen} placement="bottom" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent borderTopRadius="40px" pt="50px" pb={6}>
            <DrawerCloseButton right="22px" top="22px" borderRadius="50%" />
            <DrawerHeader>Keutamaan {dzikrTitle}</DrawerHeader>
            <DrawerBody>{faedahContent}</DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default Index;
