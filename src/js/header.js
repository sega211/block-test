


export function initHeader(i18n) {  // Явно принимаем i18n как параметр
    const languageSwitcher = document.querySelector('.language-switcher');
    const burger = document.querySelector('.header__burger');
    const nav = document.querySelector('.header__nav');

    if (languageSwitcher && i18n) {
        languageSwitcher.addEventListener('click', async (e) => {
            if (e.target.tagName === 'BUTTON') {
                const lang = e.target.dataset.lang;
                try {
                    await i18n.changeLanguage(lang);
                    // Не нужно вызывать updateTranslations вручную - сработает событие languageChanged
                } catch (error) {
                    console.error('Language switch failed:', error);
                }
            }
        });
    }

    if (burger) {
        burger.addEventListener('click', () => {
            nav.classList.toggle('active');
            burger.classList.toggle('active');
        });
    }
}