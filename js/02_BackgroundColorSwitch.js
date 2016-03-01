$(document).ready(function(){
    $('#colorPicker').ColorPicker({
        color: '#0000ff',
        onShow: function (colpkr) {
            $(colpkr).fadeIn(500);
            return false;
        },
        onHide: function (colpkr) {
            $(colpkr).fadeOut(500);
            return false;
        },
        onChange: function (hsb, hex, rgb) {
            $('#colorPicker div').css('backgroundColor', '#' + hex);
            $('.bird').css('backgroundColor', '#' + hex);
            return hex;
        },


    });
});