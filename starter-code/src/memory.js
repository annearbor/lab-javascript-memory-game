class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    this.cards.splice(0, 0, this.cards.pop());
  }

  checkIfPair(firstCard, secondCard) {
    this.pairsClicked = this.pairsClicked + 1;
    if (firstCard == secondCard) {
      this.pairsGuessed++;
      return true;
    } else {
      return false;
    }
  }

  isFinished() {
    if (this.pairsClicked > 0 && this.cards.length / 2 === this.pairsGuessed) {
      return true;
    } else {
      return false;
    }
  }
}
