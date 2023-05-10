const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Triangle, Square} = require('./lib/shapes');


const questions = [
  {
    type: 'input',
      name: 'text',
      message: 'Enter up to three characters:',
      validate: function (value) {
        const valid = /^.{1,3}$/.test(value);
        return valid || 'Please enter up to three characters.';
      },
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter a text color (color keyword or hexadecimal number):',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['circle','triangle','square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter a shape color (color keyword or hexadecimal number):',
    },
  ];
  
  inquirer.prompt(questions).then((answers)=>{
    let newShape;
    switch (answers.shape){
        case 'circle':
            newShape = new Circle(answers.text, answers.textColor, answers.shapeColor);
            break;
        case 'triangle':
            newShape = new Triangle(answers.text, answers.textColor, answers.shapeColor);
            break;
        case 'square':
            newShape = new Square(answers.text, answers.textColor, answers.shapeColor);
            break;
        default:
            break;
    }
    fs.writeFileSync("./logo.svg", newShape.render());
  });
