"use strict";

const ul = document.getElementById("ul");
const url = "https://myjson.dit.upm.es/api/bins/c42d";

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

function hideLoading() {
    const loadingImage = document.getElementById("js-loading");
    loadingImage.classList.add("loaded");
}

//jsonデータ取得
async function fetchData() {
    try {
        const response = await fetch(url);
        const json = await response.json();
        const data = await json.data;
        return data
    } catch(e) {
        throw new Error('データの読み込みに失敗しました。');
    } finally {
        console.log("finally")
    }
}

async function init() {
    createLoading();
    const result = await fetchData();
    ul.appendChild(createListDom(result));
    hideLoading();
}

init();
