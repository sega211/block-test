import i18n from 'i18next';

export default async function initI18n() {
    await i18n.init({
        lng: localStorage.getItem('lang') || 'en',
        fallbackLng: 'en',
        resources: {
            en: { translation: require('../../locales/en/translation.json') },
            es: { translation: require('../../locales/es/translation.json') }
        }
    });
    return i18n;
}