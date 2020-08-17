document.addEventListener('DOMContentLoaded', () => {
  let shuffledCards;
  let selectedCards = [];
  let score = 0;
  const scoreField = document.querySelector('#score');
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

  cards.forEach((card) => {
    card.addEventListener('click', (event) => {
      card.classList.toggle('is-flipped');
      selectedCards.push(card);
      checkForMatch();
    })
  });

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
      idx = parseInt(cardBack.dataset.id) - 1;
      cardBack.style.backgroundImage = `url(img/${shuffledCards[idx]})`;
    });
  };

  const checkForMatch = () => {
    if (selectedCards.length < 2) {
      return;
    }
    const id1 = parseInt(selectedCards[0].children[1].dataset.id) - 1;
    const id2 = parseInt(selectedCards[1].children[1].dataset.id) - 1;
    if (id1 !== id2 && shuffledCards[id1] === shuffledCards[id2]) {
      handleMatch();
    } else {
      handleNonMatch();
    }
  };

  const handleMatch = () => {
    score+= 10;
    setTimeout(() => {
      selectedCards.forEach((card) => card.remove());
      scoreField.innerText = score;
      selectedCards = [];
    }, 1500);
  };

  const handleNonMatch = () => {
    setTimeout(() => {
      document.querySelectorAll('.is-flipped').forEach((card) => {
        card.classList.remove("is-flipped");
      })
    }, 1500);
    selectedCards = [];
  };


  shuffleCards(covers);

})
