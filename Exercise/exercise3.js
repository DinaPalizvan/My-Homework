// Write a JavaScript program to create a class called 'Rectangle' with properties for width and height.
// Include two methods to calculate rectangle area and perimeter.
// Create an instance of the 'Rectangle' class and calculate its area and perimeter.

/////////Answer!!!////////////////
class Rectangle{
    constructor(width, height){
        this.width= width;
        this.height= height
    }
    area(){
        return 2*(this.width+this.height)
    }
    perimeter(){
        return this.width*this.height
    }
}
const rectangle= new Rectangle(10, 15)
console.log(rectangle.area());
console.log(rectangle.perimeter());