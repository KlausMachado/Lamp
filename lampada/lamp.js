const img = document.getElementById("image");
const on = document.getElementById("on");
const off = document.getElementById("off");

function isBroken() {
  return img.src.indexOf("quebrada") > -1;
}

function turnON() {
  if (!isBroken()) {
    img.src = "./img/ligada2.jpg";
    document.body.style.backgroundColor = "#fff";
  }
}

function turnOFF() {
  if (!isBroken()) {
    img.src = "./img/desligada2.jpg";
    document.body.style.backgroundColor = "rgba(0, 0, 0, 0.74)";
  }
}

function brokenLamp() {
  img.setAttribute("src", "./img/quebrada.jpg");
}

on.addEventListener("click", turnON);
off.addEventListener("click", turnOFF);
img.addEventListener("mouseover", turnON);
img.addEventListener("mouseleave", turnOFF);
img.addEventListener("dblclick", brokenLamp);
