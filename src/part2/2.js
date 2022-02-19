var canvas = document.getElementById('canvas')
var ctx = canvas.getContext("2d")

// translate to center of canvas
ctx.translate(canvas.width / 2, canvas.height)

// initialize a tree curve L-System that uses final functions
// to draw the fractal onto a Canvas element.
// F: draw a line with length relative to the current iteration (half the previous length for each step)
//    and translates the current position to the end of the line
// +: rotates the canvas 60 degree
// -: rotates the canvas -60 degree

var length = 8
var angle = 20

var tree = new LSystem({
  axiom: 'X',
  productions: {
      'F': 'FF',
      'X': 'F[-X]X[+X][+X]F-[-X]+X[-X]'
  },

  finals: {
    '+': () => { ctx.rotate((Math.PI/180) * -1 * angle) },
    '-': () => { ctx.rotate((Math.PI/180) * angle) },
    '[': () => { ctx.save()},
    ']': () => { ctx.restore()},

    'F': () => {
      ctx.beginPath()
      ctx.moveTo(0,0)
      ctx.lineTo(0, -length/(tree.iterations + 1))
      ctx.stroke()
      ctx.translate(0, -length/(tree.iterations + 1))},

      'X': () => {
        ctx.beginPath()
        ctx.moveTo(0,0)
        ctx.lineTo(0, -length/(tree.iterations + 1))
        ctx.stroke()
        ctx.translate(0, -length/(tree.iterations + 1))},

   }
})

tree.iterate(8)
tree.final()
