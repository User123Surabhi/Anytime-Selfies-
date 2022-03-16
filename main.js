function preload() {

}

function setup() {
    canvas = createCanvas(600, 450);
    canvas.position(290, 260);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}


function next_page() {
    window.location = "NP.html";
}

function draw() {
  image(video, 27, 24, 565, 430);
  tint(tint_color);
  fill("red")
  circle(30, 30, 20);
  fill("orange")
  circle(50, 30, 20);
  fill("yellow")
  circle(70, 30, 20);
  fill("green")
  circle(90, 30, 20);
  fill("blue")
  circle(110, 30, 20);
  fill("indigo")
  circle(130, 30, 20);
  fill("violet")
  circle(150,30,20);
  fill("red")
  circle(170, 30, 20);
  fill("orange")
  circle(190, 30, 20);
  fill("yellow")
  circle(210, 30, 20);
  fill("green")
  circle(230, 30, 20);
  fill("blue")
  circle(250, 30, 20);
  fill("indigo")
  circle(270, 30, 20);
  fill("violet")
  circle(290,30,20);
  fill("red")
  circle(310, 30, 20);
  fill("orange")
  circle(330,30,20);
  fill("yellow")
  circle(350,30,20);
  fill("green")
  circle(370,30,20);
  fill("blue")
  circle(390, 30, 20);
  fill("indigo")
  circle(410, 30, 20);
  fill("violet")
  circle(430,30,20);
  fill("red")
  circle(450, 30, 20);
  fill("orange")
  circle(470,30,20);
  fill("yellow")
  circle(490,30,20);
  fill("green")
  circle(510,30,20);
  fill("blue")
  circle(530, 30, 20);
  fill("indigo")
  circle(550, 30, 20);
  fill("violet")
  circle(570,30,20);
  fill("red")
  circle(590,30,20)
  fill("orange")
  circle(590,50,20)
  fill("yellow")
  circle(590,70,20);
  fill("green")
  circle(590,90,20);
  fill("blue")
  circle(590, 110, 20);
  fill("indigo")
  circle(590, 130, 20);
  fill("violet")
  circle(590,150,20);
  fill("red")
  circle(590,170,20)
  fill("orange")
  circle(590,190,20)
  fill("yellow")
  circle(590,210,20);
  fill("green")
  circle(590,230,20);
  fill("blue")
  circle(590, 250, 20);
  fill("indigo")
  circle(590, 270, 20);
  fill("violet")
  circle(590,290,20);
  fill("red")
  circle(590,310,20)
  fill("orange")
  circle(590,330,20)
  fill("yellow")
  circle(590,350,20);
  fill("green")
  circle(590,370,20);
  fill("blue")
  circle(590, 390, 20);
  fill("indigo")
  circle(590, 410, 20);
  fill("violet")
  circle(590,430,20);
  fill("red")
  circle(590,450,20);
  fill("orange")
  circle(570,450,20);
  fill("yellow")
  circle(550,450,20);
  fill("green")
  circle(530,450,20);
  fill("blue")
  circle(510, 450, 20);
  fill("indigo")
  circle(490, 450, 20);
  fill("violet")
  circle(470,450,20);
  fill("red")
  circle(450,450,20);
  fill("orange")
  circle(430,450,20);
  fill("yellow")
  circle(410,450,20);
  fill("green")
  circle(390,450,20);
  fill("blue")
  circle(370, 450, 20);
  fill("indigo")
  circle(350, 450, 20);
  fill("violet")
  circle(330,450,20);
  fill("red")
  circle(310,450,20);
  fill("orange")
  circle(290,450,20);
  fill("yellow")
  circle(270,450,20);
  fill("green")
  circle(250,450,20);
  fill("blue")
  circle(230, 450, 20);
  fill("indigo")
  circle(210, 450, 20);
  fill("violet")
  circle(190,450,20);
  fill("red")
  circle(170,450,20);
  fill("orange")
  circle(150,450,20);
  fill("yellow")
  circle(130,450,20);
  fill("green")
  circle(110,450,20);
  fill("blue")
  circle(90, 450, 20);
  fill("indigo")
  circle(70, 450, 20);
  fill("violet")
  circle(50,450,20);
  fill("red")
  circle(30,450,20);
  fill("orange")
  circle(30,50,20);
  fill("yellow")
  circle(30,70,20);
  fill("green")
  circle(30,90,20);
  fill("blue")
  circle(30, 110, 20);
  fill("indigo")
  circle(30, 130, 20);
  fill("violet")
  circle(30,150,20);
  fill("red")
  circle(30,170,20);
  fill("orange")
  circle(30,190,20);
  fill("yellow")
  circle(30,210,20);
  fill("green")
  circle(30,230,20);
  fill("blue")
  circle(30, 250, 20);
  fill("indigo")
  circle(30, 270, 20);
  fill("violet")
  circle(30,290,20);
  fill("red")
  circle(30,310,20);
  fill("orange")
  circle(30,330,20);
  fill("yellow")
  circle(30,350,20);
  fill("green")
  circle(30,370,20);
  fill("blue")
  circle(30, 390, 20);
  fill("indigo")
  circle(30, 410, 20);
  fill("violet")
  circle(30,430,20);
}

function take_snapshot() {
    save('My_Colored_Pic.png');
}

function filter_tint() {
    tint_color = document.getElementById("color_name").value;
}