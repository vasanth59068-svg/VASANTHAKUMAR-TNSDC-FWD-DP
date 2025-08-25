// Smooth scroll & active link

const links = document.querySelectorAll('.links a');

links.forEach(a => a.addEventListener('click', e => {

  if (a.hash) {

    e.preventDefault();

    document.querySelector(a.hash).scrollIntoView({ behavior: 'smooth', block: 'start' });

  }

}));

// Scroll spy

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

// Fake form handler (demo only)

const form = document.getElementById('contactForm');

const status = document.getElementById('status');

form.addEventListener('submit', (e) => {

  e.preventDefault();

  status.textContent = 'Thanks, your message has been noted locally (demo).';

  form.reset();

});