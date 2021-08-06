var maxSubArray = function(nums) {
//     let max = null;
    
//     if (nums.length === 1){
//         return nums[0];
//     }

//     for (let i = 0; i < nums.length; i++){
//         for (let j = i + 1; j < nums.length; j++){
//             let trimmed = nums.slice(i, j + 1);
//             let sum = trimmed.reduce((a,b) => a + b, 0);
//             console.log(sum)
//             if (max == null){
//                 max = sum;
//             } else if (sum > max) {
//                 max = sum;
//             }
//         }

//     }

    
//     // console.log(max);
//    return max;

let maxSoFar = nums[0];
let prevMax = nums[0];

for (let i = 1; i < nums.length; i++) {
    prevMax = Math.max(nums[i], nums[i] + prevMax);
    if (prevMax > maxSoFar){
        maxSoFar = prevMax;
    }
}
return maxSoFar;
};

console.log(maxSubArray([1,0,100,0,0]));