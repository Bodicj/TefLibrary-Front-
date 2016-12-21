function check()
{
    var inp = document.getElementsByName('search_by');
    for (var i = 0; i < inp.length; i++) {
        if (inp[i].type == "radio" && inp[i].checked) {
            return inp[i].value;
        }
    }
}

$('#'+ContainerName).append('<button id="Edit" name="'+data.books[i].id+'" onclick="Editor()">Edit</button>');

function CheckData( Name, Author, Tags, Year, Data){
   if(Data.books[i].name === null) {
       Name = 'Unknown';
       if (Data.books[i].aunthor[0].surname === null){
           Author = "Unknown";
           if(Data.books[i].tags === null){

           }
       }
   }


};
function GETRequest () {
    var req = new XMLHttpRequest();
    var q = document.getElementsByName("q")[0].value;
    var search_by = check();
    req.open("GET", "http://127.0.0.1:5000/api/v1/books?q="+q+"&search_by="+search_by+"offset="+offset, true);
    req.addEventListener("load", function() {
        var data = JSON.parse(req.response);
        var n=2;
        var div;
        $('#Container').remove();
        $('#wrapper').append('<div class="RootContainer" id="Container"></div>');
        var ContainerName = "Container";
        for(var i in data.books){
                var DivOutput =  "<ul>";
            if(data.books[i].year   )
                DivOutput += "<li> <strong>"+ data.books[i].name+"</strong></li>" + "<li> <strong>"+ data.books[i].author[0].surname+" "+data.books[i].author[0].initials+"</strong></li>"+"<li> <strong>"+ data.books[i].year+"</strong></li>";
                ContainerName = "Container"+i.toString();
                $('#Container').append('<div id="'+ContainerName+'" class="Catalog"></div>');
                $('#'+ContainerName).append('<button id="Download" name="'+data.books[i].uri+'" onclick="DownloadBook()">Download</button>');
                $('#'+ContainerName).append('<div id="inform">'+DivOutput+'</div>');
            };
             console.log(data.offset);
            var DivInformation = '<ul class="pagination">'
            for( n; n<parseInt(data.offset, 10); n++){
                var p_num = (n + 1).toString();
                  if(parseInt(p_num, 10) === 1){
                    DivInformation += '<li><a href="#" class="active" onclick="Paging()" name="'+p_num+'">'+p_num+'</a></li>'
                    console.log("Yes");
                }
                else{
                    console.log(p_num);
                    console.log(parseInt(active, 10).toString());
                DivInformation += '<li><a href="#" onclick="Paging()" name="'+p_num+'">'+p_num+'</a></li>'
            }
            }
            DivInformation += "</ul>"
            $('#wrapper').append('<div id="pagination">'+DivInformation+'</div>');
    });
    req.send(null);
};
function DownloadBook(){
        console.log("Event Started");
        console.log(event.target.name);
        var sUrl = event.target.name;
        if (sUrl.indexOf('?') === -1) {
            sUrl += '?download';
        }
        window.open(sUrl, '_self');
    };
function Paging(){
    var active = event.target.name.toString();
    var req = new XMLHttpRequest();
    var q = document.getElementsByName("q")[0].value;
    var search_by = check();
    var offset = parseInt(active, 10) - 1;
    req.open("GET", "http://127.0.0.1:5000/api/v1/books?q="+q+"&search_by="+search_by+"offset="+offset, true);
    req.addEventListener("load", function() {
        var data = JSON.parse(req.response);
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
            for( n; n<parseInt(data.offset); n++){
               var p_num = (n + 1).toString();
                if(parseInt(p_num, 10) === parseInt(active, 10)){
                    DivInformation += '<li><a href="#" class="active" onclick="Paging()" name="'+p_num+'">'+p_num+'</a></li>'
                    console.log("Yes");
                }
                else{
                    console.log(p_num);
                    console.log(parseInt(active, 10).toString());
                DivInformation += '<li><a href="#" onclick="Paging()" name="'+p_num+'">'+p_num+'</a></li>'
            }
            }
            DivInformation += "</ul>"
            $('#wrapper').append('<div id="pagination">'+DivInformation+"</div>")
    });
    req.send(null);
}

