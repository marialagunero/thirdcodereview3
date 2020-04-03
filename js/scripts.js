//business logic

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach(function(number){
  alert(number)

});



//split? slice? includes? forEach? map? includes? push? join?

//1. userInput that is nonNumber will get "alert" 
//2. userInput that is  





//user interface logic
$(document).ready(function() {
  $("form#number").submit(function(event) {
    event.preventDefault();

    var numbers = parseInt($("numberInput").val())
      //var result = phrase(number)
  
    
  });

});