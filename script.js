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
