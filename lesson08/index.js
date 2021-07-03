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

function createLoading() {
    const ulElement = document.getElementById("ul");
    const loadingImgWrapElement = document.createElement("div");
    const img = document.createElement("img");
    loadingImgWrapElement.classList.add("js-loading");
    img.src = "./img/loading-circle.gif";
    img.classList.add("loading-img");
    loadingImgWrapElement.appendChild(img);
    ulElement.before(loadingImgWrapElement);
  }

const fetchData = new Promise((resolve, reject) => {
    createLoading();
    setTimeout(function () {
        reject("データがありません！");
      }, 3000);
});

fetchData.then(() => createListDom()).catch((e) => console.log(e));
