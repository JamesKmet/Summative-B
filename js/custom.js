(function() {
  'use strict';


//data for rubric
var data = {
  hotelOne: {
    minNights: 1,
    maxNights: 5,
    minPeople: 1,
    maxPeople: 2,
    price: 157
  },
  hostelOne: {
    minNights: 1,
    maxNights: 10,
    minPeople: 1,
    maxPeople: 1,
    price: 30
  },
  motelOne: {
    minNights: 3,
    maxNights: 10,
    minPeople: 2,
    maxPeople: 4,
    price: 90
  },
  houseOne: {
    minNights: 2,
    maxNights: 15,
    minPeople: 1,
    maxPeople: 4,
    price: 240
  }
};



// script forthe sticky nav bar
window.onscroll = function() {
  myFunction();
};
// Get the navbar
var navbar = document.getElementById('navbar');
// Get the offset position of the navbar
var sticky = navbar.offsetTop;
// Add the sticky class to the navbar when you reach its scroll position. Remove 'sticky' when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
}
// script for the sticky nav bar ends


//button click events
var getNightsInput = document.getElementById('numberOfNights');
var getPeopleInput = document.getElementById('numberOfPeople');
var getHotels = document.getElementById('findHotel');


var getButtonA = document.getElementById('availablityOne');
getButtonA.onclick = function () {
  nightValidatorOne();
  caluclatorValidatorOne();
};

var getButtonB = document.getElementById('availablityTwo');
getButtonB.onclick = function () {
  nightValidatorTwo();
  caluclatorValidatorTwo();
};

var getButtonC = document.getElementById('availablityThree');
getButtonC.onclick = function () {
  nightValidatorThree();
  caluclatorValidatorThree();
};

var getButtonD = document.getElementById('availablityFour');
getButtonD.onclick = function () {
  nightValidatorFour();
  caluclatorValidatorFour();
};


// script for button on the home page
getHotels.onclick = function() {

  //timeout function that scrolls the user to the next step in the booking process
  setTimeout(function() {
    document.getElementById('h1').scrollIntoView({
      behavior: 'smooth'
    });
  }, 1000);


  // function that sorts out the Number of Nights people are staying
  function nightsFunction() {
    if (getNightsInput.value > data.hotelOne.maxNights) {
      document.getElementById('h1').style.opacity = '0.5';
    } else if (getNightsInput.value < data.hotelOne.minNights) {
      document.getElementById('h1').style.opacity = '0.5';
    }

    if (getNightsInput.value > data.hostelOne.maxNights) {
      document.getElementById('h2').style.opacity = '0.5';
    } else if (getNightsInput.value < data.hostelOne.minNights) {
      document.getElementById('h2').style.opacity = '0.5';
    }

    if (getNightsInput.value > data.motelOne.maxNights) {
      document.getElementById('h3').style.opacity = '0.5';
    } else if (getNightsInput.value < data.motelOne.minNights) {
      document.getElementById('h3').style.opacity = '0.5';
    }

    if (getNightsInput.value > data.houseOne.maxNights) {
      document.getElementById('h4').style.opacity = '0.5';
    } else if (getNightsInput.value < data.houseOne.minNights) {
      document.getElementById('h4').style.opacity = '0.5';
    }
  }

  // function that sorts out the Number of people that are staying
  function peopleFunction() {
    if (getPeopleInput.value > data.hotelOne.maxPeople) {
      document.getElementById('h1').style.opacity = '0.5';
    }
    if (getPeopleInput.value > data.hostelOne.maxPeople) {
      document.getElementById('h2').style.opacity = '0.5';
    }
    if (getPeopleInput.value > data.motelOne.maxPeople) {
      document.getElementById('h3').style.opacity = '0.5';
    }
    if (getPeopleInput.value > data.houseOne.maxPeople) {
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
  x = document.getElementById('hotelModalNightsOne').value;
  // if the aporperate outcome has been selected then the optiion to procede will show.
  // but if an in aporoerate outcome is selected then the user will be corrected
  if (isNaN(x) || x < 1 || x > 5) {
    text = 'Sorry but you are only able to book a maximum of 5 nights';
    document.getElementById('step2One').style.display = 'none';
  } else {
    text = 'This slot is available. Please confirm details below';
    document.getElementById('step2One').style.display = 'contents';
  }
  document.getElementById('subMessageOne').innerHTML = text;
}

// the second function finds the total cost of there trips
function caluclatorValidatorOne() {
  var text;
  var getHotelModalNightsOne = document.getElementById('hotelModalNightsOne').value;
  var x = getHotelModalNightsOne;
  var y = 157;
  var z = x * y;
  text = z;
  document.getElementById('outPutOne').innerHTML = text;
}



// booking calculator for hotel two
// these function are almost identical to the first calculator with the expection if there values and value inputs
function nightValidatorTwo() {
  var x, text;
  x = document.getElementById('hotelModalNightsTwo').value;
  if (isNaN(x) || x < 1 || x > 10) {
    text = 'Sorry but you are only able to book a maximum of 10 nights';
    document.getElementById('step2Two').style.display = 'none';
  } else {
    text = 'This slot is available. Please confirm details below';
    document.getElementById('step2Two').style.display = 'contents';
  }
  document.getElementById('subMessageTwo').innerHTML = text;
}

function caluclatorValidatorTwo() {
  var text;
  var getHotelModalNightsOne = document.getElementById('hotelModalNightsTwo').value;
  var x = getHotelModalNightsOne;
  var y = 30;
  var z = x * y;
  text = z;
  document.getElementById('outPutTwo').innerHTML = text;
}



// booking calculator for hotel Three
function nightValidatorThree() {
  var x, text;
  x = document.getElementById('hotelModalNightsThree').value;
  if (isNaN(x) || x < 3 || x > 10) {
    text = 'Sorry but you are only able to book a maximum of 10 nights, and a minium of 3 nights';
    document.getElementById('step2Three').style.display = 'none';
  } else {
    text = 'This slot is available. Please confirm details below';
    document.getElementById('step2Three').style.display = 'contents';
  }
  document.getElementById('subMessageThree').innerHTML = text;
}

function caluclatorValidatorThree() {
  var text;
  var getHotelModalNightsOne = document.getElementById('hotelModalNightsThree').value;
  var x = getHotelModalNightsOne;
  var y = 90;
  var z = x * y;
  text = z;
  document.getElementById('outPutThree').innerHTML = text;
}


// booking calculator for hotel Four
function nightValidatorFour() {
  var x, text;
  x = document.getElementById('hotelModalNightsFour').value;
  if (isNaN(x) || x < 3 || x > 10) {
    text = 'Sorry but you are only able to book a maximum of 10 nights';
    document.getElementById('step2Four').style.display = 'none';
  } else {
    text = 'This slot is available. Please confirm details below';
    document.getElementById('step2Four').style.display = 'contents';
  }
  document.getElementById('subMessageFour').innerHTML = text;
}

function caluclatorValidatorFour() {
  var text;
  var getHotelModalNightsFour = document.getElementById('hotelModalNightsFour').value;
  var x = getHotelModalNightsFour;
  var y = 240;
  var z = x * y;
  text = z;
  document.getElementById('outPutFour').innerHTML = text;
}


//script for determining which menu the user is alloud to interact with
var getButtonOne = document.getElementById('h1');
var getButtonTwo = document.getElementById('h2');
var getButtonThree = document.getElementById('h3');
var getButtonFour = document.getElementById('h4');

getButtonOne.onclick = function() {
  document.getElementById('menuTwo').style.opacity = '0.2';
  document.getElementById('menuThree').style.opacity = '0.2';
  document.getElementById('menuFour').style.opacity = '0.2';
};
getButtonTwo.onclick = function() {
  document.getElementById('menuOne').style.opacity = '0.2';
  document.getElementById('menuThree').style.opacity = '0.2';
  document.getElementById('menuFour').style.opacity = '0.2';
};
getButtonThree.onclick = function() {
  document.getElementById('menuTwo').style.opacity = '0.2';
  document.getElementById('menuOne').style.opacity = '0.2';
  document.getElementById('menuFour').style.opacity = '0.2';
};
getButtonFour.onclick = function() {
  document.getElementById('menuTwo').style.opacity = '0.2';
  document.getElementById('menuThree').style.opacity = '0.2';
  document.getElementById('menuOne').style.opacity = '0.2';
};




//script for determining which menu the user is alloud to interact with ends
var getEndModalOne = document.getElementById('modalEndOne');
var getEndModalTwo = document.getElementById('modalEndTwo');
var getEndModalThree = document.getElementById('modalEndThree');
var getEndModalFour = document.getElementById('modalEndFour');

var getMenuBar = document.getElementById('navTwo');
var getHotelBar = document.getElementById('navOne');
var getAboutUsBar = document.getElementById('navThree');


//script for the nav bar being able to send to user around the website
getMenuBar.onclick = function() {
  setTimeout(function() {
    document.getElementById('menuOne').scrollIntoView({
      behavior: 'smooth'
    });
  }, 500);
};

getHotelBar.onclick = function() {
  setTimeout(function() {
    document.getElementById('hotelBookingId').scrollIntoView({
      behavior: 'smooth'
    });
  }, 500);
};

getAboutUsBar.onclick = function() {
  setTimeout(function() {
    document.getElementById('idForFooter').scrollIntoView({
      behavior: 'smooth'
    });
  }, 500);
};





//script for sending the user to see the menu after they complete the modal
getEndModalOne.onclick = function() {
  setTimeout(function() {
    document.getElementById('menuOne').scrollIntoView({
      behavior: 'smooth'
    });
  }, 1000);
};
getEndModalTwo.onclick = function() {
  setTimeout(function() {
    document.getElementById('menuTwo').scrollIntoView({
      behavior: 'smooth'
    });
  }, 1000);
};
getEndModalFour.onclick = function() {
  setTimeout(function() {
    document.getElementById('menuFour').scrollIntoView({
      behavior: 'smooth'
    });
  }, 1000);
};
getEndModalThree.onclick = function() {
  setTimeout(function() {
    document.getElementById('menuThree').scrollIntoView({
      behavior: 'smooth'
    });
  }, 1000);
};



// script for the menu animations
//first row
var getFoodIdOne = document.getElementById('foodItemIdOne');
getFoodIdOne.onclick = function() {
  document.getElementById('foodItemIdTextOne').style.display = 'contents';
  document.getElementById('foodItemIdOne').style.backgroundImage = 'none';
  setTimeout(function() {
    document.getElementById('foodItemIdOne').style.backgroundImage = "url('images/food_one.jpg')";
    document.getElementById('foodItemIdTextOne').style.display = 'none';
  }, 5000);
};

var getFoodIdTwo = document.getElementById('foodItemIdTwo');
getFoodIdTwo.onclick = function() {
  document.getElementById('foodItemIdTextTwo').style.display = 'contents';
  document.getElementById('foodItemIdTwo').style.backgroundImage = 'none';
  setTimeout(function() {
    document.getElementById('foodItemIdTwo').style.backgroundImage = "url('images/food_two.jpg')";
    document.getElementById('foodItemIdTextTwo').style.display = 'none';
  }, 5000);
};

var getFoodIdThree = document.getElementById('foodItemIdThree');
getFoodIdThree.onclick = function() {
  document.getElementById('foodItemIdTextThree').style.display = 'contents';
  document.getElementById('foodItemIdThree').style.backgroundImage = 'none';
  setTimeout(function() {
    document.getElementById('foodItemIdThree').style.backgroundImage = "url('images/food_three.jpg')";
    document.getElementById('foodItemIdTextThree').style.display = 'none';
  }, 10000);
};

var getFoodIdFour = document.getElementById('foodItemIdFour');
getFoodIdFour.onclick = function() {
  document.getElementById('foodItemIdTextFour').style.display = 'contents';
  document.getElementById('foodItemIdFour').style.backgroundImage = 'none';
  setTimeout(function() {
    document.getElementById('foodItemIdFour').style.backgroundImage = "url('images/food_four.jpg')";
    document.getElementById('foodItemIdTextFour').style.display = 'none';
  }, 10000);
};

//second row
var getFoodIdFive = document.getElementById('foodItemIdFive');
getFoodIdFive.onclick = function() {
  document.getElementById('foodItemIdTextFive').style.display = 'contents';
  document.getElementById('foodItemIdFive').style.backgroundImage = 'none';
  setTimeout(function() {
    document.getElementById('foodItemIdFive').style.backgroundImage = "url('images/food_five.jpg')";
    document.getElementById('foodItemIdTextFive').style.display = 'none';
  }, 10000);
};

var getFoodIdSix = document.getElementById('foodItemIdSix');
getFoodIdSix.onclick = function() {
  document.getElementById('foodItemIdTextSix').style.display = 'contents';
  document.getElementById('foodItemIdSix').style.backgroundImage = 'none';
  setTimeout(function() {
    document.getElementById('foodItemIdSix').style.backgroundImage = "url('images/food_six.jpg')";
    document.getElementById('foodItemIdTextSix').style.display = 'none';
  }, 10000);
};

var getFoodIdSeven = document.getElementById('foodItemIdSeven');
getFoodIdSeven.onclick = function() {
  document.getElementById('foodItemIdTextSeven').style.display = 'contents';
  document.getElementById('foodItemIdSeven').style.backgroundImage = 'none';
  setTimeout(function() {
    document.getElementById('foodItemIdSeven').style.backgroundImage = "url('images/food_seven.jpg')";
    document.getElementById('foodItemIdTextSeven').style.display = 'none';
  }, 10000);
};

var getFoodIdEight = document.getElementById('foodItemIdEight');
getFoodIdEight.onclick = function() {
  document.getElementById('foodItemIdTextEight').style.display = 'contents';
  document.getElementById('foodItemIdEight').style.backgroundImage = 'none';
  setTimeout(function() {
    document.getElementById('foodItemIdEight').style.backgroundImage = "url('images/food_eight.jpg')";
    document.getElementById('foodItemIdTextEight').style.display = 'none';
  }, 10000);
};

//third row
var getFoodIdNine = document.getElementById('foodItemIdNine');
getFoodIdNine.onclick = function() {
  document.getElementById('foodItemIdTextNine').style.display = 'contents';
  document.getElementById('foodItemIdNine').style.backgroundImage = 'none';
  setTimeout(function() {
    document.getElementById('foodItemIdNine').style.backgroundImage = "url('images/food_nine.jpg')";
    document.getElementById('foodItemIdTextNine').style.display = 'none';
  }, 10000);
};

var getFoodIdTen = document.getElementById('foodItemIdTen');
getFoodIdTen.onclick = function() {
  document.getElementById('foodItemIdTextTen').style.display = 'contents';
  document.getElementById('foodItemIdTen').style.backgroundImage = 'none';
  setTimeout(function() {
    document.getElementById('foodItemIdTen').style.backgroundImage = "url('images/food_ten.jpg')";
    document.getElementById('foodItemIdTextTen').style.display = 'none';
  }, 10000);
};

var getFoodIdEleven = document.getElementById('foodItemIdEleven');
getFoodIdEleven.onclick = function() {
  document.getElementById('foodItemIdTextEleven').style.display = 'contents';
  document.getElementById('foodItemIdEleven').style.backgroundImage = 'none';
  setTimeout(function() {
    document.getElementById('foodItemIdEleven').style.backgroundImage = "url('images/food_eleven.jpg')";
    document.getElementById('foodItemIdTextEleven').style.display = 'none';
  }, 10000);
};

var getFoodIdTwelve = document.getElementById('foodItemIdTwelve');
getFoodIdTwelve.onclick = function() {
  document.getElementById('foodItemIdTextTwelve').style.display = 'contents';
  document.getElementById('foodItemIdTwelve').style.backgroundImage = 'none';
  setTimeout(function() {
    document.getElementById('foodItemIdTwelve').style.backgroundImage = "url('images/food_twelve.jpg')";
    document.getElementById('foodItemIdTextTwelve').style.display = 'none';
  }, 10000);
};

//fourth row
var getFoodIdThriteen = document.getElementById('foodItemIdThirteen');
getFoodIdThriteen.onclick = function() {
  document.getElementById('foodItemIdTextThirteen').style.display = 'contents';
  document.getElementById('foodItemIdThirteen').style.backgroundImage = 'none';
  setTimeout(function() {
    document.getElementById('foodItemIdThirteen').style.backgroundImage = "url('images/food_thirteen.jpg')";
    document.getElementById('foodItemIdTextThirteen').style.display = 'none';
  }, 10000);
};

var getFoodIdFourteen = document.getElementById('foodItemIdFourteen');
getFoodIdFourteen.onclick = function() {
  document.getElementById('foodItemIdTextFourteen').style.display = 'contents';
  document.getElementById('foodItemIdFourteen').style.backgroundImage = 'none';
  setTimeout(function() {
    document.getElementById('foodItemIdFourteen').style.backgroundImage = "url('images/food_fourteen.jpg')";
    document.getElementById('foodItemIdTextFourteen').style.display = 'none';
  }, 10000);
};

var getFoodIdFithteen = document.getElementById('foodItemIdFithteen');
getFoodIdFithteen.onclick = function() {
  document.getElementById('foodItemIdTextFithteen').style.display = 'contents';
  document.getElementById('foodItemIdFithteen').style.backgroundImage = 'none';
  setTimeout(function() {
    document.getElementById('foodItemIdFithteen').style.backgroundImage = "url('images/food_fithteen.jpg')";
    document.getElementById('foodItemIdTextFithteen').style.display = 'none';
  }, 10000);
};

var getFoodIdSixteen = document.getElementById('foodItemIdSixteen');
getFoodIdSixteen.onclick = function() {
  document.getElementById('foodItemIdTextSixteen').style.display = 'contents';
  document.getElementById('foodItemIdSixteen').style.backgroundImage = 'none';
  setTimeout(function() {
    document.getElementById('foodItemIdSixteen').style.backgroundImage = "url('images/food_sixteen.jpg')";
    document.getElementById('foodItemIdTextSixteen').style.display = 'none';
  }, 10000);
};


//toaster section

//toaster for intaital hotel search
$('#findHotel').on('click', function() {
  toastr.options = {
    'closeButton': false,
    'debug': false,
    'newestOnTop': false,
    'progressBar': false,
    'positionClass': 'toast-top-center',
    'preventDuplicates': false,
    'onclick': null,
    'showDuration': '300',
    'hideDuration': '1000',
    'timeOut': '10000',
    'extendedTimeOut': '1000',
    'showEasing': 'swing',
    'hideEasing': 'linear',
    'showMethod': 'fadeIn',
    'hideMethod': 'fadeOut'
  };

  toastr.success('Please select one of the available Hotels');
});

//toasters for thank you for booking and showing menu
$('#modalEndOne').on('click', function() {
  toastr.options = {
    'closeButton': false,
    'debug': false,
    'newestOnTop': false,
    'progressBar': false,
    'positionClass': 'toast-top-center',
    'preventDuplicates': false,
    'onclick': null,
    'showDuration': '300',
    'hideDuration': '1000',
    'timeOut': '10000',
    'extendedTimeOut': '1000',
    'showEasing': 'swing',
    'hideEasing': 'linear',
    'showMethod': 'fadeIn',
    'hideMethod': 'fadeOut'
  };

  toastr.success('Thank you for Booking. View the following compelemtry food options bellow');
});

$('#modalEndTwo').on('click', function() {
  toastr.options = {
    'closeButton': false,
    'debug': false,
    'newestOnTop': false,
    'progressBar': false,
    'positionClass': 'toast-top-center',
    'preventDuplicates': false,
    'onclick': null,
    'showDuration': '300',
    'hideDuration': '1000',
    'timeOut': '10000',
    'extendedTimeOut': '1000',
    'showEasing': 'swing',
    'hideEasing': 'linear',
    'showMethod': 'fadeIn',
    'hideMethod': 'fadeOut'
  };

  toastr.success('View the following compelemtry food options bellow');
});

$('#modalEndThree').on('click', function() {
  toastr.options = {
    'closeButton': false,
    'debug': false,
    'newestOnTop': false,
    'progressBar': false,
    'positionClass': 'toast-top-center',
    'preventDuplicates': false,
    'onclick': null,
    'showDuration': '300',
    'hideDuration': '1000',
    'timeOut': '10000',
    'extendedTimeOut': '1000',
    'showEasing': 'swing',
    'hideEasing': 'linear',
    'showMethod': 'fadeIn',
    'hideMethod': 'fadeOut'
  };

  toastr.success('View the following compelemtry food options bellow');
});

$('#modalEndFour').on('click', function() {
  toastr.options = {
    'closeButton': false,
    'debug': false,
    'newestOnTop': false,
    'progressBar': false,
    'positionClass': 'toast-top-center',
    'preventDuplicates': false,
    'onclick': null,
    'showDuration': '300',
    'hideDuration': '1000',
    'timeOut': '10000',
    'extendedTimeOut': '1000',
    'showEasing': 'swing',
    'hideEasing': 'linear',
    'showMethod': 'fadeIn',
    'hideMethod': 'fadeOut'
  };

  toastr.success('View the following compelemtry food options bellow');
});



}());
// Custom iife ENDS
