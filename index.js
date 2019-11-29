

let tetris, pepe, panel, canvas, context, falltime, interval, body, keyListener;

function initialize(){

    canvas = document.getElementById('canvas')
    panel = document.getElementById("panel")
    pepe = document.getElementById("pepe")
    body = document.getElementById('body')

    keyListener = key => {
        if(key.key == " "){
            button_pause()
        }else if(key.key == "z"){
            key_turnLeft()
        }else if(key.key == "e"){
            key_turnRight()
        }else if(key.key == "q"){
            key_moveLeft()
        }else if(key.key == "d"){
            key_moveRight()
        }else if(key.key == "s"){
            key_downBottom()
        }
    }

    if(canvas.getContext){
        context = canvas.getContext('2d')
    }else{
        return;
    }

    scene_title()
}