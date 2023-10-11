const timeH = document.querySelector(".time");
const be_back = document.querySelector(".be-back");
let countDown = null;

// 20 SECS
let toweny_secs = 20 + 1;
const toweny_SECS = document.getElementById("20_SECS");

toweny_SECS.addEventListener("click", () => {
  timeH.style.display = "block";

  // get time back
  var date = new Date();
  var current_time = `${
    date.getHours() + Math.floor(toweny_secs / (60 * 60))
  } : ${date.getMinutes() + Math.floor((toweny_secs / 60) % 60)} : ${(
    date.getSeconds() + toweny_secs) % 60
  }`;
  document.getElementById("P1").innerHTML = "Be Back At  " + current_time;

  if (countDown != null) {
    clearInterval(countDown);
  }
  countDown = setInterval(() => {
    toweny_secs--;
    displayTime(toweny_secs);
    if (toweny_secs <= 0 || toweny_secs < 1) {
      endTime();
      clearInterval(countDown);
    }
  }, 1000);
});

// CAPPUCINO_5
let fiveCappicino = 5 * 60 + 1;
const CAPPUCINO = document.getElementById("CAPPUCINO_5");

CAPPUCINO.addEventListener("click", () => {
  timeH.style.display = "block";

  // get time back
  var date = new Date();
  var current_time = `${
    date.getHours() + Math.floor(fiveCappicino / (60 * 60))
  } : ${date.getMinutes() + Math.floor((fiveCappicino / 60) % 60)} : ${
    (date.getSeconds() + fiveCappicino) % 60
  }`;
  document.getElementById("P1").innerHTML = "Be Back At  " + current_time;

  if (countDown != null) {
    clearInterval(countDown);
  }
  countDown = setInterval(() => {
    fiveCappicino--;
    displayTime(fiveCappicino);
    if (fiveCappicino <= 0 || fiveCappicino < 1) {
      endTime();
      clearInterval(countDown);
    }
  }, 1000);
});

// THE_15
let fiveteenThe = 15 * 60 + 1;
const THE = document.getElementById("THE_15");

THE.addEventListener("click", () => {
  timeH.style.display = "block";

  // get time back
  var date = new Date();
  var current_time = `${
    date.getHours() + Math.floor(fiveteenThe / (60 * 60))
  } : ${date.getMinutes() + Math.floor((fiveteenThe / 60) % 60)} : ${(
    date.getSeconds() + fiveteenThe )% 60
  }`;
  document.getElementById("P1").innerHTML = "Be Back At  " + current_time;

  if (countDown != null) {
    clearInterval(countDown);
  }
  countDown = setInterval(() => {
    fiveteenThe--;
    displayTime(fiveteenThe);
    if (fiveteenThe <= 0 || fiveteenThe < 1) {
      endTime();
      clearInterval(countDown);
    }
  }, 1000);
});

// PETIT Dejeuner
let petitDejeuner = 20 * 60 + 1;
const PETIT_DEJEUNER = document.getElementById("PETIT_DEJEUNER_20");

PETIT_DEJEUNER.addEventListener("click", () => {
  timeH.style.display = "block";

  // get time back
  var date = new Date();
  var current_time = `${
    date.getHours() + Math.floor(petitDejeuner / (60 * 60))
  } : ${date.getMinutes() + Math.floor((petitDejeuner / 60) % 60)} : ${
    (date.getSeconds() + petitDejeuner) % 60
  }`;
  document.getElementById("P1").innerHTML = "Be Back At  " + current_time;

  if (countDown != null) {
    clearInterval(countDown);
  }
  countDown = setInterval(() => {
    petitDejeuner--;
    displayTime(petitDejeuner);
    if (petitDejeuner <= 0 || petitDejeuner < 1) {
      endTime();
      clearInterval(countDown);
    }
  }, 1000);
});

//Dejeuner
let dejeuner = 30 * 60 + 1;
const DEJEUNER = document.getElementById("DEJEUNER_30");

DEJEUNER.addEventListener("click", () => {
  timeH.style.display = "block";

  // get time back
  var date = new Date();
  var current_time = `${date.getHours() + Math.floor(dejeuner / (60 * 60))} : ${
    date.getMinutes() + Math.floor((dejeuner / 60) % 60)
  } : ${ (date.getSeconds() + dejeuner  ) % 60}`;
  document.getElementById("P1").innerHTML = "Be Back At  " + current_time;

  if (countDown != null) {
    clearInterval(countDown);
  }
  countDown = setInterval(() => {
    dejeuner--;
    displayTime(dejeuner);
    if (dejeuner <= 0 || dejeuner < 1) {
      endTime();
      clearInterval(countDown);
    }
  }, 1000);
});

// input

const form = document.querySelector("#input-box");
const input = document.querySelector("#input-number");
form.addEventListener("submit", (e) => {
  timeH.style.display = "block";
  e.preventDefault();
  if (countDown != null) {
    clearInterval(countDown);
  }
  let inputVal = input.value * 60 + 1;

  // get time back
  var date = new Date();
  var current_time = `${
    date.getHours() + Math.floor((inputVal / (60 * 60)) % 24)
  } : ${date.getMinutes() + Math.floor((inputVal / 60) % 60)} : ${
    (date.getSeconds() + inputVal) % 60
  }`;
  document.getElementById("P1").innerHTML = "Be Back At  " + current_time;
  countDown = setInterval(() => {
    inputVal--;
    displayTime(inputVal);
    if (inputVal <= 0 || inputVal < 1) {
      endTime();
      clearInterval(countDown);
    }
  }, 1000);
});

// function Time
function displayTime(second) {
  var hrs = Math.floor(second / (60 * 60));
  var min = Math.floor((second / 60) % 60);
  var sec = second % 60;
  timeH.innerHTML = `${hrs < 10 ? "0" : ""}${hrs}:${
    min < 10 ? "0" : ""
  }${min}:${sec < 10 ? "0" : ""}${sec} `;
}

// endTime function
function endTime() {
  timeH.style.display = "none";
  be_back.hidden = true;
}


function filterProduct(value) {
  // button class code
  let buttons = document.querySelectorAll(".tab-btn");
  buttons.forEach((button) => {
    //chek if value equals innnerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
}