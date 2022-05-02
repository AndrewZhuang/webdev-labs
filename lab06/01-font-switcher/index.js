const makeBigger = () => {
   var p = document.getElementsByClassName("content")[0];

   var ps = parseInt(getComputedStyle(p).getPropertyValue('font-size')) + 5;

   ps = ps + "px";

   document.getElementsByClassName("content")[0].style.fontSize = ps;
   

   var p = document.getElementsByTagName("h1")[0];

   var ps = parseInt(getComputedStyle(p).getPropertyValue('font-size')) + 5;

   ps = ps + "px";

   document.getElementsByTagName("h1")[0].style.fontSize = ps;
};

const makeSmaller = () => {
   var p = document.getElementsByClassName("content")[0];

   var ps = parseInt(getComputedStyle(p).getPropertyValue('font-size')) - 5;

   ps = ps + "px";

   document.getElementsByClassName("content")[0].style.fontSize = ps;
   

   var p = document.getElementsByTagName("h1")[0];

   var ps = parseInt(getComputedStyle(p).getPropertyValue('font-size')) - 5;

   ps = ps + "px";

   document.getElementsByTagName("h1")[0].style.fontSize = ps;
};


document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);

