// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    // debugger;
    let pairCount = 0;
    ar = ar.sort();
    console.log(ar)
    for (let i = 0; i < n; i++){
        if (ar[i] == ar[i+1]){
            console.log(ar[i] + " is equal to " + ar[i+1])
            pairCount++;
            i++;
        }
    }



    // Return the total number of matching pairs of socks
    console.log(pairCount)
    return pairCount;
}

let myArr = [4,5,5,5,6,6,4,1,4,4,3,6,6,3,6,1,4,5,5,5]

sockMerchant(20, myArr)

