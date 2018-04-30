var MatchGame = {};

/*
  Sets up a new game after HTML document has loaded.
  Renders a 4x4 board of cards.
*/

/*
  Generates and returns an array of matching card values.
 */

MatchGame.generateCardValues = function () {
  var numbers = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
  var randomSet = []
  var randomNumber = 0;

  while (numbers.length > 0) {
    randomNumber = Math.floor(Math.random() * (numbers.length-1));
    randomSet.push(numbers[randomNumber]);
    numbers.splice(randomNumber, 1);
  }

  return randomSet;
};

/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/

MatchGame.renderCards = function(cardValues, $game) {
  $game('.card').empty();
};

/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {

};
