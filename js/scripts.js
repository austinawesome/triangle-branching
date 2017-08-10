$(document).ready(function()  {
var side1 = parseInt(prompt("side1? In inches"));
var side2 = parseInt(prompt("side2? In inches"));
var side3 = parseInt(prompt("side3? In inches"));
  if (side1===side2 && side2===side3) {
    alert("you have an Equilateral All sides are equal.")}
      else if (side1===side2 || side1===side3 || side2===side3) {
      alert("you have an isosceles");
    }
   else if
      (side1+side2===side3 || side1+side3===side2 || side3+side2===side1 ) {
      alert("you gotta scalene, YO");
    }
    else
      alert("thats not a triangle");
 })
