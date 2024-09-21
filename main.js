//
// main.js
//


function setup() 
{
    createCanvas(windowWidth, windowHeight);
}


let current = 0;
let slides = [slide_intro, slide_1];


function draw() 
{
    background(0);
    fill(255);
    stroke(255);

    if (current < 0 || current > slides.length)
    {
        background(255, 0, 0);
        text("Something's wrong", width/2, height/2);
    }
    else
    {
        slides[current]();
    }
}


function keyPressed()
{
    if (keyCode === RIGHT_ARROW && current < slides.length-1)
    {
        current++;
    }
    else if (keyCode === LEFT_ARROW && current > 0)
    {
        current--;
    }
    else if (key == 'f')
    {
        let fs = fullscreen();
        fullscreen(!fs);
    }
}


function mousePressed()
{
    current++;
    if (current >= slides.length)
        current = 0;
}


function windowResized() 
{
    resizeCanvas(windowWidth, windowHeight);
}


function slide_intro()
{
    background(0);
    fill(255);
    stroke(255);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("Hello, world!", width/2, height/2);
}


function slide_1()
{
    background(128, 200, 128);

    let x = width/2;
    let y = 100;
    textAlign(CENTER);
    text("The quick brown fox jumps over the lazy dog", x, y += 50);
    text("The quick brown fox jumps over the lazy dog", x, y += 50);
    text("The quick brown fox jumps over the lazy dog", x, y += 50);
}




