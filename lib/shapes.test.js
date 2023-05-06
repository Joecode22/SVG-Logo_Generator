//The following code was written by referencing the example in student activity 15 of module 10
//import our shape classes
const { Circle, Square, Triangle } = require("./shapes.js");

// A testing suite for shapes.js is created.
describe('Shapes', () => {
  // This test checks to see if the svgStr method returns the expected string
  describe('Circle', () => {
    it('should return a specific string', () => {
      const total = 0;
      const circle = new Circle('SVG', '#FFFFFF', '#00FF00');
      expect(circle.svgString()).toEqual(
        `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><circle cx="150" cy="100" r="80" fill="#00FF00"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="#FFFFFF">SVG</text></svg>`
      );
    });
  });

  describe('Square', () => {
    it('should return a specific string', () => {
      const total = 0;
      const square = new Square('SVG', '#FFFFFF', '#00FF00');
      expect(square.svgString()).toEqual(
        `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><rect x="70" y="20" width="160" height="160" fill="#00FF00"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="#FFFFFF">SVG</text></svg>`
      );           
    });
  });

  describe('Triangle', () => {
    it('should return a specific string', () => {
      const total = 0;
      const triangle = new Triangle('SVG', '#FFFFFF', '#00FF00');
      expect(triangle.svgString()).toEqual(
        `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><polygon fill="#00FF00" points="150,15 33,150 273,150"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="#FFFFFF">SVG</text></svg>`
      );            
    });
  });
});