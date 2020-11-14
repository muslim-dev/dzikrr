import ReactGA, { pageview } from 'react-ga';

export const gaInit = () => {
  const googleKey: string = process.env.API_GOOGLE_ANALYTIC_KEY || '';
  ReactGA.initialize(googleKey, { debug: true });
};

export const gaLogPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

export const gaLogEvent = (category: string, action: string) => {
  ReactGA.event({ category, action });
};

export const gaLogException = (description: string, fatal = false) => {
  ReactGA.exception({ description, fatal });
};
