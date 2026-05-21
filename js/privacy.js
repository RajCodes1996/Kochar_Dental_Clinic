  const navToggle = document.getElementById('nav-toggle');
        const mobileMenu = document.getElementById('mobile-menu');
        if (navToggle && mobileMenu) {
            navToggle.addEventListener('click', () => {
                const isHidden = mobileMenu.classList.toggle('hidden');
                navToggle.setAttribute('aria-expanded', String(!isHidden));
                const icon = navToggle.querySelector('i');
                if (icon) icon.className = isHidden ? 'fas fa-bars text-lg' : 'fas fa-times text-lg';
            });
        }