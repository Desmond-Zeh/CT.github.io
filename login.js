/* Welcome message code */
let mybutton = document.querySelector("button");
let headingreplace = document.querySelector("h2");

/* Start function*/
function startCode(){
 let myName = prompt("please enter your username! Note, username can be any string other than digits (e.g 1,2,3,4)");

 // Verify the availability of my prompt content
if(!myName){
 startCode();
}
 else{
  myNameContVer();
 }

 // Verify the content of my prompt
 function myNameContVer(){
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
 let mypassword = prompt('Please enter main password! Note, the main password is the string (desmond)');
 
 /// Verify the availability of the prompt content
 if(!mypassword){
  myPassWord();
 }
 else{
  mypassContVer();
 }

 ///Verify the content of mypassword prompt
 function mypassContVer(){
 const passWord = ['love'];
  if(!mypassword = passWord){
   myPassWord();
  }
  else{
   localStorage.getItem('Name', myName);
     }
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
mybutton.onclick = function(){
 startCode();
}
   
