import {
    goToPage,
    page,
    setNewStatus,
    setPage,
    setTime,
    userSettings,
} from '../app';
import { delay } from '../modules/delay';
import { randomCards } from '../modules/randomCards';
import { stopTimer } from '../modules/timer';
import { FIRST_PAGE, LOADING_PAGE } from '../routes';
import { renderInterface } from './game-interface-components';

const suit: string[] = ['hearts', 'clubs', 'diamonds', 'spades'];
const cardValue: string[] = ['6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const cards: card[] = [];
interface card {
    value: string;
    suit: string;
}

export const renderCards = (cards: card[]) => {
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

export const renderGamePage = (appEl: HTMLElement) => {
    let gamePageHtml = '';
    switch (userSettings.difficulty) {
        case 'easy':
            cards.length = 3;
            randomCards(suit, cardValue, cards);
            gamePageHtml = `
            <div class="interface-container"></div>
            <div class="cards-container cards-container_easy">
            ${renderCards(cards)}                     
            </div>                                                                                           
            `;
            break;

        case 'medium':
            cards.length = 6;
            randomCards(suit, cardValue, cards);
            gamePageHtml = `
            <div class="interface-container"></div>
            <div class="cards-container cards-container_medium">
            ${renderCards(cards)}                         
            </div>                                                                                           
            `;
            break;
        case 'hard':
            cards.length = 9;
            randomCards(suit, cardValue, cards);
            gamePageHtml = `
            <div class="interface-container"></div>
            <div class="cards-container cards-container_hard"> 
            ${renderCards(cards)}                     
            </div>                                                                                           
            `;
            break;
    }

    appEl.innerHTML = gamePageHtml;

    const interfaceElement = document.querySelector(
        '.interface-container',
    ) as HTMLElement;
    renderInterface(interfaceElement, userSettings);

    const startBtn = document.getElementById('control-button') as HTMLElement;

    startBtn.addEventListener('click', () => {
        playGame();
    });

    const cardsList = document.querySelectorAll(
        '.card-flip',
    ) as NodeListOf<Element>;

    const playGame = () => {
        const cardForCompare: string[] = [];
        const deathSound = document.getElementById('death') as HTMLVideoElement;
        const rightSound = document.getElementById('right') as HTMLVideoElement;
        const startSound = document.getElementById('start') as HTMLVideoElement;
        flipAllCards(cardsList);
        startSound.play();
        startSound.volume = 0.3;
        delay(5000).then(() => {
            setNewStatus('playing-the-game');
            renderInterface(interfaceElement, userSettings);
            const timerElement = document.querySelector(
                '.interface-timer',
            ) as HTMLElement;
            flipAllCards(cardsList);
            cardsList.forEach((card) => {
                if (card instanceof HTMLElement) {
                    const cardValue = card.dataset.card || '';
                    card.addEventListener('click', () => {
                        flipCard(card);
                        delay(1000).then(() => {
                            cardForCompare.push(cardValue);
                            if (cardForCompare.length % 2 === 0) {
                                if (
                                    cardForCompare[0] !== cardForCompare[1] ||
                                    cardForCompare[2] !== cardForCompare[3] ||
                                    cardForCompare[4] !== cardForCompare[5] ||
                                    cardForCompare[6] !== cardForCompare[7] ||
                                    cardForCompare[8] !== cardForCompare[9] ||
                                    cardForCompare[10] !== cardForCompare[11] ||
                                    cardForCompare[12] !== cardForCompare[13] ||
                                    cardForCompare[14] !== cardForCompare[15] ||
                                    cardForCompare[16] !== cardForCompare[17]
                                ) {
                                    deathSound.play();
                                    delay(1000).then(() => {
                                        setTime(timerElement.innerHTML);
                                        setNewStatus('result-dead');
                                        renderInterface(
                                            interfaceElement,
                                            userSettings,
                                        );
                                    });
                                } else {
                                    rightSound.play();
                                    rightSound.volume = 0.5;
                                    setTime(timerElement.innerHTML);
                                }

                                if (cardForCompare.length === cards.length) {
                                    setNewStatus('result-congrats');
                                    setTime(timerElement.innerHTML);
                                    renderInterface(
                                        interfaceElement,
                                        userSettings,
                                    );
                                }
                            }
                        });
                    });
                    const restartBtn = document.getElementById(
                        'control-button',
                    ) as HTMLElement;
                    restartBtn.addEventListener('click', () => {
                        stopTimer();
                        setPage(LOADING_PAGE);
                        goToPage(page);
                        delay(1000).then(() => {
                            setPage(FIRST_PAGE);
                            goToPage(page);
                        });
                    });
                }
            });
        });
    };

    const flipCard = (cardElement: HTMLElement) => {
        cardElement.classList.toggle('is-flipped');
    };

    const flipAllCards = (cardsElement: NodeListOf<Element>) => {
        cardsElement.forEach((card) => {
            card.classList.toggle('is-flipped');
        });
    };

    flipAllCards(cardsList);
};
