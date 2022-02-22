const betweenRepeated = (arr) => {
    let result = [];

    for (let i = 0; i < arr.length; i++){
        if (arr.slice(i + 1).includes(arr[i])) {
            let index = findIndex(arr, arr[i]);
            return arr.slice(i + 1, index);
        }
        
    }
    return result;
}

const findIndex = (arr, target) => {
    for (let i = arr.length - 1; i >= 0; i--){
        if (arr[i] == target){
            return i;
        }
    }
}


console.log(betweenRepeated([2,5,8,6,1,5,9]));
console.log(betweenRepeated([5,2,1,3,5]));
console.log(betweenRepeated([1,2,3,4,5,6,7,8,9,1]));




// Find the repeating numbers
// Find the element of both numbers
// Create a subarray between both numbers
// pass subarray into results array
// return the array

// Improvements: remove result array for memory allocation, use native function to find index

const betweenRepeating = (arr) => {
    // let result = [];

    for (let i = 0; i < arr.length; i++){
        if (arr.slice(i + 1).contains(arr[i])){
            let index = findElement(arr, arr[i]);
            let index = arr.slice(i + 1).indexOf(arr[i]);
            // result.push(arr.slice(i + 1, index));
            return arr.slice(i + 1, index);
        }
    }

    // return result;
}

const findElement = (arr, target) => {
    for (let i = arr.length - 1; i >= 0; i--){
        if (arr[i] == target){
            return i;
        }
    }
}

// MVC: model view controller
// Split large app into specific sections
// Model: Handle the data logic. Save, updating, deleting. Interacts with DB
// View: Gets presentation from Controller and sets the presentation. Dynamically rendered
// Controller: 1. Getting the Request. It handles the request flow. Not much code. ask the model for information