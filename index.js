const inquirer = require('inquirer');
const fs = require('fs');
const { SVG } = require('@svgdotjs/svg.js')
const  answers = {text, textColor, shape, shapeColor }

inquirer.prompt(questions).then((answers)) 

let newShape;
switch (pickShape){
    case 'circle':
        newShape = new circle(shapeColor)
        break;
    case 'triangle':
        newShape = new triangle(shapeColor);
        break;
    case 'square':
        newShape = new square(shapeColor);
        break;
        default:
        break;
}

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
      choices: shapeChoices,
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter a shape color (color keyword or hexadecimal number):',
    },
  ];

