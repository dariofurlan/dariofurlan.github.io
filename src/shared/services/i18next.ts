import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './locales/en';
import it from './locales/it';

export const defaultNS = 'translation' as const;

export const resources = {
    en,
    it
} as const;

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        detection: {
            order: ["localStorage", "navigator"],
            lookupLocalStorage: 'i18nextLng',
            caches: ["localStorage"],
        },
        debug: false,
        fallbackLng: 'en',
        supportedLngs: ['it', 'en'],
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        resources,
        defaultNS,
    });