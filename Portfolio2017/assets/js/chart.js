/*$(function() {
  $("#bars li .bar").each( function( key, bar ) {
    var percentage = $(this).data('percentage');
    
    $(this).animate({
      'height' : percentage + '%'
    }, 1500);
  });
});*/

$(window).scroll(function() {
  	var hT = $('#chart').offset().top,
    	hH = $('#chart').outerHeight(),
    	wH = $(window).height(),
    	wS = $(this).scrollTop();
  
  if (wS > (hT + hH - wH)) {
    
    $(function() {

    setTimeout(function(){

        $("#barHtml").each(function(key, bar) {
        var percentage = $(this).data('percentage');
        $(this).animate({
          'height': percentage + '%'
        }, 1000);
      });

    }, 100);

    setTimeout(function(){

        $("#barCss").each(function(key, bar) {
        var percentage = $(this).data('percentage');
        $(this).animate({
          'height': percentage + '%'
        }, 1000);
      });

    }, 300);

    setTimeout(function(){

        $("#barJS").each(function(key, bar) {
        var percentage = $(this).data('percentage');
        $(this).animate({
          'height': percentage + '%'
        }, 1000);
      });

    }, 500);

    setTimeout(function(){

     $("#barCreate").each(function(key, bar) {
        var percentage = $(this).data('percentage');
        $(this).animate({
          'height': percentage + '%'
        }, 1000);
      });

    }, 700);

    setTimeout(function(){

    $("#barPs").each(function(key, bar) {
        var percentage = $(this).data('percentage');
        $(this).animate({
          'height': percentage + '%'
        }, 1000);
      });

    }, 900);

    setTimeout(function(){

    $("#barAdobe").each(function(key, bar) {
        var percentage = $(this).data('percentage');
        $(this).animate({
          'height': percentage + '%'
        }, 1000);
      });

    }, 1100);


      

      

      

     

      

      
    


    });
  }
});
