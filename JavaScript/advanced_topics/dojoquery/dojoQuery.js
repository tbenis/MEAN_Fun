/*The ability to click on an HTML element with a specific id.
The ability to hover on an HTML element with a specific id.
Make sure you wrap your code in an immediate function

$Dojo("someIdForSomeButton").click(function() { console.log("The button was clicked!") });


$Dojo("someOtherIdForSomeOtherButton").hover(function() { console.log("The button was hovered on!") });
Copy
Here are some hints that should help you get started:

$Dojo should be a function that returns an object (an HTML element object)
The object returned by the $Dojo function should have 2 added methods “click” and “hover”
The click method that you attach to the object returned by the $Dojo function should take in 1 parameter which is a callback that gets run on that event.
The hover method that you attach to the object returned by the $Dojo function should take in 2 parameters (what happens when you hover in and what happens when you hover out)
Your code should be wrapped in an immediate function that returns the $Dojo function. Here are some relevant built-in JS methods that should help:

document.getElementById // (makes a DOMobject accessible to JavaScript) takes in one parameter which is the id for a particular element
DOMobject.addEventListener //takes in 2 parameters 1) the event 2) the callback function (Note that this method must be run on an html element)
//Also note that you will need to pay attention to the following built in events from the DOM
DOMobject.click
DOMobject.mouseover
DOMobject.mouseout
*/
// (function (){
var $Dojo = function(id) {
    var self = this
    this.theId = document.getElementById(id)
    $Dojo.prototype.click = function(callback) {
        if (typeof callback === "function") {
            this.theId.attachEvent("onclick", callback())
        }
        return this
    }
    $Dojo.prototype.hover = function(hoverin, hoverout) {
        if (typeof hoverin === 'function') {
            this.theId.attachEvent("onhover", hoverin())
        }
        if (typeof hoverout === 'function') {
            this.theId.attachEvent("onhover", hoverout())
        }
        return this
    }
    return this
}
 $Dojo("benis").click(function() {
    alert('hey')
})
// })()




// $Dojo("someIdForSomeButton").click(function() { console.log("The button was clicked!") });
//
//
// $Dojo("someOtherIdForSomeOtherButton").hover(function() { console.log("The button was hovered on!") });
// }())
