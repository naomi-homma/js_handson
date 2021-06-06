"use strict";

const ulElement = document.getElementById("list");
const liElement = document.createElement ("li");

liElement.innerHTML = "これです";
ulElement.appendChild(liElement);