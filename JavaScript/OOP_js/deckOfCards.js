/***************************************************************************
      DECK CALLS THE BUILDECK EACH TIME THE
****************************************************************************/
function Deck() {
    this.buildDeck();
}

/***************************************************************************
         Public Methods FOR DECK CONSTRUCTOR
****************************************************************************/
Deck.prototype.buildDeck = function() {
    var suits = ['diamonds', 'clubs', 'hearts', 'spades'];
    var values = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];
    var self = this;
    this.cards = [];
    suits.forEach(function(suit) {
        values.forEach(function(value) {
            self.cards.push(new Card(value, suit));
        });
    });
    return this;
}

Deck.prototype.shuffle = function() {
    var unshuffledEdge = this.cards.length,
    var cardToShuffleIdx;
    var temp;
    while (unshuffledEdge > 0) {
      cardToShuffleIdx = Math.floor(Math.random() * unshuffledEdge);
      unshuffledEdge -= 1;
      temp = this.cards[cardToShuffleIdx]
      this.cards[cardToShuffleIdx] = this.cards[unshuffledEdge]
      this.cards[unshuffledEdge] = temp;
    }
    return this
}

Deck.prototype.reset = function() {
    this.buildDeck().shuffle();
}

Deck.prototype.dealRandomCard = function() {
    return (this.cards.length > 0) ? this.cards.pop() : null;
}

/***************************************************************************
        CARD CONSTRUCTOR
****************************************************************************/
function Card(value, suit) {
    this.value = value;
    this.suit = suit;
}

/***************************************************************************
        PLAYER CONSTRUCTOR
****************************************************************************/
function Player(name) {
    this.name = name;
    this.hand = [];
}

Player.prototype.takeCard = function(deck) {
    this.hand.push(deck.dealRandomCard());
    return this;
}

Player.prototype.discard = function(cardIdx) {
    if (this.hand.length > cardIdx) {
        this.hand.splice(cardIdx, 1);
    }
    return this;
}
