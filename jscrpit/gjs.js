"use strict";
/*console.log(document.querySelector("h3").textContent);
document.querySelector("h2").textContent = 20;

document.querySelector(".guess").value = 14;
console.log(document.querySelector(".guess").value);

document.querySelector(".check").addEventListener("click", function () {
  document.querySelector(".guess").value = 18;
});
*/
let high = 0;
const y = Math.trunc(Math.random() * 20) + 1;
console.log(y);
let x2 = 20;
document.querySelector(".check").addEventListener("click", function () {
  let x = Number(document.querySelector(".guess").value);
  if (!x) {
    document.querySelector(".idea").textContent = "Use a Number";
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
    if (x == y) {
      document.querySelector(".idea").textContent = "Perfect!!";
      document.querySelector("h2").textContent = y;
      if (x2 > high) {
        high = x2;
        document.querySelector(".high-scoren").textContent = x2;
      }
    }
  }
});
