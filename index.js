//import GameWindow from "./gameWindow.js"
function wait() {
    b.directionMove()
    a.windowTiles[b.position[0]][b.position[1]].spanTag.src = b.colorImage
}
let a = new GameWindow(100,100)
a.displayWindow()
let b = new Bike("./blueSquare.png")
let running = true
//setInterval(wait, 500)
console.log(a.windowTiles[0][0])