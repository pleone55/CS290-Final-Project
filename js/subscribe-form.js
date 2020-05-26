document.addEventListener("DOMContentLoaded", postForm);

function postForm() {
    document.getElementById("submit-info").addEventListener('click', function(event) {
        var req = new XMLHttpRequest();
        var postSite = "http://httpbin.org/post";
        var payload = {
            "name": null,
            "email": null,
            "package": null
        };

        payload.name = document.getElementById("name").value;
        payload.email = document.getElementById("email").value;
        
        if(document.getElementById("small").checked){
            payload.package = document.getElementById("small").value;
        } else if(document.getElementById("large").checked){
            payload.package = document.getElementById("large").value;
        } else {
            payload.package = document.getElementById("large-two").value;
        }

        req.open("POST", postSite, true);
        req.setRequestHeader("Content-Type", "application/json");
        req.addEventListener("load", function() {
            if(req.status >= 200 && req.status < 400) {
                var res = JSON.parse(JSON.parse(req.responseText).data);
                console.log(res);
            } else {
                console.log("Error")
            }
        });

        req.send(JSON.stringify(payload));
        event.preventDefault();
    });
}

function validateEmail(email) {
    const re = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if(re.test(String(email.value).toLowerCase()) === false){
        alert("Invalid email address");
        return false;
    }
    return true;
}

function successfulSubmit(){
    alert("Thank you " + document.getElementById("name").value + " for subscribing with us using the email " + document.getElementById("email").value);
}