voronoi(5,()=>Math.sin(time)*0.002,0.9)
  .add(noise(5,0.3),()=>Math.sin(time))
  .out(o1) 

osc(5,-0.1,0.5)
  .mask(shape(4,0.1,0.5))
  .mask(src(o1).kaleid(3))
  .modulate(o1,0.17)
  .modulateScale(o0,0.008)
  .saturate(2)
  .blend(o0,0.4)
  .out()

render()
