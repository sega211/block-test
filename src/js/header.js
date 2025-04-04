import i18n from './i18n';

const languageSwitcher = document.querySelector('.language-switcher');

languageSwitcher.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        const lang = e.target.dataset.lang;
        i18n.changeLanguage(lang).then(() => updateContent());
    }
});

function updateContent() {
    document.querySelector('.header-title').textContent = i18n.t('header.title');
    document.querySelector('.nav-home').textContent = i18n.t('header.nav.home');
    document.querySelector('.nav-about').textContent = i18n.t('header.nav.about');
    document.querySelector('footer p').textContent = i18n.t('footer.copyright');

    // Обновляем контент страницы (если есть)
    if (document.querySelector('.page-title')) {
        document.querySelector('.page-title').textContent = i18n.t(`${document.body.dataset.page}.title`);
        document.querySelector('.page-content').textContent = i18n.t(`${document.body.dataset.page}.content`);
    }
}

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', () => {
    updateContent();
});