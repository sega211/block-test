let i18nInstance;



export async function initTranslations() {
    if (i18nInstance) return i18nInstance;

    const { default: i18n } = await import('../i18n');
    i18nInstance = await i18n();

    i18nInstance.on('languageChanged', updateTranslations);
    document.addEventListener('DOMContentLoaded', updateTranslations);

    return i18nInstance;
}


export function updateTranslations() {
    if (!i18nInstance) return;

    // Обновляем элементы с data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = i18nInstance.t(key);
    });

    // Обновляем другие элементы, если необходимо
    const elementsFooter = {
        footerText: document.querySelector('footer p'),
        pageTitle: document.querySelector('.page-title'),
        pageContent: document.querySelector('.page-content')
    };

    // if (elementsFooter.footerText) {
    //     elementsFooter.footerText.textContent = i18nInstance.t('footer.copyright');
    // }

    const page = document.body.dataset.page;
    if (page) {
        if (elementsFooter.pageTitle) {
            elementsFooter.pageTitle.textContent = i18nInstance.t(`${page}.title`);
        }
        if (elementsFooter.pageContent) {
            elementsFooter.pageContent.textContent = i18nInstance.t(`${page}.content`);
        }
    }
}
