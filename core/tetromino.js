

class Tetromino extends Vector {
    constructor(tetris,name){
        super(5,-2)
        this.tetris = tetris
        this.name = name
        this.formIndex = 0
        this._forms = false
    }

    get forms(){
        if(!this._forms){
            const data = TETROMINOS.find(tetromino => {
                return tetromino.name == this.name
            })
            this._forms = data.path.map(form => {
                return form.map(arrayVector => {
                    return new Bloc(
                        arrayVector[0],
                        arrayVector[1],
                        data.color
                    )
                })
            })
        }
        return this._forms
    }

    get currentForm(){
        return this.forms[this.formIndex]
    }

    get form(){
        return this.currentForm.map(bloc => new Bloc(
            bloc.x + this.x,
            bloc.y + this.y,
            bloc.color
        ))
    }

    correct(){
        let count = 0
        while(
            this.touch(this.tetris.grid, new Vector(1, 0)) ||
            this.touch(this.tetris.cadre, new Vector(1, 0))
        ){
            count ++
            this.move(-1,0)
            if(count > width()){
                break
            }
        }
        count = 0
        while(
            this.touch(this.tetris.grid, new Vector(-1, 0)) ||
            this.touch(this.tetris.cadre, new Vector(-1, 0))
        ){
            count ++
            this.move(1,0)
            if(count > width()){
                break
            }
        }
        count = 0
        while(
            this.touch(this.tetris.grid, new Vector(0, 1)) ||
            this.touch(this.tetris.cadre, new Vector(0, 1))
        ){
            count ++
            this.move(0,-1)
            if(count > height()){
                break
            }
        }
        count = 0
        while(
            this.touch(this.tetris.grid, new Vector(0, -1)) ||
            this.touch(this.tetris.cadre, new Vector(0, -1))
        ){
            count ++
            this.move(0,1)
            if(count > height()){
                break
            }
        }
    }

    turn(count){
        this.formIndex += count
        if(this.formIndex >= this.forms.length){
            this.formIndex = 0
        }else if(this.formIndex < 0){
            this.formIndex = this.forms.length - 1
        }
        this.correct()
    }

    move(x,y){
        if(
            this.touch(this.tetris.grid, new Vector(x, y)) ||
            this.touch(this.tetris.cadre, new Vector(x, y))
        ) return false
        this.x += x
        this.y += y
        return true
    }

    draw(canvas,context){
        this.form.forEach(bloc => bloc.draw(canvas,context))
    }
    drawAbsolute(canvas,context, vector = new Vector(0,0)){
        this.currentForm.forEach(bloc => bloc.drawAbsolute(canvas,context,vector))
    }

    touch(form, vector = new Vector(0,0)){
        return form.some(bloc => {
            return this.form.some(thisbloc => {
                return thisbloc.touch(bloc,vector)
            })
        })
    }

    static random(tetris){
        const names = TETROMINOS.map(tetromino => tetromino.name)
        return new Tetromino(tetris,names[Math.floor(Math.random()*names.length)])
    }
}