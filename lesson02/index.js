"use strict";

const ulElement = document.getElementById("ul");
const liElement = document.createElement("li");
const anchorElement = document.createElement("a");
const imageElement = document.createElement("img");

anchorElement.textContent = "これです！";
anchorElement.href= "1.html";
imageElement.src = "bookmark.png";
imageElement.alt = "ブックマーク";

ulElement.appendChild(liElement).appendChild(anchorElement).appendChild(imageElement)

