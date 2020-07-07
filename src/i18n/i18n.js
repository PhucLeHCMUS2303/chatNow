import i18next from "i18next";
import en from './common/en.json';
import vi from './common/vi.json';
//import { initReactI18next } from 'react-i18next';

i18next.init({
    interpolation: { escapeValue: false },  // React already does escaping
    lng: 'en',                              // language to use
    resources: {
        en: {
            common: en               // 'common' is our custom namespace
        },
        vi: {
            common: vi
        },
    },
});

export default i18next;