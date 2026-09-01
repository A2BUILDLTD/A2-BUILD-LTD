const heroCard = document.getElementById('heroCard');

if (heroCard) {
  heroCard.addEventListener('mousemove', (event) => {
    const rect = heroCard.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 18;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * -18;
    heroCard.style.transform = `rotateX(${y}deg) rotateY(${x}deg) translateY(-4px)`;
  });

  heroCard.addEventListener('mouseleave', () => {
    heroCard.style.transform = 'rotateX(0deg) rotateY(0deg) translateY(0)';
  });
}

const suggestionForm = document.getElementById('suggestionForm');
const contactForm = document.getElementById('contactForm');

function handleFormSubmission(form, statusId, message) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const status = document.getElementById(statusId);
    status.textContent = message;
    form.reset();
  });
}

if (suggestionForm) {
  handleFormSubmission(suggestionForm, 'suggestionStatus', 'Thanks! Your enquiry has been received.');
}

if (contactForm) {
  handleFormSubmission(contactForm, 'contactStatus', 'Thank you. Our team will respond to your enquiry shortly.');
}
