import i18n from 'i18next';

i18n.init({
    lng: 'en', // язык по умолчанию
    fallbackLng: 'en',
    debug: false,
    resources: {
        en: {
            translation: require('../../locales/en/translation.json'),
        },
        es: {
            translation: require('../../locales/es/translation.json'),
        },
    },
});

export default i18n;