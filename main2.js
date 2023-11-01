/* My main js code*/

/* Wait for the page to be fully loaded before the image switching operation commences*/
window.onload = () =>{
 CommenceEvent();
};
/* Declare the main variables to be used in this program */
let myImagesArray = ["TC.png","TT.png","SL7000.jpg","RS232.jpg","CB.png","surge.png"];
let myImageIndex = 0;
let timeInterval = 2000;
/* CommenceEvent main function*/
function CommenceEvent(){
document.myImages.src=myImagesArray[myImageIndex];

if(myImageIndex < myImagesArray.length - 1){   /// Verify if the myImageIndex is equal to the last array index
myImageIndex ++;
}
else{
ResetImages();
}
 setTimeout("CommenceEvent()", timeInterval);//// Set the time delay to 2s
 }

/* My main reset function*/
function ResetImages(){
myImageIndex = 0;
  }
/* Open a new window to display the following document links when clicked on the DOCUMENT tab in the Navigation bar*/

let mydoc = document.getElementById("myDoc");
mydoc.onclick = () =>{
window.location.replace("https://desmond-zeh.github.io/Des.github.io/");
};
 let myhom = document.getElementById("home");
myhom.onclick = () =>{
window.location.replace("");
};

/* Welcome message code */
let myButton = document.querySelector('button');
let headingreplace = document.querySelector('h2');

/* Start function*/
function startCode(){
 let myName = prompt('please enter your username! Note, username can be any string other than digits (e.g 1,2,3,4)');

 // Verify the availability of my prompt content
if(!myName){
 startCode();
}
 else{
  myNameContVer();
 }

 // Verify the content of my prompt
 let myNumber = Number(myName);
 if(!Number.isNaN(myNumber)){
  startCode();
 }
 else{
  localStorage.setItem('Name', myName);
  headingreplace.textContent = 'Welcome,' + myName;
  myPassWord();
 }

/// My password function
function myPassWord(){
 let mypassword = prompt('Please enter main password! Note, the main password is (love)');
 
 /// Verify the availability of the prompt content
 if(!mypassword){
  myPassWord();
 }
 else{
  mypassContVer();
 }

 ///Verify the content of mypassword prompt
 function mypassContVer(){
  let passWord = [love];
  if(!mypassword = passWord){
   myPassWord();
  }
  else{
   localStorage.getItem('Name');
   Saved()
  }
 }
}
}
/// Verify the content of the localStorage
If (!localStorage.getItem('Name')){
 startCode();
}
else{
let SavedName = localStorage.getItem('Name');
headingreplace.textContent = 'Welcome,' + SavedName;
}
/// my button function
myButton.onclick = () =>{
 startCode();
}
   
  
