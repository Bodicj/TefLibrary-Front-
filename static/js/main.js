$(document).ready(function(){
    $('#srchBtn').click(function(e){
        $('#logo').remove();
        $('#SearchBar').css('margin-left', '5%');
        $('#SearchBar').css('margin-top', '0px');
        $('#radioBtn').css('padding', '0px');
        //$('#AddFormButton').css('margin-top','32.9%')
    });
    $('#close-btn').click(function(e){
        $('#AddForm').css('display','none');
        $('#fade').css('display','none')
    });
    $('#AddFormButton').click(function(e){
        $('#AddForm').css('animation','anim_po 0.5s');
        $('#fade').css('animation', 'anim_op 0,5s');
        var _docHeight = (document.height !== undefined) ? document.height+16 : document.body.offsetHeight+16;
        var fadeHeight = _docHeight.toString()+'px';
        alert(fadeHeight);
        $('#fade').css('height', fadeHeight);
        $('#AddForm').css('display','block');
        $('#fade').css('display','block');
        $('#AddForm').css('top', '15%');
    });
    $('#ChangeFormButton').click(function(e){
        $('#ChangeForm').css('animation','anim_po 0.5s');
        $('#fade').css('animation', 'anim_op 0,5s');
        var _docHeight = (document.height !== undefined) ? document.height+16 : document.body.offsetHeight+16;
        var fadeHeight = _docHeight.toString()+'px';
        alert(fadeHeight);
        $('#fade').css('height', fadeHeight);
        $('#ChangeForm').css('display','block');
        $('#fade').css('display','block');
        $('#ChangeForm').css('top', '15%')
    });
    $("body").on("click", "#Download", function (event) {
        console.log(event.target.name);
        console.log("Event Started");
        var sUrl = event.target.name;
        if (sUrl.indexOf('?') === -1) {
            sUrl += '?download';
        }
        setTimeout(function(){
            window.open(sUrl, '_self');
        },10000);
    });
    $("body").on("click", "#Edit",function(e){
        $('#ChangeForm').css('animation','anim_po 0.5s');
        $('#fade').css('animation', 'anim_op 0,5s');
        $('#ChangeForm').css('display','block');
        $('#fade').css('display','block');
        $('#ChangeForm').css('top', '15%');
    });
    $('#fade').click(function(e){
        $('#AddForm').css('animation','close_anim 0.5s');
        $('#fade').css('animation', 'close_anim 0.5s');
        setTimeout(function () {
            $('#AddForm').css('display','none');
            $('#fade').css('display','none');
        }, 499);
        $('#ChangeForm').css('animation','close_anim 0.5s');
        $('#fade').css('animation', 'close_anim 0.5s');
        setTimeout(function () {
            $('#ChangeForm').css('display','none');
            $('#fade').css('display','none');
        }, 499);
    });
    $('#srchBtn').click(function(e){
        var req = new XMLHttpRequest();
        var q = document.getElementsByName("q")[0].value;
        var search_by = check();
        var offset = parseInt(active, 10) - 1;
        req.open("GET", "http://127.0.0.1:5000/api/v1/books?q="+q+"&search_by="+search_by+"offset="+offset, true);
        req.addEventListener("load", function() {
            var data = JSON.parse(req.response);
            var n = 0;
            var div, num;
            var ContainerName = "Container";
            $('#Container').remove();
            $('#wrapper').append('<div class="RootContainer" id="Container"></div>');
            for(var i in data.books){
                var Author = data.books[i].author[0].surname + data.books[i].author[0].initials;
                var BookInfo = BookInfoCreator(data.books[i].name, Author, data.books[i].year)
                var DivOutput += "<h>"+ BookInfo[0]+"</h>" + "<p>Author(s):"+ BookInfo[1]+"</p>"+BookInfo[2];
                    ContainerName = "Container"+i.toString();
                    $('#Container').append('<div id="'+ContainerName+'" class="Catalog"></div>');
                    $('#'+ContainerName).append('<button id="Download" name="'+data.books[i].uri+'">Download</button>');
                    $('#'+ContainerName).append('<div id="inform">'+DivOutput+'</div>');
                };
                console.log(data.offset);
                var DivInformation = '<ul class="pagination">'
                for( n; n<parseInt(data.offset, 10); n++){
                    var p_num = (n + 1).toString();
                      if(parseInt(p_num, 10) === 1){
                        DivInformation += '<li><a href="#" id="aPaging"class="active"  name="'+p_num+'">'+p_num+'</a></li>'
                        console.log("Yes");
                    }
                    else{
                        console.log(p_num);
                        console.log(parseInt(active, 10).toString());
                    DivInformation += '<li><a href="#" id="aPaging" name="'+p_num+'">'+p_num+'</a></li>'
                }
                }
                DivInformation += "</ul>"
                $('#wrapper').append('<div id="pagination">'+DivInformation+"</div>")
         });
    });
    $("body").on("click","#aPaging", function(event){
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
            var Author = data.books[i].author[0].surname + data.books[i].author[0].initials;
            var BookInfo = BookInfoCreator(data.books[i].name, Author, data.books[i].year)
                var DivOutput += "<h>"+ BookInfo[0]+"</h>" + "<p>Author(s):"+ BookInfo[1]+"</p>"+BookInfo[2];
                ContainerName = "Container"+i.toString();
                $('#Container').append('<div id="'+ContainerName+'" class="Catalog"></div>');
                $('#'+ContainerName).append('<button id="Download" name="'+data.books[i].uri+'" >Download</button>');
                $('#'+ContainerName).append('<div id="inform">'+DivOutput+'</div>');
            };
        $('#pagination').remove();
         var DivInformation = '<ul class="pagination">'
            for( n; n<parseInt(data.offset); n++){
               var p_num = (n + 1).toString();
                if(parseInt(p_num, 10) === parseInt(active, 10)){
                    DivInformation += '<li><a href="#" id="aPaging" class="active" name="'+p_num+'">'+p_num+'</a></li>'
                    console.log("Yes");
                }
                else{
                    console.log(p_num);
                    console.log(parseInt(active, 10).toString());
                DivInformation += '<li><a href="#" id="aPaging" name="'+p_num+'">'+p_num+'</a></li>'
            }
            }
            DivInformation += "</ul>"
            $('#wrapper').append('<div id="pagination">'+DivInformation+"</div>")
    });
    req.send(null);
    });
    function check(){
        var inp = document.getElementsByName('search_by');
        for (var i = 0; i < inp.length; i++) {
            if (inp[i].type == "radio" && inp[i].checked) {
                return inp[i].value;
            }
        }
    }
    function BookInfoCreator(Name, Author, Year){
        if(Name === null){
            Name = 'Unknown';
        }
        else{
        }
        if(Author === null || Author === undefined){
            Author = "Unknown"
        }
        else{
        }
        if(Year === null || Year === undefined){
            Year = ""
        }
        else{
            Year = "<p>Year:"+ Year+"</p>"
        }
        return BookInfo = [Name, Author, Year]
        }
});
