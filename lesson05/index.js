"use strict";

function createListDom(itemList) {
    const ulElement = document.getElementById("ul");
    const frag = document.createDocumentFragment();

    itemList.forEach(function(item) {
        const liElement = document.createElement("li");
        const anchorElement = document.createElement("a");
        const imageElement = document.createElement("img");
        anchorElement.href= `/${item.to}`;
        anchorElement.textContent = item.text;
        imageElement.src = item.img;
        imageElement.alt = item.alt;
        frag.appendChild(liElement).appendChild(anchorElement).appendChild(imageElement)
    });
    ulElement.appendChild(frag);
}

const fetchData = new Promise((resolve) => {
    const itemList = [
        {to: "bookmark.html", img: "1.png", alt:"画像1", text: "ブックマーク"},
        {to: "message.html", img: "2.png", alt:"画像2", text: "メッセージ"}
    ];
    resolve(itemList);
});

fetchData.then((itemList) => createListDom(itemList));
