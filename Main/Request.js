function check()
{
    var inp = document.getElementsByName('search_by');
    for (var i = 0; i < inp.length; i++) {
        if (inp[i].type == "radio" && inp[i].checked) {
            return inp[i].value;
        }
    }
}

function GETRequest () {
    var req = new XMLHttpRequest();
    var q = document.getElementsByName("q")[0].value;
    var search_by = check();
    req.open("GET", "http://localhost:5000/api/v1/books?q="+q+"&search_by="+search_by, true);
    req.addEventListener("load", function() {
    console.log("Done:", req.status);
    });
    req.send(null);
}
