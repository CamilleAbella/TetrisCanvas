
class Tetris {

    constructor(){
        this.score = 0
        this.pause = false
        this.width = width()
        this.height = height()
        this.grid = []
        this.historical = [
            Tetromino.random(this),
            Tetromino.random(this),
            Tetromino.random(this)
        ]
        this.cadre = []
        for(var x=0; x<this.width; x++){
            this.cadre.push(new Vector(x,20))
        }
        for(var y=0; y<this.height; y++){
            this.cadre.push(new Vector(-1,y))
            this.cadre.push(new Vector(10,y))
        }
    }

    get current(){
        return this.historical[0]
    }

    next(){
        this.grid = this.grid.concat(this.current.form)
        this.clearLines()
        this.historical.shift()
        this.historical.push(
            Tetromino.random(this)
        )
        return this.current
    }

    turn(count,canvas,context){
        this.current.turn(count)
        this.draw(canvas,context)
    }

    move(x,y,canvas,context){
        const move = this.current.move(x,y)
        this.draw(canvas,context)
        return move
    }

    bottom(canvas,context){
        while(
            !this.current.touch(this.grid, new Vector(0,1)) &&
            !this.current.touch(this.cadre, new Vector(0,1))
        ){
            this.move(0,1,canvas,context)
        }
    }

    draw(canvas,context){

        const side = blocSide()

        //clear
        context.clearRect(0,0,
            canvas.width,
            canvas.height
        )

        //current score + concurrents grisés
        context.fillStyle = "rgb(200,200,200)"
        context.fillText(
            `Score : ${this.score}`,
            (canvas.width / 2) + ((side * this.width) / 2),
            20,
            side * this.width
        )
        context.fillText(
            `Vitesse : x${FALLTIME/falltime}`,
            (canvas.width / 2) + ((side * this.width) / 2),
            40,
            side * this.width
        )
        
        //speed

        
        //game background
        context.fillStyle = "rgb(20,20,20)"
        context.fillRect(
            (canvas.width / 2) - ((side * this.width) / 2),
            0,
            side * this.width,
            side * this.height
        )
        for(var x=0; x<4; x++){
            for(var y=0; y<8; y++){
                const tempBloc = new Bloc(0,0)
                tempBloc.drawAbsolute(
                    canvas, context,
                    new Vector(
                        x * side + side / 2,
                        y * side,
                    )
                )
            }
        }  

        //futur tetrominos
        this.historical[1].drawAbsolute(
            canvas, context, 
            new Vector(
                side * 2 - side / 2,
                side * 2
            )
        )
        this.historical[2].drawAbsolute(
            canvas, context, 
            new Vector(
                side * 2 - side / 2,
                side * 6
            )
        )

        //grid blocks
        this.grid.forEach(bloc => bloc.draw(canvas,context))

        //tetromino
        this.current.draw(canvas,context)
    }

    getLine(y){
        return this.grid.filter(bloc => bloc.y == y)
    }
    checkLine(y){
        return this.getLine(y).length == this.width
    }
    clearLines(){
        const clearedLines = []
        this.grid = this.grid.filter(bloc => {
            if(this.checkLine(bloc.y)){

                this.score ++

                if(!clearedLines.includes(bloc.y))
                    clearedLines.push(bloc.y)

                return false
            }
            return true
        })
        clearedLines.forEach(y => {
            this.grid.filter(bloc => {
                return bloc.y <= y
            }).forEach(bloc => {
                bloc.y ++
            })
        })
    }
}
