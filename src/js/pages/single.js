
import '../../scss/main.scss';
import '../../scss/single.scss';
import { initHeader } from '../header';
import { initTranslations } from '../modules/i18n-updater';
import { initScrollToTop } from '../footer';

document.addEventListener('DOMContentLoaded', async () => {
    const i18n = await initTranslations();  // Получаем инициализированный экземпляр
    initHeader(i18n);  // Явно передаем его
    initScrollToTop();

});