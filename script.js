//============================== HEADER ==========================
let navbar = document.querySelector('nav');

navbar.addEventListener('click', (event) =>{
   navbar.querySelectorAll("div > a").forEach( el => el.classList.remove('active'));
   if (event.target.tagName == 'A') {
      event.target.classList.add('active');
   }
});

document.addEventListener('scroll', OnScroll);

function OnScroll(event){
   const curPos = window.scrollY;
   const blocks = document.querySelectorAll('body > div');
   const link = document.querySelectorAll("nav > div > a");

   blocks.forEach( (el) => {
      if (el.offsetTop <= curPos && (el.offsetTop + el.offsetHeight) > curPos) {
         link.forEach((a) => {
            a.classList.remove('active');
            if (el.getAttribute('id') === a.getAttribute('href').substring(1)) {
               a.classList.add('active');
            }
         });
      }
   });
}
//==========================SLIDER=============================
const right = document.querySelector("div.chevR");
const left = document.querySelector("div.chevL");
const slide = document.querySelector("div.slider");
const main = document.querySelector("#main");
const slide2 = document.querySelector("div.slider2");
const right2 = document.querySelector("#main > div.slider2 > div.chevR")
const left2 = document.querySelector("#main > div.slider2 > div.chevL")
right.addEventListener('click', (event) =>{
      console.log('click right');
      slide.style.display = 'none';
      slide2.style.display = 'flex';
      main.style.background = '#648bf0';
});
right2.addEventListener('click', (event) =>{
      console.log('click right');
      slide2.style.display = 'none';
      slide.style.display = 'flex';
});
left.addEventListener('click', (event) =>{
      console.log('click left');
      slide.style.display = 'none';
      slide2.style.display = 'flex';
      main.style.background = '#648bf0';
});
left2.addEventListener('click', (event) =>{
      console.log('click left');
      slide2.style.display = 'none';
      slide.style.display = 'flex';
});
//===================== PHONES ===============================

const hscreen = document.querySelector("#slider > div.horizontal__phone > div > div.screen");
let hcounter=0;
hscreen.addEventListener('click', (event) => {
   console.log('screen');
   hcounter++;
   if (hcounter%2 == 0) {
      hscreen.style.background = "url('assets/Layer 5@1X.png')";
   } else {
      hscreen.style.background = 'black';
   }
});


const vscreen = document.querySelector("#slider > div.vertical__phone > div > div.screen");
let vcounter = 0;
vscreen.addEventListener('click', (event) => {
   console.log('screen');
   vcounter++;
   if (vcounter%2 == 0) {
      vscreen.style.background = "url('assets/Layer 6@1X.png')";
   } else {
      vscreen.style.background = 'black';
   }
});

//========================== PORTFOLIO =======================

const portfolioNav = document.querySelector("#portfolio");
portfolioNav.addEventListener('click', (event) =>{
   event.preventDefault();
   portfolioNav.querySelectorAll("div.portfolio__nav > a").forEach( el => el.classList.remove('awhite'));
   if (event.target.tagName == 'A') {
      event.target.classList.add('awhite');
   }
});

var dialog = document.querySelector('dialog');
document.querySelector('#show').onclick = function() {
  dialog.show();
};
document.querySelector('#close').onclick = function() {
  dialog.close();
};
