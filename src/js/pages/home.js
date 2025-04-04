import i18n from '../i18n';
import '../../scss/main.scss'; // Импорт стилей

// Инициализация перевода
document.addEventListener('DOMContentLoaded', () => {
    const updateContent = () => {
        document.querySelector('.header-title').textContent = i18n.t('header.title');
        document.querySelector('.nav-home').textContent = i18n.t('header.nav.home');
        document.querySelector('.nav-about').textContent = i18n.t('header.nav.about');
        document.querySelector('footer p').textContent = i18n.t('footer.copyright');

        if (document.querySelector('.page-title')) {
            document.querySelector('.page-title').textContent = i18n.t(`${document.body.dataset.page}.title`);
            document.querySelector('.page-content').textContent = i18n.t(`${document.body.dataset.page}.content`);
        }
    };

    // Обработчик переключения языка
    document.querySelector('.language-switcher').addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            i18n.changeLanguage(e.target.dataset.lang).then(updateContent);
        }
    });

    updateContent(); // Первоначальная загрузка
});