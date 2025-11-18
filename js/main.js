
const links = document.querySelectorAll('.nav__list .nav__link'); 
const bars = document.querySelector('.bars');
const navBox = document.querySelector('.nav__box'); // nav__box elementini tanlab olamiz

// 1. Burger menyu funksiyasi
bars.addEventListener('click', () => {
    bars.classList.toggle('open');
    navBox.classList.toggle('open');
});

// 2. Active sinfini boshqarish
links.forEach(link => {
    link.addEventListener('click', (e) => {
        // Faqat menyu ro'yxatidagi linklar uchun active holatini tekshirish
        // .nav__box ichidagi nav__span dagi telefon raqam linkini chetlab o'tish
        const isMenuItem = link.closest('.nav__list');
        
        if (isMenuItem) { 
            // Barcha linklardan 'active' sinfini olib tashlash
            links.forEach(l => l.classList.remove('active'));
            
            // Bosilgan linkga 'active' sinfini qo'shish
            link.classList.add('active');

            // Agar mobil menyu ochiq bo'lsa, menyuni yopish
            if (navBox.classList.contains('open')) {
                navBox.classList.remove('open');
                bars.classList.remove('open');
            }
        }
    });
});

// Sahifa yuklanganda birinchi elementni 'active' qilish (ixtiyoriy, lekin yaxshi amaliyot)
document.addEventListener('DOMContentLoaded', () => {
    const firstLink = document.querySelector('.nav__list .nav__link');
    if (firstLink) {
        firstLink.classList.add('active');
    }
});