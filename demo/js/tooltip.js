/* This is a script I'm still working on, don't use it just yet! */

var toolTip = document.querySelectorAll('a.em-tooltip');
var toolTipArray = Array.prototype.slice.call(toolTip,0);

toolTipArray.forEach(function(el){
    console.log(el.title);
    var div = document.createElement("div");
    div.className = "em-tooltip-box";
    var text = document.createTextNode(el.title);
    div.appendChild(text);
    el.appendChild(div);
    

    el.onmouseover=function(e){
        if (!e) var e = window.event;
        e.cancelBubble = true;
        if (e.stopPropagation) e.stopPropagation();
        
        TweenMax.to(div, .06, {
            opacity: 1,
            top: (-5 - (div.offsetHeight)),
            autoAlpha: 1,
            scaleX: 1,
            scaleY: 1,
            repeat: 0,
            ease: Power1.easeInOut
        });
    };
    el.onmouseleave=function(e){
        TweenMax.to(div, .06, {
            opacity: 0,
            autoAlpha:0,
            scaleX: 0.5,
            scaleY: 0.6,
            top: (-(div.offsetHeight) + 30),
            repeat: 0,
            ease: Power1.easeInOut
        });
    };
});