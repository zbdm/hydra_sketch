osc(10, 0.2, 0.015)
  .modulateScale(osc(40, 0.2, 1))
  .modulate(o0, () => Math.sin(time*0.5)*0.02)
  .repeat(22, 8)
  .modulateRotate(shape([3,4,5,4].smooth(0.8).fast(0.5), 0.081, 0.18))
  .out(o1);

shape(5,0.4,0.1)
  .mult(o1)
  .modulateScale(src(o1),0.5)
  .modulateRotate(noise(4,0.08,0.1),0.1)
  .out(o0)

render(o0)
