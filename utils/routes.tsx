export const routes = {
  home: '/',
  dzikr: (time: 'pagi' | 'petang') => `/dzikir/${time}`,
  setting: '/pengaturan',
  share: '/bagikan',
  about: '/info-aplikasi',
};
