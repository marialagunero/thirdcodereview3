//business logic

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,]

//split? slice? includes? forEach? ma? includes? push? join?

var phrase= function(number) {

  if (number === 1) {
    alert('hi"')

  }


};




//user interface logic
$(document).ready(function() {
  $("form#number").submit(function(event) {
    event.preventDefault();

    var number = $("numberInput").val();

  });

});