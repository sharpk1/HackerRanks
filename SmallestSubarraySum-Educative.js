const smallestSub = (s, arr) => {
    // If there is nothing in array
    if (arr.length == 0) {
        return 0;
    }

    // declare the sum at 0, be re-used later
    let sum = 0;
    // declare the minLength, to be changed. make sure its fungible
    let minLength = Infinity;
    // declar the windowStart to be 0 and it will be extended later
    let windowStart = 0;

    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++){
        // the sum will be the added at the first element
        sum += arr[windowEnd];

        while(sum >= s){
            // declare the min length between the already determined min length or the current lenght if its smaller
            minLength = Math.min(minLength, windowEnd - windowStart + 1);
            // subtract from the start to start the next new window to check
            sum -= arr[windowStart];
            // and then increment start to set the new window
            windowStart++;
        }

        
    }
    return minLength

}

console.log(smallestSub(7, [2, 1, 5, 2, 3, 2]));
// console.log(smallestSub(7, [2, 1, 5, 2, 8]));
// console.log(smallestSub(8, [3, 4, 1, 1, 6]));