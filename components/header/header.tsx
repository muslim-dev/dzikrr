import {
  useDisclosure,
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Heading,
  Icon,
  IconButton,
  Text,
} from '@chakra-ui/core';
import { routes } from '@utils/routes';
import { startCase, toLower } from 'lodash';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
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

const options = [
  {
    link: routes.setting,
    text: 'Pengaturan',
    icon: (
      <Icon width="16px" height="16px" viewBox="0 0 16 16">
        <path
          d="M13.5725 8.735C13.6025 8.495 13.625 8.255 13.625 8C13.625 7.745 13.6025 7.505 13.5725 7.265L15.155 6.0275C15.2975 5.915 15.335 5.7125 15.245 5.5475L13.745 2.9525C13.6775 2.8325 13.55 2.765 13.415 2.765C13.37 2.765 13.325 2.7725 13.2875 2.7875L11.42 3.5375C11.03 3.2375 10.61 2.99 10.1525 2.8025L9.8675 0.815C9.845 0.635 9.6875 0.5 9.5 0.5H6.5C6.3125 0.5 6.155 0.635 6.1325 0.815L5.8475 2.8025C5.39 2.99 4.97 3.245 4.58 3.5375L2.7125 2.7875C2.6675 2.7725 2.6225 2.765 2.5775 2.765C2.45 2.765 2.3225 2.8325 2.255 2.9525L0.755002 5.5475C0.657502 5.7125 0.702502 5.915 0.845002 6.0275L2.4275 7.265C2.3975 7.505 2.375 7.7525 2.375 8C2.375 8.2475 2.3975 8.495 2.4275 8.735L0.845002 9.9725C0.702502 10.085 0.665002 10.2875 0.755002 10.4525L2.255 13.0475C2.3225 13.1675 2.45 13.235 2.585 13.235C2.63 13.235 2.675 13.2275 2.7125 13.2125L4.58 12.4625C4.97 12.7625 5.39 13.01 5.8475 13.1975L6.1325 15.185C6.155 15.365 6.3125 15.5 6.5 15.5H9.5C9.6875 15.5 9.845 15.365 9.8675 15.185L10.1525 13.1975C10.61 13.01 11.03 12.755 11.42 12.4625L13.2875 13.2125C13.3325 13.2275 13.3775 13.235 13.4225 13.235C13.55 13.235 13.6775 13.1675 13.745 13.0475L15.245 10.4525C15.335 10.2875 15.2975 10.085 15.155 9.9725L13.5725 8.735ZM12.0875 7.4525C12.1175 7.685 12.125 7.8425 12.125 8C12.125 8.1575 12.11 8.3225 12.0875 8.5475L11.9825 9.395L12.65 9.92L13.46 10.55L12.935 11.4575L11.9825 11.075L11.2025 10.76L10.5275 11.27C10.205 11.51 9.8975 11.69 9.59 11.8175L8.795 12.14L8.675 12.9875L8.525 14H7.475L7.3325 12.9875L7.2125 12.14L6.4175 11.8175C6.095 11.6825 5.795 11.51 5.495 11.285L4.8125 10.76L4.0175 11.0825L3.065 11.465L2.54 10.5575L3.35 9.9275L4.0175 9.4025L3.9125 8.555C3.89 8.3225 3.875 8.15 3.875 8C3.875 7.85 3.89 7.6775 3.9125 7.4525L4.0175 6.605L3.35 6.08L2.54 5.45L3.065 4.5425L4.0175 4.925L4.7975 5.24L5.4725 4.73C5.795 4.49 6.1025 4.31 6.41 4.1825L7.205 3.86L7.325 3.0125L7.475 2H8.5175L8.66 3.0125L8.78 3.86L9.575 4.1825C9.8975 4.3175 10.1975 4.49 10.4975 4.715L11.18 5.24L11.975 4.9175L12.9275 4.535L13.4525 5.4425L12.65 6.08L11.9825 6.605L12.0875 7.4525ZM8 5C6.3425 5 5 6.3425 5 8C5 9.6575 6.3425 11 8 11C9.6575 11 11 9.6575 11 8C11 6.3425 9.6575 5 8 5ZM8 9.5C7.175 9.5 6.5 8.825 6.5 8C6.5 7.175 7.175 6.5 8 6.5C8.825 6.5 9.5 7.175 9.5 8C9.5 8.825 8.825 9.5 8 9.5Z"
          fill="#000F1A"
          fill-opacity="0.24"
        />
      </Icon>
    ),
  },
  {
    link: routes.share,
    text: 'Bagikan',
    icon: (
      <Icon width="14px" height="16px" viewBox="0 0 14 16">
        <path
          d="M11.5 11.06C10.93 11.06 10.42 11.285 10.03 11.6375L4.6825 8.525C4.72 8.3525 4.75 8.18 4.75 8C4.75 7.82 4.72 7.6475 4.6825 7.475L9.97 4.3925C10.375 4.7675 10.9075 5 11.5 5C12.745 5 13.75 3.995 13.75 2.75C13.75 1.505 12.745 0.5 11.5 0.5C10.255 0.5 9.25 1.505 9.25 2.75C9.25 2.93 9.28 3.1025 9.3175 3.275L4.03 6.3575C3.625 5.9825 3.0925 5.75 2.5 5.75C1.255 5.75 0.25 6.755 0.25 8C0.25 9.245 1.255 10.25 2.5 10.25C3.0925 10.25 3.625 10.0175 4.03 9.6425L9.37 12.7625C9.3325 12.92 9.31 13.085 9.31 13.25C9.31 14.4575 10.2925 15.44 11.5 15.44C12.7075 15.44 13.69 14.4575 13.69 13.25C13.69 12.0425 12.7075 11.06 11.5 11.06ZM11.5 2C11.9125 2 12.25 2.3375 12.25 2.75C12.25 3.1625 11.9125 3.5 11.5 3.5C11.0875 3.5 10.75 3.1625 10.75 2.75C10.75 2.3375 11.0875 2 11.5 2ZM2.5 8.75C2.0875 8.75 1.75 8.4125 1.75 8C1.75 7.5875 2.0875 7.25 2.5 7.25C2.9125 7.25 3.25 7.5875 3.25 8C3.25 8.4125 2.9125 8.75 2.5 8.75ZM11.5 14.015C11.0875 14.015 10.75 13.6775 10.75 13.265C10.75 12.8525 11.0875 12.515 11.5 12.515C11.9125 12.515 12.25 12.8525 12.25 13.265C12.25 13.6775 11.9125 14.015 11.5 14.015Z"
          fill="#000F1A"
          fill-opacity="0.24"
        />
      </Icon>
    ),
  },
  {
    link: routes.about,
    text: 'Info Aplikasi',
    icon: (
      <Icon width="16px" height="16px" viewBox="0 0 16 16">
        <path
          d="M7.25 4.25H8.75V5.75H7.25V4.25ZM7.25 7.25H8.75V11.75H7.25V7.25ZM8 0.5C3.86 0.5 0.5 3.86 0.5 8C0.5 12.14 3.86 15.5 8 15.5C12.14 15.5 15.5 12.14 15.5 8C15.5 3.86 12.14 0.5 8 0.5ZM8 14C4.6925 14 2 11.3075 2 8C2 4.6925 4.6925 2 8 2C11.3075 2 14 4.6925 14 8C14 11.3075 11.3075 14 8 14Z"
          fill="#000F1A"
          fill-opacity="0.24"
        />
      </Icon>
    ),
  },
];

