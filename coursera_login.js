// clear or reset the form fields
function clearFields() 
{
  document.getElementById("personEmail").value = "";
  document.getElementById("password").value = "";
}

let loginButton = document.getElementById("loginbtn");
// localStorage.details

let currentUser ;
loginButton.addEventListener('click',function(e) {
        e.preventDefault();
        let details = JSON.parse(localStorage.getItem("details")) || [];
        var flag = 0;
        details.forEach((element) => {
            let email = document.getElementById("personEmail").value;
            console.log("email:", email);

            let password = document.getElementById("password").value;


            if (element.email == email && element.password == password) {
                currentUser = element;
                flag = 1;
            } 
            else {
                flag = 2;
            }
        });

        if (flag == 1) 
            {
                document.getElementById("loginResult").innerHTML = "*Login successful!";
                document.getElementById("loginResult").style.color = "green";
                document.getElementById("continue").style.visibility = "visible";

                localStorage.setItem("currentUser", JSON.stringify(currentUser));
                localStorage.setItem("login", JSON.stringify(true));

                window.location = "index.html";
                clearFields();
            } 
        else if (flag == 2) 
            {
                document.getElementById("loginResult").innerHTML = "Wrong Email or wrong Password!";
                document.getElementById("loginResult").style.color = "red";
                clearFields();
            }

})

// let createAcount = document.getElementById("createAcountbtn");

// createAcount.addEventListener('click', function () {
//     window.location = "signup.html";
// })