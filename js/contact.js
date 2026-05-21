 document.addEventListener('DOMContentLoaded', function () {
            const toggleButton = document.getElementById('nav-toggle');
            const mobileMenu = document.getElementById('mobile-menu');

            toggleButton.addEventListener('click', function () {
                // Toggles the visibility of the mobile dropdown menu
                mobileMenu.classList.toggle('hidden');
                
                // Accessibility optimization (updates screen readers on status change)
                const isExpanded = mobileMenu.classList.contains('hidden') ? 'false' : 'true';
                toggleButton.setAttribute('aria-expanded', isExpanded);
            });
        });