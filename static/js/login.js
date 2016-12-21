$(document).ready(function(){
    $('#LogInBtn').click(function(e){
         var formData = new FormData();
            formData.append('username', $('#login-name').val());
            formData.append('password', $('#login-pass').val());
            $.ajax({
                   url : 'http://127.0.0.1:5000/login',
                   type : 'POST',
                   data : formData,
                   processData: false,  // tell jQuery not to process the data
                   contentType: false,  // tell jQuery not to set contentType
                   success : function(data) {
                       console.log(data);
                       alert(data);
                   },
                    statusCode: {
                        200: function() {
                        window.location = "http://127.0.0.1:5000/"
                        }
                    }
            }).done(function( data ) {
                console.log("Book has changed");
            });
            return false;
    });
});
