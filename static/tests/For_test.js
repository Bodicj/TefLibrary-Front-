function GETRequest() {
        var JSONFile = $.getJSON('Book.json', function (data) {
        var n = 0;
        var div, num;
        var ContainerName = "Container";
        $('#Container').remove();
        $('#wrapper').append('<div class="RootContainer" id="Container"></div>');
        for(var i in data.books){
                var DivOutput =  "<ul id='ListInfo'>";
                DivOutput += "<li> <strong>"+ data.books[i].name+"</strong></li>" + "<li> <strong>"+ data.books[i].author[0].surname+" "+data.books[i].author[0].initials+"</strong></li>"+"<li> <strong>"+ data.books[i].year+"</strong></li>";
                ContainerName = "Container"+i.toString();
                $('#Container').append('<div id="'+ContainerName+'" class="Catalog"></div>');
                $('#'+ContainerName).append('<button id="Download" name="'+data.books[i].uri+'" onclick="Clicker()">Download</button>');
                $('#'+ContainerName).append('<div id="inform">'+DivOutput+'</div>');
            };
            var DivInformation = '<ul class="pagination">'
            for( n; n<parseInt(data.num_of_books); n++){
                console.log("pipa");
                var p_num = n + 1;
                num = p_num.toString();
                DivInformation += '<li><a href="#" onclick="Paging()" name="'+num+'">'+num+'</a></li>'
            }
            DivInformation += "</ul>"
            $('#wrapper').append('<div id="pagination">'+DivInformation+"</div>")
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
function Paging(){

         var active = event.target.name.toString();
     var JSONFile = $.getJSON('Book.json', function (data) {
         console.log("Nuum:");
         console.log(active);
    //var req = new XMLHttpRequest();
    //var q = document.getElementsByName("q")[0].value;
  //  var search_by = check();
    var offset = parseInt(active, 10) - 1;
    //req.open("GET", "http://127.0.0.1:5000/api/v1/books?q="+q+"&search_by="+search_by+"offset="+offset, true);
    //req.addEventListener("load", function() {
      //  var data = JSON.parse(req.response);
        var n=0;
        var div;
        $('#Container').remove();
        $('#wrapper').append('<div class="RootContainer" id="Container"></div>');
        var ContainerName = "Container";
        for(var i in data.books){
                var DivOutput =  "<ul>";
                DivOutput += "<li> <strong>"+ data.books[i].name+"</strong></li>" + "<li> <strong>"+ data.books[i].author[0].surname+" "+data.books[i].author[0].initials+"</strong></li>"+"<li> <strong>"+ data.books[i].year+"</strong></li>";
                ContainerName = "Container"+i.toString();
                $('#Container').append('<div id="'+ContainerName+'" class="Catalog"></div>');
                $('#'+ContainerName).append('<button id="Download" name="'+data.books[i].uri+'" onclick="Clicker()">Download</button>');
                $('#'+ContainerName).append('<div id="inform">'+DivOutput+'</div>');
            };
        $('#pagination').remove();
         var DivInformation = '<ul class="pagination">'
            for( n; n<parseInt(data.num_of_books); n++){
                console.log("pipa");
                var p_num = n + 1;
                num = p_num.toString();
                if(p_num === parseInt(active, 10)){
                    DivInformation += '<li><a href="#" class="active" onclick="Paging()" name="'+num+'">'+num+'</a></li>'
                    console.log("Yes");
                }
                else{
                    console.log(num);
                    console.log(parseInt(active, 10).toString());
                DivInformation += '<li><a href="#" onclick="Paging()" name="'+num+'">'+num+'</a></li>'
            }
            }
            DivInformation += "</ul>"
            $('#wrapper').append('<div id="pagination">'+DivInformation+"</div>")
    });
    //req.send(null);
}
