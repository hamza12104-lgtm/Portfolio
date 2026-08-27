document.addEventListener("DOMContentLoaded", () => {
    // 1. Set Dynamic Year in Footers
    const yearEl = document.getElementById("year");
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // 2. Interactive Contact Form with Mailto Link fallback
    const contactForm = document.getElementById("contactForm");
    const formStatus = document.getElementById("formStatus");

    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (!name || !email || !message) {
                if (formStatus) formStatus.textContent = "Please fill in all required fields.";
                return;
            }

            const recipient = "hamza12104@gmail.com";
            const subject = encodeURIComponent(`Design Inquiry from ${name}`);
            const body = encodeURIComponent(
                `Hi Hamza,\n\nName: ${name}\nEmail: ${email}\n\nProject / Role Details:\n${message}\n\nSent from your portfolio website.`
            );
            
            if (formStatus) {
                formStatus.textContent = "Opening your default email client...";
            }

            window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
        });
    }

    // 3. Scroll Reveal Animation for Section Elements
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-revealed");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll(".reveal-on-scroll").forEach((el) => {
        revealObserver.observe(el);
    });

    // 4. Auto-collapse mobile navbar menu when clicking any nav link
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navCollapse = document.getElementById('navMenu');
    if (navCollapse) {
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                const bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
                if (bsCollapse) {
                    bsCollapse.hide();
                }
            });
        });
    }
});