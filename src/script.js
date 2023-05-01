"use strict";

let notificationNumber = document.querySelector(".notif-number");
const notificationTiles = document.querySelectorAll(".notif-tile");
const notificationDesc = document.querySelector(".notif-description");
const redDot = document.querySelector(".red-dot");

notificationNumber.textContent = notificationTiles.length;

notificationTiles.forEach((tile) => {
  tile.addEventListener("click", function () {
    this.style.backgroundColor = "hsl(0, 0%, 100%)";
    this.getElementsByClassName("red-dot")[0].classList.add("hidden");
    notificationNumber.textContent--;
  });
});
