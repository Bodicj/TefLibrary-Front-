$(document).ready( function Search () {
    var n = 10;
    var div;
    var ContainerName = "Container";
    for(i = 0; i < n; i++){
        div = document.createElement('div');
        div.className = "Catalog";
        var NumContainer = i + 1;    
        div.innerHTML = "Book   ";
        document.getElementById(ContainerName).appendChild(div);
        document.getElementById(ContainerName).id = "Container"+NumContainer.toString(); 
        ContainerName = "Container"+NumContainer.toString();
        }
});