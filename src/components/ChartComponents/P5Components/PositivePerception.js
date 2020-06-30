import React from 'react';
import Sketch from 'react-p5';


const PositivePerception = () => {

    const setup = (p5, canvasParentRef) =>{
        p5.createCanvas(300, 300).parent(canvasParentRef)
        p5.centerX = p5.height/2
        p5.centerY = p5.width/2
        
        // Set colors
        p5.fill(29, 161, 242, 127);
        p5.strokeWeight(4);
        p5.stroke('#1da1f2');
        
        p5.circle(p5.centerX, p5.centerY, 200, 200)
        p5.ellipse(p5.centerX - 30, p5.centerY - 30, 25, 35)
        p5.ellipse(p5.centerX + 30, p5.centerY - 30, 25, 35)
        p5.noFill();
        p5.arc(p5.centerX, p5.centerY + 20, 80, 80, 0, p5.PI)
        
        
    }

    return (
        <Sketch setup={setup}/>
            
    );
};

export default PositivePerception;