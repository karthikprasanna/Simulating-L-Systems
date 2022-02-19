
        var canvas = document.getElementById('canvas')
        var ctx = canvas.getContext("2d")

        ctx.translate(canvas.width / 2, canvas.height )


        var happen = new LSystem({
            axiom: 'X',
            productions: {
                'X': () => (Math.random() <= 0.5) ? 'F−[[−X]+X]+F[+FX]−X' : 'F+[[+X]−X]−F[−FX]+X[X]',
                'F': () => (Math.random() <= 0.3333) ? 'F[F]F' : ((Math.random() <= 0.5) ? 'F[+]F' : 'F[FF]F')
            },
            finals: {
                '+': () => { ctx.rotate((Math.PI / 180) * -12.5) },
                '-': () => { ctx.rotate((Math.PI / 180) * 12.5) },
                '[': () => { ctx.save() },
                ']': () => { ctx.restore() },
                'F': () => {
                    ctx.beginPath()
                    ctx.moveTo(0, 0)
                    ctx.lineTo(0, -100 / (happen.iterations + 1))
                    ctx.stroke()
                    ctx.translate(0, -100 / (happen.iterations + 1))
                },

                'X': () => {
                    ctx.beginPath()
                    ctx.moveTo(0, 0)
                    ctx.lineTo(0, -100 / (happen.iterations + 1))
                    ctx.stroke()
                    ctx.translate(0, -100 / (happen.iterations + 1))
                }
            }
        })

        happen.iterate(4)
        happen.final()

