
let currentUser = JSON.parse(localStorage.getItem("currentUser")) || null;
// var free = document.querySelectorAll('.join_free')

var free1 = document.getElementById("join_free1");
var free2 = document.getElementById("join_free2");
var free3 = document.getElementById("join_free3");

studentImage.style.visibility = "hidden";
// studentImage.alter = `Welcome back ${currentUser.name}`;
// stdImg.InnerHTML += `<p> Welcome back ${currentUser.name}</p>`

if(currentUser != null)
{
   let image = currentUser.image;
   document.getElementById("studentImage").src = "./img/" + image.split("/")[2];
   console.log(image);
   console.log(studentImage);

   free1.style.visibility = "hidden";
   free2.style.visibility = "hidden"; 
   free3.style.visibility = "hidden";  
   join.style.visibility = "hidden"

   lg.textContent = "log out"; 
   lg.addEventListener("click", function () {
      localStorage.setItem("currentUser",null);
      window.location.href = "./coursera_login.html";
   });
}
else
{
   lg.addEventListener("click", function () {
   window.location.href = "./coursera_login.html";
   });
   free1.addEventListener("click", function () {
   window.location.href = "./signup.html";
   });
   free2.addEventListener("click", function () {
   window.location.href = "./signup.html";
   });

   free3.addEventListener("click", function () {
   window.location.href = "./signup.html";
   });
}

