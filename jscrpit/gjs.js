"use strict";

let high = 0;
let y;
document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".check").style.visibility = "visible";
  document.querySelector("html").style.backgroundColor = "white";
  document.querySelector(".idea").textContent = "Waiting for your response";
  document.querySelector(".scoren").textContent = "20";
  document.querySelector(".guess").value = 1;
  f1();
});

function f1() {
  y = Math.trunc(Math.random() * 20) + 1;
  console.log(y);
  let x2 = 20;
  document.querySelector(".check").addEventListener("click", function () {
    let x = Number(document.querySelector(".guess").value);

    if (!x) {
      document.querySelector(".idea").textContent = "Select a Number";
    } else {
      if (x2 === 1) {
        document.querySelector(".idea").textContent = "Lost the Game";
        x2--;
        document.querySelector(".scoren").textContent = x2;
      } else {
        if (x > y) {
          document.querySelector(".idea").textContent = "High";
          x2--;
          document.querySelector(".scoren").textContent = x2;
        }
        if (x < y) {
          document.querySelector(".idea").textContent = "Low";
          x2--;
          document.querySelector(".scoren").textContent = x2;
        }
        if (x === y) {
          document.querySelector(".idea").textContent = "Perfect!!";
          document.querySelector("h2").textContent = y;
          document.querySelector("html").style.backgroundColor = "green";
          document.querySelector(".check").style.visibility = "hidden";
          if (x2 > high) {
            high = x2;
            document.querySelector(".high-scoren").textContent = x2;
          }
        }
      }
    }
  });
}

f1();
