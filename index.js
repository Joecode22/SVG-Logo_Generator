//Require the inquirer package
const inquirer = require('inquirer');
//Require fs
const fs = require('fs');
//Require our classes from shapes.js
const { Circle, Square, Triangle } = require("./lib/shapes.js");

//Use Inquirer to prompt the user to provide the following information:
inquirer
  .prompt([
    // WHEN I am prompted for text THEN I can enter up to three characters
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
      message: 'Enter a text color in hexadecimal format i.e. #FFFFFF (white) #000000 (black)',
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
    // WHEN I am prompted for the shape's color THEN I can enter a color keyword (OR a hexadecimal number)
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter a shape color in hexadecimal format i.e. #FFFFFF (white) #000000 (black)',
      //the following code was created by referencing the inquirer documentation for validate
      validate: (val) => {
        //regex expression checks for hex code (limit digits to 0-9 and letters to a-f 
        if (!/^#[0-9a-f]{6}$/i.test(val)) {
          return 'That is not a hex code please try again';
        }
        return true;
      }
    },
  ])
  .then((answers) => {
    // WHEN I have entered input for all the prompts THEN an SVG file is created named `logo.svg` AND the output text "Generated logo.svg" is printed in the command line
    let logoStr = '';
    console.log(answers.text, answers.textColor, answers.shapeColor);
    if(answers.shape === 'circle'){
      const circle = new Circle(answers.text, answers.textColor, answers.shapeColor);
      logoStr = circle.svgString();
      console.log('The circle logo string is: ', logoStr);
    } else if(answers.shape === 'square'){
        const square = new Square(answers.text, answers.textColor, answers.shapeColor);
        logoStr = square.svgString();
        console.log('The circle logo string is: ', logoStr);
    }  else {
        const triangle = new Triangle(answers.text, answers.textColor, answers.shapeColor);
        logoStr = triangle.svgString();
        console.log('The circle logo string is: ', logoStr);
    }

    fs.writeFile('logo.svg', logoStr, (err) => {
      if (err){
        console.log('we got an error!', err)
      } else {
        console.log('Success! Your logo.svg file has been created!')
      } 
    })

  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log('error in the inquirer prompting promise chain');
    } else {
      console.log('It is not an error object but something is wrong');
    }
  });


// WHEN I open the `logo.svg` file in a browser THEN I am shown a 300x200 pixel image that matches the criteria I entered




