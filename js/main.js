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

    // 3. Contact Form Submission Success Handler
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            
            // Create a temporary success toast
            const toast = document.createElement('div');
            toast.className = 'fixed bottom-5 right-5 z-[200] bg-emerald-600 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 transition-all duration-500 transform translate-y-10 opacity-0';
            toast.innerHTML = `<i class="fas fa-check-circle text-xl"></i> <div><p class="font-bold">Message Sent!</p><p class="text-xs text-emerald-100">We will contact you shortly.</p></div>`;
            document.body.appendChild(toast);
            
            // Animate in
            setTimeout(() => {
                toast.classList.remove('translate-y-10', 'opacity-0');
            }, 100);
            
            // Clear form
            contactForm.reset();
            
            // Animate out and remove
            setTimeout(() => {
                toast.classList.add('translate-y-10', 'opacity-0');
                setTimeout(() => toast.remove(), 500);
            }, 4000);
        });
    }
});
