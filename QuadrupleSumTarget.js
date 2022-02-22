const search_quadruplets = function(arr, target) {
    quadruplets = [];
    let sum = 0;
    // sort the array
    arr.sort((a,b) => {a - b});

    let left = 0;
    let right = arr.length - 1;
    // console.log(arr);
    // console.log(arr.slice(left + 1, right));
    while (left <= right) {
        sum = arr[left] + arr[right];
        // get subarray
        arr.slice(left + 1, right);
        
    }
    
    return quadruplets;
};

const targetFinder = (subarray, sum, target) => {
    let left = 0;
    let right = subarray.length - 1;

    while (left < right){
        sum += subarray[left];
        sum += subarray[right];

        if (sum == target){
            // quadruplets.push([arr[]])
        }
    }
}

search_quadruplets([4, 1, 2, -1, 1, -3], 1);