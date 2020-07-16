import Sketch from 'react-p5';

const P5Background = (p5) => {
    function randomizer(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function scaleMapping(num, in_min, in_max, out_min, out_max){
        return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min
    }
    class Drop {
        constructor(x, y, z){
            this.x = x
            this.y = y
            this.z = z
            this.len = scaleMapping(z, 0, 20, 10, 20)
            this.yspeed = scaleMapping(z, 0, 20, 4, 10)
        }

        fall(){
            this.y = this.y + this.yspeed
            const grav = scaleMapping(this.z, 0, 20, 0, 0.2)
            this.yspeed = this.yspeed + grav
            let yMin = -500
            let yMax = -50
            if(this.y > p5.height){
                this.y = randomizer(yMin, yMax)
                this.yspeed = scaleMapping(this.z, 0, 20, 4, 10)
            }
        }

        show(){
            const thick = scaleMapping(this.z, 0, 20, 1, 3)
            p5.strokeWeight(thick)
            p5.stroke(138, 43, 226)
            p5.line(this.x, this.y, this.x, this.y+this.len)
        }
    }

    let drops = new Array(200)
    p5.setup = function(){
        p5.createCanvas(640, 360, p5.WEBGL)
        let xMin = 1 - p5.width
        let xMax = p5.width - 1
        let yMin = -500
        let yMax = -50
        let zMin = 0
        let zMax = 20
        for(let i= 0;  i < drops.length; i++){
            drops[i] = new Drop(randomizer(xMin, xMax), randomizer(yMin, yMax), randomizer(zMin, zMax))
        }
    }

    p5.draw = function(){
        p5.background(230, 230, 250)
        for(let i= 0;  i < drops.length; i++){
            drops[i].fall()
            drops[i].show()
        }
       
    }
};

export default P5Background;