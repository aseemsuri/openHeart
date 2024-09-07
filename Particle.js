class Particle {

    constructor(home, col){
        //this.pos = home;
        this.pos = createVector(home.x, home.y);
        this.origPos = home;
        this.randPos = createVector(random(width), random(height));
        this.vel = createVector(0, 0);
        this.col = color(255, random(191), 0, random(col));
        // this.col = color(255, 191, 0, random(col));
        // this.col = col;
        this.acc = createVector(0, 0);
        // this.size = floor(random(random(1,5), random(6,20)));
        this.size = floor(random(3,6));
        this.beat=1;
    }

    update(){
        if (frameCount>10){    
            // this.vel = this.home.sub(this.pos);
            // this.vel.mult(0.6);
            // this.pos.add(this.vel);
            var dist = createVector(this.randPos.x - this.origPos.x, this.randPos.y-this.origPos.y);
            
            dist.mult(0.0001);
            //dist.normalize();
            //dist.mult(0.1);
            this.acc.add(dist);
            
            this.vel.add(this.acc);
            
            this.pos.add(this.vel);
            this.acc.mult(0);
        }
        //melt original heart away - fall under gravity
        // if (frameCount > 100){this.origPos.add(createVector(0, random(0.1, 1)))};
        // if (frameCount > 100){this.origPos.add(createVector(0, (0.07*(height-this.origPos.y))))};
    }
    display(){
        fill(this.col);
        ellipse(this.origPos.x+random(-2, 2), this.origPos.y+random(-2,2), this.size*this.beat, this.size*this.beat);
        ellipse(this.pos.x, this.pos.y, this.size, this.size);
        
    }

    bounds(){
        if (this.pos.x>width || this.pos.x<0) this.vel.x = -this.vel.x;
        if (this.pos.y>height || this.pos.y<0) this.vel.y = -this.vel.y;
    }

    beating(){
        if (frameCount%30<2) this.beat = 2.7;
        else if (frameCount%30<4) this.beat = 1;
        else if (frameCount%30<5) this.beat = 2.7;
        else this.beat = 1;
        

    }

    abruptStop(){
        
    }

}