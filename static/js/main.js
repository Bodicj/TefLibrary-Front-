$(document).ready(function(){
    $('#srchBtn').click(function(e){
        $('#logo').remove();
        $('#SearchBar').css('margin-left', '0px');
        $('#SearchBar').css('margin-top', '0px');
        //$('#AddFormButton').css('margin-top','32.9%')
    });
    $('#close-btn').click(function(e){
        $('#AddForm').css('display','none');
        $('#fade').css('display','none')
    });
    $('#AddFormButton').click(function(e){
        $('#AddForm').css('animation','anim_po 0.5s');
        $('#fade').css('animation', 'anim_op 0,5s');
        $('#AddForm').css('display','block');
        $('#fade').css('display','block');
        $('#AddForm').css('top', '15%')
    });
    $('#fade').click(function(e){
        $('#AddForm').css('animation','close_anim 0.5s');
        $('#fade').css('animation', 'close_anim 0.5s');
        setTimeout(function () {
            $('#AddForm').css('display','none');
            $('#fade').css('display','none');
        }, 499);
    });

});
