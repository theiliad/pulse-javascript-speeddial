/* Pulse JS (alpha 1.0) | MIT */

var spdButton = document.getElementById("em-Spd-button");
var actionsDiv = document.getElementById("em-Spd-actions");

var actions = document.querySelectorAll('.em-Spd-action');
var actionsArray = Array.prototype.slice.call(actions,0);

var spdButtonClicked = false

spdButton.onclick=function(){
    if (!spdButtonClicked) {
        var animationTime = 0.25 + (actionsArray.length * 0.04);
    
        actionsArray.forEach(function(el) {
            TweenMax.to(el, animationTime, {
                opacity: 1,
                autoAlpha: 1,
                x: 0,
                repeat: 0,
                yoyo: true,
                ease: Power4.easeIn
            });

            animationTime = animationTime - 0.08;
        });
        
        spdButtonClicked = true
    }
    else if (spdButtonClicked) {
        var animationTime = 0.25 + (actionsArray.length * 0.04);
    
        actionsArray.forEach(function(el) {
            TweenMax.to(el, animationTime, {
                opacity: 0,
                autoAlpha: 0,
                x: -100,
                repeat: 0,
                yoyo: true,
                ease: Power2.easeIn
            });

            animationTime = animationTime - 0.08;
        });
        
        spdButtonClicked = false
    }
};