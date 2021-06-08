"use strict";
const lefts = document.querySelector(".left-score");
const rights = document.querySelector(".right-score");
const leftcs = document.querySelector(".dicevl");
const rightcs = document.querySelector(".dicevr");
const dice = document.querySelector(".dice");
console.log(lefts.textContent);
let m;
let tl = 0;
let tr = 0;
let s = lefts;
let cs = leftcs;
let total = 0;
let totally = 0;

document.querySelector(".roll").addEventListener("click", function () {
  let v = Math.trunc(Math.random() * 6) + 1;
  let every = 0;

  total = total + v;
  dice.classList.remove(m);
  console.log(v);
  if (v === 1) {
    dice.classList.add("one");
    cs.textContent = total;
    m = "one";
    total = 0;
    f1();
    f2();
    f3();
  }
  if (v === 2) {
    dice.classList.add("two");
    cs.textContent = total;
    m = "two";
  }
  if (v === 3) {
    dice.classList.add("three");
    cs.textContent = total;
    m = "three";
  }
  if (v === 4) {
    dice.classList.add("four");
    cs.textContent = total;
    m = "four";
  }
  if (v === 5) {
    dice.classList.add("five");
    cs.textContent = total;
    m = "five";
  }
  if (v === 6) {
    dice.classList.add("six");
    cs.textContent = total;
    m = "six";
  }
  every = totally + total;
  if (every > 100) {
    f4();
  }
});

document.querySelector(".hold").addEventListener("click", function () {
  f1();
  f3();
  f2();
});

const f1 = function () {
  totally += total;
  total = 0;
  cs.textContent = total;
  s.textContent = totally;
};

const f2 = function () {
  if (s == lefts) {
    s = rights;
    cs = rightcs;
    totally = tr;
    document.querySelector(".boxl").style.backgroundColor =
      "rgba(255, 255, 255, 0.3)";
    document.querySelector(".boxr").style.backgroundColor =
      "rgba(255, 255, 255, 0.6)";
    document.querySelector(".h2l").style.fontSize = "120%";
    document.querySelector(".h2r").style.fontSize = "150%";
  } else {
    s = lefts;
    cs = leftcs;
    totally = tl;
    document.querySelector(".boxr").style.backgroundColor =
      "rgba(255, 255, 255, 0.3)";
    document.querySelector(".boxl").style.backgroundColor =
      "rgba(255, 255, 255, 0.6)";
    document.querySelector(".h2r").style.fontSize = "120%";
    document.querySelector(".h2l").style.fontSize = "150%";
  }
};

const f3 = function () {
  if (s == lefts) tl = totally;
  else tr = totally;
};

const f4 = function () {
  cs.textContent = 0;
  s.textContent = 100;
  document.querySelector(".dice").style.visibility = "hidden";
  document.querySelector(".roll").disabled = true;
  document.querySelector(".hold").disabled = true;
  document.querySelector(".new").style.fontWeight = 800;
  if (s === lefts) {
    window.alert("player1 winsss");
  } else {
    window.alert("player2 winsss");
  }
};
