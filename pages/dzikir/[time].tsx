import { Box } from '@chakra-ui/core';
import { DzikrItem } from '@components/dzikrItem';
import { useDzikr, IDzikrData, TTime } from 'api/useDzikr';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/dist/client/router';
import React from 'react';

const Index: NextPage = () => {
  const { query } = useRouter();
  const { data } = useDzikr({ time: query.time as TTime });

  return (
    <>
      <NextSeo title="Dzikrr" description="Aplikasi Dzikir Pagi dan Petang" />

      <Box pos="relative">
        <DzikrItem
          noFaedah
          data={{
            arabic: 'أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ',
            note: 'Dibaca 1x',
            title: `Ta'awudz`,
            translated_id:
              'Aku berlindung kepada Allah dari godaan syaitan yang terkutuk.',
          }}
        />
        {data?.map((item) => {
          if (item.data.arabic.indexOf('@') > 0) {
            const arabics: string[] = item.data.arabic.split('@');
            const narrators: string[] = item.data.narrator.split('@');
            const translatedIds: string[] = item.data.translated_id.split('@');

            return (
              <Box
                _even={{ bgColor: 'rgba(251, 240, 218, 0.24)' }}
                key={item.id}
              >
                {arabics.map((arabic, index) => (
                  <DzikrItem
                    noTitle={index > 0}
                    noFaedah={index < arabics.length - 1}
                    data={
                      {
                        ...item.data,
                        arabic,
                        narrator: narrators[index],
                        translated_id: translatedIds[index],
                      } as IDzikrData
                    }
                    key={index}
                    borderBottom={0}
                    _last={{
                      borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                    }}
                  />
                ))}
              </Box>
            );
          } else {
            return (
              <DzikrItem
                data={item.data as IDzikrData}
                key={item.id}
                _even={{ bgColor: 'rgba(251, 240, 218, 0.24)' }}
              />
            );
          }
        })}
      </Box>
    </>
  );
};

export default Index;
