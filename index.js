const canvas = document.querySelector ('canvas')
const c = canvas.getContext ('2d')
canvas.width = 1280
canvas.height = 720

c.fillStyle = 'beige'
c.fillRect(0, 0, canvas.width, canvas.height)

const image = new Image ()
image.src = 'Assets/Map/Map1.png'

const playerImage = new Image ()
playerImage.src = 'Assets/Capybara-idle_happy.png'

class Sprite {
    constructor({position, velocity, image}){
        this.position = position
        this.image = image
    }

    draw() {
        c.drawImage(this.image, this.position.x, this.position.y);
    }
}

const background = new Sprite ({
    position: {
    x:0,
    y:0
},
image: image
})

const keys = {
    w: {
        pressed: false
    },
    a: {
        pressed: false
    },
    s: {
        pressed: false
    },
    d: {
        pressed: false
    }
}

function animate () {
window.requestAnimationFrame(animate)
background.draw()
    c.drawImage(
        // Crop
        playerImage,
        0,
        0,
        playerImage.width / 5,
        playerImage.height, 
        // Position
        canvas.width /2, 
        canvas.height /2 - playerImage.height,
        playerImage.width / 5 ,
        playerImage.height
    )
    if(keys.w.pressed && lastKey === 'w') background.position.y += 1
    else if (keys.s.pressed && lastKey === 's') background.position.y  -= 1
    else if (keys.a.pressed && lastKey === 'a') background.position.x  += 1
    else if (keys.d.pressed && lastKey === 'd') background.position.x  -= 1
}
animate ()

let lastkey = ''
window.addEventListener ('keydown', (e) => {
switch (e.key) {
    case 'w':
        keys.w.pressed =true
        lastKey = 'w'
    break
    case 'a':
        keys.a.pressed =true
        lastKey = 'a'
    break
    case 's':
        keys.s.pressed =true
        lastKey = 's'
    break
    case 'd':
        keys.d.pressed =true
        lastKey = 'd'
    break
}
})

window.addEventListener ('keyup', (e) => {
    switch (e.key) {
        case 'w':
            keys.w.pressed =false
        break
        case 'a':
            keys.a.pressed =false
        break
        case 's':
            keys.s.pressed =false
        break
        case 'd':
            keys.d.pressed =false
        break
    }
    })