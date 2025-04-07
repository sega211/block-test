export function initScrollToTop() {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    if (!scrollToTopBtn) return; // Если кнопка не найдена, выходим

    // Показываем кнопку при прокрутке страницы
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) { // Показываем кнопку после прокрутки на 300px
            scrollToTopBtn.style.display = 'flex';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    // Обработчик клика для прокрутки вверх
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth' // Плавная прокрутка
        });
    });
}