var node

function setup() {
   createCanvas(windowWidth, windowHeight);
   background(0); 
   strokeWeight(2);
   node = new Node;
   /*
   for (i=0; i<50; i++) {
    nodes.push(new Node());
   } */
}

function mousePressed() 
{
    node.init(mouseX, mouseY, 10);
}

function draw() {
    node.drawNode();
}

function Node() {
    this.xpos = 0;
    this.ypos = 0;
    this.diameter = 0;

    this.init = function(_Xpos, _Ypos, _Diameter) {
        this.xpos = _Xpos;
        this.ypos = _Ypos;
        this.diameter = _Diameter;
        console.log('inititalising');
    }

    this.drawNode = function(){
        fill(0,255,0);

        push();
        beginShape();
        for (i = 0; i < 360; i+=60) {
            angle = radians(i);
            x = this.diameter * cos(angle);
            y = this.diameter * sin(angle);
            vertex(x+this.xpos, y+this.ypos);
        }
        endShape(CLOSE);
        pop();


        console.log('displaying');

        if (mouseIsPressed && this.diameter < 120) {
            this.diameter = this.diameter + 2;
            console.log('expanding')
        }

        

    }

    this.ripple = function(){
        if (mouseIsPress == False){
            
        }
    }

}
