document.addEventListener('DOMContentLoaded', () => {
  let shuffledCards;
  const cards = document.querySelectorAll('.card-container');
  const covers = [
    "american_beauty_american_psycho.png", "american_beauty_american_psycho.png", "blink_182.jpg",
    "blink_182.jpg",
    "pray_for_the_wicked.jpg",
    "pray_for_the_wicked.jpg",
    "pretty_odd.jpg",
    "pretty_odd.jpg",
    "singles.jpg",
    "singles.jpg",
    "v.png",
    "v.png",
    "wiped_out.jpg",
    "wiped_out.jpg",
    "without_fear.jpg",
    "without_fear.jpg"
  ];

  const shuffleCards = (array) => {
    let counter = array.length;
    while (counter > 0) {
      let index = Math.floor(Math.random() * counter);
      counter--;
      let temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
    }
    shuffledCards = array;
    assignCards();
  };

  const assignCards = () => {
    cards.forEach((card) => {
      const cardBack = card.children[1];
      idx = parseInt(cardBack.dataset.id);
      cardBack.style.backgroundImage = `url(img/${shuffledCards[idx]})`;
    });
  };

  cards.forEach((card) => {
    card.addEventListener('click', (event) => {
      card.classList.toggle('is-flipped');
      setTimeout(() => {
        card.classList.toggle('is-flipped')
      }, 2000)
    })
  });

  shuffleCards(covers);

})
