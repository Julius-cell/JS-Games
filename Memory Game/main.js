/*
 DOMContentLoaded es disparado cuando el documento HTML haya sido completamente cargado
 y parseado, sin esperar hojas de estilo y images para finalizar la carga.
*/
document.addEventListener('DOMContentLoaded', () => {
  // cards options
  const cardArray = [
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    }
  ]

  // selecciona el elemento, en este caso con clase 'grid'
  const grid = document.querySelector('.grid');
  const resultDisplay = document.querySelector('#result')
  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = [];


  // create your board
  function createBoard()  {
    for(let i = 0; i < cardArray.length; i++) {
      // crea un elemento <img>
      let card = document.createElement('img');
      // anade atributo de src = 'images/blank.png'
      card.setAttribute('src', 'images/blank.png');
      // añade atributo perzonalizado data-id = 'i' (del 0 al 11)
      card.setAttribute('data-id', i);
      // Al hacer click en un elem img, corre la funct flipcard
      card.addEventListener('click', flipcard);
      // añade card(elem img) a grid (elem con clase grid)
      grid.appendChild(card);
    }
  }

  cardArray.sort(() => 0.5 - Math.random());


//check for matches
  function checkForMatch() {
    // At this point we have two img element created
    let cards = document.querySelectorAll('img');
    
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    // Si los nombres de las cartas elegidas son iguales
    if(cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match');
      // Al coincidir las imag's, las cambiamos por un espacio en blanco
      cards[optionOneId].setAttribute('src', 'images/white.png');
      cards[optionTwoId].setAttribute('src', 'images/white.png');
      // Empujamos a cardsWon las cartas que coincidan
      cardsWon.push(cardsChosen);
    } else {
      // Al no acertar, estas vuelven a la imagen por default
      cards[optionOneId].setAttribute('src', 'images/blank.png');
      cards[optionTwoId].setAttribute('src', 'images/blank.png');
      alert('Sorry, try again');
    }
    cardsChosen = [];
    cardsChosenId = [];
    // Añade al contenido del elemento con id= 'result' la cantidad de cartas emparejadas
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Congratulations! You found them all.';
    }
  }

// flip your card
  function flipcard() {
    // del windowObject obtiene el valor del atributo 'data-id'
    let cardId = this.getAttribute('data-id');
    // empuja a cardChosen el nombre de la carta escogida, perteneciente al objeto cardArray
    cardsChosen.push(cardArray[cardId].name);
    // empuja a cardChosenId el valor del atributo data-id(imagen seleccionada)
    cardsChosenId.push(cardId);
    // añade el atributo src con la ruta de la imagen seleccionada
    this.setAttribute('src', cardArray[cardId].img);
    if(cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard()
})



