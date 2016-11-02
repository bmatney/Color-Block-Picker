$(document).ready(function () {

  $('.blockContainer').append(
        '<div id="red"></div>' +
        '<div id="green"></div>' +
        '<div id="yellow"></div>' +
        '<div id="blue"></div>'
    );

  $("#red").data("boxNumber", 1);
  $("#green").data("boxNumber", 2);
  $("#yellow").data("boxNumber", 3);
  $("#blue").data("boxNumber", 4);

  function randomNumber(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
  }

  var winningNumber = randomNumber(1, 4);


  $('.blockContainer').on('click', 'div',  function() {
    if ($(this).data("boxNumber") == winningNumber) {
      alert("You got it!!!");
    } else {
      alert(" :( Try again!");
    }
  });

});
