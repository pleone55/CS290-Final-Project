document.addEventListener("DOMContentLoaded", postForm);

function postForm() {
    document.getElementById("submit-comment-info").addEventListener('click', function(event) {
        var req = new XMLHttpRequest();
        var postSite = "http://web.engr.oregonstate.edu/~zhangluy/tools/class-content/form_tests/check_request.php";
        var payload = {
            "name": null,
            "comment": null,
        };

        payload.name = document.getElementById("name").value;
        payload.email = document.getElementById("comment").value;

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