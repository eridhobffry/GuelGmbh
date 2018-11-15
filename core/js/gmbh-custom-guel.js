$(document).ready(function() {
    $('#formular-submit-button').click(function(){
        var isChecked = $('#checkFormular').is(':checked');
        if(!isChecked)
            $('#parent').append('<span style="color: red; font-size: 8px">Bitte checken</span>');
    });
});