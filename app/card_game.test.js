/* eslint-disable */
const { expect, it, describe } = require('@jest/globals');
const { randomCards } = require('./modules/randomCards');
const { shuffle } = require('./modules/shuffle');
const { delay } = require('./modules/delay');

const suit = ['hearts', 'clubs', 'diamonds', 'spades'];
const cardValue = ['6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const cards = [];

jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');

describe('test to create correct cards list for different difficulty', () => {
    it('should edit the cards list for easy difficulty', () => {
        cards.length = 3;

        randomCards(suit, cardValue, cards);

        expect(cards).toHaveLength(6);
    });

    it('should edit the cards list for medium difficulty', () => {
        cards.length = 6;

        randomCards(suit, cardValue, cards);

        expect(cards).toHaveLength(12);
    });

    it('should edit the cards list for hard difficulty', () => {
        cards.length = 9;

        randomCards(suit, cardValue, cards);

        expect(cards).toHaveLength(18);
    });
});

describe('check shuffle function', () => {
    it('should shuffle cards list', () => {
        let cards = [
            { suit: 'diamonds', value: '10' },
            { suit: 'spades', value: 'J' },
            { suit: 'clubs', value: '10' },
            { suit: 'spades', value: 'J' },
            { suit: 'diamonds', value: '10' },
            { suit: 'clubs', value: '10' },
        ];
        let newCards = [];
        cards.forEach((el) => {
            newCards.push(el);
        });

        const shuffledCards = shuffle(newCards)
            .map((el) => `${el.suit} ${el.value}`)
            .toString();
        cards = cards.map((el) => `${el.suit} ${el.value}`).toString();

        expect(cards === shuffledCards).toBeFalsy();
    });
});

describe('check delay function', () => {
    test('should wait N seconds for some action', () => {
        const mSeconds = Math.floor(Math.random() * (5000 - 1000) + 1000);

        delay(mSeconds);

        expect(setTimeout).toHaveBeenCalledTimes(1);
        expect(setTimeout).toHaveBeenLastCalledWith(
            expect.any(Function),
            mSeconds,
        );
    });
});
