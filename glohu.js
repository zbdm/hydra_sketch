
 shape([5,3,9,16].smooth(2))
  .scrollX(0.3,0.7)
  .repeat([1.6,2.6].smooth(2),1)
  .add(src(o0).color([0.1,0.9].smooth(4),0.22,.28),0.8)
  .modulateScale(o0,0.1,5)
  .rotate(1,8)
  .modulate(noise(4,0.3,0.1),0.8) 
   .out()

speed=0.022
