const emailInput = document.querySelector(".email");
const notifyButton = document.querySelector(".notify");
const message = document.querySelector(".message");


notifyButton.addEventListener("click", function () {
   validateEmail(); 

});

//Validation function 
const validateEmail = function () {
    // const regularExpression = /^([a-z]+)@([a-zA-Z0-9\._]+)\.([a-z]+)([\.]?)/;
    const regularExpression = /^([a-z\d\.-]+)@([a-z\d]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/

    //else if match regular expression, return true. 
    if (!emailInput.value.match(regularExpression)) {
        message.innerHTML = `<p>Please provide a valid email address.</p>`;
        message.classList.remove("email-border");
        message.classList.add("error-border");
        
    } 
    //else if doesnt match regular expression, this email is invalid
    else {
        emailInput.value = "";
        message.innerText = "";
    }
}
