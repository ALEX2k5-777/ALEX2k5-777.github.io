/**
 * Alex C Varghese - Modern Developer Portfolio Interactive Script
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initTypewriter();
  initScrollAnimations();
  initConsole();
  initProjectFilters();
  initBackToTop();
  initContactForm();
});

/* -------------------------------------------------------------
 * 1. Header & Navigation Observers
 * ------------------------------------------------------------- */
function initHeader() {
  const navbar = document.getElementById('main-navbar');
  const mobileToggle = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }
}

/* -------------------------------------------------------------
 * 2. Typewriter Effect
 * ------------------------------------------------------------- */
function initTypewriter() {
  const target = document.getElementById('typewriter-text');
  if (!target) return;

  const phrases = [
    "MCA Student @ Amal Jyothi College (2026 – Present)",
    "Creator of Alexa Player — Audio MIR & 3D Piano Guide",
    "BCA Graduate from Saintgits College (CGPA: 7.07)",
    "Winner of i_hack 4.0 Hackathon @ Saintgits",
    "Machine Learning & Application Developer"
  ];

  let phraseIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let typingSpeed = 50;

  function type() {
    const currentPhrase = phrases[phraseIdx];
    
    if (isDeleting) {
      target.textContent = currentPhrase.substring(0, charIdx - 1);
      charIdx--;
      typingSpeed = 25;
    } else {
      target.textContent = currentPhrase.substring(0, charIdx + 1);
      charIdx++;
      typingSpeed = 65;
    }

    if (!isDeleting && charIdx === currentPhrase.length) {
      isDeleting = true;
      typingSpeed = 2000;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
      typingSpeed = 400;
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

/* -------------------------------------------------------------
 * 3. Scroll Reveal Observer
 * ------------------------------------------------------------- */
function initScrollAnimations() {
  const revealElements = document.querySelectorAll('.reveal-on-scroll');

  const observerOptions = {
    root: null,
    threshold: 0.08,
    rootMargin: '0px 0px -20px 0px'
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach(el => observer.observe(el));
}

/* -------------------------------------------------------------
 * 4. Interactive Developer Console
 * ------------------------------------------------------------- */
function initConsole() {
  const termOutput = document.getElementById('terminal-output');
  const termInput = document.getElementById('terminal-input');
  const termForm = document.getElementById('terminal-form');
  const consoleChips = document.querySelectorAll('.console-chip');

  if (!termForm || !termInput || !termOutput) return;

  const commands = {
    help: `
<div class="text-zinc-400 space-y-1">
  <div><span class="text-blue-400 font-semibold">about</span>      - Executive background of Alex C Varghese</div>
  <div><span class="text-blue-400 font-semibold">projects</span>   - Featured applications & repositories</div>
  <div><span class="text-blue-400 font-semibold">education</span>  - Academic timeline (MCA & BCA)</div>
  <div><span class="text-blue-400 font-semibold">skills</span>     - Programming languages & technical tools</div>
  <div><span class="text-blue-400 font-semibold">resume</span>     - Official CV download link</div>
  <div><span class="text-blue-400 font-semibold">contact</span>    - Direct contact info</div>
  <div><span class="text-blue-400 font-semibold">clear</span>      - Clear console window</div>
</div>
`,
    about: `
<div class="text-zinc-300 space-y-1">
  <div class="text-white font-semibold">Alex C Varghese</div>
  <div>• Status: MCA Student (Amal Jyothi College, 2026–Present)</div>
  <div>• Background: BCA Graduate (Saintgits College, CGPA: 7.07)</div>
  <div>• Location: Alappuzha, Kerala, India</div>
  <div>• Recognition: 🏆 1st Rank Champion — i_hack 4.0 Hackathon @ Saintgits</div>
</div>
`,
    education: `
<div class="text-zinc-300 space-y-1">
  <div>• <strong class="text-white">Amal Jyothi College of Engineering</strong> — MCA (2026 – Present)</div>
  <div>• <strong class="text-white">Saintgits College of Applied Science</strong> — BCA (2023 – 2026, 7.07 CGPA)</div>
  <div class="text-amber-400">  🏆 Winner of i_hack 4.0 Hackathon</div>
  <div>• <strong class="text-white">St George HSS, Muttar</strong> — Higher Secondary (83.9%) & SSLC (Full A+)</div>
</div>
`,
    resume: `
<div class="text-zinc-300">
  📄 Official Resume: <strong class="text-white">Alex_C_Varghese_Resume.pdf</strong><br/>
  👉 <a href="Alex_C_Varghese_Resume.pdf" download class="text-blue-400 underline hover:text-blue-300">Click here to download PDF</a>
</div>
`,
    skills: `
<div class="text-zinc-300 space-y-1">
  <div>• <strong class="text-white">Languages:</strong> Python 3.12, Java, C++, JavaScript, HTML5/CSS3</div>
  <div>• <strong class="text-white">Frameworks & Audio:</strong> Librosa (Audio MIR, CQT), Web Audio API, Streamlit</div>
  <div>• <strong class="text-white">Developer Tools:</strong> Git, GitHub, VS Code, Android Game Development</div>
</div>
`,
    projects: `
<div class="text-zinc-300 space-y-1.5">
  <div>1. <strong class="text-white">Alexa Player</strong>: Audio MIR & 3D Virtual Piano Guide (<a href="https://github.com/ALEX2k5-777/alexa-player" target="_blank" class="text-blue-400 underline">github</a>)</div>
  <div>2. <strong class="text-white">VibePlayer</strong>: Audio player with real-time visualizers (<a href="https://github.com/ALEX2k5-777/vibeplayer" target="_blank" class="text-blue-400 underline">github</a>)</div>
  <div>3. <strong class="text-white">AQI Predictor</strong>: ML Web App built at Akira Software Solutions (<a href="https://github.com/ALEX2k5-777/Air-Quality-Model-" target="_blank" class="text-blue-400 underline">github</a>)</div>
  <div>4. <strong class="text-white">AGRIGO</strong>: Agricultural management web platform with weather APIs</div>
  <div>5. <strong class="text-white">Fly-Vezhambal</strong>: Android 2D arcade mobile game (<a href="https://github.com/ALEX2k5-777/fly-vezhambal" target="_blank" class="text-blue-400 underline">github</a>)</div>
</div>
`,
    contact: `
<div class="text-zinc-300 space-y-1">
  <div>• Email: <a href="mailto:alexcvarghese777@gmail.com" class="text-blue-400">alexcvarghese777@gmail.com</a></div>
  <div>• Phone: +91 9747315186</div>
  <div>• LinkedIn: <a href="https://www.linkedin.com/in/alex-c-varghese-038581358/" target="_blank" class="text-blue-400">alex-c-varghese</a></div>
  <div>• GitHub: <a href="https://github.com/ALEX2k5-777" target="_blank" class="text-blue-400">ALEX2k5-777</a></div>
</div>
`,
    hire: `
<div class="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20 text-zinc-200">
  <div class="text-blue-400 font-semibold">Available for Opportunities</div>
  <div>Alex is actively seeking software engineering internships and technical roles.</div>
  <div>Email directly: <a href="mailto:alexcvarghese777@gmail.com" class="underline text-blue-300">alexcvarghese777@gmail.com</a></div>
</div>
`
  };

  function executeCommand(rawVal) {
    if (!rawVal) return;
    const cmd = rawVal.toLowerCase().trim();

    const cmdLine = document.createElement('div');
    cmdLine.className = 'mt-2 text-zinc-400 font-mono text-xs sm:text-sm';
    cmdLine.innerHTML = `<span class="text-blue-400 font-bold">alex@portfolio:~$</span> ${escapeHTML(rawVal)}`;
    termOutput.appendChild(cmdLine);

    if (cmd === 'clear') {
      termOutput.innerHTML = '';
    } else if (commands[cmd]) {
      const resBox = document.createElement('div');
      resBox.className = 'text-zinc-300 text-xs sm:text-sm leading-relaxed mb-2';
      resBox.innerHTML = commands[cmd];
      termOutput.appendChild(resBox);
    } else {
      const errBox = document.createElement('div');
      errBox.className = 'text-rose-400 text-xs sm:text-sm mb-2';
      errBox.innerHTML = `Command not recognized: <span class="underline">${escapeHTML(rawVal)}</span>. Type <span class="text-blue-400 font-semibold">help</span> to view available commands.`;
      termOutput.appendChild(errBox);
    }

    termInput.value = '';
    termOutput.scrollTop = termOutput.scrollHeight;
  }

  termForm.addEventListener('submit', (e) => {
    e.preventDefault();
    executeCommand(termInput.value);
  });

  consoleChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const cmdToRun = chip.getAttribute('data-cmd');
      if (cmdToRun) {
        termInput.value = cmdToRun;
        executeCommand(cmdToRun);
      }
    });
  });
}

