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
  notificationTiles.forEach((tile) => {
    if (tile.style.backgroundColor !== "hsl(0, 0%, 100%)")
      markAsRead.call(tile);
  });
};

// EVENT HANDLERS
notificationTiles.forEach((tile) => {
  tile.addEventListener("click", markAsRead.bind(tile));
});

markReadButton.addEventListener("click", markAllAsRead);
