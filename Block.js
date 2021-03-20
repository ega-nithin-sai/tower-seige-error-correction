class Block{
    constructor(x,y){
        var stoneOptions={
            restitution: 0.5,
            density: 2.8,
            friction: 1.2,
            isStatic: false
        }
        this.body1=Bodies.rectangle(x,y,20,20,stoneOptions);
        this.body2=Bodies.rectangle(x-20,y,20,20,stoneOptions);
        this.body3=Bodies.rectangle(x-40,y,20,20,stoneOptions);
        this.body4=Bodies.rectangle(x+20,y,20,20,stoneOptions);
        this.body5=Bodies.rectangle(x+40,y,20,20,stoneOptions);
        this.body6=Bodies.rectangle(x-20,y-20,20,20,stoneOptions);
        this.body7=Bodies.rectangle(x+20,y-20,20,20,stoneOptions);
        this.body8=Bodies.rectangle(x,y-20,20,20,stoneOptions);
        this.body9=Bodies.rectangle(x,y-40,20,20,stoneOptions);
        

        this.width=20;
        this.height=20;
        World.add(world,this.body1);
    }
    display(){
        push();
        var pos=this.body1.position;
        fill("blue");
        translate(pos.x,pos.y);
        angleMode(RADIANS);
        rotate(this.body1.angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();

        push();
        var pos=this.body2.position;
        fill("blue");
        translate(pos.x,pos.y);
        angleMode(RADIANS);
        rotate(this.body2.angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();

        push();
        var pos=this.body3.position;
        fill("blue");
        translate(pos.x,pos.y);
        angleMode(RADIANS);
        rotate(this.body3.angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();

        push();
        var pos=this.body4.position;
        fill("blue");
        translate(pos.x,pos.y);
        angleMode(RADIANS);
        rotate(this.body4.angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();

        push();
        var pos=this.body5.position;
        fill("blue");
        translate(pos.x,pos.y);
        angleMode(RADIANS);
        rotate(this.body5.angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();

        push();
        var pos=this.body6.position;
        fill("blue");
        translate(pos.x,pos.y);
        angleMode(RADIANS);
        rotate(this.body6.angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();

        push();
        var pos=this.body7.position;
        fill("blue");
        translate(pos.x,pos.y);
        angleMode(RADIANS);
        rotate(this.body7.angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();

        push();
        var pos=this.body8.position;
        fill("blue");
        translate(pos.x,pos.y);
        angleMode(RADIANS);
        rotate(this.body8.angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();

        push();
        var pos=this.body9.position;
        fill("blue");
        translate(pos.x,pos.y);
        angleMode(RADIANS);
        rotate(this.body9.angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();

        if(this.body1.speed||this.body2.speed||this.body3.speed||this.body4.speed||this.body5.speed||this.body6.speed||this.body7.speed||this.body8.speed||this.body9.speed >= 3){
            World.remove(world,this.body);
            push();
            tint(255,this.visibility);
            this.visibility-=20;
            image(this.image,this.body.position.x,this.body.position.y,50,50);
            pop();
        }
    }
}