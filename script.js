document.addEventListener('DOMContentLoaded', function() {
    
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    // إذا لم تكن هناك عناصر لتطبيق الحركة عليها، توقف
    if (animatedElements.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // إضافة تأخير بسيط متتابع للعناصر لإعطاء تأثير أجمل
                entry.target.style.transitionDelay = `${index * 100}ms`;
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    animatedElements.forEach(el => {
        observer.observe(el);
    });
});