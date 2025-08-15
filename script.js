// script.js — small helpers
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');
navToggle.addEventListener('click', () => {
  if (nav.style.display === 'flex') {
    nav.style.display = '';
  } else {
    nav.style.display = 'flex';
    nav.style.flexDirection = 'column';
    nav.style.position = 'absolute';
    nav.style.right = '1rem';
    nav.style.top = '64px';
    nav.style.background = 'rgba(7, 12, 26, 0.95)';
    nav.style.padding = '1rem';
    nav.style.borderRadius = '10px';
  }
});

// Simple contact form handler (no backend) — demonstrates validation & instant feedback
function handleForm(e) {
  e.preventDefault();
  const f = e.target;
  const name = f.name.value.trim();
  const email = f.email.value.trim();
  const message = f.message.value.trim();
  const note = document.getElementById('formNote');

  if (!name || !email || !message) {
    note.textContent = 'Please fill all fields.';
    return false;
  }

  // For now we'll only show a success message (replace with real submission later).
  note.textContent = `Thanks ${name}! Your message was recorded (demo).`;
  f.reset();
  return false;
}
