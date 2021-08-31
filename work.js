let myBody = document.querySelector("body");
let mysection = document.querySelector("section");
let myHead = document.querySelectorAll("h3");
let myImg = document.querySelectorAll("h3 img");
let myP = document.querySelectorAll(".son p");
console.log(myBody.clientWidth)
if(myBody.clientWidth >= 600) {
    let myImage = document.createElement("img");
    myImage.src = "images/illustration-box-desktop.svg";
    myBody.insertBefore(myImage,myBody.children[0]);
}else if (myBody.clientWidth < 600){
    mysection.removeChild(mysection.children[0]);
    let myImage = document.createElement("img");
    myImage.src = "images/illustration-woman-online-mobile.svg";
    myBody.insertBefore(myImage,myBody.children[0]);
}

for ( let i = 0 ; i < myHead.length ; i++) {
    myHead[i].onclick = function() {
        myHead[i].classList.toggle("click");
        myImg[i].classList.toggle("rotate");
        myP[i].classList.toggle("appear");
    };
}