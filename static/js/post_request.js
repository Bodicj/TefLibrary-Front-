$(document).ready(function(){
    $('#submitBtn').click(function(e){
       var formData = new FormData();
            formData.append('name', $('#BookName').val());
            formData.append('author', $('#BookAuthor').val());
            formData.append('tags', $('#BookTags').val());
            formData.append('year', $('#BookYear').val());
            formData.append('file', $('#Upload')[0].files[0]);
            console.log(formData);

            $.ajax({
                   url : 'http://127.0.0.1:5000/file',
                   type : 'POST',
                   data : formData,
                   processData: false,  // tell jQuery not to process the data
                   contentType: false,  // tell jQuery not to set contentType
                   success : function(data) {
                       console.log(data);
                       alert(data);
                   },
                    statusCode: {
                        404: function() {
                        alert( "page not found" );
                        }
                    }
            }).done(function( data ) {
                console.log("Book was upload");
            });
            return false;
        });
    $('#submitChangeBtn').click(function(e){
       var formData = new FormData();
            formData.append('name', $('#BookNameCH').val());
            formData.append('author', $('#BookAuthorCH').val());
            formData.append('tags', $('#BookTagsCH').val());
            formData.append('year', $('#BookYearCH').val());
            var URL =  'http://127.0.0.1:5000/file/'+$('#Edit')[0].name;
        console.log(URL);

            $.ajax({
                   url : 'http://127.0.0.1:5000/file/',
                   type : 'POST',
                   data : formData,
                   processData: false,  // tell jQuery not to process the data
                   contentType: false,  // tell jQuery not to set contentType
                   success : function(data) {
                       console.log(data);
                       alert(data);
                   },
                    statusCode: {
                        404: function() {
                        alert( "Page not found" );
                        }
                    }
            }).done(function( data ) {
                console.log("Book has changed");
            });
            return false;
        });
    });
