"use strict";

const ulElement = document.getElementById("ul");
const liElement = document.createElement ("li");

liElement.textContent = "これです";
ulElement.appendChild(liElement);