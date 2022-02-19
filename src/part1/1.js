var canvas = document.getElementById('canvas')
var ctx = canvas.getContext("2d")

// translate to center of canvas
ctx.translate(canvas.width/2, canvas.height /4)

// initialize a mirrorball curve L-System that uses final functions
// to draw the fractal onto a Canvas element.
// F: draw a line with length relative to the current iteration (half the previous length for each step)
//    and translates the current position to the end of the line
// +: rotates the canvas 60 degree
// -: rotates the canvas -60 degree

var length = 40
var mirrorball = new LSystem({
  axiom: 'G',
  productions: {'G': 'X-G-X',
                'X' : 'G+Y+X',
                'Y' : '[+F]F[-F]'},

  finals: {
    '+': () => { ctx.rotate((Math.PI/180) * 30) },
    '-': () => { ctx.rotate((Math.PI/180) *  -30) },
    '[': () => { ctx.save()},
    ']': () => { ctx.restore()},

    'F': () => {
      ctx.beginPath()
      ctx.moveTo(0,0)
      ctx.lineTo(0, length/(mirrorball.iterations + 1))
      ctx.stroke()
      ctx.translate(0, length/(mirrorball.iterations + 1))},

      'X': () => {
        ctx.beginPath()
        ctx.moveTo(0,0)
        ctx.lineTo(0, length/(mirrorball.iterations + 1))
        ctx.stroke()
        ctx.translate(0, length/(mirrorball.iterations + 1))},

        'Y': () => {
          ctx.beginPath()
          ctx.moveTo(0,0)
          ctx.lineTo(0, length/(mirrorball.iterations + 1))
          ctx.stroke()
          ctx.translate(0, length/(mirrorball.iterations + 1))},

   }
})

console.log(mirrorball.iterate(9))
mirrorball.final()
