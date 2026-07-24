const bagCount = document.getElementById('bagCount');
const addButtons = document.querySelectorAll('.add-btn');
const year = document.getElementById('year');
const reveals = document.querySelectorAll('.reveal');
const newsletterForm = document.querySelector('.newsletter-form');

let count = 0;

addButtons.forEach((button) => {
  button.addEventListener('click', () => {
    count += 1;
    bagCount.textContent = count;
    button.textContent = 'Added';
    button.disabled = true;
  });
});

if (year) {
  year.textContent = new Date().getFullYear();
}

if (newsletterForm) {
  newsletterForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = newsletterForm.querySelector('input');
    if (input) {
      input.value = 'Thanks for joining!';
    }
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.2 }
);

reveals.forEach((item) => observer.observe(item));
