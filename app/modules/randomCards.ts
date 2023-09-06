import { shuffle } from './shuffle';

export const randomCards = (
    suit: string[],
    cardValue: string[],
    cards: object[],
) => {
    for (let i = 0; i < cards.length; i++) {
        cards[i] = {
            suit: `${suit[Math.floor(Math.random() * (3 - 0 + 1))]}`,
            value: `${cardValue[Math.floor(Math.random() * (8 - 0 + 1))]}`,
        };
    }

    cards.forEach((el: object) => {
        cards.push(el);
    });

    shuffle(cards);
};
