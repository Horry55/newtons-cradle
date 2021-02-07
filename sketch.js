const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies
const Constraint = Matter.Constraint;
var engine,world,ground,ball,ball2,ball3;
function setup() {
  createCanvas(1350,650);
   engine=Engine.create();
   world=engine.world
   bar=new Bar(675,100,500,40);
  ball=new Ball(500,400,50)
  chain=new Chain (ball.body,{x:470,y:110});
  ball2=new Ball(600,400,50)
  chain1=new Chain (ball2.body,{x:570,y:110});
  ball3=new Ball(700,400,50)
  chain2=new Chain(ball3.body,{x:670,y:110})
  ball4=new Ball(800,400,50)
  chain3=new Chain(ball4.body,{x:770,y:110})
  ball5=new Ball(900,400,50)
  chain4=new Chain(ball5.body,{x:870,y:110})
  
}

function draw() {
  background(0);  
  Engine.update(engine);
  bar.display();
  ball.display();
  chain.display();
  ball2.display();
  chain1.display();
  ball3.display();
  chain2.display();
  ball4.display();
  chain3.display();
  ball5.display();
  chain4.display();
  if(keyDown("5")){
    Matter.Body.applyForce(ball5.body,ball5.body.position,{x:10,y:-85});
    
      }
      if(keyDown("4")){
        Matter.Body.applyForce(ball4.body,ball4.body.position,{x:10,y:-85});
        
          }
          if(keyDown("3")){
            Matter.Body.applyForce(ball3.body,ball3.body.position,{x:10,y:-85});
            
              }
              if(keyDown("2")){
                Matter.Body.applyForce(ball2.body,ball2.body.position,{x:10,y:-85});
                
                  }
                  if(keyDown("1")){
                    Matter.Body.applyForce(ball.body,ball.body.position,{x:10,y:-185});
                    
                      }
                      textSize(20)
                      text("press1 or press2 or press3 or press4 or press5 to operate this",400,20)
                      text("if you press 1 so ball 1 will move if you press 2 so ball2 will move etc.",400,40)
                      text("made by horry",700,350)
  drawSprites();
  textSize(50)
  fill("white")
  text("NEWTON'S CRADLE",400,300)
}
function key(){
 
  
}