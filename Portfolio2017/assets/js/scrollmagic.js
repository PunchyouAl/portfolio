// init controller



$(function() {

    var controller = new ScrollMagic.Controller();

    var tween1 = TweenMax.to('#logo-home-link', 0.3, {
        opacity: 1,
        left: 20,
    });

    var scene1 = new ScrollMagic.Scene({
            triggerElement: '#one',
            offset: 0
        })
        .setTween(tween1)
        .addTo(controller);

    scene1.addIndicators();

});










$(function() {

    var controllerPortfolioTilt = new ScrollMagic.Controller();

    var swipe = TweenMax.to('.color-swipe-blue', 1, {
        opacity: 1,
        right: -1000
    });

    var scene1 = new ScrollMagic.Scene({
            triggerElement: '#tilty-1',
            offset: 0
        })
        .setTween(swipe)
        .addTo(controllerPortfolioTilt);

    scene1.addIndicators();

});

$(function() {

    var controllerPortfolioTiltWhite = new ScrollMagic.Controller();

    var swipeWhite = TweenMax.to('.color-swipe-white', 1, {
        opacity: 1,
        right: -1000
    });

    var scene1 = new ScrollMagic.Scene({
            triggerElement: '#tilty-1',
            offset: 0
        })
        .setTween(swipeWhite)
        .addTo(controllerPortfolioTiltWhite);

    scene1.addIndicators();

});

$(function() {

    var controllerPortfolioAddShadow = new ScrollMagic.Controller();

    new ScrollMagic.Scene({ triggerElement: "#tilty-1" })
        .setClassToggle(".c-logo", "c-logo-shadow")
        .addTo(controllerPortfolioAddShadow);

});