const Header: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [titlePage, setTitlePage] = useState('');
  const { back, query, pathname } = useRouter();

  useEffect(() => {
    switch (pathname) {
      case '/dzikir/[time]':
        setTitlePage(`Dzikir ${startCase(toLower(query.time as string))}`);
        break;

      default:
        setTitlePage(startCase(toLower(pathname)));
        break;
    }

    onClose();
  }, [pathname]);

  return (
    <>
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
              onClick={back}
              {...iconButtonProps}
            />
            <Heading as="h1" fontSize="lg" ml={4}>
              {titlePage}
            </Heading>
          </Flex>

          <IconButton
            aria-label="Options"
            icon={<FiMoreVertical />}
            onClick={onOpen}
            {...iconButtonProps}
          />
        </Flex>
      </Box>

      <Drawer isOpen={isOpen} placement="bottom" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent borderTopRadius="40px" pt="50px" pb={6}>
            <DrawerCloseButton right="22px" top="22px" />
            <DrawerBody>
              {options.map((option) => (
                <Link href={option.link}>
                  <Flex
                    py={4}
                    fontSize="lg"
                    align="center"
                    as="a"
                    cursor="pointer"
                  >
                    {option.icon}
                    <Text ml={2} as="span">
                      {option.text}
                    </Text>
                  </Flex>
                </Link>
              ))}
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default Header;
