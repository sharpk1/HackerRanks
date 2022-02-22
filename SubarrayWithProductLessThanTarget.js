const find_subarrays = function (arr, target) {
  result = [];

  arr.sort((a,b) => a - b);
  
  for (let i = 0; i < arr.length; i++) {
    let left = i;
    // if (arr[left] < target){
    //     result.push([arr[i]]);
    // }
    let right = arr.length;

    while(left < right){
        let sub = arr.slice(left, right);
        
        const product = multiplier(sub);
        if (product < target){
            result.push(sub);
        }
        right--;
    }

  }

  return result;
};

const multiplier = (arr) => {

    let result = 1;

    if (arr.length > 1){
        result = arr[0];
        for (let i = 1; i < arr.length; i++){
            result *= arr[i];
        }
    }else {
        result = arr[0]
    }
    return result;

}

console.log(find_subarrays([8, 2, 6, 5], 50));
