//Require the inquirer package
const inquirer = require("inquirer");
//Require fs
const fs = require("fs");
//Require our classes from shapes.js
const { Circle, Square, Triangle } = require("./lib/shapes.js");

//Use Inquirer to prompt the user to provide the following information:
inquirer
// WHEN I am prompted for text THEN I can enter up to three characters
  .prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter three characters for the SVG logo text',
      maxLength: 3,
    },
    // WHEN I am prompted for the text color THEN I can enter a color keyword (OR a hexadecimal number)
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter a color code in hexadecimal format i.e. #FFFFFF (white) #000000 (black)',
      //the following code was created by referencing the inquirer documentation for validate
      validate: (val) => {
        //regex expression checks for hex code (limit digits to 0-9 and letters to a-f 
        if (!/^#[0-9a-f]{6}$/i.test(val)) {
          return 'That is not a hex code please try again';
        }
        return true;
      }
    },
    //WHEN I am prompted for a shape THEN I am presented with a list of shapes to choose from: circle, triangle, and square
    //the following code was constructed while referencing student activity 20
    {
      type: 'list',
      message: 'Choose a shape',
      name: 'shape',
      choices: ['circle', 'square', 'triangle'],
    },
])
//This code is from the inquirer documentation page: https://www.npmjs.com/package/inquirer
.then((answers) => {
  // Use user feedback for... whatever!!
})
.catch((error) => {
  if (error.isTtyError) {
    // Prompt couldn't be rendered in the current environment
  } else {
    // Something else went wrong
  }
});




// WHEN I am prompted for the shape's color THEN I can enter a color keyword (OR a hexadecimal number)

// WHEN I have entered input for all the prompts THEN an SVG file is created named `logo.svg` AND the output text "Generated logo.svg" is printed in the command line

// WHEN I open the `logo.svg` file in a browser THEN I am shown a 300x200 pixel image that matches the criteria I entered




