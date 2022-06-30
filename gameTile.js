class GameTile {
    constructor () {
        this.spanTag = document.createElement("img")
        this.spanTag.src = "./blackSquare.png"
        //variable that stores whether or not the tile has a bike's trail on it
        this.empty = true
        this.spanTag.style.width = "5px"
        
    }
}