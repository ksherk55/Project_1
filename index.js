var loopNum = 0
let redWinCount = 0
let redWinCounter = document.querySelector("#RedScore")
redWinCounter.textContent = redWinCount
let blueWinCount = 0
let blueWinCounter = document.querySelector("#BlueScore")
blueWinCounter.textContent = blueWinCount
let b = new Bike("./blue square.png", "North")
let b2 = new Bike("./orange square.png", "South")
let a = new GameWindow(100,100)
let startButton = document.querySelector('#StartButton')
let speed = 5;
let speedTag = document.querySelector("#speed")
updateSpeedText() 
let speedUpButton = document.querySelector("#speedUp")
speedUpButton.addEventListener("click", speedUp)
let speedDownButton = document.querySelector("#speedDown")
speedDownButton.addEventListener("click", speedDown)
startButton.addEventListener("click", startGame)
a.displayWindow()
function startGame() {
    a.resetWindow()
    
    
    b.position = [50,20]
    b.direction = "North"
    b2.position = [50,80]
    b2.direction = "South"
    window.requestAnimationFrame(wait)

    
}


function wait() {
    
    if (loopNum >= speed) {
        loopNum = 0;
        
        if ((b.position[0] == 99 && b.direction == "South") || (b.position[0] == 0 && b.direction == "North") || (b.position[1] == 0 && b.direction == "West") || (b.position[1] == 99 && b.direction == "East")) {
            console.log("red wins")
            redWinCount++
            redWinCounter.textContent = redWinCount
            return
        }
        if ((b2.position[0] == 99 && b2.direction == "South") || (b2.position[0] == 0 && b2.direction == "North") || (b2.position[1] == 0 && b2.direction == "West") || (b2.position[1] == 99 && b2.direction == "East")) {
            console.log("blue wins")
            blueWinCount++
            blueWinCounter.textContent = blueWinCount
            return
        }
        b.directionMove()
        if ((b.position[0] == b2.position[0]) && (b.position[1] == b2.position[1])) {
            return
        }

        if (a.windowTiles[b.position[0]][b.position[1]].empty != true ) {
            console.log("red wins")
            redWinCount++
            redWinCounter.textContent = redWinCount
            return
        }
        a.windowTiles[b.position[0]][b.position[1]].empty = false
        a.windowTiles[b.position[0]][b.position[1]].spanTag.src = b.colorImage
        b2.directionMove()
        if ((b.position[0] == b2.position[0]) && (b.position[1] == b2.position[1])) {
            return
        }
        if (a.windowTiles[b2.position[0]][b2.position[1]].empty != true ) {
            console.log("blue wins")
            blueWinCount++
            blueWinCounter.textContent = blueWinCount
            return
        }
        a.windowTiles[b2.position[0]][b2.position[1]].empty = false
        a.windowTiles[b2.position[0]][b2.position[1]].spanTag.src = b2.colorImage
    }
    loopNum++
    window.requestAnimationFrame(wait)
    
}

document.addEventListener('keydown', function(e){
    if(e.repeat) return;

    if(e.key === 'a' && b.direction != "East"){
        b.direction = 'West'
    }
    if(e.key === 'w' && b.direction != "South"){
        b.direction = 'North'
    }
    if(e.key === 'd' && b.direction != "West"){
        b.direction = 'East'
    }
    if(e.key === 's' && b.direction != "North"){
        b.direction = 'South'
    }
    
})

document.addEventListener('keydown', function(e){
    if(e.repeat) return;

    if(e.key === 'ArrowLeft' && b2.direction != "East"){
        b2.direction = 'West'
    }
    if(e.key === 'ArrowUp' && b2.direction != "South"){
        b2.direction = 'North'
    }
    if(e.key === 'ArrowRight' && b2.direction != "West"){
        b2.direction = 'East'
    }
    if(e.key === 'ArrowDown' && b2.direction != "North"){
        b2.direction = 'South'
    }
    
})

function speedUp() {
    if (speed > 1) {
        speed--
        updateSpeedText()
    }
}

function speedDown() {
    if (speed < 10) {
        speed++
        updateSpeedText()
    }
}

function updateSpeedText() {
    speedTag.textContent = "" + (11 - speed) 
}
 


