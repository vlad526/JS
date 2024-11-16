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
console.log(cards);
console.log(cards.find(card => card.value === 'ace' && card.cardSuits === 'spade'));

console.log(cards.filter(card => card.value === '6'));

console.log(cards.filter(card => card.color === 'red'));

console.log(cards.filter(card => card.cardSuits === 'diamond'));

console.log(cards.filter(card => card.cardSuits === 'clubs' && (card.value !== '6' || card.value !== '7' || card.value !== '8' || card.value !== '9')));


