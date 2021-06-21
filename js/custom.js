// (function() {
//   'use strict';
//


// script forthe sticky nav bar

window.onscroll = function() {
  myFunction();
};
// Get the navbar
var navbar = document.getElementById("navbar");
// Get the offset position of the navbar
var sticky = navbar.offsetTop;
// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
// script for the sticky nav bar ends



var getNightsInput = document.getElementById('numberOfNights');
var getPeopleInput = document.getElementById('numberOfPeople');
var getHotels = document.getElementById('findHotel');


// script for button on the home page
getHotels.onclick = function() {

// function that sorts out the Number of Nights people are staying
  function nightsFunction() {
    if (getNightsInput.value > 5) {
      document.getElementById('h1').style.opacity = '0.5';
    } else if (getNightsInput.value < 1) {
      document.getElementById('h1').style.opacity = '0.5';
    }

    if (getNightsInput.value > 10) {
      document.getElementById('h2').style.opacity = '0.5';
    } else if (getNightsInput.value < 1) {
      document.getElementById('h2').style.opacity = '0.5';
    }

    if (getNightsInput.value > 10) {
      document.getElementById('h3').style.opacity = '0.5';
    } else if (getNightsInput.value < 3) {
      document.getElementById('h3').style.opacity = '0.5';
    }

    if (getNightsInput.value > 15) {
      document.getElementById('h4').style.opacity = '0.5';
    } else if (getNightsInput.value < 2) {
      document.getElementById('h4').style.opacity = '0.5';
    }
  }

  // function that sorts out the Number of people that are staying
  function peopleFunction() {
    if (getPeopleInput.value > 3) {
      document.getElementById('h1').style.opacity = '0.5';
    }
    if (getPeopleInput.value > 1) {
      document.getElementById('h2').style.opacity = '0.5';
    }
    if (getPeopleInput.value > 4) {
      document.getElementById('h3').style.opacity = '0.5';
    }
    if (getPeopleInput.value > 4) {
      document.getElementById('h4').style.opacity = '0.5';
    }
  }

  nightsFunction();
  peopleFunction();
};
// script for button on the home page ends



// booking caluclator for hotel One

// the first function determins if the user has selected the correct amount of nights
function nightValidatorOne() {
  var x, text;
  x = document.getElementById("hotelModalNightsOne").value;
  // if the aporperate outcome has been selected then the optiion to procede will show.
  // but if an in aporoerate outcome is selected then the user will be corrected
  if (isNaN(x) || x < 1 || x > 5) {
    text = "Sorry but you are only able to book a maximum of 5 nights";
    document.getElementById('step2One').style.display = "none";
  } else {
    text = "This slot is available. Please confirm details below";
    document.getElementById('step2One').style.display = "contents";
  }
  document.getElementById("subMessageOne").innerHTML = text;
}

// the second function finds the total cost of there trips
function caluclatorValidatorOne() {
  var getHotelModalNightsOne = document.getElementById('hotelModalNightsOne').value;
  var x = getHotelModalNightsOne;
  var y = 157;
  var z = x * y;
  text = z;
  document.getElementById("outPutOne").innerHTML = text;
}
nightValidatorOne();
caluclatorValidatorOne();


// booking caluclator for hotel two
// these fuctions are almost identical to the first caluclator with the expection fo there values and value inputs
function nightValidatorTwo() {
  var x, text;
  x = document.getElementById("hotelModalNightsTwo").value;
  if (isNaN(x) || x < 1 || x > 10) {
    text = "Sorry but you are only able to book a maximum of 10 nights";
    document.getElementById('step2Two').style.display = "none";
  } else {
    text = "This slot is available. Please confirm details below";
    document.getElementById('step2Two').style.display = "contents";
  }
  document.getElementById("subMessageTwo").innerHTML = text;
}

function caluclatorValidatorTwo() {
  var getHotelModalNightsOne = document.getElementById('hotelModalNightsTwo').value;
  var x = getHotelModalNightsOne;
  var y = 30;
  var z = x * y;
  text = z;
  document.getElementById("outPutTwo").innerHTML = text;
}
nightValidatorTwo();
caluclatorValidatorTwo();


