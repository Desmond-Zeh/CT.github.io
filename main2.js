/* My main js code*/

let myheading=document.querySelector('h1');
let newheading="Welcome to the energy metering website!";
let finalheading=newheading.toUpperCase();
myheading.textContent=finalheading;
/* Wait for the page to be fully loaded before the image switching operation commences*/
window.onload = CommenceEvent;
let myImagesArray = ["TC.png","TT.png","SL7000.jpg","RS232.jpg","CB.png","surge.png"];
let myImageIndex = 0;
let timeInterval = 2000;
function CommenceEvent(){
document.myImages.src=myImagesArray[myImageIndex];

if(myImageIndex < myImagesArray.length - 1){
myImageIndex ++;
}
else{
ResetImages();
}
 setTimeout("CommenceEvent()", timeInterval);
 }
function ResetImages(){
myImageIndex = 0;
  }
