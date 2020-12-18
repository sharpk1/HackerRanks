function hourglassSum(arr) {
    // console.log(arr);
    let newArray = [];
    let len = arr.length;
    console.log(arr[0]);
    for (let i = 0; i < 1; i++){
        let len2 = arr[i].length;
        for (let k = 0; k < len2; k++){
            console.log(arr[i][k]);
        }
        
    }
}

let myArray = 
[ [ 1, 1, 1, 0, 0, 0 ],
[ 0, 1, 0, 0, 0, 0 ],
[ 1, 1, 1, 0, 0, 0 ],
[ 0, 0, 2, 4, 4, 0 ],
[ 0, 0, 0, 2, 0, 0 ],
[ 0, 0, 1, 2, 4, 0 ] ];

hourglassSum(myArray);