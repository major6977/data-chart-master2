// Date & Time Function

function display_dateTime() {
  var x = new Date();
  var ampm = x.getHours() >= 12 ? " PM" : " AM";
  var x1 = x.getMonth() + 1 + "/" + x.getDate() + "/" + x.getFullYear();
  x1 =
    x1 +
    " " +
    (x.getHours() % 12) +
    ":" +
    x.getMinutes() +
    ":" +
    x.getSeconds() +
    " " +
    ampm +
    " MST";
  document.getElementById("date-time").innerHTML = x1;
  display_information();
}
function display_information() {
  var refresh = 1000;
  mytime = setTimeout("display_dateTime()", refresh);
}
display_information();

// New Funtion Sessions

setInterval(function () {
  function getRandomNumbers(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  let sessionsNumsRandom = getRandomNumbers(2310, 2330);
  let sessionsTriRed = document.querySelector("#sessionsTriRed");
  let sessionsTriGreen = document.querySelector("#sessionsTriGreen");
  document.querySelector("#sessionsNums").innerText =
    sessionsNumsRandom.toLocaleString("en-US");

  //  let sessionsTriRed = document.querySelector("#sessionsTriRed");

  if (sessionsNumsRandom < 2324) {
    sessionsTriRed.style.backgroundColor = "red";
    sessionsTriRed.style.display = "block";
    sessionsTriGreen.style.display = "none";
  } else if (sessionsNumsRandom > 2324) {
    sessionsTriGreen.style.backgroundColor = "green";
    sessionsTriGreen.style.display = "block";
    sessionsTriRed.style.display = "none";
  }
}, 2000);

// Sessions Mobile

setInterval(function () {
  function getRandomNumbers(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  let sessionsNumsRandom = getRandomNumbers(2310, 2330);
  let sessionsTriRed = document.querySelector("#red-tri-sess-mobile");
  let sessionsTriGreen = document.querySelector("#grn-tri-sess-mobile");
  document.querySelector("#sessions-numbs-mobile").innerText =
    sessionsNumsRandom.toLocaleString("en-US");
  //  let sessionsTriRed = document.querySelector("#sessionsTriRed");

  if (sessionsNumsRandom < 2324) {
    sessionsTriRed.style.backgroundColor = "red";
    sessionsTriRed.style.display = "block";
    sessionsTriRed.style.transform = "rotate(180deg)";
    document.querySelector("#red-tri-sess-mobile").style.marginTop = "-16px";
    sessionsTriGreen.style.display = "none";
  } else if (sessionsNumsRandom > 2324) {
    sessionsTriGreen.style.backgroundColor = "green";
    sessionsTriGreen.style.display = "block";
    sessionsTriRed.style.display = "none";
  }
}, 2000);

// New Users

setInterval(function () {
  function getRandomNumbers(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const nuTriRed = document.querySelector("#nuTriRed");
  const nuTriGreen = document.querySelector("#nuTriGreen");
  const nuNumbs = getRandomNumbers(42987, 60223);
  const nuNumbsString = (document.querySelector("#nuNumbs").innerText =
    nuNumbs.toLocaleString("en-US"));

  if (nuNumbs < 50000) {
    nuTriRed.style.display = "block";
    nuTriGreen.style.display = "none";
  } else {
    nuTriGreen.style.display = "block";
    nuTriRed.style.display = "none";
  }
}, 3500);

// New Users Mobile

setInterval(function () {
  function getRandomNumbers(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const nuTriRed = document.querySelector("#red-tri-nu-mobile");
  const nuTriGreen = document.querySelector("#grn-tri-nu-mobile");
  const nuNumbs = getRandomNumbers(42987, 60223);
  const nuNumbsString = (document.querySelector("#nu-numbs-mobile").innerText =
    nuNumbs.toLocaleString("en-US"));

  if (nuNumbs < 50000) {
    nuTriRed.style.display = "block";
    nuTriRed.style.transform = "rotate(180deg)";
    nuTriRed.style.backgroundColor = "red";
    document.querySelector("#red-tri-nu-mobile").style.marginTop = "-16px";
    nuTriGreen.style.display = "none";
  } else {
    nuTriGreen.style.display = "block";
    nuTriRed.style.display = "none";
  }
}, 3500);

// Bounce Rate

setInterval(function () {
  function getRandomNumbers(min, max) {
    return Math.random() * (max - min + 1) + min;
  }

  let todayBrTriRed = document.querySelector("#todayBrTriRed");
  let todayBrTriGreen = document.querySelector("#todayBrTriGreen");
  let BrRandomNumbers = getRandomNumbers(4, 10);
  document.querySelector("#todayBr").innerText =
    BrRandomNumbers.toFixed(2) + "%";
  if (BrRandomNumbers < 7) {
    todayBrTriRed.style.backgroundColor = "red";
    todayBrTriRed.style.display = "block";
    todayBrTriGreen.style.display = "none";
  } else if (BrRandomNumbers > 7) {
    todayBrTriGreen.style.backgroundColor = "green";
    todayBrTriGreen.style.display = "block";
    todayBrTriRed.style.display = "none";
  }
}, 1000);

// Bounce Rate Mobile

setInterval(function () {
  function getRandomNumbers(min, max) {
    return Math.random() * (max - min + 1) + min;
  }

  let todayBrTriRed = document.querySelector("#red-tri-br-mobile");
  let todayBrTriGreen = document.querySelector("#grn-tri-br-mobile");
  let BrRandomNumbers = getRandomNumbers(4, 10);
  document.querySelector("#br-numbs-mobile").innerText =
    BrRandomNumbers.toFixed(2) + " %";
  if (BrRandomNumbers < 7) {
    todayBrTriRed.style.backgroundColor = "red";
    todayBrTriRed.style.transform = "rotate(180deg)";
    todayBrTriRed.style.marginTop = "-16px";
    todayBrTriRed.style.display = "block";
    todayBrTriGreen.style.display = "none";
  } else if (BrRandomNumbers > 7) {
    todayBrTriGreen.style.backgroundColor = "green";
    todayBrTriGreen.style.display = "block";
    todayBrTriRed.style.display = "none";
  }
}, 1000);

// Movement Functions for ASD Numbers

setInterval(function () {
  function getRandomNumbers(min, max) {
    return Math.random() * (max - min + 1) + min;
  }

  let asdTriRed2 = document.querySelector("#asdTriRed2");
  let asdTriGreen2 = document.querySelector("#asdTriGreen2");
  let asdRandomNumb2 = getRandomNumbers(125, 160);
  let asdNumbs2 = (document.querySelector("#asdNumbs2").innerText =
    asdRandomNumb2.toFixed(1));
  console.log(asdNumbs2);
  console.log(asdRandomNumb2);

  if (asdRandomNumb2 < 142) {
    asdTriRed2.style.display = "block";
    asdTriGreen2.style.display = "none";
  } else if (asdRandomNumb2 > 142) {
    asdTriGreen2.style.display = "block";
    asdTriRed2.style.display = "none";
  }
}, 2500);

// ASD Mobile

setInterval(function () {
  function getRandomNumbers(min, max) {
    return Math.random() * (max - min + 1) + min;
  }

  let asdTriRed = document.querySelector("#red-tri-asd-mobile");
  let asdTriGreen = document.querySelector("#grn-tri-asd-mobile");
  let asdRandomNumb = getRandomNumbers(125, 160);
  document.querySelector("#asd-numbs-mobile").innerText =
    asdRandomNumb.toFixed(1) + " sec";

  if (asdRandomNumb < 142) {
    asdTriRed.style.display = "block";
    asdTriRed.style.transform = "rotate(180deg)";
    asdTriRed.style.backgroundColor = "red";
    asdTriRed.style.marginTop = "-16px";
    asdTriGreen.style.display = "none";
  } else if (asdRandomNumb > 142) {
    asdTriGreen.style.display = "block";
    asdTriRed.style.display = "none";
  }
}, 2500);

// USA Aqua Graph

setInterval(function () {
  function getRandomNumbers(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let usaAquaBarMotion = document.querySelector("#usa-aqua-bar-motion");
  let usaNumbs = getRandomNumbers(15, 50);
  document.querySelector("#usa-aqua-num-motion").innerText = usaNumbs + "k";

  if (usaNumbs < 20) {
    usaAquaBarMotion.style.height = usaNumbs + "px";
    usaAquaBarMotion.style.backgroundColor = "red";
  } else {
    usaAquaBarMotion.style.height = usaNumbs + "px";
    usaAquaBarMotion.style.backgroundColor = "aqua";
  }
}, 2500);

// USA Purple Graph

setInterval(function () {
  function getRandomNumbers(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let usaPurpleBar = document.querySelector("#usa-purple-bar");
  let usaNumbs = getRandomNumbers(20, 45);
  document.querySelector("#usa-purple-num-motion").innerText = usaNumbs + "%";

  if (usaNumbs < 30) {
    usaPurpleBar.style.height = usaNumbs + "px";
    usaPurpleBar.style.backgroundColor = "red";
  } else {
    usaPurpleBar.style.height = usaNumbs + "px";
    usaPurpleBar.style.backgroundColor = "#7709F7";
  }
}, 3500);

//   uk Aqua Graph

setInterval(function () {
  function getRandomNumbers(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let ukAquaBar = document.querySelector("#uk-aqua-bar");
  let ukNumbs = getRandomNumbers(20, 45);
  document.querySelector("#uk-aqua-num-motion").innerText = ukNumbs + "k";

  if (ukNumbs < 30) {
    ukAquaBar.style.height = ukNumbs + "px";
    ukAquaBar.style.backgroundColor = "red";
  } else {
    ukAquaBar.style.height = ukNumbs + "px";
    ukAquaBar.style.backgroundColor = "#01f4ff";
  }
}, 3500);

//   K Purple Graph

setInterval(function () {
  function getRandomNumbers(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let ukPurpleBar = document.querySelector("#uk-purple-bar");
  let ukNumbs = getRandomNumbers(20, 45);
  document.querySelector("#uk-purple-num-motion").innerText = ukNumbs + "%";

  if (ukNumbs < 30) {
    ukPurpleBar.style.height = ukNumbs + "px";
    ukPurpleBar.style.backgroundColor = "red";
  } else {
    ukPurpleBar.style.height = ukNumbs + "px";
    ukPurpleBar.style.backgroundColor = "#7709F7";
  }
}, 3500);

//   Brasil Aqua Graph

setInterval(function () {
  function getRandomNumbers(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let brasilAquaBar = document.querySelector("#brasil-aqua-bar");
  let brasilNumbs = getRandomNumbers(20, 45);
  document.querySelector("#brasil-aqua-num-motion").innerText =
    brasilNumbs + "k";

  if (brasilNumbs < 30) {
    brasilAquaBar.style.height = brasilNumbs + "px";
    brasilAquaBar.style.backgroundColor = "red";
  } else {
    brasilAquaBar.style.height = brasilNumbs + "px";
    brasilAquaBar.style.backgroundColor = "#01f4ff";
  }
}, 4500);

//   Brasil Purple Graph

setInterval(function () {
  function getRandomNumbers(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let brasilPurpleBar = document.querySelector("#brasil-purple-bar");
  let brasilNumbs = getRandomNumbers(20, 45);
  document.querySelector("#brasil-purple-num-motion").innerText =
    brasilNumbs + "%";

  if (brasilNumbs < 30) {
    brasilPurpleBar.style.height = brasilNumbs + "px";
    brasilPurpleBar.style.backgroundColor = "red";
  } else {
    brasilPurpleBar.style.height = brasilNumbs + "px";
    brasilPurpleBar.style.backgroundColor = "#7709F7";
  }
}, 4000);

//   Sessions And Bounce Rate Function For Aqua Organic Search

setInterval(function () {
  function getRandomNumbers(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let organicAquaBars = document.querySelector("#organic-aqua-bars");
  let organicNumbs = getRandomNumbers(15, 35);
  document.querySelector("#organic-aqua-num-motion").innerText =
    organicNumbs + "k";

  if (organicNumbs < 20) {
    organicAquaBars.style.height = organicAquaBars + "px";
    organicAquaBars.style.backgroundColor = "red";
  } else {
    organicAquaBars.style.height = organicNumbs + "px";
    organicAquaBars.style.backgroundColor = "#01f4ff";
  }
}, 3500);

//   Sessions & Bounce Rate for Pain Search Purple Bar

setInterval(function () {
  function getRandomNumbers(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let paidPurpleBar = document.querySelector("#paid-purple-bar-motion");
  let paidNumbs = getRandomNumbers(20, 45);
  document.querySelector("#paid-purple-num-motion").innerText = paidNumbs + "%";

  if (paidNumbs < 30) {
    paidPurpleBar.style.height = paidNumbs + "px";
    paidPurpleBar.style.backgroundColor = "red";
  } else {
    paidPurpleBar.style.height = paidNumbs + "px";
    paidPurpleBar.style.backgroundColor = "#7709F7";
  }
}, 4000);

//   Referal Aqua Bar

setInterval(function () {
  function getRandomNumbers(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let referalAquaBar = document.querySelector("#referal-aqua-bar-motion");
  let aquaBarNum = getRandomNumbers(20, 45);
  document.querySelector("#referal-aqua-num-motion").innerText =
    aquaBarNum + "%";

  if (aquaBarNum < 30) {
    referalAquaBar.style.height = aquaBarNum + "px";
    referalAquaBar.style.backgroundColor = "red";
  } else {
    referalAquaBar.style.height = aquaBarNum + "px";
    referalAquaBar.style.backgroundColor = "#01f4ff";
  }
}, 3500);
