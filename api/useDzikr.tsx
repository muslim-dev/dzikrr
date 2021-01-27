import db from '@utils/firebase';
import firebase from 'firebase/app';
import { useQuery } from 'react-query';

export interface IDzikrData {
  arabic: string;
  note: string;
  title: string;
  translated_id: string;
  arabic_latin?: string;
  narrator?: string;
  faedah?: string;
}

export type TTime = 'pagi' | 'petang';

export interface IFetchDzikrParams {
  time: TTime;
}

export interface IFetchDzikrResult {
  id: string;
  data: firebase.firestore.DocumentData | IDzikrData;
}

export const fetchDzikr = (
  params: IFetchDzikrParams,
): Promise<IFetchDzikrResult[]> => {
  return new Promise((resolve, reject) => {
    try {
      db.collection('dzikr')
        .where('time', 'in', [params.time, ''])
        .orderBy('order', 'asc')
        .get()
        .then((querySnapshot) => {
          const result = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }));
          resolve(result);
        });
    } catch (error) {
      reject(error);
    }
  });
};

export const useDzikr = (params: IFetchDzikrParams) => {
  return useQuery(['dzikr', params], () => fetchDzikr(params), {
    enabled: params.time,
    refetchOnWindowFocus: false,
  });
};
