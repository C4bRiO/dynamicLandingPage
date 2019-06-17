//DOM Elements

const time = document.getElementById("time"),
  greeting = document.getElementById("greeting"),
  name = document.getElementById("name"),
  focus = document.getElementById("focus");


//Options 
const showAmPm = true;


//Show time
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  //SET am or PM
  const amPm = hour >= 12 ? "PM" : "AM";

  //12hr Format
  //hour = hour % 12 || 12;

  //method ev; hehe
  hour = hour > 12 ? hour - 12 : hour;

  //fix zeroes
  min = addZero(min);
  sec = addZero(sec);

  //Output time
  time.innerHTML = `${hour}<span>:</span>${min}<span>:</span>${sec} ${showAmPm ? amPm : ''}`;

  setTimeout(showTime, 1000);
}

//Add Zeros
function addZero(n) {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

//set background and Greeting
function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();

  let morning = hour > 5 && hour < 12;
  let afternoon = hour >= 12 && hour <= 18;
  let night = hour > 18 || hour < 5;

  let morningBg = "url('../img/morning.jpg')";
  let afternoonBg = "url('../img/afternoon.jpg')";
  let nightBg = "url('../img/night.jpg')";

  if (morning) {
    console.log("i'm here at morning");
    document.body.style.backgroundImage = morningBg;
    greeting.textContent = "Buen dia!";
  } else if (afternoon) {
    console.log("i'm here at AFTERNOON");
    document.body.style.backgroundImage = afternoonBg;
    greeting.textContent = "Buenas tardes!";
  } else if (night) {
    console.log("i'm here at NIGHT");
    document.body.style.backgroundImage = nightBg;
    document.body.style.color = "white";
    greeting.textContent = "Buenas noches!";
  } else {
    console.log("i'm here at NIGHT");
    document.body.style.backgroundImage = null;
  }
}

// Get Name
function getName() {
  if (localStorage.getItem("name") === null) {
    name.textContent = " [Enter Name]";
  } else {
    name.textContent = localStorage.getItem("name");
  }
}

//Set Name
function setName(e) {
  if (e.type === "keypress") {
    //Make sure enter is pressed
    if(e.which == 13 || e.keyCode == 13){
        localStorage.setItem('name',e.target.innerText);
        name.blur();  
    }
  } else {
      localStorage.setItem('name',e.target.innerText);
  }
}

// Get Focus
function getFocus() {
  if (localStorage.getItem("focus") === null) {
    focus.textContent = "[Enter Focus]";
  } else {
    focus.textContent = localStorage.getItem("focus");
  }
}

//Set Focus
function setFocus(e) {
    if (e.type === "keypress") {
      //Make sure enter is pressed
      if(e.which == 13 || e.keyCode == 13){
          localStorage.setItem('focus',e.target.innerText);
          focus.blur();  
      }
    } else {
        localStorage.setItem('focus',e.target.innerText);
    }
  }

name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);
focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);

//run
getName();
getFocus();
setBgGreet();
showTime();
