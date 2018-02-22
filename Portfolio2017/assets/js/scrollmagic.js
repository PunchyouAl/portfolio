// init controller



$(function() {
  
  var controller = new ScrollMagic.Controller();
  
  var tween1 = TweenMax.to('#logo-home-link', 0.1, {
    opacity: 1,
    left: 20,
  });
  
  var scene1 = new ScrollMagic.Scene({
    triggerElement: '#one',
    offset: 480
  })
  .setTween(tween1)
  .addTo(controller);
  
  scene1.addIndicators();
    
});