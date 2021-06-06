"use strict";

const ulElement = document.getElementById("ul");
const liElement = document.createElement("li");
const anchorElement = document.createElement("a");
const imageElement = document.createElement("img");

liElement.textContent = "これです！"
anchorElement.setAttribute("href" ,"1.html");
anchorElement
imageElement.setAttribute("src" ,"bookmark.png");
imageElement.setAttribute("alt" ,"ブックマーク");

anchorElement.appendChild(imageElement);
liElement.appendChild(anchorElement);
ulElement.appendChild(liElement);

