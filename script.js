const eventCards = document.querySelectorAll('.event-card');
const eventModal = document.querySelector('#event-modal');
const modalType = document.querySelector('#modal-type');
const modalTitle = document.querySelector('#modal-title');
const modalDescription = document.querySelector('#modal-description');

eventCards.forEach((card) => {
  card.addEventListener('click', () => {
    modalType.textContent = card.querySelector('.event-type').textContent;
    modalTitle.textContent = card.querySelector('h3').textContent.trim();
    modalDescription.textContent = card.dataset.description;

    if (card.dataset.link) {
      const link = document.createElement('a');
      link.href = card.dataset.link;
      link.textContent = card.dataset.link;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      modalDescription.append(link);
    }

    eventModal.hidden = false;
    document.body.classList.add('modal-open');
  });
});

function closeModal() {
  eventModal.hidden = true;
  document.body.classList.remove('modal-open');
}

eventModal.querySelectorAll('[data-close-modal]').forEach((element) => {
  element.addEventListener('click', closeModal);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !eventModal.hidden) {
    closeModal();
  }
});