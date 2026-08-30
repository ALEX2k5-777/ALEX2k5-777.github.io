/**
 * Alex C Varghese Cyberpunk Portfolio - Professional Interactive Script
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initHeaderMatrixAnimation();
  initTypewriter();
  initScrollAnimations();
  initTerminal();
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
    if (window.scrollY > 30) {
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
 * 2. Animated Matrix Cyber Video Canvas Stream in Header & Hero
 * ------------------------------------------------------------- */
function initHeaderMatrixAnimation() {
  const canvas = document.getElementById('header-matrix-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = canvas.parentElement.offsetWidth || window.innerWidth);
  let height = (canvas.height = canvas.parentElement.offsetHeight || 600);

  window.addEventListener('resize', () => {
    width = canvas.width = canvas.parentElement.offsetWidth || window.innerWidth;
    height = canvas.height = canvas.parentElement.offsetHeight || 600;
  });

  const chars = "0101010101010101ALEXVARGHESE_PYTHON_VIBEPLAYER_FLAPPY_GAME_010101";
  const charArr = chars.split("");
  const fontSize = 14;
  const columns = Math.floor(width / fontSize);
  const drops = [];

  for (let i = 0; i < columns; i++) {
    drops[i] = Math.random() * -100;
  }

  function draw() {
    ctx.fillStyle = "rgba(3, 7, 18, 0.12)";
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = "#00FF66";
    ctx.font = `${fontSize}px JetBrains Mono, monospace`;

    for (let i = 0; i < drops.length; i++) {
      const text = charArr[Math.floor(Math.random() * charArr.length)];
      const x = i * fontSize;
      const y = drops[i] * fontSize;

      ctx.shadowBlur = 4;
      ctx.shadowColor = "#00FF66";
      ctx.fillText(text, x, y);

      if (y > height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }

    requestAnimationFrame(draw);
  }

  draw();
}

/* -------------------------------------------------------------
 * 3. Typewriter Effect
 * ------------------------------------------------------------- */
function initTypewriter() {
  const target = document.getElementById('typewriter-text');
  if (!target) return;

  const phrases = [
    "MCA Student @ Amal Jyothi (2026 - Present)",
    "Creator of VibePlayer Media Player App",
    "Creator of Fly-Vezhambal Android Game",
    "BCA Graduate @ Saintgits (2023 - 2026)",
    "Python & Streamlit Developer",
    "i_hack 4.0 Hackathon Champion"
  ];

  let phraseIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let typingSpeed = 60;

  function type() {
    const currentPhrase = phrases[phraseIdx];
    
    if (isDeleting) {
      target.textContent = currentPhrase.substring(0, charIdx - 1);
      charIdx--;
      typingSpeed = 30;
    } else {
      target.textContent = currentPhrase.substring(0, charIdx + 1);
      charIdx++;
      typingSpeed = 70;
    }

    if (!isDeleting && charIdx === currentPhrase.length) {
      isDeleting = true;
      typingSpeed = 1800;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
      typingSpeed = 350;
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

/* -------------------------------------------------------------
 * 4. Scroll Reveal Observer
 * ------------------------------------------------------------- */
function initScrollAnimations() {
  const revealElements = document.querySelectorAll('.reveal-on-scroll');

  const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: '0px 0px -30px 0px'
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
 * 5. Interactive CLI Terminal With Click Chips
 * ------------------------------------------------------------- */
function initTerminal() {
  const termOutput = document.getElementById('terminal-output');
  const termInput = document.getElementById('terminal-input');
  const termForm = document.getElementById('terminal-form');
  const termChips = document.querySelectorAll('.term-chip');

  if (!termForm || !termInput || !termOutput) return;

  const commands = {
    help: `
<span class="text-neon font-bold">AVAILABLE COMMANDS:</span>
  <span class="text-white">about</span>      - Executive overview of Alex C Varghese
  <span class="text-white">projects</span>   - VibePlayer, AQI Model, AGRIGO & Fly-Vezhambal
  <span class="text-white">education</span>  - MCA (2026-Present) & BCA (2023-2026) timeline
  <span class="text-white">resume</span>     - Download official CV / Resume PDF
  <span class="text-white">skills</span>     - Core programming languages & technical stack
  <span class="text-white">contact</span>    - Email, phone & social links
  <span class="text-white">clear</span>      - Clear terminal screen
  <span class="text-neon">sudo hire</span>  - Execute priority recruitment workflow
`,
    about: `
<span class="text-neon font-semibold">[PROFILE] Alex C Varghese</span>
Role: MCA Student (Amal Jyothi College) | BCA Graduate (Saintgits)
Location: Alappuzha, Kuttanad, Kerala
Summary: Pursuing MCA (2026–Present) at Amal Jyothi College of Engineering. Completed BCA (2023–2026) from Saintgits College. Creator of VibePlayer, ML AQI Prediction, AGRIGO & Fly-Vezhambal Android Game.
`,
    education: `
<span class="text-neon font-semibold">[EDUCATION & ACHIEVEMENTS]</span>
• <span class="text-white font-bold">Amal Jyothi College of Engineering, Kanjirappally</span> - MCA | 2026 – Present
• <span class="text-slate-300">Saintgits College of Applied Science</span> - BCA (CGPA: 7.07) | 2023 – 2026
• <span class="text-slate-300">St George HSS, Muttar</span> - Higher Secondary (83.9%) | 2021 – 2023
• <span class="text-slate-300">St George HSS, Muttar</span> - SSLC (Full A+) | 2020 – 2021
🏆 <span class="text-neon">Winner of i_hack 4.0 Hackathon (College Level)</span>
`,
    resume: `
<span class="text-neon font-semibold">[RESUME DOCUMENT]</span>
📄 File: Alex_C_Varghese_Resume.pdf
👉 You can download the official resume directly from the <a href="#resume" class="underline text-neon">Resume Section</a> or click <a href="Alex_C_Varghese_Resume.pdf" download class="underline text-white">here to download PDF</a>.
`,
    skills: `
<span class="text-neon font-semibold">[TECH STACK]</span>
• Languages: Python, Java, C++, JavaScript, HTML5/CSS3
• Software & Game Dev: Android 2D Game Dev, Predictive Modeling, Streamlit, Weather APIs, Audio Visualizers
• Core Competencies: Teamwork, Problem Solving, Growth Mindset, Self-Learner
`,
    projects: `
<span class="text-neon font-semibold">[FEATURED PROJECTS]</span>
1. <span class="text-white font-medium">VibePlayer</span> 🎵 (GitHub: <a href="https://github.com/ALEX2k5-777/vibeplayer" target="_blank" class="text-neon underline">vibeplayer</a>)
   - Modern Audio & Media Player Application with visualizer
2. <span class="text-white font-medium">Air Quality Index (AQI) Prediction App</span> 🍃 (GitHub: <a href="https://github.com/ALEX2k5-777/Air-Quality-Model-" target="_blank" class="text-neon underline">Air-Quality-Model-</a>)
   - Akira Software Solutions Pvt Ltd (Technopark Trivandrum)
3. <span class="text-white font-medium">AGRIGO</span> 🌾 (Academic AgriTech Platform)
   - Dynamic Agricultural Management & Weather API integration
4. <span class="text-white font-medium">Fly-Vezhambal</span> 🎮 (GitHub: <a href="https://github.com/ALEX2k5-777/fly-vezhambal" target="_blank" class="text-neon underline">fly-vezhambal</a>)
   - Android 2D arcade game application inspired by Flappy Bird
`,
    contact: `
<span class="text-neon font-semibold">[CONTACT DIRECTORY]</span>
📧 Email: alexcvarghese777@gmail.com
📞 Phone: +91 9747315186
🔗 LinkedIn: linkedin.com/in/alex-c-varghese-038581358/
💻 GitHub: github.com/ALEX2k5-777
📷 Instagram: instagram.com/_a.l.e.x__.c.__/
`,
    'sudo hire': `
<span class="text-neon font-bold">[ACCESS GRANTED]</span> Initializing recruitment workflow...
🚀 Alex C Varghese is actively seeking entry-level technical roles in Software Engineering & Application Development.
📩 Direct Email: alexcvarghese777@gmail.com | 📲 Phone: +91 9747315186
`
  };

  function executeCommand(rawVal) {
    if (!rawVal) return;
    const cmd = rawVal.toLowerCase().trim();

    const cmdLine = document.createElement('div');
    cmdLine.className = 'mt-2 text-slate-300 font-mono text-sm';
    cmdLine.innerHTML = `<span class="text-neon">alex@portfolio:~$</span> ${escapeHTML(rawVal)}`;
    termOutput.appendChild(cmdLine);

    if (cmd === 'clear') {
      termOutput.innerHTML = '';
    } else if (commands[cmd]) {
      const resBox = document.createElement('div');
      resBox.className = 'text-slate-300 font-mono text-sm leading-relaxed mb-2';
      resBox.innerHTML = commands[cmd];
      termOutput.appendChild(resBox);
    } else {
      const errBox = document.createElement('div');
      errBox.className = 'text-rose-400 font-mono text-sm mb-2';
      errBox.innerHTML = `zsh: command not found: <span class="underline">${escapeHTML(rawVal)}</span>. Type <span class="text-neon font-bold">help</span> for available commands.`;
      termOutput.appendChild(errBox);
    }

    termInput.value = '';
    termOutput.scrollTop = termOutput.scrollHeight;
  }

  termForm.addEventListener('submit', (e) => {
    e.preventDefault();
    executeCommand(termInput.value);
  });

  termChips.forEach(chip => {
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
 * 6. Interactive Project Filters
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
 * 7. Back-To-Top Button Observer
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
 * 8. Contact Form - Direct Inbox Delivery (Web3Forms API)
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
      showConsoleLog('ERROR: Please fill in all required fields.', 'text-rose-400');
      return;
    }

    const origText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<i class="fas fa-spinner fa-spin mr-2"></i> Encrypting & Dispatching...`;

    showConsoleLog(`[SENDING] Dispatching message from ${name} (${email}) directly to alexcvarghese777@gmail.com...`, 'text-neon');

    try {
      const formData = new FormData(form);
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        showConsoleLog(`[SUCCESS 200] Message sent directly to alexcvarghese777@gmail.com!`, 'text-neon');
        submitBtn.innerHTML = `<i class="fas fa-check-circle mr-2"></i> Message Sent to Gmail!`;
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
    showConsoleLog(`[NOTICE] Opening email draft to alexcvarghese777@gmail.com...`, 'text-cyan-400');
    const mailtoUrl = `mailto:alexcvarghese777@gmail.com?subject=${encodeURIComponent(subject || 'Portfolio Inquiry from ' + name)}&body=${encodeURIComponent("Sender Name: " + name + "\nSender Email: " + email + "\n\nMessage:\n" + message)}`;
    window.location.href = mailtoUrl;
    if (submitBtn) submitBtn.innerHTML = `<i class="fas fa-paper-plane mr-2"></i> Sent!`;
  }

  function showConsoleLog(msg, colorClass = 'text-slate-300') {
    if (!consoleLog) return;
    consoleLog.classList.remove('hidden');
    consoleLog.className = `mt-4 p-3.5 rounded-xl bg-black border border-[#1e293b] font-mono text-sm ${colorClass}`;
    consoleLog.innerHTML = `<span class="opacity-75">[${new Date().toLocaleTimeString()}]</span> ${msg}`;
  }
}
