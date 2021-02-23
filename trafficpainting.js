shape(8,0.01,0.001)
  .color([1,1,1,1,0].fast(0.1),[1,1,1,0].fast(0.5),[1,1,1,0].fast(0.5))
  .modulateScrollX(src(o0).invert(),0.8,0.0001)
  .modulateScrollY(osc(),0.08,0.01)
  .rotate(() => Math.random(), () => Math.random())
  .modulate(voronoi(120,2,0.72),0.3)
  .add(src(o0),0.99)
  .out(o0)


//V2
shape([3,4,5,6,7,8,9,10,2].fast(0.8),0.01,0.001)
  .color([1,1,1,1,0.2].fast(0.1),[1,1,1,0].fast(0.5),[1,1,1,0].fast(0.5))
  .modulateScrollX(src(o0).invert(),0.8,0.0001)
  .modulateScrollY(osc(),0.08,0.01)
  .rotate(() => Math.random(), () => Math.random())
  .modulate(voronoi(120,2,0.72),0.3)
  .add(src(o0),0.99)
  .out(o0)

//V3
// Traffic Paint - ZBDM
// IG: @Zuperbdm
// www.crashserver.fr


shape([3,4,5,6,7,8,9,10,2].fast(0.8),0.01,0.001)
  .color([1,1,1,1,0].fast(0.1),[1,1,1,0].fast(0.5),[1,1,1,0].fast(0.5))
  .modulateScrollX(src(o0).invert(),0.8,0.0001)
  .modulateScrollY(osc(),0.08,0.01)
  .rotate(() => Math.random(), () => Math.random())
  .modulate(voronoi(120,2,0.72),0.13)
  .add(src(o0),0.98)
  .out(o0)

