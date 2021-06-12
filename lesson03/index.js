"use strict";

const ulElement = document.getElementById("ul");
const frag = document.createDocumentFragment();

const itemList = [
    { link : 'a1.html', text: 'a1', src: "/img/bookmark.png"},
    { link : 'a2.html', text: 'a2', src: "/img/bookmark.png"}
];

for(var i = 0, len = itemList.length; i < len; i++) {
    //nodeを作成していく処理
    let list = itemList[i];
    const liElement = document.createElement("li");
    const anchorElement = document.createElement("a");
    const imageElement = document.createElement("img");
    anchorElement.href= list.link;
    anchorElement.textContent = list.text;
    imageElement.src = list.src;
    frag.appendChild(liElement).appendChild(anchorElement).appendChild(imageElement)
}

ulElement.appendChild(frag);