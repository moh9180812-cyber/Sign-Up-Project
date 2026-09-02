let loginBtn = document.querySelector(".wel-registration .btn-2");
let regiBtn  = document.querySelector(".wel-login .btn-1"); 

let eleLogin = document.querySelector(".wel-login");
let eleRegi = document.querySelector(".wel-registration");

let box = document.querySelector(".box");

let btnR = document.querySelector(".box .btn-R");
let btnL = document.querySelector(".box .btn-L");

let boxR = document.querySelector(".box .registration-box");
let boxL = document.querySelector(".box .login-box");


regiBtn.onclick = function () {
    box.classList.add("move");
    box.classList.remove("back");
    eleLogin.style = "transform: translatex(-100%)";
    eleRegi.style = "transform: translatex(100%)";
};
loginBtn.onclick = function () {
    box.classList.remove("move");
    box.classList.add("back");
    eleLogin.style = "transform: translatex(0)";
    eleRegi.style = "transform: translatex(200%)";
};

btnR.onclick = function () {
    btnR.style = "left: -110px";
    btnL.style = "right: 0";
    boxR.style = "left: 0";
    boxL.style = "right: -100%"
}
btnL.onclick = function () {
    btnR.style = "left: 0";
    btnL.style = "right: -100px";
    boxR.style = "left: -110";
    boxL.style = "right: 0"
}