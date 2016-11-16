function Search () {
    var JSONFile = $.getJSON('data.json', function (data) {
    var n = 2;
    var div;
    var ContainerName = "Container";
    for(var i in data.books){
        var DivOutput =  "<ul>";
        DivOutput += "<li> <strong>"+ data.books[i].name+"</strong>";
        DivOutput += "</ul>"
        div = document.createElement('div');
        div.className = "Catalog";
        var NumContainer = i + 1;
        div.innerHTML =DivOutput;
        document.getElementById(ContainerName).appendChild(div);
        document.getElementById(ContainerName).id = "Container"+NumContainer.toString();
        ContainerName = "Container"+NumContainer.toString();
        };
});
};
