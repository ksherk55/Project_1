class GameWindow {
    constructor(width, height) {
        this.windowTiles = []
        for (let i = 0; i < width; i++) {
            this.windowTiles[i] = []
            for (let j = 0; j < height; j++) {
                this.windowTiles[i][j] = new GameTile()
            } 
        }
    }

    //adds the window to the html page
    displayWindow() {
        let windowContainer = document.querySelector("#gameWindow")
    
        for (let i = 0; i < this.windowTiles.length; i++) {
            for (let j = 0; j < this.windowTiles[i].length; j++) {
                windowContainer.append(this.windowTiles[i][j].spanTag)

            }
            windowContainer.append(document.createElement("br"))
        }

    }

    //resets all the tiles for a new game
    resetWindow() {
        let windowContainer = document.querySelector("#gameWindow")
        for (let i = 0; i < this.windowTiles.length; i++) {
            for (let j = 0; j < this.windowTiles[i].length; j++) {
                this.windowTiles[i][j].spanTag.src = "./blackSquare.png"
                this.windowTiles[i][j].empty = true

            }
            windowContainer.append(document.createElement("br"))
        }

    }
    

    
}

