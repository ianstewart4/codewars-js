// You get any card as an argument. Your task is to return the suit of this card (in lowercase).

// Our deck (is preloaded):

// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'

// My solution

function defineSuit(card) {
    const suits = {
        '♠': 'spades',
        '♦': 'diamonds',
        '♥': 'hearts',
        '♣': 'clubs'
    }
    return suits[card[card.length - 1]]
}

// Best

function defineSuit(card) {
    const s = {
        "♣": "clubs",
        "♠": "spades",
        "♦": "diamonds",
        "♥": "hearts"
    }
    return s[card.charAt(card.length - 1)]
}