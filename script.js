document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burger-menu');
    const nav = document.getElementById('main-nav');
    const links = document.querySelectorAll('.nav__link');

    // Переключение мобильного меню
    burger.addEventListener('click', () => {
        nav.classList.toggle('active');
        burger.classList.toggle('open');
    });

    // Плавный скролл и подсветка активного пункта
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Закрыть мобильное меню при клике
                nav.classList.remove('active');
            }
        });
    });

    // Подсветка при скролле
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section'); // Будут добавлены в следующих блоках
        const scrollPos = window.pageYOffset + 100;

        sections.forEach(section => {
            if (scrollPos >= section.offsetTop) {
                current = section.getAttribute('id');
            }
        });

        links.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});

// Фильтрация карточек в рейтинге
document.addEventListener('DOMContentLoaded', () => {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const cards = document.querySelectorAll('.vpn-card');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Переключение активного класса кнопок
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            cards.forEach(card => {
                const categories = card.getAttribute('data-category');
                if (filter === 'all' || categories.includes(filter)) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab-nav-btn');
    const panels = document.querySelectorAll('.tab-panel');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Удаляем активный класс у всех кнопок
            tabs.forEach(t => t.classList.remove('active'));
            // Скрываем все панели
            panels.forEach(p => p.classList.remove('active'));

            // Добавляем активный класс текущей кнопке
            tab.classList.add('active');
            // Показываем нужную панель
            const target = tab.getAttribute('data-tab');
            document.getElementById(target).classList.add('active');
        });
    });
});
// FAQ Accordion Logic
document.querySelectorAll('.faq__question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        
        // Закрываем другие открытые вкладки (опционально)
        document.querySelectorAll('.faq__item').forEach(item => {
            if (item !== faqItem) item.classList.remove('active');
        });

        // Переключаем текущую
        faqItem.classList.toggle('active');
    });
});
