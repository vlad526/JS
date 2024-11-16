const Suits = ['spade', 'diamond', 'heart', 'clubs'];
const values = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king'];

cards = [];
for (const suit of Suits) {
    for (const value of values) {
        const card = {cardSuits: suit, value: value};
        if (suit === 'heart' || suit === 'diamond') {
            card.color = 'red';
        } else {
            card.color = 'black';
        }
        cards.push(card);
    }

}

let card2 = cards.reduce((acc, card) => {
    switch (card.cardSuits) {
        case 'diamond': acc.diamonds.push(card);
        break;
        case 'spade': acc.spades.push(card);
        break;
        case 'clubs': acc.clubs.push(card);
        break;
        case 'heart': acc.hearts.push(card);
        break;
    }
    return acc;
},{spades:[], diamonds:[], hearts:[], clubs:[]});

console.log(card2);

