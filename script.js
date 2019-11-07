// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    // Create a pair count to be returned
    let pairCount = 0;

    // sort the array ascending
    ar = ar.sort();

    // Iterate through array. If there is a pair, increment pairCount by 1 otherwise go to next element
    for (let i = 0; i < n; i++){
        if (ar[i] == ar[i+1]){
            pairCount++;
            i++;
        }
    }



    // Return the total number of matching pairs of socks
    return pairCount;
}

let myArr = [4,5,5,5,6,6,4,1,4,4,3,6,6,3,6,1,4,5,5,5]

sockMerchant(20, myArr)