// booking caluclator for hotel Three

function nightValidatorThree() {
  var x, text;
  x = document.getElementById("hotelModalNightsThree").value;
  if (isNaN(x) || x < 3 || x > 10) {
    text = "Sorry but you are only able to book a maximum of 10 nights";
    document.getElementById('step2Three').style.display = "none";
  } else {
    text = "This slot is available. Please confirm details below";
    document.getElementById('step2Three').style.display = "contents";
  }
  document.getElementById("subMessageThree").innerHTML = text;
}

function caluclatorValidatorThree() {
  var getHotelModalNightsOne = document.getElementById('hotelModalNightsThree').value;
  var x = getHotelModalNightsOne;
  var y = 90;
  var z = x * y;
  text = z;
  document.getElementById("outPutThree").innerHTML = text;
}
nightValidatorThree();
caluclatorValidatorThree();

// booking caluclator for hotel Four

function nightValidatorFour() {
  var x, text;
  x = document.getElementById("hotelModalNightsFour").value;
  if (isNaN(x) || x < 3 || x > 10) {
    text = "Sorry but you are only able to book a maximum of 10 nights";
    document.getElementById('step2Four').style.display = "none";
  } else {
    text = "This slot is available. Please confirm details below";
    document.getElementById('step2Four').style.display = "contents";
  }
  document.getElementById("subMessageFour").innerHTML = text;
}

function caluclatorValidatorFour() {
  var getHotelModalNightsFour = document.getElementById('hotelModalNightsFour').value;
  var x = getHotelModalNightsFour;
  var y = 240;
  var z = x * y;
  text = z;
  document.getElementById("outPutFour").innerHTML = text;
}
nightValidatorFour();
caluclatorValidatorFour();


// script for the menu animations

var getFoodIdOne = document.getElementById('foodItemIdOne');
getFoodIdOne.onclick = function() {
  document.getElementById("foodItemIdTextOne").style.display = "contents";
  document.getElementById("foodItemIdOne").style.backgroundImage = "none";
  setTimeout(function(){
     document.getElementById("foodItemIdOne").style.backgroundImage = "url('images/food_one.jpg')";
     document.getElementById("foodItemIdTextOne").style.display = "none";
  }, 10000);
}


var getFoodIdTwo = document.getElementById('foodItemIdTwo');
getFoodIdTwo.onclick = function() {
  document.getElementById("foodItemIdTextTwo").style.display = "contents";
  document.getElementById("foodItemIdTwo").style.backgroundImage = "none";
  setTimeout(function(){
     document.getElementById("foodItemIdTwo").style.backgroundImage = "url('images/food_two.jpg')";
     document.getElementById("foodItemIdTextTwo").style.display = "none";
  }, 10000);
}

var getFoodIdThree = document.getElementById('foodItemIdThree');
getFoodIdThree.onclick = function() {
  document.getElementById("foodItemIdTextThree").style.display = "contents";
  document.getElementById("foodItemIdThree").style.backgroundImage = "none";
  setTimeout(function(){
     document.getElementById("foodItemIdThree").style.backgroundImage = "url('images/food_three.jpg')";
     document.getElementById("foodItemIdTextThree").style.display = "none";
  }, 10000);
}

var getFoodIdFour = document.getElementById('foodItemIdFour');
getFoodIdFour.onclick = function() {
  document.getElementById("foodItemIdTextFour").style.display = "contents";
  document.getElementById("foodItemIdFour").style.backgroundImage = "none";
  setTimeout(function(){
     document.getElementById("foodItemIdFour").style.backgroundImage = "url('images/food_four.jpg')";
     document.getElementById("foodItemIdTextFour").style.display = "none";
  }, 10000);
}

// 1. Comment the end of your functions
// 2. Go incrementally, constantly checking console for errors

// }());
// Custom iife ENDS
