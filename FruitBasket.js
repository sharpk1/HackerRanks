const fruits_into_baskets = function(fruits) {

    let sum = 0;
    let longestLength = 0;

    const uniqueValues = (arr) => {
        let fruitMap = {};
        for (let i = 0; i < arr.length; i++){
            if (!(arr[i] in fruitMap)){
                fruitMap[arr[i]] = 1;
            } else {
                let count = fruitMap[arr[i]];
                fruitMap[arr[i]] = count++;
            }
        }
        return Object.keys(fruitMap).length;
    }

    for (let i = 0; i < fruits.length; i++){
        for (let j = i + 1; j < fruits.length; j++){
            let trimmed = fruits.slice(i,j + 1);
            let trimmedLength = trimmed.length;
            sum = uniqueValues(trimmed);
            if (sum <= 2 && trimmedLength > longestLength){
                longestLength = trimmedLength
            }
            
        }
        
    }
    return longestLength;
    
};

// console.log(fruits_into_baskets(['A', 'B', 'C', 'A', 'C']));
console.log(fruits_into_baskets(['A', 'B', 'C', 'B', 'B', 'C']));