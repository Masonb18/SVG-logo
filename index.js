const inquirer = require('inquirer');
const fs = require('fs');
const { SVG } = require('@svgdotjs/svg.js')


const questions = [
    {
        type: 'input',
        name: 'character',
        message: 'Enter up to three characters',

        validate: (value) => {
            if (value.length <= 3) {
                return true;
            } else {
                return 'Enter 3 characters or less';
            }
        }
    }
]