"use strict";

const ulElement = document.getElementById("ul");
const frag = document.createDocumentFragment();

const itemList = [
    { link : 'a1.html', text: 'a1', src: "/img/bookmark.png"},
    { link : 'a2.html', text: 'a2', src: "/img/bookmark.png"}
];

itemList.forEach(function(item) {
    const liElement = document.createElement("li");
    const anchorElement = document.createElement("a");
    const imageElement = document.createElement("img");
    anchorElement.href= item.link;
    imageElement.src = item.src;
    frag.appendChild(liElement).appendChild(anchorElement).appendChild(imageElement).insertAdjacentHTML("afterend", item.text)
})

ulElement.appendChild(frag);
