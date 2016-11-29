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
        var data = req.response;
        var i;
        var div, btn, infodiv;
        var ContainerName = "Container";
        for(i in data.books){
            var DivOutput =  "<ul>";
            DivOutput += "<li> <strong>"+ data.books[i].name+"</strong></li>" + "<li> <strong>"+ data.books[i].author+"</strong></li>"+"<li> <strong>"+ data.books[i].year+"</strong></li>";
            DivOutput += "</ul>"
            div = document.createElement('div');
            div.className = "Catalog";
            var NumContainer = i + 1;
            div.innerHTML =DivOutput;
            document.getElementById(ContainerName).appendChild(div);
            document.getElementById(ContainerName).id = "Container"+NumContainer.toString();
            ContainerName = "Container"+NumContainer.toString();
            $('#'+ContainerName).append('<button id="Download">Download</button>');
            $('#'+ContainerName).append('<div id="inform">'+DivOutput+'</div>');
            };
        });
    req.send(null);
};
