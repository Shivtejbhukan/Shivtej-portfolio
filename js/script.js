document.addEventListener('DOMContentLoaded', function () {
  const themeToggle = document.querySelector('#themeToggle');
  const htmlRoot = document.documentElement;
  const backToTop = document.querySelector('#backToTop');
  const projectSearch = document.querySelector('#projectSearch');
  const projectCards = document.querySelectorAll('.project-card');
  const toastContainer = document.querySelector('#toastContainer');
  const contactForm = document.querySelector('#contactForm');
  const typedTextElement = document.querySelector('#typed-text');
  const projectDetailButtons = document.querySelectorAll('.project-detail-btn');
  const modalTitle = document.querySelector('#modalProjectTitle');
  const modalDescription = document.querySelector('#modalProjectDescription');
  const modalTech = document.querySelector('#modalProjectTech');
  const modalImage = document.querySelector('#modalProjectImage');
  const counts = document.querySelectorAll('.count');
  const githubCalendarRoot = document.querySelector('#github-calendar-root');
  const typedPhrases = [
    'Java Developer',
    'Full Stack Developer',
    'Software Developer',
    'Web Developer',
    'Problem Solver'
  ];
  let typedIndex = 0;
  let typedOffset = 0;
  let isDeleting = false;

  const emailJsConfig = {
    serviceId: 'service_czt3qza',
    templateId: 'template_6m22tq5',
    publicKey: 'h_Dhqc9vZQWDPifGs'
  };

  function setTheme(theme) {
    htmlRoot.setAttribute('data-theme', theme);
    localStorage.setItem('portfolioTheme', theme);
    themeToggle.innerHTML = theme === 'dark' ? '<i class="bi bi-sun-fill"></i>' : '<i class="bi bi-moon-stars-fill"></i>';
  }

  function initTheme() {
    const savedTheme = localStorage.getItem('portfolioTheme');
    setTheme(savedTheme === 'light' ? 'light' : 'dark');
  }

  function showToast(message, type = 'success') {
    const toastId = `toast-${Date.now()}`;
    const toastMarkup = `
      <div id="${toastId}" class="toast align-items-center text-white bg-${type} border-0 mb-2" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="d-flex">
          <div class="toast-body">${message}</div>
          <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
      </div>`;
    toastContainer.insertAdjacentHTML('beforeend', toastMarkup);
    const toastEl = document.getElementById(toastId);
    const toast = new bootstrap.Toast(toastEl, { delay: 4000 });
    toast.show();
  }

  function updateScrollProgress() {
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = window.scrollY;
    const width = docHeight > 0 ? `${(scrolled / docHeight) * 100}%` : '0%';
    document.querySelector('#scroll-progress').style.width = width;
    backToTop.style.display = scrolled > 400 ? 'grid' : 'none';
  }

  function cycleTypedText() {
    const currentPhrase = typedPhrases[typedIndex];
    if (!isDeleting) {
      typedTextElement.textContent = currentPhrase.slice(0, typedOffset + 1);
      typedOffset++;
      if (typedOffset === currentPhrase.length) {
        isDeleting = true;
        setTimeout(cycleTypedText, 1500);
        return;
      }
    } else {
      typedTextElement.textContent = currentPhrase.slice(0, typedOffset - 1);
      typedOffset--;
      if (typedOffset === 0) {
        isDeleting = false;
        typedIndex = (typedIndex + 1) % typedPhrases.length;
      }
    }
    setTimeout(cycleTypedText, isDeleting ? 80 : 120);
  }

  function updateProjectFilter() {
    const query = projectSearch.value.trim().toLowerCase();
    projectCards.forEach((card) => {
      const title = card.querySelector('.card-title').textContent.toLowerCase();
      const tags = card.querySelector('.project-tags').textContent.toLowerCase();
      const visible = title.includes(query) || tags.includes(query);
      card.style.display = visible ? 'block' : 'none';
    });
  }

  function initProjectModal() {
    projectDetailButtons.forEach((button) => {
      button.addEventListener('click', () => {
        modalTitle.textContent = button.dataset.title;
        modalDescription.textContent = button.dataset.description;
        modalTech.textContent = button.dataset.tech;
        modalImage.src = button.dataset.image;
        modalImage.alt = button.dataset.title;
      });
    });
  }

  function animateCounters() {
    counts.forEach((counter) => {
      const target = +counter.dataset.target;
      let current = 0;
      const step = Math.ceil(target / 120);
      const interval = setInterval(() => {
        current += step;
        if (current >= target) {
          counter.textContent = target;
          clearInterval(interval);
        } else {
          counter.textContent = current;
        }
      }, 15);
    });
  }

  function initGitHubCalendar() {
    if (!githubCalendarRoot) return;
    try {
      // Initialize GitHubCalendar (library does not return a Promise)
      GitHubCalendar('#github-calendar-root', 'Shivtejbhukan', {
        responsive: true,
        tooltips: true,
        global_stats: false
      });
    } catch (error) {
      githubCalendarRoot.innerHTML = '<p class="text-center text-muted">GitHub calendar failed to load. Please check the library import.</p>';
    }
  }

  function initParticles() {
    if (window.particlesJS) {
      particlesJS('particles-js', {
        particles: {
          number: { value: 55, density: { enable: true, value_area: 800 } },
          color: { value: '#6b5bff' },
          shape: { type: 'circle' },
          opacity: { value: 0.25, random: false },
          size: { value: 4, random: true },
          line_linked: { enable: true, distance: 140, color: '#5b8def', opacity: 0.12, width: 1 },
          move: { enable: true, speed: 2, direction: 'none', out_mode: 'out' }
        },
        interactivity: {
          detect_on: 'canvas',
          events: { onhover: { enable: true, mode: 'grab' }, onclick: { enable: true, mode: 'push' }, resize: true },
          modes: { grab: { distance: 140, line_linked: { opacity: 0.25 } }, push: { particles_nb: 4 } }
        },
        retina_detect: true
      });
    }
  }

  // function updateVisitorCount() {
  //   const visitorTotalElement = document.querySelector('#visitorTotal');
  //   const visitorTodayElement = document.querySelector('#visitorToday');

  //   if (visitorTotalElement) {
  //     visitorTotalElement.textContent = '100';
  //   }

  //   if (visitorTodayElement) {
  //     visitorTodayElement.textContent = '10';
  //   }
  // }


 async function updateVisitorCount() {

    const visitorTotalElement = document.getElementById("visitorTotal");
    const visitorTodayElement = document.getElementById("visitorToday");

    try {

        // Total Visitors
        const totalResponse = await fetch(
            "https://api.countapi.xyz/hit/shivtej-portfolio/total"
        );

        const totalData = await totalResponse.json();

        if (visitorTotalElement) {
            visitorTotalElement.textContent = totalData.value;
        }

        // Today's Visitors
        const today = new Date().toISOString().split("T")[0];

        const todayResponse = await fetch(
            `https://api.countapi.xyz/hit/shivtej-portfolio/${today}`
        );

        const todayData = await todayResponse.json();

        if (visitorTodayElement) {
            visitorTodayElement.textContent = todayData.value;
        }

    } catch (error) {
        console.log("Visitor Counter Error:", error);
    }

}

  function initEmailJS() {
    if (window.emailjs) {
      emailjs.init(emailJsConfig.publicKey);
    }
  }

  function hidePreloader() {
    const preloader = document.getElementById('preloader');
    if (!preloader) return;
    preloader.classList.add('preloader-hide');
    window.setTimeout(() => preloader.remove(), 600);
  }

  function handleContactSubmit(event) {
    event.preventDefault();
    const name = document.querySelector('#contactName').value.trim();
    const email = document.querySelector('#contactEmail').value.trim();
    const subject = document.querySelector('#contactSubject').value.trim();
    const message = document.querySelector('#contactMessage').value.trim();

    if (!name || !email || !subject || !message) {
      showToast('Please complete all fields before sending.', 'danger');
      return;
    }

    const formElement = document.querySelector('#contactForm');

    if (!formElement) {
      showToast('Contact form not found. Please refresh the page.', 'danger');
      return;
    }

    emailjs.sendForm(emailJsConfig.serviceId, emailJsConfig.templateId, formElement)
      .then(() => {
        showToast("Message sent successfully! I'll contact you soon.", 'success');
        contactForm.reset();
      })
      .catch(() => {
        showToast('Failed to send message. Please try again.', 'danger');
      });
  }

  initTheme();
  initParticles();
  initGitHubCalendar();
  initProjectModal();
  animateCounters();
  initEmailJS();
  updateVisitorCount();
  cycleTypedText();
  AOS.init({ duration: 850, easing: 'ease-out-cubic', once: true, mirror: false });

  window.addEventListener('load', hidePreloader);

  themeToggle.addEventListener('click', () => {
    const nextTheme = htmlRoot.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
  });

  window.addEventListener('scroll', updateScrollProgress);
  projectSearch.addEventListener('input', updateProjectFilter);
  backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  contactForm.addEventListener('submit', handleContactSubmit);
});
