// let board = document.getElementById("board")

class Player {
  constructor() {
    this.positionX = 100;
    this.positionY = 800;
    this.height = 20;
    this.width = 20;

    this.createPlayer();
  }

  createPlayer() {
    // create dom element
    this.playerElm = document.createElement("div");

    // set Player Size
    this.playerElm.setAttribute("id", "player");
    this.playerElm.style.height = this.height + "px";
    this.playerElm.style.width = this.width + "px";

    //append to board
    const boardElm = document.getElementById("board");
    boardElm.appendChild(this.playerElm);

    // set position of Player
    this.playerElm.style.position = "absolute";
    this.playerElm.style.top = this.positionY + "px";
    this.playerElm.style.left = this.positionX + "px";
  }
  moveLeft() {
    this.positionX -= 20;
    console.log("moving left", this.positionX);
    this.playerElm.style.left = this.positionX + "px";
  }

  moveRight() {
    this.positionX += 20;
    // console.log("moving right", this.positionX);
    this.playerElm.style.left = this.positionX + "px";
  }
}

// OBstacales
class Obstacales {
  constructor() {
    this.height = 30;
    this.width = 100;
    this.positionX =  Math.floor(Math.random() * (500 - 100 + 1) + 100);;
    // this.positionY = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    this.positionY = 50

    this.createObstical();
  }

  createObstical() {
    // create dom element
    this.obsticalElm = document.createElement("div");

    // set Player Size
    this.obsticalElm.setAttribute("class", "obstical");
    this.obsticalElm.style.height = this.height + "px";
    this.obsticalElm.style.width = this.width + "px";

    //append to board
    const boardElm = document.getElementById("board");
    boardElm.appendChild(this.obsticalElm);

    // set position of Player
    this.obsticalElm.style.position = "absolute";
    this.obsticalElm.style.top = this.positionY + "px";
    this.obsticalElm.style.left = this.positionX + "px";
  }

  moveDown() {
    this.positionY = this.positionY + 10;
    this.obsticalElm.style.top = this.positionY + "px";
  }

  chechCollition() {}
}

const player = new Player();
const obsticals = []; // will store instances of the class obstecales

document.addEventListener("keydown", (direction) => {
  console.log("key pressed");

  switch (direction.keyCode) {
    // left
    case 37:
      player.moveLeft();
      break;

    //right
    case 39:
      player.moveRight();
      break;
  }
});

// generate new obstacles
setInterval(() => {
  const newObstical = new Obstacales();
  obsticals.push(newObstical);
  console.log(obsticals);
}, 1000);

// move Obsticales each 50ms
setInterval(() => {
  obsticals.forEach((obsticalInstance) => {
    //move down
    obsticalInstance.moveDown();


    // check if condition
    if (
      player.positionX < obsticalInstance.positionX + obsticalInstance.width &&
      player.positionX + player.width > obsticalInstance.positionX &&
      player.positionY < obsticalInstance.positionY + obsticalInstance.height &&
      player.positionY + player.height > obsticalInstance.positionY
    ) {
      console.log("Collition");
       // obsticals.chechCollition();
      //send user to a nother page
      location.href= "result.html"
    }

    // remove element from array

   
  });
}, 50);
