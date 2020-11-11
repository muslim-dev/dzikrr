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

export interface IFetchDzikrResult {
  id: string;
  data: firebase.firestore.DocumentData | IDzikrData;
}

export const fetchDzikr = (): Promise<IFetchDzikrResult[]> => {
  return new Promise((resolve, reject) => {
    try {
      db.collection('dzikr')
        // .where('time', '==', '')
        .orderBy('order', 'asc')
        .onSnapshot((snapshot) => {
          resolve(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            })),
          );
        });
    } catch (error) {
      reject(error);
    }
  });
};

export const useDzikr = () => {
  return useQuery('dzikr', () => fetchDzikr());
};
