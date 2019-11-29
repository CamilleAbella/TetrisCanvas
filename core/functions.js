
// Core

function fallloop(){
    if(!tetris.move(0,1,canvas,context)){
        if(tetris.current.y < 0){
            clearInterval(interval)
            scene_gameOver()
            return
        }
        tetris.next()
    }
    tetris.draw(canvas,context)
    scene_game()
}


// Data getters & setter (les deux en meme temps)

function blocSide(){
    return Math.round(canvas.width / height())
}
function width(){
    return 10
}
function height(){
    return 20
}


// Buttons actions

function button_start(){
    falltime = FALLTIME
    tetris = new Tetris()
    clearInterval(interval)
    interval = setInterval(fallloop,falltime)
    body.addEventListener("keypress", keyListener)
}
function button_pause(){
    tetris.pause = !tetris.pause
    if(tetris.pause){
        clearInterval(interval)
        scene_pause()
    }else{
        interval = setInterval(fallloop,falltime)
        scene_game()
    }
}
function button_scores(){
    body.removeEventListener("keypress", keyListener)
    clearInterval(interval)
    scene_scores()
}
function button_title(){
    body.removeEventListener("keypress", keyListener)
    clearInterval(interval)
    scene_title()
}


// Keys actions

function key_turnLeft(){
    tetris.turn(1,canvas,context)
}
function key_turnRight(){
    tetris.turn(-1,canvas,context)
}
function key_moveLeft(){
    tetris.move(-1,0,canvas,context)
}
function key_moveRight(){
    tetris.move(1,0,canvas,context)
}
function key_downBottom(){
    tetris.bottom(canvas,context)
}


// Scenes drawing

function scene_title(){
    // draw "Tetris" and animation
    pepe_set("smile",{
        animation : "spawn"
    })
    panel.innerHTML = BUTTONS.scores + BUTTONS.start
}
function scene_game(){
    pepe_set("sweaty")
    panel.innerHTML = BUTTONS.title + BUTTONS.pause
}
function scene_pause(){
    // draw two pause bars if pause = true
    if(Math.random() < .5){
        pepe_set("istime",{
            extension : "gif"
        })
    }else{
        pepe_set("sweaty",{
            animation : "vibration"
        })
    }
    panel.innerHTML = BUTTONS.title + BUTTONS.pause.replace("Pause","Resume")
}
function scene_gameOver(){
    // save scores
    // draw "Game Over" with party score & duration
    if(Math.random() < .5){
        pepe_set("suicide")
    }else{
        pepe_set("cry",{
            animation : "vibration"
        })
    }
    panel.innerHTML = BUTTONS.title + BUTTONS.start.replace("Start","Restart") + BUTTONS.scores
}
function scene_scores(){
    // show highscores
    pepe_set("nerd")
    panel.innerHTML = BUTTONS.title + BUTTONS.start
}


// Pepe

function pepe_set(imgName="smile", options={}){
    const {
        animation,
        extension
    } = options
    if(imgName=="none"){
        pepe.style.display = "none"
    }else{
        pepe.style.display = "block"
        pepe.src = `img/${imgName}.${extension||"png"}`
        pepe.className = animation||""
    }
}