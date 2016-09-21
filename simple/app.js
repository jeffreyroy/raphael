$(document).ready(function () {
  showCircle();
});



// top left of canvas at the viewport's 10,50 coordinate
// var paper = Raphael(10, 50, 320, 200);

// top left of canvas at the  top left corner of the #example element (in elements where dir="ltr")
// var r = Raphael(document.getElementById("example"), 320, 200);

// same as above
// var r = Raphael("example", 320, 200);

// var circle = paper.circle(50, 40, 10);

var showCircle = function() {
// Creates canvas 320 × 200 at 10, 50
var paper = Raphael(300, 200, 320, 200);

// Creates circle at x = 50, y = 40, with radius 10
var circle = paper.circle(100, 100, 50);
// Sets the fill attribute of the circle to red (#f00)
circle.attr("fill", "#f00");

// Sets the stroke attribute of the circle to white
circle.attr("stroke", "#fff");
}
