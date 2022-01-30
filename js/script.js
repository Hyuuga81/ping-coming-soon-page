const emailInput = document.querySelector(".email");
const notifyButton = document.querySelector(".notify");
const message = document.querySelector(".message");


notifyButton.addEventListener("click", function () {
    
    // const warningList = ["alert", "alert-warning"];
    // for (let item of warningList) {
    //     message.classList.add(item);
    //     console.log(item);
    // }
    
    if (emailInput.value === "") {
        message.innerText = "Please enter a valid email address.";
    }
});