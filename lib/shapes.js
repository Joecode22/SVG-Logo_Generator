class Circle {
  constructor (text, textColor, shapeColor){
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }
  // https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes used as reference
  svgString() {
    return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

    <circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/>
  
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
  
  </svg>`
  }
}

class Square {
  constructor (text, textColor, shapeColor){
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }
  // https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes used as reference
  svgString() {
    return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

    <rect cx="150" cy="100" width="100" height="100" fill="${this.shapeColor}"/>
  
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
  
  </svg>`
  }
}

class Triangle {
  constructor (text, textColor, shapeColor){
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }
  // https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes used as reference
  svgString() {
    return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
    
    <polygon fill="${this.shapeColor}" points="50, 15, 100, 100, 0, 100/>
  
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
  
  </svg>`
  }
};

export { Circle, Square, Triangle};