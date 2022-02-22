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




function rotate(text, noOfChars = 0){
    const n = noOfChars % text.length;
    const part1 = text.slice(0, n);
    const part2 = text.slice(n);
    return `${part2}${part1}`;
}

function rotateRight(text, noOfChars = 0){
    const n = noOfChars % text.length;
    return rotate(text, text.length - n);
}

let chars = ['A', 'B', 'A', 'C', 'B'];
let uniqueChars = [...new Set(chars)];
let nonDupe = [];

uniqueArray = a.filter(function(item, pos) {
    return a.indexOf(item) == pos;
})

for (let i = 0; i < chars.length; i++){
    if (!(nonDupe.includes(chars[i]))){
        nonDupe.push(chars[i])
    }
}

console.log(nonDupe)


function reverseString(str) {
    return str.split("").reverse().join("");
}
reverseString("hello");