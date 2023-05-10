const pickShape = ['circle', 'triangle', 'square', ]



class Circle {
    constructor(text, textColor, color){
        this.color=color
        this.text= text;
        this.textColor=textColor;
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${this.color}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
    }
}

class Triangle {
    constructor(text, textColor, color){
        this.color=color
        this.text= text;
        this.textColor=textColor;
    }
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" height="200" width="300"><polygon points="150, 18 244, 182 56, 182" fill="${this.color}"></polygon><text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
    }
}

class Square {
    constructor(text, textColor, color){
        this.color=color
        this.text= text;
        this.textColor=textColor;
    }
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" height="200px" width="50%" x="50%"><rect x="10" y="10" width="30" height="30" fill="${this.color}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
       
    }
}

module.exports= {Triangle, Circle, Square}; 
