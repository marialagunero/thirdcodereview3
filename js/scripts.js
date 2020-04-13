//business logic
  
//index for array of myNumbers 
//if index contains a 1 replace with "Beep" show new array
//else if index contains 2 replace with "Boop" show new array
//else if index contains 3 replace with "Wont you be my neighbor?" show new Array
//order logic 3, 2, 1 most to least (?) 
//display in UI

//?for loop
//?array.forEach()
//?includes()
//match?
//regex?
//toString()?

var myNumbers = [];
var translate = function() {
  var userInput = $("#numberInput").val();
  for (let i = 0; i <= userInput; i ++) {
    if(i.toString().includes(3)){
      myNumbers.push("Won't you be my neighbor")
    }else if(i.toString().includes(2)) {
      myNumbers.push("Boop")
    }else if(i.toString().includes(1)) {
      myNumbers.push("Beep")
    }else {
      myNumbers.push(i);
    }
    }

    return myNumbers;
    }




//user interface logic
$(document).ready(function() {
  $("form#number").submit(function(event) {
    event.preventDefault();

    var myNumbers = [];

    var numbers = $("#numberInput").val();
    
    $("#numberOutput").text(translate().toString());
    //$("#numberOutput").show();
    
  
    
  });

});
