const smallest_subarray_with_given_sum = function(s, arr) {
    // TODO: Write your code here
    if (arr.length === 0){
      return 0;
    }
  
    // let len = 
    let sumArray = [];
    let lowestLength = Number.MAX_VALUE;
  
    // Return the length of the subarray that has the sum of s or greater
    for (let i = 0; i < arr.length; i++){

        if (arr[i] >= s){
            sumArray.push([arr[i]]);
        }
      for (let j = i + 1; j < arr.length; j++){
        let trimmed = arr.slice(i, j + 1);
        // console.log(trimmed);
        let sum = trimmed.reduce((a, b) => a + b, 0);
        if (sum >= s){
          sumArray.push(trimmed);
        }
      }
    }
  console.log(sumArray);
    for (let i = 0; i < sumArray.length; i++){
        console.log(sumArray[i].length);
      if (sumArray[i].length < lowestLength){
        lowestLength = sumArray[i].length;
      }
    }
  
    return lowestLength;
  
  };
  
  
console.log(smallest_subarray_with_given_sum(7, [2,1,5,2,8]));