const orbScene = document.getElementById('orbScene');

if (orbScene) {
  orbScene.addEventListener('mousemove', (event) => {
    const rect = orbScene.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 24;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * -24;
    orbScene.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
  });

  orbScene.addEventListener('mouseleave', () => {
    orbScene.style.transform = 'rotateX(0deg) rotateY(0deg)';
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
  handleFormSubmission(suggestionForm, 'suggestionStatus', 'Thanks! Your suggestion has been recorded.');
}

if (contactForm) {
  handleFormSubmission(contactForm, 'contactStatus', 'Message sent. We will reach out with a Dragon Ball strategy soon.');
}
