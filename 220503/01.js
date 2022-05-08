'use strict';

let circle = {
    color: "yellow",
    diameter: 50,
    radius : function(){
        return this.diameter / 2;
    }
}

console.log(circle.radius());

function Triangle(b, h){
    this.base = b;
    this.height = h;
    this.area = function(){
        return this.base * this.height / 2;
    }
}

let triangle = new Triangle(10, 20);
console.log(triangle.area());

Triangle.prototype.color = "yellow";

console.log(triangle.color);

