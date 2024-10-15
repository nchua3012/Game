const canvas = document.querySelector ('canvas')
const c = canvas.getContext ('2d')
canvas.width = 1280
canvas.height = 720

c.fillStyle = 'beige'
c.fillRect(0, 0, canvas.width, canvas.height)

const image = new Image ()
image.src = 'Assets/Map/Map1.tmx'