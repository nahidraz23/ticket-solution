function scrollIntoView (event) {
  event.scrollIntoView({ behavior: 'smooth' })
};

document
  .getElementById('btn-buy-ticket')
  .addEventListener('click', function () {
    scrollIntoView(document.getElementById('buy-ticket-section'))
  });

