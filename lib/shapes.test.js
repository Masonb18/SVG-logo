const {Circle, Triangle, Square} = require('./shapes');

describe("Triangle", ()=>{
    test("Should render a triangle", ()=>{
        const triangle = new Triangle("kif", "Purple", "Yellow")
        expect(triangle.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" height="200" width="300"><polygon points="150, 18 244, 182 56, 182" fill="Yellow"></polygon><text x="150" y="150" font-size="60" text-anchor="middle" fill="Purple">kif</text></svg>`)
    })
})

describe("Square", ()=>{
    test("Should render a square", ()=>{
        const square = new Square("kif", "Purple", "Yellow")
        expect(square.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" height="200px" width="50%" x="50%"><rect x="10" y="10" width="30" height="30" fill="${this.color}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`)
    })
})

describe("Circle", ()=>{
    test("Should render a circle", ()=>{
        const circle = new Circle("kif", "Purple", "Yellow")
        expect(circle.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${this.color}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`)
    })
})
