function setup(){
    createCanvas(400,400)
}
function draw(){
background(255)

let x = 10
while(x<width ) {
    fill(255);
    circle(x,200,20);
    x= x+ 20;

        let fill = (255)
        while(x> mouseX ) {
        fill(0,0,255);
        circle(x,200,20);
        x+= 20;
        }
}
}