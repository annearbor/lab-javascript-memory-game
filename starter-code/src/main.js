var cards = [
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" },
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" }
];

$(document).ready(function() {
  var memoryGame = new MemoryGame(cards);
  // memoryGame.shuffleCards();
  var html = "";
  memoryGame.cards.forEach(function(pic) {
    html += '<div class="card" data-card-name="' + pic.name + '">';
    html += '  <div class="back" name="' + pic.img + '"></div>';
    html +=
      '  <div class="front" style="background: url(img/' +
      pic.img +
      ') no-repeat"></div>';
    html += "</div>";
  });

  // Add all the div's to the HTML
  $("#memory_board").html(html);

  // Bind the click event of each element to a function
  $(".card").click(function() {
    var currentCard = $(this);

    //this is the element that the user clicked on .cards gives you all

    currentCard
      .children()
      .first()
      .toggleClass("back")
      .toggleClass("front");

    currentCard
      .children(":nth-child(2)")
      .toggleClass("back")
      .toggleClass("front");

    memoryGame.pickedCards.push(currentCard.children().attr("name"));
    console.log(memoryGame.pickedCards);

    if (memoryGame.pickedCards.length === 2) {
      var result = memoryGame.checkIfPair(
        memoryGame.pickedCards[0],
        memoryGame.pickedCards[1]
      );
      console.log(result);
      if (result === false) {
        memoryGame.pickedCards = [];
        turnBackCards();
        showGameStatus();
        // do the cards need to be marked as active?
        // invoke some function to turn around cards
      } else {
        currentCard.addClass("blocked");
        memoryGame.pairsGuessed++;
        memoryGame.pairsClicked++;
        console.log(memoryGame.pairsGuessed);
        console.log(currentCard);
        console.log(memoryGame.pairsClicked);
      }
    }

    // changes the current game status, called after each round
    function showGameStatus() {
      document.getElementById("pairs_clicked").innerHTML =
        memoryGame.pairsClicked;
      document.getElementById("pairs_guessed").innerHTML =
        memoryGame.pairsGuessed;
    }

    // add a new class to the currently displayed cards "active"
    // function displayClickedCard(card) {
    //   card.className += 'active';

    // }

    // function that turns back the cards after 2 secs; runs if no match

    function turnBackCards() {
      setTimeout(function() {
        currentCard
          .children()
          .first()
          .toggleClass("back")
          .toggleClass("front");
        currentCard
          .children(":nth-child(2)")
          .toggleClass("back")
          .toggleClass("front");
      }, 2000);
    }
    //only applies to second card?!
  });
});
