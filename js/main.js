document.addEventListener('DOMContentLoaded', function () {
    // 1. Mobile Menu Navigation Toggle Handler
    const navToggle = document.getElementById('nav-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    if (navToggle && mobileMenu) {
        navToggle.addEventListener('click', function () {
            const isHidden = mobileMenu.classList.toggle('hidden');
            navToggle.setAttribute('aria-expanded', String(!isHidden));
            const icon = navToggle.querySelector('i');
            if (icon) {
                icon.className = isHidden ? 'fas fa-bars text-lg' : 'fas fa-times text-lg';
            }
        });
    }

    // 2. Automated Founder Modal Handler (Home Page Welcome Modal)
    const modal = document.getElementById('founder-modal');
    if (modal) {
        const modalContent = modal.querySelector('.transform');
        const closeBtn = document.getElementById('close-founder-modal');
        const dismissBtn = document.getElementById('modal-dismiss');
        const exploreBtn = document.getElementById('modal-explore');

        if (modalContent && closeBtn && dismissBtn && exploreBtn) {
            function openModal() {
                modal.classList.remove('opacity-0', 'pointer-events-none');
                modalContent.classList.remove('scale-95');
                modalContent.classList.add('scale-100');
                document.body.style.overflow = 'hidden';
            }

            function closeModal() {
                modal.classList.add('opacity-0', 'pointer-events-none');
                modalContent.classList.remove('scale-100');
                modalContent.classList.add('scale-95');
                document.body.style.overflow = '';
            }

            // Show welcome modal after 600ms
            setTimeout(openModal, 600);

            // Event Listeners for Closing Modal
            closeBtn.addEventListener('click', closeModal);
            dismissBtn.addEventListener('click', closeModal);
            
            exploreBtn.addEventListener('click', function() {
                closeModal();
                window.location.href = 'consult.html';
            });

            // Close on clicking backdrop
            modal.addEventListener('click', function (e) {
                if (e.target === modal) {
                    closeModal();
                }
            });
        }
    }

});
