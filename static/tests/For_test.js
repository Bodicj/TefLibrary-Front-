$(document).ready(function(){
    var JSONFile = $.getJSON('Book.json', function (data) {
    var n = 2;
    var div;
    var ContainerName = "body";
    for(var i in data.books){
            var DivOutput =  "<ul>";
            DivOutput += "<li> <strong>"+ data.books[i].name+"</strong></li>" + "<li> <strong>"+ data.books[i].author[0].surname+" "+data.books[i].author[0].initials+"</strong></li>"+"<li> <strong>"+ data.books[i].year+"</strong></li>";
            ContainerName = "Container"+i.toString();
            $('#body').append('<div id="'+ContainerName+'" class="Catalog"></div>');
            $('#'+ContainerName).append('<button id="Download">Download</button>');
            $('#'+ContainerName).append('<div id="inform">'+DivOutput+'</div>');
        };
});
});
