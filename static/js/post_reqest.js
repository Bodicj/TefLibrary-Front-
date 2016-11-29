$(document).ready(function(){
    $('#submitBtn').click(function(e){
        var post_request = $.post( "http://127.0.0.1:5000/api/v1/books?book_name="+$('#BookName').val()+"&book_author="+$('#BookAuthor').val()+"&book_tags="+$('#BookTags').val()+"&book_year="+$('#BookYear').val());
        post_request.fail( function(){
            console.log("http://127.0.0.1:5000/api/v1/books?book_name="+$('#BookName').val()+"&book_author="+$('#BookAuthor').val()+"&book_tags="+$('#BookTags').val()+"&book_year="+$('#BookYear').val());
        });
         post_request.done( function(){
            console.log("Thank you, your book was upload");
        });
         post_request.always( function(){
            console.log("Thank you");
        });
    });
});
