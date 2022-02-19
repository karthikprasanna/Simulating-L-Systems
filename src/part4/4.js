var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')
ctx.translate(canvas.width/2 , canvas.height / 2)
//1.4

var foursub = new LSystem
(
    {
        axiom: 'F+F',
        productions: {'F':'F-F++F-F',
                      'F<F>-F':'F-+F+F'},
        finals: {
            '+': () => { ctx.rotate((Math.PI / 180) * -90) },
            '-': () => { ctx.rotate((Math.PI / 180) * 90) },
            '[': () => { ctx.save() },
            ']': () => { ctx.restore() },

            'F': () => {
                ctx.beginPath()
                ctx.moveTo(0, 0)
                ctx.lineTo(0, 30 / (foursub.iterations + 1))
                ctx.stroke()
                ctx.translate(0, 30 / (foursub.iterations + 1))
            },

        }
    }
)

foursub.iterate(9)
foursub.final()