$( ".letterB" ).mouseenter(function() {
  $(this).removeClass("flicker");
  $(this).css("opacity", "1");
});

$( ".letterB" ).mouseout(function() {
  $(this).css("opacity", "0.2");
});