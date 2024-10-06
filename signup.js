    // let cross = document.getElementById("close")

    // cross.addEventListener("click", close_popup)

    // if (localStorage.getItem("details" != null)) {
    //     let persons_details = JSON.parse(localStorage.getItem("details"))
    //     localStorage.setItem("details", JSON.stringify(persons_details))
    // }

    function submitForm(e) {
        e.preventDefault();
        if (localStorage.getItem("details") == null) {
            localStorage.setItem("details", JSON.stringify([]));
        }
        const details_obj = {
            name: document.getElementById("name1").value,
            email: document.getElementById("email1").value,
            password: document.getElementById("password").value,
            image : document.getElementById("file").value,
            courses : []
        }

        let persons_details = JSON.parse(localStorage.getItem("details"))

        persons_details.push(details_obj)

        localStorage.setItem("details", JSON.stringify(persons_details))

        document.getElementById("registrationSuccess").innerHTML = "Congratulations!<br>Registration Successful"

        document.getElementById("registrationSuccess").style.color = "green"

        document.getElementById("continue").style.visibility = "visible"
        window.Location = "./coursera_login.html"
        // setTimeout(function () {
            
        // }, 1000)

        clearFields()
    }

    function clearFields() {

        document.getElementById("name1").value = ""


        document.getElementById("email1").value = ""

        document.getElementById("password").value = ""

    }