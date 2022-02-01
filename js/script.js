const emailInput = document.querySelector(".email");
const notifyButton = document.querySelector(".notify");
const message = document.querySelector(".message");


notifyButton.addEventListener("click", function () {
    
    if (emailInput.value === "") {
        message.innerHTML = `<p >Please enter a valid email address.</p><style>p {padding-bottom: 15px;font-size: .8em;}</style>`; 
    }
});

// function to validate email
// Use regular expressions
// /\S+@\S+\.\S+/ - to prevent these from being used.
// /^[^\s@]+@[^\s@]+\.[^\s@]+$/ - to prevent you from using the same symbols twice

