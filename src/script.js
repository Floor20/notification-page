"use strict";

let notificationNumber = document.querySelector(".notif-number");
const notificationTiles = document.querySelectorAll(".notif-tile");
const redDot = document.querySelector(".red-dot");
const markReadButton = document.querySelector(".mark-btn");

notificationNumber.textContent = notificationTiles.length;

const markAsRead = function () {
  this.style.backgroundColor = "hsl(0, 0%, 100%)";
  this.getElementsByClassName("red-dot")[0].classList.add("hidden");
  if (notificationNumber.textContent > 0) notificationNumber.textContent--;
};

const markAllAsRead = function () {
  console.log(window);
  notificationTiles.forEach((tile) => {
    markAsRead.call(tile);
  });
};

// EVENT HANDLERS
notificationTiles.forEach((tile) => {
  tile.addEventListener("click", markAsRead.bind(tile));
});

markReadButton.addEventListener("click", markAllAsRead);

const obj = {
  A: {
    1: "first",
    second: "second",
  },

  2: 2,
  B: "hello",
  Account: "account",
};

console.log(obj);
console.log(obj.A.second);
console.log(obj["B"]);
