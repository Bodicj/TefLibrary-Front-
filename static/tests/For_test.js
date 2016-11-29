$(document).ready(function(){
    for( var i = 0; i<5; i++){
        var id = '#Main'+i;
        $("#body").append('<div id="Main'+i+'"'+' class="Main"></div>')
        $(id).append('<button id="Download">Download</button>');
        $(id).append('<div id="inform">InnerHTML</div>');
    };
});
