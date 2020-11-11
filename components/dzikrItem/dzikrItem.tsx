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
import { IDzikrData } from 'api/useDzikr';
import React, { useState, Fragment } from 'react';

export interface IDzikrItem {
  data: IDzikrData;
}

const DzikrItem: React.FC<IDzikrItem> = ({ data, ...props }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [dzikrTitle, setDzikrTitle] = useState('');
  const [faedahContent, setFaedahContent] = useState('');

  return (
    <Fragment {...props}>
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
          <Text fontWeight="600">{data.title}</Text>
          <Text fontSize="sm" opacity={0.7}>
            {data.note}
          </Text>
        </Flex>
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
          {localStorage.getItem('display_faedah') && data.faedah && (
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
    </Fragment>
  );
};

export default DzikrItem;
