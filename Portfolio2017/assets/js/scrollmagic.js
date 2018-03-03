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

// TILTY 1 //

$(function() {

    var controllerPortfolioTilt1 = new ScrollMagic.Controller();

    var swipe = TweenMax.to('.color-swipe-blue', 1.2, {
        opacity: 1,
        right: -2200
    });

    var scene1 = new ScrollMagic.Scene({
            triggerElement: '#tilty-1',
            offset: 0
        })
        .setTween(swipe)
        .addTo(controllerPortfolioTilt1);

    scene1.addIndicators();

});

$(function() {

    var controllerPortfolioTiltWhite1 = new ScrollMagic.Controller();

    var swipeWhite = TweenMax.to('.color-swipe-white', 1, {
        opacity: 1,
        right: -1000
    });

    var scene1 = new ScrollMagic.Scene({
            triggerElement: '#tilty-1',
            offset: 0
        })
        .setTween(swipeWhite)
        .addTo(controllerPortfolioTiltWhite1);

    scene1.addIndicators();

});

$(function() {

    var controllerPortfolioAddShadow1 = new ScrollMagic.Controller();

    new ScrollMagic.Scene({ triggerElement: "#tilty-1" })
        .setClassToggle(".c-logo", "c-logo-shadow")
        .addTo(controllerPortfolioAddShadow1);

});

// TILTY 2 //

$(function() {

    var controllerPortfolioTilt2 = new ScrollMagic.Controller();

    var swipe = TweenMax.to('.color-swipe-blue2', 1.2, {
        opacity: 1,
        right: -3200
    });

    var scene1 = new ScrollMagic.Scene({
            triggerElement: '#tilty-2',
            offset: 0
        })
        .setTween(swipe)
        .addTo(controllerPortfolioTilt2);

    scene1.addIndicators();

});

$(function() {

    var controllerPortfolioTiltWhite2 = new ScrollMagic.Controller();

    var swipeWhite = TweenMax.to('.color-swipe-white2', 1, {
        opacity: 1,
        right: -1000
    });

    var scene1 = new ScrollMagic.Scene({
            triggerElement: '#tilty-2',
            offset: 0
        })
        .setTween(swipeWhite)
        .addTo(controllerPortfolioTiltWhite2);

    scene1.addIndicators();

});

$(function() {

    var controllerPortfolioAddShadow2 = new ScrollMagic.Controller();

    new ScrollMagic.Scene({ triggerElement: "#tilty-2" })
        .setClassToggle(".c-logo", "c-logo-shadow")
        .addTo(controllerPortfolioAddShadow2);

});