function escapeHTML(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag)
  );
}

/* -------------------------------------------------------------
 * 5. Project Filter Tabs
 * ------------------------------------------------------------- */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (!filterBtns.length || !projectCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterVal = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filterVal === 'all' || cat === filterVal) {
          card.style.display = 'flex';
          card.classList.add('revealed');
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* -------------------------------------------------------------
 * 6. Back-To-Top Button Observer
 * ------------------------------------------------------------- */
function initBackToTop() {
  const btn = document.getElementById('back-to-top-btn');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* -------------------------------------------------------------
 * 7. Contact Form Delivery (Web3Forms API)
 * ------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('portfolio-contact-form');
  const consoleLog = document.getElementById('form-console-log');
  const submitBtn = document.getElementById('form-submit-btn');

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const subjectInput = document.getElementById('contact-subject');
    const messageInput = document.getElementById('contact-message');

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const subject = subjectInput.value.trim();
    const message = messageInput.value.trim();

    if (!name || !email || !message) {
      showConsoleLog('Please fill in all required fields.', 'text-rose-400');
      return;
    }

    const origText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<i class="fas fa-spinner fa-spin mr-2"></i> Sending Message...`;

    showConsoleLog(`Sending message from ${name}...`, 'text-blue-400');

    try {
      const formData = new FormData(form);
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        showConsoleLog(`Message sent successfully to alexcvarghese777@gmail.com!`, 'text-emerald-400');
        submitBtn.innerHTML = `<i class="fas fa-check-circle mr-2"></i> Sent Successfully!`;
        form.reset();
      } else {
        triggerMailto(name, email, subject, message);
      }
    } catch (err) {
      triggerMailto(name, email, subject, message);
    }

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = origText;
    }, 4000);
  });

  function triggerMailto(name, email, subject, message) {
    showConsoleLog(`Opening default email client...`, 'text-zinc-400');
    const mailtoUrl = `mailto:alexcvarghese777@gmail.com?subject=${encodeURIComponent(subject || 'Portfolio Inquiry from ' + name)}&body=${encodeURIComponent("Sender Name: " + name + "\nSender Email: " + email + "\n\nMessage:\n" + message)}`;
    window.location.href = mailtoUrl;
    if (submitBtn) submitBtn.innerHTML = `<i class="fas fa-paper-plane mr-2"></i> Sent!`;
  }

  function showConsoleLog(msg, colorClass = 'text-zinc-400') {
    if (!consoleLog) return;
    consoleLog.classList.remove('hidden');
    consoleLog.className = `mt-3 p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-xs ${colorClass}`;
    consoleLog.innerHTML = msg;
  }
}
