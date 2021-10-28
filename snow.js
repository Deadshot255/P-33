class Snow{
constructor(x,y){
    var option={
        density:1,
        restitution:0.5
    }
    this.body=Bodies.rectangle(x,y,30,30,option);
    World.add(world,this.body)
    this.img=loadImage("snow4.webp")
}

display(){
    image(this.img,this.body.position.x,this.body.position.y,30,30)
}
update() {
     if (this.body.position.y > 400) {
          Matter.Body.setPosition(this.body, { x: round(random(0, 800)), y: -10 });
         }
}
}