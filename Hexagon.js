class Hexagon{
    constructor(x,y){
        var options = {
            isStatic: false
        }
        this.body = Bodies.circle(x,y,40,options);
        World.add(world,this.body);

        

        this.img = loadImage("polygon.png");
    
    }
    display(){
        push();
            var pos = this.body.position;
            translate(pos.x,pos.y);
            // fill("green");
            // ellipseMode(RADIUS);
            // ellipse(0,0,20,20);
            imageMode(CENTER);
            image(this.img,0,0,40,40);
            // console.log(pos.x + " - " + pos.y)
        pop();
    }
}