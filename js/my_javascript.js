// When the user scrolls the page, execute myFunction
window.onscroll = function() {
  myFunction()
};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
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
      document.getElementById('h4').style.opacity = '0.5';
    }

    if (getNightsInput.value > 10) {
      document.getElementById('h2').style.opacity = '0.5';
    } else if (getNightsInput.value < 1) {
      document.getElementById('h4').style.opacity = '0.5';
    }

    if (getNightsInput.value > 10) {
      document.getElementById('h3').style.opacity = '0.5';
    } else if (getNightsInput.value < 3) {
      document.getElementById('h4').style.opacity = '0.5';
    }

    if (getNightsInput.value > 15) {
      document.getElementById('h4').style.opacity = '0.5';
    } else if (getNightsInput.value < 2) {
      document.getElementById('h4').style.opacity = '0.5';
    }
  }

  // function nightsFunction ENDS
  //
  function peopleFunction () {
    if(getPeopleInput.value > 3 ){
      document.getElementById('h1').style.opacity = '0.5';
    }
    if(getPeopleInput.value > 1 ){
      document.getElementById('h2').style.opacity = '0.5';
    }
    if(getPeopleInput.value > 4){
      document.getElementById('h3').style.opacity = '0.5';
    }
    if(getPeopleInput.value > 4 ){
      document.getElementById('h4').style.opacity = '0.5';
    }
    }
  //   // peopleFunction ENDS
  // peopleFunction ENDS


  nightsFunction()
  peopleFunction()

}
// click function ENDS

// 1. Comment the end of your functions
// 2. Go incrementally, constantly checking console for errors
