osc([1,3,5,7,9,11,15,24].fast(0.1).smooth(0.0002),0.2)
  .modulateRotate(noise(5,0.2,0.5))
  .posterize(255)
  .out(o1)

src(o0).modulateScale(o1,0.2).modulateRotate(o1,0.8).diff(src(o0),0.1).out(o2)

osc(10,0,0.8)
  .modulate(o1)
  .diff(o2)
  .thresh([0.4,0.1,0.8,0.3,0.99].smooth(0.3).fast(0.2),0.5)
  .blend(o0,0.5)
  .out(o0)

render(o2)
