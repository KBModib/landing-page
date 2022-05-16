//js for slide
let currentScrollPosition = 0;
let scrollAmount = 400;
const  sCont = document.querySelector(".booklist");
const hScroll = document.querySelector(".horizontal-scroll");
const btnScrollLeft = document.querySelector("#btn-scroll-left");
const btnScrollRight = document.querySelector("#btn-scroll-right");
btnScrollLeft.style.opacity = "0";

let maxScroll = -sCont.offsetWidth + hScroll.offsetWidth;
 function scrollHorizontally(val){
     currentScrollPosition += (val * scrollAmount);
     sCont.style.left = currentScrollPosition + "px";
     if(currentScrollPosition >= 0){
          currentScrollPosition = 0
          btnScrollLeft.style.opacity = "0";
     }
     else{
       btnScrollLeft.style.opacity = "1";
     }
     if(currentScrollPosition <= maxScroll){
         currentScrollPosition = maxScroll;
         btnScrollRight.style.opacity = "0";
     }
     else{
       btnScrollRight.style.opacity = "1";
     }
     sCont.style.left=currentScrollPosition + "px"; 
 }
  

