class Ball{
    constructor(x,y,radius){
        var option={
            density:5,
            restitution:1,
            friction:2,
            
        }
        this.body=Bodies.circle(x,y,radius,option)
      //  this.width=width;
       // this.height=height;
       this.radius=radius;
        World.add(world,this.body)
        
    }
    display(){
       var pos=this.body.position; 
       ellipseMode(RADIUS)
       fill("gold")
       strokeWeight(3)
       stroke("red")
       ellipse(pos.x,pos.y,this.radius);
    }
       
}