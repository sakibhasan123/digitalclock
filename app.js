let hours = document.getElementById("hrs");
let minutes = document.getElementById("mins");
let seconds = document.getElementById("secs");
let AMPM = document.querySelector(".sub7");

let wakeup = document.querySelector(".good1");
let message = document.querySelector(".box6");

function theTimer() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  hours.innerHTML = hours;
  minutes.innerHTML = minutes;
  seconds.innerHTML = seconds;

  //content below the clock
  if (hours >= 4 && hours < 10) {
    message.innerHTML = "GRAB SOME HEALTHY BREAKFAST!!!";
  } else if (hours >= 10 && hours < 16) {
    message.innerHTML = " LET'S HAVE SOME LUNCH !!";
  } else if (hours >= 16 && hours < 20) {
    message.innerHTML = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
  } else {
    message.innerHTML = "CLOSE YOUR EYES AND GO TO SLEEP";
  }

  //12 hrs format
  if (hours.innerHTML > 12) {
    hours.innerHTML = hours.innerHTML - 12;
    AMPM.innerHTML = "PM";
  }
}
setInterval(() => {
  theTimer();
}, 1000);

but1 = document.querySelector(".set1");

but1.addEventListener("click", () => {
  let date = new Date();
  let hours = date.getHours();

  let img = document.querySelector("#theImage");

  let night = document.getElementById("night");
  let ntext = night.options[night.selectedIndex].textContent;
  let nPrint = document.querySelector("#nighttime");
  nPrint.textContent = ntext;

  let nap = document.getElementById("nap");
  let naptext = nap.options[nap.selectedIndex].textContent;
  let napPrint = document.querySelector("#naptime");
  napPrint.textContent = naptext;

  let lunch = document.getElementById("lunch");
  let ltext = lunch.options[lunch.selectedIndex].textContent;
  let lPrint = document.querySelector("#lunchtime");
  lPrint.textContent = ltext;

  let morn = document.getElementById("morning");
  let mtext = morn.options[morn.selectedIndex].textContent;
  let mPrint = document.querySelector("#waketime");
  mPrint.textContent = mtext;

  //change the text and image based on selection

  if (parseInt(morn.value) === hours) {
    wakeup.innerHTML = "GOOD MORNING!! WAKE UP !!";
    img.src = "./Component 30 – 1.png";
  } else if (parseInt(lunch.value) === hours) {
    wakeup.innerHTML = "GOOD AFTERNOON !! TAKE SOME SLEEP";
    img.src = "./Component 31 – 1.png";
  } else if (parseInt(nap.value) === hours) {
    wakeup.innerHTML = "GOOD EVENING !!";
    img.src = "./lunch_image.png";
  } else if (parseInt(night.value) === hours) {
    wakeup.innerHTML = "GOOD NIGHT !!";
    img.src = "./Component 32 – 1.png";
    console.log(wakeup.innerHTML);
  }
});
