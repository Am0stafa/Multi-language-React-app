import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
//! initialize it in react
import Backend from 'i18next-http-backend';
//! this is what allows us to fetch the translations from where we will be storing it
import LanguageDetector from 'i18next-browser-languagedetector';
//! automatically detect the language of a browser

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    //! if any of the languages are not chosen
    fallbackLng: 'en',
    //! what allows us to look at all the langues and what is happening in the console in the browser
    //^ should be disabled by in production
    debug: true,
    backend: {
        //? translation file path
        loadPath: "/assets/i18n/{{ns}}/{{lng}}.json",
    },
    
    //& can have multiple namespaces, in case you want to divide a huge
	//& translation into smaller pieces and load them on demand
    ns: ["common", "home", "profile"],

    interpolation: {
        escapeValue: false,
        formatSeparator: ",",
    },
    react: {
        wait: true,
    }
  });


export default i18n;
//! step 2 add this file into index.js
//! create the translation files
