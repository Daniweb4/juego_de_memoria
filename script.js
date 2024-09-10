
const icons = [
    'fa-apple-alt', 'fa-apple-alt', 
    'fa-car', 'fa-car', 
    'fa-anchor', 'fa-anchor', 
    'fa-bell', 'fa-bell', 
    'fa-crow', 'fa-crow', 
    'fa-fish', 'fa-fish', 
    'fa-bolt', 'fa-bolt', 
    'fa-heart', 'fa-heart'
];

let flippedCards = [];
let matchedCards = [];
//baraja las cartas
const shuffleCards = () => {
    icons.sort(() => 0.5 - Math.random());
};
//creamo esl tablero
const createBoard = () => {
    const gameBoard = document.getElementById('gameBoard');
    shuffleCards();

    icons.forEach((icon) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.dataset.icon = icon;

        const iconElement = document.createElement('i');
        iconElement.classList.add('fas', icon);
        cardElement.appendChild(iconElement);

        cardElement.addEventListener('click', flipCard);
        gameBoard.appendChild(cardElement);
    });
};

const flipCard = (event) => {
    const selectedCard = event.currentTarget;
    if (flippedCards.length < 2 && !selectedCard.classList.contains('flipped')) {
        selectedCard.classList.add('flipped');
        flippedCards.push(selectedCard);

        if (flippedCards.length === 2) {
            checkForMatch();
        }
    }
};

const checkForMatch = () => {
    const [card1, card2] = flippedCards;
    if (card1.dataset.icon === card2.dataset.icon) {
        matchedCards.push(card1, card2);
        flippedCards = [];
        if (matchedCards.length === icons.length) {
            alert('¡Has ganado!');
        }
    } else {
        setTimeout(() => {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            flippedCards = [];
        }, 1000);
    }
};

createBoard();

