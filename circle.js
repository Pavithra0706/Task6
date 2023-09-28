// 1) https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md

class Circle {
    constructor(radius = 1.0, color = "red") {
        this.radius = radius;
        this.color = color;
    }

    toString() {
        return `Circle - radius: ${this.radius}, color: ${this.color}`;
    }

    setRadius(radius) {
        this.radius = radius;
    }

    getRadius() {
        return `The radius by get and set is ${this.radius}`;
    }

    setColor(color) {
        this.color = color;
    }

    getColor() {
        return `The color by get and set is ${this.color}`;
    }

    getArea() {
        return `The area is ${(Math.PI * this.radius * this.radius).toFixed(2)}`;
    }

    getCircumference() {
        return `The circumference is ${(2 * Math.PI * this.radius).toFixed(2)}`;
    }
}

let bangle = new Circle(6, "black");

console.log(bangle.toString());

bangle.setRadius(5);
console.log(bangle.getRadius());

bangle.setColor("white");
console.log(bangle.getColor());

console.log(bangle.toString());
console.log(bangle.getArea());
console.log(bangle.getCircumference());
