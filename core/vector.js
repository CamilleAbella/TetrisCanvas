
class Vector {
    constructor(x,y){
        this.x = x
        this.y = y
    }

    touch(vector, vector2 = new Vector(0,0)){
        return (
            this.x + vector2.x == vector.x &&
            this.y + vector2.y == vector.y
        )
    }
}