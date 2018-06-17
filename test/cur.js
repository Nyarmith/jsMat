window.onload = function(){
  var rotMat = Mat.rotx(4);
  console.log(rotMat);
  var vec = Mat.vec(0,0,1);
  console.log(rotMat.mul(vec));
  console.log(rotMat.mul(rotMat));
  console.log(vec.scale(2));
};
