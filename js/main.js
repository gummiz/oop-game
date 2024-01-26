// let board = document.getElementById("board")

class Player {
    constructor(){
        this.positionX = 0
        this.positionY = 0
        this.hight = 30
        this.width = 60

    }

    moveLeft(){
        this.positionX = this.positionX - 10
        console.log("moving left", this.positionX);
        
    }
    
    moveRight(){
        this.positionX = this.positionX + 10
        console.log("moving right", this.positionX );
    }
}

const p = new Player()

p.moveLeft()
p.moveLeft()
p.moveLeft()
p.moveLeft()
p.moveRight()