function sockMerchant(n, ar) {
    var res = 0;
    ar.sort();
    for (let i = 0; i < n; i++) {
        if (ar[i] == ar[i + 1]) {
            i++;
            res++;
        }
    }
    return res;


}
let myArray = [10, 20, 30];
//let myArray = [4,5,5,5,6,6,4,1,4,4,3,6,6,3,6,1,4,5,5,5];
let arrayLength = myArray.length;


//console.log(sockMerchant(arrayLength, myArray));