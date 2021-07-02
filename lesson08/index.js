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
    const bodyElement = document.querySelector('.body');
    bodyElement.insertAdjacentHTML('afterbegin', '<div class="loading"><img class="loading-img" src="./img/loading-circle.gif"></div></div>');
}

// function removeLoading() {
//     const loadingImage = document.querySelector(".loading");
//     // loadingImage.classList.add("loaded");
//     loadingImage.parentNode.removeChild(loadingImage);
// }

const fetchData = new Promise((resolve, reject) => {
    // const itemList = [
    //     {to: "bookmark.html", img: "1.png", alt:"画像1", text: "ブックマーク"},
    //     {to: "message.html", img: "2.png", alt:"画像2", text: "メッセージ"}
    // ];
    createLoading();
    setTimeout(function () {
        reject("データがありません！");
      }, 3000);
});

fetchData.then(() => createListDom()).catch((e) => console.log(e));
