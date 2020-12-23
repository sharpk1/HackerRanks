// HackerRank: Arrays: Left Rotation
function rotLeft(a,d){

    let tempArray = [];
    let len = a.length;
    let firstElement;

    while (d--){
        if (tempArray.length != 0){
            a = tempArray
            tempArray = [];
        }
        
        for (let i = 1; i < len; i++){
            firstElement = a[0]
            tempArray.push(a[i]);
        }

        tempArray.push(firstElement)
    }
    
    return tempArray;
}



let myArray = [1,2,3,4,5];
let numberOfRotations = 2;

rotLeft(myArray, numberOfRotations);
