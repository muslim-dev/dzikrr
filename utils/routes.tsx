export const routes = {
  home: '/',
  dzikr: (time: 'pagi' | 'petang') => `/dzikir/${time}`,
  setting: '/pengaturan',
  about: '/info-aplikasi',
};
