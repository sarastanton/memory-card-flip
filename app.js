document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');

  cards.forEach((card => {
    card.addEventListener('click', (event) => {
      card.classList.toggle('is-flipped');
      setTimeout(() => {
        card.classList.toggle('is-flipped')
      }, 1500)
    })
  }))


})
