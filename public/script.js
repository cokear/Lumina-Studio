document.addEventListener('DOMContentLoaded', () => {
    // 3D Tilt Effect for Cards
    const cards = document.querySelectorAll('.tilt');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -10; // Max 10deg rotation
            const rotateY = ((x - centerX) / centerX) * 10;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });

        // Simple click interaction
        card.addEventListener('click', () => {
            const title = card.getAttribute('data-title');
            console.log(`Viewing project: ${title}`);
            // Here you could add a modal or navigation logic
        });
    });

    // Smooth Scroll for Explore Button
    const exploreBtn = document.querySelector('.explore-btn');
    const gallerySection = document.querySelector('.gallery');

    if (exploreBtn && gallerySection) {
        exploreBtn.addEventListener('click', () => {
            gallerySection.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Console Signature
    console.log(
        "%c Lumina Studio %c \nCreative Digital Experiences",
        "background: #1e293b; color: #fff; padding: 4px 8px; border-radius: 4px; font-weight: bold;",
        "color: #64748b; font-size: 12px;"
    );
});
