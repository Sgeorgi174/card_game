const { it, expect } = require('@jest/globals');
const { randomCards } = require('./app/components/game-page-component');

it('Should have new arr with cards', () => {
    const suit = ['hearts', 'clubs', 'diamonds', 'spades'];
    const cardValue = ['6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const cards = [];
    cards.length = 3;

    randomCards(suit, cardValue, cards);

    expect(cards).toHaveLength(6);
});
