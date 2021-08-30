// var threeSum = function(nums) {
//     let finalArray = [];
//     // Edge cases
//     if (nums.length === 0){
//         return [];
//     }

//     if (nums.length === 1){
//         return [];
//     }

//     const searchForArray = (haystack, needle) => {
//         var i, j, current;
//         for(i = 0; i < haystack.length; ++i){
//           if(needle.length === haystack[i].length){
//             current = haystack[i];
//             for(j = 0; j < needle.length && needle[j] === current[j]; ++j);
//             if(j === needle.length)
//               return i;
//           }
//         }
//         return -1;
//     }

//     for (let i = 0; i < nums.length; i++){
//         for (let j = i + 1; j < nums.length; j++){
//             for (let k = j + 1; k < nums.length; k++){
//                 let sum = nums[i] + nums[j] + nums[k];
//                 let prePush = [nums[i], nums[j], nums[k]].sort(function(a, b){return a-b});
//                 if (sum == 0 && (searchForArray(finalArray,prePush) == -1)){
//                     finalArray.push(prePush);
//                 }

//             }

//         }
//     }

//     return finalArray;

// };
var threeSum = function (nums) {
  // two pointer method
  let result = [];

  nums.sort((a, b) => a - b);

  let left = 0;
  let right = nums.length - 1;
  let seen = {};
  for (let i = 0; i < nums.length; i++) {
    // no duplicates
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    left = i + 1;
    right = nums.length - 1;
    let sum = 0;
    while (left < right) {
      sum = nums[i] + nums[left] + nums[right];

      if (sum === 0 && !seen[left] && !seen[right]) {
        result.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;
        seen[left] = true;
        seen[right] = true;
        
      } else if (sum > 0) {
        right--;
      } else {
        left++;
      }
    }
  }
  return result;
};
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
