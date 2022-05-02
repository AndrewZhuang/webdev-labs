/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/
const setdefault = () => {
   document.querySelector("body").className = "default"
};

const setdesert = () => {
   document.querySelector("body").className = "desert"
};

const setocean = () => {
   document.querySelector("body").className = "ocean"
};

const sethighcontrast = () => {
   document.querySelector("body").className = "high-contrast"
};



document.querySelector("#default").addEventListener('click', setdefault);
document.querySelector("#desert").addEventListener('click', setdesert);
document.querySelector("#ocean").addEventListener('click', setocean);
document.querySelector("#high-contrast").addEventListener('click', sethighcontrast);