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
            const grav = scaleMapping(this.z, 0, 20, 0, 0.005)
            this.yspeed = this.yspeed + grav
            let yMin = -1000
            let yMax = -500
            if(this.y > p5.height){
                this.y = randomizer(yMin, yMax)
                this.yspeed = scaleMapping(this.z, 0, 20, 4, 10)
            }
        }

        show(){
            const thick = scaleMapping(this.z, 0, 20, 1, 3)
            p5.strokeWeight(thick)
            p5.stroke(160, 199, 227)
            p5.line(this.x, this.y, this.x, this.y+this.len)
        }
    }

    let drops = new Array(100)
    p5.setup = function(){
        let width = window.innerWidth
        let height = window.innerHeight
        p5.createCanvas(width, height, p5.WEBGL)
        let xMin = 1 - width
        let xMax = width - 1
        let yMin = -1000
        let yMax = -500
        let zMin = 0
        let zMax = 20
        for(let i= 0;  i < drops.length; i++){
            drops[i] = new Drop(randomizer(xMin, xMax), randomizer(yMin, yMax), randomizer(zMin, zMax))
        }
    }

    p5.draw = function(){
        p5.background(29, 161, 242) 
        // 0, 46, 99
        // 29, 161, 242
        for(let i= 0;  i < drops.length; i++){
            drops[i].fall()
            drops[i].show()
        }
       
    }
};

export default P5Background;