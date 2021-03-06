"use strict";

const ul = document.getElementById("ul");

function createListDom(itemList) {
    const frag = document.createDocumentFragment();

    itemList.forEach(function(item) {
        const li = document.createElement("li");
        const anchor = document.createElement("a");
        const image = document.createElement("img");
        anchor.href= `/${item.to}`;
        anchor.textContent = item.text;
        image.src = item.img;
        image.alt = item.alt;
        frag.appendChild(li).appendChild(anchor).appendChild(image)
    });

    return frag;
}

function createLoading() {
    const loadingImgWrap = document.createElement("div");
    const image = document.createElement("img");
    loadingImgWrap.id = "js-loading";
    loadingImgWrap.classList.add("loading");
    image.src = "./img/loading-circle.gif";
    image.classList.add("loading-img");
    loadingImgWrap.appendChild(image);
    ul.before(loadingImgWrap);
}

function removeLoading() {
    const loadingImage = document.getElementById("js-loading");
    loadingImage.classList.add("loaded");
}

async function fetchData() {
    const itemList = [
        {to: "bookmark.html", img: "1.png", alt:"画像1", text: "ブックマーク"},
        {to: "message.html", img: "2.png", alt:"画像2", text: "メッセージ"}
    ];
    const result = await new Promise((resolve) => setTimeout(function () {
        resolve(itemList)
      }, 3000));
    ul.appendChild(createListDom(result));
    removeLoading();
}

createLoading();
fetchData();
