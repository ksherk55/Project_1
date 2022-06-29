class Bike {
    constructor(colorImage, direction) {
        this.colorImage = colorImage
        this.direction = direction
        this.position = [50, 50]
    }
    
    geDirection() {
        if (this.direction != "North" && this.direction != "East" && this.direction != "South" && this.direction != "West") {
            this.direction = "North"
        }
        return this.direction
    }

    setDirection(newDirection) {
        if (newDirection == "North" || newDirection == "East" || newDirection == "South" || newDirection == "West") {
            this.direction = newDirection
        }
    }
    
    move(x,y) {
        this.position = [this.position[0] + x , this.position[1] + y]
    }

    directionMove() {
        if (this.direction == "North") {
            this.move(-1,0)
        } else if (this.direction == "East") {
            this.move(0,1)
        } else if (this.direction == "South") {
            this.move(1,0)
        } else if (this.direction == "West") {
            this.move(0,-1)
        }
    }
}