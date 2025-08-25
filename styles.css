<!DOCTYPE html><html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Digital portfolio Front-end web development with highlights center on page</title>
  <meta name="description" content="Digital portfolio of VasanthaKumar — Front‑end Web Development." />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg: #0f1220;
      --card: #151932;
      --muted: #aab0c0;
      --text: #e8ecff;
      --accent: #7c9cff;
      --ring: rgba(255,255,255,.15);
    }* { box-sizing: border-box; }
html, body { height: 100%; }
body {
  margin: 0;
  font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji";
  background: radial-gradient(1200px 600px at 80% -10%, #1c2250 0%, transparent 60%),
              radial-gradient(900px 500px at -10% 10%, #262f66 0%, transparent 60%),
              var(--bg);
  color: var(--text);
  line-height: 1.6;
}

/* ===== Multi-Colour Navigation Bar ===== */
.nav-wrap {
  position: sticky; top: 0; z-index: 20;
  backdrop-filter: saturate(160%) blur(8px);
  border-bottom: 1px solid rgba(255,255,255,.08);
}
nav {
  max-width: 1100px; margin: 0 auto; padding: .75rem 1rem; display: flex; gap: 1rem; align-items: center; justify-content: space-between;
}
.brand {
  font-weight: 800; letter-spacing: .5px; display: flex; align-items: center; gap: .5rem;
}
.brand-badge { width: 10px; height: 10px; border-radius: 50%; background: conic-gradient(from 0deg, #ff6b6b, #ffc371, #51cf66, #22b8cf, #845ef7, #ff6b6b); box-shadow: 0 0 0 3px rgba(255,255,255,.06); }

/* Multi-colour gradient bar */
.nav-bar {
  position: absolute; left: 0; right: 0; top: 0; height: 3px;
  background: linear-gradient(90deg, #ff6b6b, #ffd166, #06d6a0, #118ab2, #9b5de5, #ff6b6b);
  background-size: 300% 100%;
  animation: rainbow 18s linear infinite;
}
@keyframes rainbow { to { background-position: 300% 0; } }

.links { display: flex; gap: .5rem; align-items: center; }
.links a {
  position: relative; text-decoration: none; color: var(--text); font-weight: 600; padding: .5rem .75rem; border-radius: 999px; opacity: .9;
}
.links a::after {
  content: ""; position: absolute; left: .75rem; right: .75rem; bottom: .3rem; height: 2px; border-radius: 2px;
  background: linear-gradient(90deg, #ffd166, #06d6a0, #118ab2, #9b5de5);
  transform: scaleX(0); transform-origin: left; transition: transform .25s ease;
}
.links a:hover::after, .links a.active::after { transform: scaleX(1); }

/* ===== Hero with centered highlights ===== */
.hero { min-height: calc(100vh - 56px); display: grid; place-items: center; padding: 2rem 1rem; }
.hero-inner { max-width: 1000px; width: 100%; display: grid; grid-template-columns: 1.2fr 1fr; gap: 2rem; align-items: center; }
.card {
  background: linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.02));
  border: 1px solid rgba(255,255,255,.08);
  border-radius: 24px; padding: 1.25rem; box-shadow: 0 10px 30px rgba(0,0,0,.35);
}
.headline { font-size: clamp(2rem, 3.6vw, 3rem); line-height: 1.1; margin: 0 0 .75rem; font-weight: 800; }
.sub { color: var(--muted); margin: 0 0 1rem; }

.highlights {
  display: grid; place-items: center; gap: 1rem; padding: 1rem; text-align: center;
}
.badges { display: flex; flex-wrap: wrap; gap: .6rem; justify-content: center; }
.badge {
  padding: .5rem .75rem; border-radius: 999px; font-weight: 700; font-size: .9rem;
  border: 1px solid rgba(255,255,255,.12);
  box-shadow: 0 8px 20px rgba(0,0,0,.25);
  background: linear-gradient(135deg, rgba(255,255,255,.10), rgba(255,255,255,.04));
}

.info {
  display: grid; gap: .75rem; }
.info-row { display: flex; align-items: center; gap: .6rem; color: var(--muted); }
.dot { width: 8px; height: 8px; border-radius: 50%; background: var(--accent); box-shadow: 0 0 0 3px rgba(124,156,255,.25); }
.email { color: var(--text); font-weight: 700; text-decoration: none; }

/* Sections */
section { scroll-margin-top: 76px; }
.section { max-width: 1100px; margin: 0 auto; padding: 4rem 1rem; }
.section h2 { margin: 0 0 1rem; font-size: clamp(1.4rem, 2.5vw, 2rem); }
.grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1rem; }
.tile { padding: 1rem; border: 1px solid rgba(255,255,255,.08); border-radius: 18px; background: #0f1328; }

/* Footer */
footer { border-top: 1px solid rgba(255,255,255,.08); padding: 2rem 1rem; color: var(--muted); text-align: center; }

/* Responsive */
@media (max-width: 920px) {
  .hero-inner { grid-template-columns: 1fr; }
}

  </style>
</head>
<body>
  <div class="nav-wrap">
    <div class="nav-bar" aria-hidden="true"></div>
    <nav>
      <div class="brand"><span class="brand-badge" aria-hidden="true"></span> <span>VasanthaKumar</span></div>
      <div class="links">
        <a href="#home" class="active">Home</a>
        <a href="#highlights">Highlights</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  </div>  <main id="home" class="hero">
    <div class="hero-inner">
      <div class="card">
        <h1 class="headline">Digital Portfolio — Front‑end Web Development</h1>
        <p class="sub">Hi, I'm <strong>VasanthaKumar</strong>. I build clean, responsive, user‑friendly interfaces with HTML, CSS, and JavaScript.</p>
        <div class="info">
          <div class="info-row"><span class="dot"></span> <span>Open to internships, freelance and front‑end roles.</span></div>
          <div class="info-row"><span class="dot"></span> <span>Email: <a class="email" href="mailto:vasanth59068@gmail.com">vasanth59068@gmail.com</a></span></div>
          <div class="info-row"><span class="dot"></span> <span>Based in India • Available remotely.</span></div>
        </div>
      </div><!-- Centered Highlights Card -->
  <section id="highlights" class="card highlights" aria-label="Highlights">
    <h2 style="margin:0">Highlights</h2>
    <p class="sub" style="margin:0 0 .5rem">What I love working on</p>
    <div class="badges" role="list">
      <span class="badge" role="listitem">Semantic HTML</span>
      <span class="badge" role="listitem">Modern CSS (Flex/Grid)</span>
      <span class="badge" role="listitem">Responsive Design</span>
      <span class="badge" role="listitem">Accessibility (a11y)</span>
      <span class="badge" role="listitem">Vanilla JS</span>
      <span class="badge" role="listitem">Animations</span>
    </div>
  </section>
</div>

  </main>  <section id="projects" class="section">
    <h2>Projects</h2>
    <div class="grid">
      <article class="tile">
        <h3>Interactive Navbar</h3>
        <p>A multi‑colour animated navigation bar with active‑link indicator and smooth scrolling.</p>
      </article>
      <article class="tile">
        <h3>Responsive Cards</h3>
        <p>Adaptive grid layout with accessible cards and neat shadows.</p>
      </article>
      <article class="tile">
        <h3>JS Utilities</h3>
        <p>Small vanilla functions for scroll‑spy, theme toggling, and focus management.</p>
      </article>
    </div>
  </section>  <section id="skills" class="section">
    <h2>Skills</h2>
    <div class="grid">
      <div class="tile"><strong>Languages:</strong> HTML, CSS, JavaScript</div>
      <div class="tile"><strong>Frameworks:</strong> Basics of Bootstrap/Tailwind</div>
      <div class="tile"><strong>Tools:</strong> Git, VS Code, Chrome DevTools</div>
      <div class="tile"><strong>Soft Skills:</strong> Communication, Problem Solving</div>
    </div>
  </section>  <section id="contact" class="section">
    <h2>Contact</h2>
    <div class="card" style="max-width:720px">
      <p>Feel free to reach out by email: <a class="email" href="mailto:vasanth59068@gmail.com">vasanth59068@gmail.com</a></p>
      <form id="contactForm" autocomplete="on" style="display:grid; gap:.75rem; margin-top:1rem">
        <input type="text" name="name" placeholder="Your name" required style="padding:.8rem 1rem; border-radius:12px; background:#0f1328; border:1px solid rgba(255,255,255,.12); color:var(--text)"/>
        <input type="email" name="email" placeholder="Your email" required style="padding:.8rem 1rem; border-radius:12px; background:#0f1328; border:1px solid rgba(255,255,255,.12); color:var(--text)"/>
        <textarea name="message" placeholder="Your message" rows="4" style="padding:.8rem 1rem; border-radius:12px; background:#0f1328; border:1px solid rgba(255,255,255,.12); color:var(--text)"></textarea>
        <button type="submit" style="padding:.9rem 1.2rem; border-radius:12px; border:0; font-weight:800; color:#0b1022; background:linear-gradient(90deg,#ffd166,#06d6a0,#118ab2,#9b5de5); background-size:200% 100%; cursor:pointer; box-shadow: 0 10px 24px rgba(0,0,0,.35);">Send</button>
        <small id="status" aria-live="polite" style="color:var(--muted)"></small>
      </form>
    </div>
  </section>  <footer>
    © <span id="year"></span> VasanthaKumar · Built with HTML · CSS · JS
  </footer>  <script>
    // Smooth scroll & active link
    const links = document.querySelectorAll('.links a');
    links.forEach(a => a.addEventListener('click', e => {
      if (a.hash) {
        e.preventDefault();
        document.querySelector(a.hash).scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }));

    const sections = [...document.querySelectorAll('main, section')];
    const spy = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = '#' + entry.target.id;
          links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === id));
        }
      });
    }, { rootMargin: '-50% 0px -40% 0px', threshold: 0 });
    sections.forEach(s => spy.observe(s));

    // Footer year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Fake form handler (no backend)
    const form = document.getElementById('contactForm');
    const status = document.getElementById('status');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      status.textContent = 'Thanks, your message has been noted locally (demo).';
      form.reset();
    });
  </script></body>
</html>