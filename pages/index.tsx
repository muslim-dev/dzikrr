import { Box, Grid, Heading, Icon, Text } from '@chakra-ui/core';
import { SwipeablePanel } from '@components/swipeablePanel';
import { routes } from '@utils/routes';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import React from 'react';

const navigationData = [
  {
    link: routes.dzikr,
    text: 'Dzikir Pagi',
    icon: (
      <Icon viewBox="0 0 56 56" w="56px" h="56px">
        <path
          d="M13.125 9.34997L12.15 8.37497C11.175 7.39997 9.6 7.42497 8.65 8.37497L8.625 8.39997C7.65 9.37497 7.65 10.95 8.625 11.9L9.6 12.875C10.575 13.85 12.125 13.85 13.1 12.875L13.125 12.85C14.1 11.9 14.1 10.3 13.125 9.34997ZM5.525 25.25H2.975C1.6 25.25 0.5 26.35 0.5 27.725V27.75C0.5 29.125 1.6 30.225 2.975 30.225H5.5C6.9 30.25 8 29.15 8 27.775V27.75C8 26.35 6.9 25.25 5.525 25.25ZM28.025 0.374969H28C26.6 0.374969 25.5 1.47497 25.5 2.84997V5.24997C25.5 6.62497 26.6 7.72497 27.975 7.72497H28C29.4 7.74997 30.5 6.64997 30.5 5.27497V2.84997C30.5 1.47497 29.4 0.374969 28.025 0.374969ZM47.375 8.39997C46.4 7.42497 44.825 7.42497 43.85 8.37497L42.875 9.34997C41.9 10.325 41.9 11.9 42.875 12.85L42.9 12.875C43.875 13.85 45.45 13.85 46.4 12.875L47.375 11.9C48.35 10.925 48.35 9.37497 47.375 8.39997ZM42.85 46.15L43.825 47.125C44.8 48.1 46.375 48.1 47.35 47.125C48.325 46.15 48.325 44.575 47.35 43.6L46.375 42.625C45.4 41.65 43.825 41.675 42.875 42.625C41.875 43.625 41.875 45.175 42.85 46.15ZM48 27.725V27.75C48 29.125 49.1 30.225 50.475 30.225H53C54.375 30.225 55.475 29.125 55.475 27.75V27.725C55.475 26.35 54.375 25.25 53 25.25H50.475C49.1 25.25 48 26.35 48 27.725ZM28 12.75C19.725 12.75 13 19.475 13 27.75C13 36.025 19.725 42.75 28 42.75C36.275 42.75 43 36.025 43 27.75C43 19.475 36.275 12.75 28 12.75ZM27.975 55.125H28C29.375 55.125 30.475 54.025 30.475 52.65V50.25C30.475 48.875 29.375 47.775 28 47.775H27.975C26.6 47.775 25.5 48.875 25.5 50.25V52.65C25.5 54.025 26.6 55.125 27.975 55.125ZM8.625 47.1C9.6 48.075 11.175 48.075 12.15 47.1L13.125 46.125C14.1 45.15 14.075 43.575 13.125 42.625L13.1 42.6C12.125 41.625 10.55 41.625 9.575 42.6L8.6 43.575C7.65 44.575 7.65 46.125 8.625 47.1Z"
          fill="white"
        />
      </Icon>
    ),
  },
  {
    link: routes.dzikr,
    text: 'Dzikir Petang',
    icon: (
      <Icon viewBox="0 0 37 50" w="50px" h="50px">
        <path
          d="M18.075 0.750029C12.125 -0.72497 6.37502 0.0750296 1.50002 2.35003C0.62502 2.75003 0.475019 3.95003 1.25002 4.50003C7.75002 9.00003 12 16.5 12 25C12 33.5 7.75002 41 1.25002 45.5C0.450019 46.05 0.60002 47.25 1.47502 47.65C4.67502 49.15 8.25002 50 12 50C27.125 50 39.125 36.55 36.675 21C35.15 11.2 27.7 3.10003 18.075 0.750029Z"
          fill="white"
        />
      </Icon>
    ),
  },
];

const Index: NextPage = () => {
  return (
    <>
      <NextSeo title="Dzikrr" description="Aplikasi Dzikir Pagi dan Petang" />

      <Box h="100vh" overflow="auto" pos="relative" pl={4} pr={4}>
        <Box
          as="img"
          src="/dzikrr-logo.png"
          alt="Dzikrr Logo"
          h="24px"
          mt="15vh"
          mb="20px"
        />
        <Heading as="h1" fontSize="4xl" fontWeight="600" maxW="80%">
          Mudah baca dzikir dimana saja
        </Heading>

        <SwipeablePanel>
          <Grid gap={6} templateColumns="repeat(2, 1fr)">
            {navigationData.map((nav, index) => (
              <Link href={nav.link} key={index}>
                <Box
                  as="a"
                  p={4}
                  color="white"
                  textAlign="center"
                  borderRadius="30px"
                  backgroundColor="rgba(0, 15, 26, 0.12)"
                  cursor="pointer"
                >
                  <Box mb={10} mt={10}>
                    {nav.icon}
                  </Box>
                  <Text>{nav.text}</Text>
                </Box>
              </Link>
            ))}
          </Grid>
        </SwipeablePanel>

        <Box
          bgImg="url('/bg.png')"
          bgPos="center"
          bgSize="cover"
          w="100%"
          h="100vh"
          pos="fixed"
          top="0"
          left="0"
          zIndex="-1"
          opacity="0.3"
        />
      </Box>
    </>
  );
};

export default Index;
