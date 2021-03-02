voronoi([20,200].smooth().fast(0.1),2,8)
  .sub(osc(2000,0.1,0))
  .modulate(noise(16,0.3,0),[0,0.1].smooth().fast(0.1))
  .blend(o0,0.2)
  .rotate(() => Math.cos(time*2))
  .diff(src(o0).thresh(0.99))
  .out() 