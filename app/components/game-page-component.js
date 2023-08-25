import { goToPage, page, setNewStatus, setPage, userSettings } from '../app.js';
import { delay } from '../modules/delay.js';
import { LOADING_PAGE } from '../routes.js';
import { renderInterface } from './game-interface-components.js';

const suit = ['hearts', 'clubs', 'diamonds', 'spades'];
const cardValue = ['6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
let cards = [];

export const randomCards = (suit, cardValue, cardsLength, cards) => {
    for (let i = 0; i < cardsLength; i++) {
        cards[i] = {
            suit: `${suit[Math.floor(Math.random() * (3 - 0 + 1))]}`,
            value: `${cardValue[Math.floor(Math.random() * (8 - 0 + 1))]}`,
        };
    }

    cards.forEach((el) => {
        cards.push(el);
    });

    cards.sort(() => Math.random() - 0.5);
};

export const renderCards = (cards) => {
    const cardsHTML = cards
        .map((card) => {
            return `
            <div class="scene scene--card">
            <div data-card="${card.value}-${card.suit}" class="card-flip">
                <div class="card__face card__face--front">
                <div class="card">
                        <div class="card-left">
                            <div class="card-name">${card.value}</div>
                            <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/${card.suit}.png" alt=""></div>
                        </div>
                        <div class="card-suit"><img width="35px" src="./img/suit/${card.suit}.png" alt=""></div>
                        <div class="card-right">
                            <div class="card-name">${card.value}</div>
                            <div class="card-suit card-suit_small"><img width="9px" src="./img/suit/${card.suit}.png" alt=""></div>
                        </div>
                </div>          
                </div>
                <div class="card__face card__face--back"></div>
            </div>
        </div>
        `;
        })
        .join('');
    return cardsHTML;
};

export const renderGamePage = (appEl) => {
    let gamePageHtml = '';
    switch (userSettings.difficulty) {
        case 'easy':
            cards.length = 3;
            randomCards(suit, cardValue, cards.length, cards);
            gamePageHtml = `
            <div class="interface-container"></div>
            <div class="cards-container cards-container_easy">
            ${renderCards(cards)}                     
            </div>                                                                                           
            `;
            break;

        case 'medium':
            cards.length = 6;
            randomCards(suit, cardValue, cards.length, cards);
            gamePageHtml = `
            <div class="interface-container"></div>
            <div class="cards-container cards-container_medium">
            ${renderCards(cards)}                         
            </div>                                                                                           
            `;
            break;
        case 'hard':
            cards.length = 9;
            randomCards(suit, cardValue, cards.length, cards);
            gamePageHtml = `
            <div class="interface-container"></div>
            <div class="cards-container cards-container_hard"> 
            ${renderCards(cards)}                     
            </div>                                                                                           
            `;
            break;
    }

    appEl.innerHTML = gamePageHtml;

    const interfaceElement = document.querySelector('.interface-container');
    renderInterface(interfaceElement);

    const cardsList = document.querySelectorAll('.card-flip');
    const startBtn = document.getElementById('control-button');

    startBtn.addEventListener('click', () => {
        playGame();
    });

    const playGame = () => {
        let pageNow = page;
        let cardForCompaire = [];
        const deathSound = document.getElementById('death');
        const rightSound = document.getElementById('right');
        const startSound = document.getElementById('start');
        setNewStatus('playing-the-game');
        renderInterface(interfaceElement);
        flipAllCards(cardsList);
        startSound.play();
        delay(5000).then(() => {
            flipAllCards(cardsList);
            cardsList.forEach((card) => {
                card.addEventListener('click', () => {
                    flipCard(card);
                    delay(1000).then(() => {
                        cardForCompaire.push(card.dataset.card);
                        if (cardForCompaire.length % 2 === 0) {
                            if (
                                cardForCompaire[0] !== cardForCompaire[1] ||
                                cardForCompaire[2] !== cardForCompaire[3] ||
                                cardForCompaire[4] !== cardForCompaire[5] ||
                                cardForCompaire[6] !== cardForCompaire[7] ||
                                cardForCompaire[8] !== cardForCompaire[9] ||
                                cardForCompaire[10] !== cardForCompaire[11] ||
                                cardForCompaire[12] !== cardForCompaire[13] ||
                                cardForCompaire[14] !== cardForCompaire[15] ||
                                cardForCompaire[16] !== cardForCompaire[17]
                            ) {
                                deathSound.play();
                                delay(1000).then(() => {
                                    alert('you lose!!');
                                    setPage(LOADING_PAGE);
                                    goToPage(page);
                                    delay(1000).then(() => {
                                        setPage(pageNow);
                                        goToPage(page);
                                    });
                                });
                            } else {
                                rightSound.play();
                                rightSound.volume = 1;
                            }
                            if (cardForCompaire.length === cards.length) {
                                alert('you win!!');
                            }
                        }
                    });
                });
            });
        });

        const restartBtn = document.getElementById('control-button');
        restartBtn.addEventListener('click', () => {
            setPage(LOADING_PAGE);
            goToPage(page);
            delay(1000).then(() => {
                setPage(pageNow);
                goToPage(page);
            });
        });
    };

    const flipCard = (cardElement) => {
        cardElement.classList.toggle('is-flipped');
    };

    const flipAllCards = (cardsElement) => {
        cardsElement.forEach((card) => {
            card.classList.toggle('is-flipped');
        });
    };

    flipAllCards(cardsList);
};
