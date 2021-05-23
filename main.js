canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");


car1_width=100;
car1_height=90;
car1_x=10;
car1_y=10;
car1_image="therealcar1.png"
background_image="racetrack.jpg"
function add(){
   background_imgTag=new Image();
    background_imgTag.onload=upload_background;
    background_imgTag.src=background_image;
    
    car1_imgTag=new Image();
    car1_imgTag.onload=upload_car1;
    car1_imgTag.src=car1_image;
}
function upload_background(){
ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);    
}
function upload_car1(){
ctx.drawImage(car1_imgTag,car1_x,car1_y,car1_width,car1_height)    
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
keyPressed=e.keyCode;
console.log(keyPressed);
if(keyPressed=='38')
{
car1_up();
console.log("up");
}
if(keyPressed=='40')
{
car1_down();
console.log("down");
}
if(keyPressed=='37')
{
car1_left();
console.log("left");
}
if(keyPressed=='39')
{
car1_right();
console.log("right");
}

}
function car1_up()
{
if(car1_y>=0)
{
car1_y=car1_y-10;
console.log("when up arrow is pressed,x="+ car1_x+"| y="+ car1_y);
upload_background();
upload_car1();    
}    
}
function car1_down()
{
if(car1_y<=500)
{
car1_y=car1_y+10;
console.log("when down arrow is pressed,x="+ car1_x+"| y="+ car1_y);
upload_background();
upload_car1();
}
}
function car1_left()
{
if(car1_x>=0)
{
car1_x=car1_x-10;
console.log("when left arrow is pressed,x="+ car1_x+"| y="+ car1_y);
upload_background();
upload_car1();
}
}
function car1_right()
{
if(car1_x<=700)
{
car1_x=car1_x+10;
console.log("when right arrow is pressed,x="+ car1_x+"| y="+ car1_y);
upload_background();
upload_car1();  
}
}

