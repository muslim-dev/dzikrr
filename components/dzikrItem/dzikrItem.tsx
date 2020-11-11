import {
  useDisclosure,
  Box,
  ChakraProps,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Text,
} from '@chakra-ui/core';
import { IDzikrData } from 'api/useDzikr';
import React, { useState } from 'react';

export interface IDzikrItem extends ChakraProps {
  data: IDzikrData;
  noTitle?: boolean;
  noFaedah?: boolean;
}

export const DzikrItem: React.FC<IDzikrItem> = ({
  noTitle,
  noFaedah,
  data,
  ...props
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [dzikrTitle, setDzikrTitle] = useState('');
  const [faedahContent, setFaedahContent] = useState('');

  return (
    <>
      <Box borderBottom="1px solid rgba(0, 0, 0, 0.1)" {...props}>
        {!noTitle && (
          <Flex
            justify="space-between"
            borderBottom="1px solid rgba(0, 0, 0, 0.1)"
            p={4}
            align="flex-end"
          >
            <Text fontWeight="600" mr={2} flex={2.5}>
              {data.title}
            </Text>
            <Text fontSize="sm" textAlign="right" opacity={0.7} flex={1}>
              {data.note}
            </Text>
          </Flex>
        )}
        <Box p={4}>
          <Box
            textAlign="right"
            fontFamily="'Scheherazade', serif"
            fontWeight="700"
            fontSize="3xl"
            mb={4}
            dangerouslySetInnerHTML={{ __html: data.arabic }}
          />
          {localStorage.getItem('display_arabicLatin') && data.arabic_latin && (
            <Text fontStyle="italic" mb={4}>
              {data.arabic_latin}
            </Text>
          )}
          {localStorage.getItem('display_translatedId') && (
            <Text>
              "{data.translated_id}"{data.narrator && ` [${data.narrator}]`}
            </Text>
          )}
          {localStorage.getItem('display_faedah') && data.faedah && !noFaedah && (
            <Box
              py={2}
              mt={4}
              cursor="pointer"
              fontSize="sm"
              opacity={0.7}
              onClick={() => {
                onOpen();
                setDzikrTitle(data.title);
                setFaedahContent(data.faedah);
              }}
            >
              Lihat Keutamaan
            </Box>
          )}
        </Box>
      </Box>

      {!noFaedah && (
        <Drawer isOpen={isOpen} placement="bottom" onClose={onClose}>
          <DrawerOverlay>
            <DrawerContent borderTopRadius="40px" pt="50px" pb={6}>
              <DrawerCloseButton right="22px" top="22px" borderRadius="50%" />
              <DrawerHeader>Keutamaan {dzikrTitle}</DrawerHeader>
              <DrawerBody>
                <Box dangerouslySetInnerHTML={{ __html: faedahContent }} />
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      )}
    </>
  );
};
