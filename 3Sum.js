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
var threeSum = function(nums) {
    
    let finalArray = [];
    // Edge cases
    if (nums.length === 0){
        return [];
    }
    
    if (nums.length === 1){
        return [];
    }

    nums.sort((a,b) => {a - b});

    let left = 0; // start calculating
    let right = nums.length - 1; // start at the end

    for (let i = 0; i < nums.length; i++){
        // i is our current index we start from
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        
        left = i + 1;
        right = nums.length - 1;
        let sum = 0;

        while (left < right){
            sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                finalArray.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;
                
                // remove duplicates
                while(left < right && nums[left] === nums[left - 1]) left++;
                while(left < right && nums[right] === nums[right + 1]) right--;

            } else if (sum > 0){
                right--;
            } else {
                left++;
            }
        }
        return finalArray;
    }

};
console.log(threeSum([-1,0,1,2,-1,-4]));