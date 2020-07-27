function faireQuelqueChose () {
	
}
let liste: number[] = []
let posX = 0
let posY = 0
let direction = 1
basic.forever(function () {
    liste = [0, 4]
    for (let valeur of liste) {
        led.unplot(posX, posY)
        posY += direction
        led.plot(posX, posY)
        if (posY >= 4) {
            direction = -1
        } else if (posY <= 0) {
            direction = 1
        }
        basic.pause(100)
    }
})
