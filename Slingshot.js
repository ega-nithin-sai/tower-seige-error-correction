class Slingshot{
    constructor(body1,point2){
        var options = {
            bodyA: body1,
            pointB: point2,
            length: 10,
            stiffness: 0.02,
            damping: 0.02
        }
        this.pointB = point2;
        this.slingshot = Constraint.create(options);
        World.add(world,this.slingshot);
    }
    display(){
        if(this.slingshot.bodyA){    
            var pos1 = this.slingshot.bodyA.position;
            var pos2 = this.pointB;
            push();
            stroke("#3F220E");
            strokeWeight(8);
            line(pos1.x,pos1.y,pos2.x,pos2.y);
            pop();
        }
    }
    fly(){
        this.slingshot.bodyA = null;
    }
}