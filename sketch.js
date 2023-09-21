var background;
var start, startimg;






function preload(){
startimg = loadImage("cliktoplay.png");

}

function setup() {
canvas = createCanvas( 400, 400);

 start = createSprite(200,200);
 start.addImage(startimg);


}
 
function draw() {
 background(0);

    drawSprites();
}