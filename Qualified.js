let height = 3
let pyramid = [];
for (let i = 0; i < height; i++){
  pyramid.push("");
}

// Edge case for height of 1
// if (height == 1){
//   pyramid.splice(0, 1, '#');
//   return pyramid;
// }


for (let i = 0; i < pyramid.length; i++){
  let layer = Array(height).fill("");
  height += 2;
  layer.join('');
  pyramid.push(layer);    
}
console.log(pyramid)