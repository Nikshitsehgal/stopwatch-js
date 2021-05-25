// DOM initialise
let start = document.querySelector("#start");
let pauseresume = document.querySelector("#pauseresume");
let reset = document.querySelector("#reset");
let time = document.querySelector(".time");

// Variables
let hr = 0;
let min = 0;
let sec = 0;
let interval;

// Time display Function
const showTime = () => {
  sec = parseInt(sec);
  min = parseInt(min);
  hr = parseInt(hr);

  sec += 1;

  if (sec == 60) {
    min += 1;
    sec = 0;
  }

  if (min == 60) {
    hr += 1;
    min = 0;
    sec = 0;
  }

  if (sec == 0 || sec < 10) {
    sec = "0" + sec;
  }

  if (min == 0 || min < 10) {
    min = "0" + min;
  }

  if (hr == 0 || hr < 10) {
    hr = "0" + hr;
  }

  time.innerHTML = hr + " : " + min + " : " + sec;
};

// Start Function
start.addEventListener("click", () => {
  // button display
  start.style.display = "none";
  pauseresume.style.display = "inline-block";
  reset.style.display = "inline-block";
  // Time Start
  interval = setInterval(showTime, 1000);
});

// Pause / Resume Function
pauseresume.addEventListener("click", () => {
  if (interval) {
    clearInterval(interval);
    interval = null;
    pauseresume.innerHTML = "Resume";
    reset.innerHTML = "Reset";
    reset.style.background = "red";
  } else {
    interval = setInterval(showTime, 1000);
    pauseresume.innerHTML = "Pause";
    reset.innerHTML = "Flag";
    reset.style.background = "purple";
  }
});

// Reset Function
reset.addEventListener("click", () => {
  let ol = document.querySelector(".flags");
  if (interval) {
    let li = document.createElement("li");
    li.innerHTML = hr + " : " + min + " : " + sec;
    li.classList.add("flag");
    ol.appendChild(li);
  } else {
    pauseresume.innerHTML = "Pause";
    reset.innerHTML = "Flag";
    reset.style.background = "purple";
    //time reset
    time.innerHTML = "00 : 00 : 00";
    sec = 0;
    min = 0;
    hr = 0;
    // button display
    start.style.display = "inline-block";
    pauseresume.style.display = "none";
    reset.style.display = "none";
    // Clearing Flags
    let list = document.querySelectorAll(".flag");
    if (list.length > 0) {
      for (const el of list) {
        ol.removeChild(el);
      }
    }
  }
});
