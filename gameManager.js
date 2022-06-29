class GameManager {
    constructor() {
        this.a = new GameWindow(100,100)
        this.a.displayWindow()
        this.b = new Bike("./blueSquare.png", "North")
        this.b2 = new Bike("./redSquare.png", "South")
        this.b.position = [50,80]
        this.b2.position = [50,20]
        this.loopNum = 0
    
    }

    wait() {
    
        if (this.loopNum == 3) {
            this.loopNum = 0;
            this.b.directionMove()
            if (this.a.windowTiles[this.b.position[0]][this.b.position[1]].empty != true ) {
                this.a.displayWindow()
                return
            }
            this.a.windowTiles[this.b.position[0]][this.b.position[1]].empty = false
            this.a.windowTiles[this.b.position[0]][this.b.position[1]].spanTag.src = this.b.colorImage
            b2.directionMove()
            if (this.a.windowTiles[this.b2.position[0]][this.b2.position[1]].empty != true ) {
                this.a.displayWindow()
                return
            }
            this.a.windowTiles[this.b2.position[0]][this.b2.position[1]].empty = false
            this.a.windowTiles[this.b2.position[0]][this.b2.position[1]].spanTag.src = this.b2.colorImage
        }
        this.loopNum++
        window.requestAnimationFrame(wait)
        
    }
    addListeners() {
        document.addEventListener('keydown', function(e){
            if(e.repeat) return;
        
            if(e.key === 'a' && this.b.direction != "East"){
                this.b.direction = 'West'
            }
            if(e.key === 'w' && this.b.direction != "South"){
                this.b.direction = 'North'
            }
            if(e.key === 'd' && this.b.direction != "West"){
                this.b.direction = 'East'
            }
            if(e.key === 's' && this.b.direction != "North"){
                this.b.direction = 'South'
            }
            
        })
        
        document.addEventListener('keydown', function(e){
            if(e.repeat) return;
        
            if(e.key === 'j' && this.b2.direction != "East"){
                this.b2.direction = 'West'
            }
            if(e.key === 'i' && this.b2.direction != "South"){
                this.b2.direction = 'North'
            }
            if(e.key === 'l' && this.b2.direction != "West"){
                this.b2.direction = 'East'
            }
            if(e.key === 'k' && this.b2.direction != "North"){
                this.b2.direction = 'South'
            }
            
        })
    }

    startGame() {
        window.requestAnimationFrame(this.wait)
    }
}