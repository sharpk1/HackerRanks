const triplet_sum_close_to_target = function(arr, target_sum) {
    // the reference point for the minimum difference
    let minDiff = Infinity;
    // sort the array so you can set the window later
    arr.sort();

    // iterate through array, stop before RIGHT variable
    for (let i = 0; i < arr.length - 2; i++){
        // left variable and right declared
        let left = i + 1;
        let right = arr.length - 1;
        while (left < right) {
            const targetDiff = target_sum - arr[i] - arr[left] - arr[right];

            if (targetDiff == 0){
                // if complete, return the triplet
                return target_sum - targetDiff;
            }

            if (Math.abs(targetDiff) < Math.abs(minDiff)){
                minifDf = targetDiff;
            }

            if (
              Math.abs(targetDiff) < Math.abs(minDiff) ||
              (Math.abs(targetDiff) === Math.abs(minDiff) &&
                targetDiff > minDiff)
            ) {
              minDiff = targetDiff; // save the closest and the biggest difference
            }

            if (targetDiff > 0) {
                left += 1; // we need a triplet with a bigger sum
              } else {
                right -= 1; // we need a triplet with a smaller sum
              }
        }

        return target_sum - minDiff;
    }

};

console.log(triplet_sum_close_to_target([-2,0,1,2], 2));