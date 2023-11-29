//oop - object oriented programming

//polimorfisme
class Shape{
    area() {
        return 0;
    }
}

class Circle extends Shape{
    constructor(radius) {
        super(); // super ada jika ingin menambahkan property baru
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
}

const shapes= [new Rectangle(3, 5), new Circle(5)]

shapes.forEach(shape => {
    console.log(`area of shape ${shape.area()}`);
})