// When the user scrolls the page, execute myFunction
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
// myFunction ENDS

var getNightsInput = document.getElementById('numberOfNights');
var getPeopleInput = document.getElementById('numberOfPeople');
var getHotels = document.getElementById('findHotel');

getHotels.onclick = function() {

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

  // function nightsFunction ENDS
  //
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
  //   // peopleFunction ENDS
  // peopleFunction ENDS


  nightsFunction();
  peopleFunction();
};

// click function ENDS


// booking caluclators

// booking caluclator for hotel One

function nightValidatorOne() {
  var x, text;
  // Get the value of the input field with id="x"
  x = document.getElementById("hotelModalNightsOne").value;
  // If x is Not a Number or less than one or greater than 10
  if (isNaN(x) || x < 1 || x > 5) {
    text = "Sorry but you are only able to book a maximum of 5 nights";
    document.getElementById('step2One').style.display = "none";
  } else {
    text = "This slot is available. Please confirm details below";
    document.getElementById('step2One').style.display = "contents";
  }
  document.getElementById("subMessageOne").innerHTML = text;
}

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

function nightValidatorTwo() {
  var x, text;
  // Get the value of the input field with id="x"
  x = document.getElementById("hotelModalNightsTwo").value;
  // If x is Not a Number or less than one or greater than 10
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
  // Get the value of the input field with id="x"
  x = document.getElementById("hotelModalNightsThree").value;
  // If x is Not a Number or less than one or greater than 10
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
  // Get the value of the input field with id="x"
  x = document.getElementById("hotelModalNightsFour").value;
  // If x is Not a Number or less than one or greater than 10
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




// 1. Comment the end of your functions
// 2. Go incrementally, constantly checking console for errors
