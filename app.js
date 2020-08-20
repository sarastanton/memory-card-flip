document.addEventListener('DOMContentLoaded', () => {
  let shuffledCards;
  let selectedCards = [];
  let score = 0;
  const scoreField = document.querySelector('#score');
  const cards = document.querySelectorAll('.card-container');
  const radios = document.getElementsByName('theme');
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
      if (selectedCards.length >= 2) {
        return;
      }
      card.classList.toggle('is-flipped');
      selectedCards.push(card);
      checkForMatch();
    })
  });

  radios.forEach((radio) => {
    radio.addEventListener('click', (event) => {
      setCardTheme(event.target.value);
    })
  })

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
      cardBack.style.backgroundImage = `url(img/album-covers/${shuffledCards[idx]})`;
    });
  };

  const setCardTheme = (theme) => {
    if (theme === "mermaid") {
      cards.forEach((card) => {
        card.children[0].style.backgroundImage = 'linear-gradient(to bottom, lightcyan, pink, plum)'
      })
    } else if (theme === "wine") {
        cards.forEach((card) => {
          card.children[0].style.backgroundImage = 'linear-gradient(to bottom, rgb(154, 3, 38), rgb(95, 1, 23)'
        })
    } else {
        cards.forEach((card) => {
          card.children[0].style.backgroundImage = `url(img/cards/${theme}.jpg)`;
        })
    }
  }

  const checkForMatch = () => {
    if (selectedCards.length !== 2) {
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
      selectedCards.forEach((card) => card.style.visibility = "hidden");
      selectedCards = [];
      scoreField.innerText = score;
    }, 1500);
  };

  const handleNonMatch = () => {
    setTimeout(() => {
      selectedCards = [];
      document.querySelectorAll('.is-flipped').forEach((card) => {
        card.classList.remove("is-flipped");
      })
    }, 1500);
  };


  shuffleCards(covers);

})
