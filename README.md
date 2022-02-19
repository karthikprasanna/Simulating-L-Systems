# Simulating-L-Systems
1. “I’m a mirrorball”

 - Axiom: G

 - Angle: 30

- Rule 1: G = X − G − X

- Rule 2: X = G + Y + G

- Rule 3: Y = [+F]F[−F]


2. “Is that a tree?” 

- Axiom: X
- Angle: (r mod 30) − 15 + 10 × (−1)15−(r mod 30)
- Rule 1: X = F[−X]X[+X][+X]F − [−X] + X[−X]
- Rule 2: F = F F

    here, 'r' is any random number

3. “Anything that can happen will happen”

- Axiom: X
- Angle: 12.5
- Rule 1: X = F − [[−X] + X] + F[+F X] − X, F + [[+X] − X] − F[−F X] + X[X]
- Rule 2: F = F[F]F, F[+]F, F[F F]F

4. “Content without context is noise”

- Axiom: F + F
- Angle: 90
- Rule 1: F = F − F + +F − F
- Rule 2: F hFi − F = F − +F + F


