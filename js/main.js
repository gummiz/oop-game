// let board = document.getElementById("board")

class Player {
  constructor() {
    this.positionX = 100;
    this.positionY = 30;
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
    this.playerElm.style.bottom = this.positionY + "px";
    this.playerElm.style.left = this.positionX + "px";
  }
  moveLeft() {
    this.positionX -= 10;
    console.log("moving left", this.positionX);
    this.playerElm.style.left = this.positionX + "px";
  }

  moveRight() {
    this.positionX = this.positionX + 10;
    console.log("moving right", this.positionX);
    this.playerElm.style.left = this.positionX + "px";
  }
}

const player = new Player();

window.addEventListener("keypress", (direction) => {
  // if (direction.keyCode === 37) {
  //   console.log("move left");
  //   player.moveLeft();
  // }

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


