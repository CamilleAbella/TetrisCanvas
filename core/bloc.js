

class Bloc extends Vector {
    constructor(x,y,color){
        super(x,y)
        this.color = color
    }

    draw(canvas,context){
        const side = blocSide()
        context.fillStyle = this.color
        context.fillRect(
            1 + ((this.x * side) + ((canvas.width / 2) - ((side * width()) / 2))), 
            1 + (this.y * side), 
            side - 2, 
            side - 2
        )
    }

    drawAbsolute(canvas,context, vector = new Vector(0,0)){
        const side = blocSide()
        context.fillStyle = this.color
        context.fillRect(
            1 + vector.x + (this.x * side), 
            1 + vector.y + (this.y * side), 
            side - 2, 
            side - 2
        )
    }
}