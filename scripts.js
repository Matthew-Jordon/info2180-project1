window.onload = function() {
    var btn = document.querySelector("button");
    var msg = document.getElementsByClassName("message");
    btn.addEventListener("click", function(event) {
        event.preventDefault();
        var text = document.getElementById("email").value;
        if (text != "") {
            msg[0].innerHTML = "Thank you! Your email addres " + text + " has been added to our mailing list!";
        } else {
            msg[0].innerHTML = "Please enter a valid email address";
        }
    });
}