//business logic
//1. userInput that is nonNumber will get "alert" 

//var nonNumber= use regex?

//2. userInput that is number will get "alert"

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
numbers.forEach(function(number){
  
  



if (number === 1) {
  alert("beep");
}else if (number === 2) {
  alert("boop");
}else if (number === 3){
  alert("won't you be my neightbor");
}else {alert (number + "bye");

};
});



//split? slice? includes? forEach? map? includes? push? join?








//user interface logic
$(document).ready(function() {
  $("form#number").submit(function(event) {
    event.preventDefault();

    var numbers = parseInt($("numberInput").val())
      //var result = translate(number)
  
    
  });

});