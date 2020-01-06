// select the elements on the page
// - canvas, shake button
const canvas = document.querySelector('#etch-a-sketch')
const ctx = canvas.getContext('2d')
const shakeButton = document.querySelector('.shake')
const MOVE_AMOUNT = 10
const { width, height } = canvas // get the max x and y positions to draw between from the size of the canvas
let x
let y
let hue = 0

// write a draw function
function newDrawing() {
  // set up the canvas for drawing
  x = Math.floor(Math.random() * width)
  y = Math.floor(Math.random() * height)

  ctx.lineJoin = 'round' // these specify the look of the line
  ctx.lineCap = 'round'
  ctx.lineWidth = MOVE_AMOUNT
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`

  ctx.beginPath() // starts the drawing
  ctx.moveTo(x, y) // specifies start position
  ctx.lineTo(x, y) // specifies end position
  ctx.stroke() // draws the line (or dot in our case!)
}

function draw({ key }) {
  hue += 5
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
  ctx.beginPath()
  ctx.moveTo(x, y)
  switch (key) {
    case 'ArrowLeft':
      x -= MOVE_AMOUNT
      break

    case 'ArrowUp':
      y -= MOVE_AMOUNT
      break

    case 'ArrowRight':
      x += MOVE_AMOUNT
      break

    case 'ArrowDown':
      y += MOVE_AMOUNT
      break

    default:
      break
  }
  ctx.lineTo(x, y)
  ctx.stroke()
}

// write a handler for the keys
function handleKey(e) {
  if (e.key.includes('Arrow')) {
    e.preventDefault()
    draw({ key: e.key })
  }
}

// clear / shake function
function handleShake() {
  canvas.classList.add('shake')
  canvas.addEventListener(
    'animationend',
    () => {
      canvas.classList.remove('shake')
    },
    { once: true }
  )

  // reset the drawing
  ctx.clearRect(0, 0, width, height)
  newDrawing()
}

// listen for arrow keys and shake button
window.addEventListener('keydown', handleKey)
shakeButton.addEventListener('click', handleShake)

newDrawing()
