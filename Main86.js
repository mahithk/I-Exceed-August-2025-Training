function Shape(name) {
    this.name = name
}
Shape.prototype.getName = function () {
    return this.name
}
function Rectangle(name, width, height) {
    Shape.call(this, name)
    this.width = width
    this.height = height
}
Rectangle.prototype = Object.create(Shape.prototype)
Rectangle.prototype.constructor = Rectangle
Rectangle.prototype.getArea = function () {
    return this.width * this.height
}
let rect1 = new Rectangle("RectangleOne", 10, 20)
let rect2 = new Rectangle("RectangleTwo", 5, 15)
console.log(rect1.getName())
console.log(rect1.getArea())
console.log(rect2.getName())
console.log(rect2.getArea())
