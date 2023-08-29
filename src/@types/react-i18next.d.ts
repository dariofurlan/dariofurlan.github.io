import { resources, defaultNS } from 'shared/services/i18next';


declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: typeof resources['it'];
  }
}