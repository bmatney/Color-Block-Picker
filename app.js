$(document).ready(function () {

  $('.blockContainer').append(
        '<div class="boxToClick" id="red"></div>' +
        '<div class="boxToClick" id="green"></div>' +
        '<div class="boxToClick" id="yellow"></div>' +
        '<div class="boxToClick" id="blue"></div>'
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
