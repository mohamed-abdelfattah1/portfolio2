document.addEventListener('DOMContentLoaded', () => {
    // 1. Hero Data
    const glitchElement = document.getElementById('hero-glitch');
    glitchElement.textContent = portfolioData.hero.glitchText;
    glitchElement.setAttribute('data-text', portfolioData.hero.glitchText);

    document.getElementById('hero-name').textContent = portfolioData.hero.name;
    document.getElementById('hero-title').textContent = portfolioData.hero.title;
    document.getElementById('hero-photo').src = portfolioData.hero.photo;
    document.getElementById('hero-desc').textContent = portfolioData.hero.description;

    // CV Download Buttons
    const heroCvBtn = document.getElementById('hero-cv');
    if (heroCvBtn) heroCvBtn.href = portfolioData.contact.cv;

    const contactCvBtn = document.getElementById('contact-cv');
    if (contactCvBtn) contactCvBtn.href = portfolioData.contact.cv;

    new Typed("#typed-text", {
        strings: portfolioData.hero.typingRoles,
        typeSpeed: 45,
        backSpeed: 25,
        backDelay: 2000,
        loop: true,
        showCursor: true,
        cursorChar: '_'
    });

    // 2. About Me
    document.getElementById('about-heading').textContent = portfolioData.about.heading;
    const aboutText = document.getElementById('about-text');
    aboutText.innerHTML = '';
    portfolioData.about.paragraphs.forEach(p => {
        aboutText.innerHTML += `<p>${p}</p>`;
    });

    const aboutStats = document.getElementById('about-stats');
    aboutStats.innerHTML = '';
    portfolioData.about.stats.forEach(stat => {
        aboutStats.innerHTML += `
            <div class="stat-card card">
                <span class="stat-value">${stat.value}</span>
                <span class="stat-label">${stat.label}</span>
            </div>
        `;
    });

    // 3. Education
    const eduGrid = document.getElementById('education-grid');
    eduGrid.innerHTML = '';
    portfolioData.education.forEach(edu => {
        eduGrid.innerHTML += `
            <div class="card">
                <h3><i class="fa-solid fa-graduation-cap" style="color:#00f3ff; margin-right:8px;"></i>${edu.degree}</h3>
                <p style="color: #00f3ff; margin: 5px 0; font-weight: 500;">${edu.institution} (${edu.period})</p>
                <p>${edu.desc}</p>
            </div>
        `;
    });

    // 4. Certifications
    const certGrid = document.getElementById('certifications-grid');
    if (certGrid) {
        certGrid.innerHTML = '';
        portfolioData.certifications.forEach(cert => {
            certGrid.innerHTML += `
                <div class="card cert-card">
                    <div class="cert-header">
                        <i class="fa-solid fa-award card-icon"></i>
                        <div>
                            <h3>${cert.title}</h3>
                            <span class="cert-issuer">${cert.issuer}</span>
                        </div>
                    </div>
                    <a href="${cert.file}" target="_blank" class="btn btn-sm cert-btn">
                        <i class="fa-solid fa-file-pdf"></i> View Certificate
                    </a>
                </div>
            `;
        });
    }

    // 5. Skills
    const skillsGrid = document.getElementById('skills-grid');
    skillsGrid.innerHTML = '';
    portfolioData.skills.forEach(group => {
        const chips = group.items.map(item => `<span>${item}</span>`).join('');
        skillsGrid.innerHTML += `
            <div class="skill-category card">
                <h3><i class="fa-solid fa-terminal"></i> ${group.category}</h3>
                <div class="tools-grid">${chips}</div>
            </div>
        `;
    });

    // 6. Experiences
    const expGrid = document.getElementById('experiences-grid');
    expGrid.innerHTML = '';
    portfolioData.experiences.forEach(exp => {
        expGrid.innerHTML += `
            <div class="card">
                <h3><i class="fa-solid fa-briefcase" style="color:#00f3ff; margin-right:8px;"></i>${exp.role}</h3>
                <p style="color: #00f3ff; margin: 5px 0;">${exp.company} (${exp.period})</p>
                <p>${exp.desc}</p>
            </div>
        `;
    });

    // 7. Services
    const servicesGrid = document.getElementById('services-grid');
    servicesGrid.innerHTML = '';
    portfolioData.services.forEach(service => {
        servicesGrid.innerHTML += `
            <div class="card service-card">
                <i class="fa-solid ${service.icon} card-icon"></i>
                <h3>${service.title}</h3>
                <p>${service.desc}</p>
            </div>
        `;
    });

    // 8. Projects
    const projectsGrid = document.getElementById('projects-grid');
    projectsGrid.innerHTML = '';
    portfolioData.projects.forEach(project => {
        projectsGrid.innerHTML += `
            <div class="card project-card">
                <div class="project-img-wrapper">
                    <img src="${project.image}" alt="${project.title}" class="project-img" onerror="this.src='2.png'">
                    <span class="project-category">[ ${project.category} ]</span>
                </div>
                <div class="project-details">
                    <h3>${project.title}</h3>
                    <p>${project.desc}</p>
                    <a href="${project.link}" target="_blank" class="btn btn-sm"><i class="fa-brands fa-github"></i> Repository</a>
                </div>
            </div>
        `;
    });

    // 9. Testimonials
    const testGrid = document.getElementById('testimonials-grid');
    testGrid.innerHTML = '';
    portfolioData.testimonials.forEach(test => {
        testGrid.innerHTML += `
            <div class="card testimonial-card">
                <i class="fa-solid fa-quote-left quote-icon"></i>
                <p style="font-style: italic; margin-bottom: 15px;">"${test.quote}"</p>
                <h4 style="color: #00f3ff;">- ${test.author}</h4>
            </div>
        `;
    });

    // 10. CTA
    document.getElementById('cta-heading').textContent = portfolioData.cta.heading;
    document.getElementById('cta-heading').setAttribute('data-text', portfolioData.cta.heading);
    document.getElementById('cta-subtext').textContent = portfolioData.cta.subtext;
    document.getElementById('cta-btn').textContent = portfolioData.cta.buttonText;
    document.getElementById('cta-btn').href = "#contact";

    // 11. Contact Links
    document.getElementById('contact-email').href = `mailto:${portfolioData.contact.email}`;
    document.getElementById('contact-whatsapp').href = portfolioData.contact.whatsapp;
    document.getElementById('contact-linkedin').href = portfolioData.contact.linkedin;
    document.getElementById('contact-github').href = portfolioData.contact.github;

    // Mobile Navbar Toggle
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');
    navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
    navLinks.querySelectorAll('a').forEach(a =>
        a.addEventListener('click', () => navLinks.classList.remove('open'))
    );

    // Active Link Scroll Highlight
    const sections = document.querySelectorAll('section[id]');
    const navAnchors = document.querySelectorAll('#nav-links a');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(sec => {
            if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
        });
        navAnchors.forEach(a => {
            a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
        });
    }, { passive: true });

    // Scroll Reveal Animation
    const revealObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.card').forEach(el => {
        el.classList.add('reveal');
        revealObserver.observe(el);
    });
});

// Matrix Canvas Rain Effect
const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=%""\'#&_(),.;:?!\\|{}<>[]^~';
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = [];

for (let x = 0; x < columns; x++) {
    drops[x] = 1;
}

function drawMatrix() {
    ctx.fillStyle = 'rgba(6, 10, 15, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#00f3ff';
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}
setInterval(drawMatrix, 33);

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});