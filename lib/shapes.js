const pickShape = ['circle', 'triangle', 'square', ]

class Shape{
    constructor(color){
        this.color=color;
    }

    render(){

    }
}

class Circle extends Shape {
    render(text, textColor) {

    }
}

class Triangle extends Shape {
    render(text, textColor) {

    }
}

class Square extends Shape {
    render(text, textColor) {

    }
}

module.exports= pickShape; 
module.exports= {Shape, Triangle, Circle, Square}; 
