function GETRequest() {
        var JSONFile = $.getJSON('Book.json', function (data) {
        var n = 2;
        var div;
        var ContainerName = "Container";
        for(var i in data.books){
                var DivOutput =  "<ul>";
                DivOutput += "<li> <strong>"+ data.books[i].name+"</strong></li>" + "<li> <strong>"+ data.books[i].author[0].surname+" "+data.books[i].author[0].initials+"</strong></li>"+"<li> <strong>"+ data.books[i].year+"</strong></li>";
                ContainerName = "Container"+i.toString();
                $('#Container').append('<div id="'+ContainerName+'" class="Catalog"></div>');
                $('#'+ContainerName).append('<button id="Download" name="'+data.books[i].uri+'" onclick="Clicker()">Download</button>');
                $('#'+ContainerName).append('<div id="inform">'+DivOutput+'</div>');
            };
    });
};
function Clicker(){
        console.log("Event Started");
        console.log(event.target.name);
        var sUrl = event.target.name;
        if (sUrl.indexOf('?') === -1) {
            sUrl += '?download';
        }
    setTimeout(function(){
        window.open(sUrl, '_self');
    },10000);
    };
