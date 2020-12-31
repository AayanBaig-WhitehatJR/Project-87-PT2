var canvas = new fabric.Canvas('myCanvas')
    
imageHeight = 30
imageWidth = 30

playerX = 10
playerY = 10

playerObject = ""
imageObject = ""

function playerUpdate(){
    fabric.Image.fromURL("player.png", function(Img){
        playerObject = Img;
        playerObject.scaleToWidth(150)
        playerObject.scaleToHeight(140)
        playerObject.set({
            top:playerX,
            left:playerY
        });
        canvas.add(playerObject)
    })
}

function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        imageObject = Img
        imageObject.scaleToWidth(imageWidth)
        imageObject.scaleToHeight(imageHeight)
        imageObject.set({
            top:playerY,
            left:playerX
        });
        canvas.add(imageObject)
    })
}
window.addEventListener("keydown", myKeyDown)
function myKeyDown(e){
    var keypressed = e.keyCode;
    console.log(keypressed);
    if(e.shiftKey == true && keypressed == '88'){
        console.log("Width and Height increased by 10.")
        imageHeight +=10;
        imageWidth +=10;
        document.getElementById("currentHeight").innerHTML = imageHeight
        document.getElementById("currentWidth").innerHTML = imageWidth
    }
    if(e.shiftKey == true && keypressed == '77'){
        console.log("Width and Height Decreased by 10")
        imageHeight -=10;
        imageWidth -=10;
    document.getElementById("currentHeight").innerHTML = imageHeight
    document.getElementById("currentWidth").innerHTML = imageWidth
    }
if(keypressed == '70'){
    new_image('ironman_face.png')
    console.log("f")
}
if(keypressed = '66')
{
    new_image('hulk_body.png')
    console.log("b")
}
if(keypressed == '76'){
    new_image("spiderman_legs.png")
console.log("l")
}
if(keypressed == '82'){
    new_image('thor_right_hand.png')
    console.log("r")
}
if(keypressed == '72'){
    new_image('captain_america_left_hand.png');
    console.log("h")
}
if(keypressed == '38'){
    up();
    console.log("up")
}
if(keypressed == '40'){
    down();
    console.log("down")
}
if(keypressed == '37'){
left();
console.log("left")
}
if(keypressed == '39'){
    right();
    console.log("right")
}
}
