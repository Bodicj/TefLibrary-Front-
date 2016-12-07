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
    req.open("GET", "http://127.0.0.1:5000/api/v1/books?q="+q+"&search_by="+search_by, true);
    req.addEventListener("load", function() {
        var data = req.response;
        var i;
        var div;
        var ContainerName = "Container";
        for(i in data.books){
            var DivOutput =  "<ul>";
            DivOutput += "<li> <strong>"+ data.books[i].name+"</strong></li>" + "<li> <strong>"+ data.books[i].author[0].surname+" "+data.books[i].author[0].initials+"</strong></li>"+"<li> <strong>"+ data.books[i].year+"</strong></li>";
            ContainerName = "Container"+i.toString();
            $('#Container').append('<div id="'+ContainerName+'" class="Catalog"></div>');
            $('#'+ContainerName).append('<button id="Download" name="'+data.books[i].uri+'" onclick="Clicker()">Download</button>');
            $('#'+ContainerName).append('<div id="inform">'+DivOutput+'</div>');
        };
    });
    req.send(null);
};
function Clicker(){
        console.log("Event Started");
        console.log(event.target.name);
        var sUrl = event.target.name;
        if (sUrl.indexOf('?') === -1) {
            sUrl += '?download';
        }
        window.open(sUrl, '_self');
    };
