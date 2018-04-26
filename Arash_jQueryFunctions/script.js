$(document).ready(function() {

    $('#addClass input').click(function() {
        $("#addClass p").addClass("red");
    });

    $("#slideToggle input").click(function() {
        $("#slideToggle img").slideToggle(1000);
    });

    $('#btnToggle').click(function(){
        $('#hideShow img').toggle();
    });

    $('#btnHide').click(function(){
        $('#hideShow img').hide();
    });

    $('#btnShow').click(function(){
        $('#hideShow img').show();
    });

    $('#btnSlideDown').click(function() {
        $('#slideUpDown img').slideDown(500);
    });

    $('#btnSlideUp').click(function() {
        $('#slideUpDown img').slideUp(1000);
    });

    $('#btnFadeIn').click(function() {
        $('#txtFade').fadeIn(1500);
    });

    $('#btnFadeOut').click(function() {
        $('#txtFade').fadeOut(1000);
    });

    $('#btnBefore').click(function() {
        $('#listBeforeAfter').before('<p>this is before, but is outside of div</p>');
    });

    $('#btnAfter').click(function() {
        $('#listBeforeAfter').after('<p>this is after, but is outside of div</p>');
    });

    $('#btnPrepend').click(function() {
        $('#listBeforeAfter').prepend('<p>this is prepend, so it is inside the div</p>');
    });

    $('#btnAppend').click(function() {
        $('#listBeforeAfter').append('<p>this is Append, so it is inside the div</p>');
    });

    $('#btnCheck1').click(function() {
        var dVal = $(this).attr('value');

        $('#alterAttribute h1').before('<h4>' + dVal + '</h4>');
        $('#alterAttribute h1').before('<h3>' + $(this).val() + '</h3>');

    });

    $('#btnCheck2').click(function() {
        var dVal = $('#myCheckBox').attr('checked');
        
        if (dVal === undefined)
            dVal = false;

        $('#myCheckBox').attr('checked', !dVal);
    });

    $('#altHtml').click(function() {
        $('#altHtml .contentBox').html("<h3>NOW YOU DON'T!<h3/>");
    });

    $('#btnText').click(function() {
        $('#placeHolder').text($('#theText').text());
    });

    $("button").click(function() {
        var value;
       
        switch ($("button").index(this)) {
          case 0:
            value = $("div").data("data");
            break;
          case 1:
            $("div").data("data", "hello");
            value = "Stored!";
            break;
          case 2:
            $("div").data("data", 2018);
            value = "Stored!";
            break;
          case 3:
            $("div").removeData("data");
            value = "Removed!";
            break;
        }
       
        $("span").text("" + value);
      });

});
