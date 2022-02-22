const mergeInjury = (injuries) => {
    let results = [];
    let left = 0
    let right = injuries.length - 1;

    while(left < right){
        let leftInterval = injuries[left][0];
        let rightInterval = injuries[right][0];

        if (leftInterval - rightInterval != 1){
            right--;
        } else {
            let leftRange = leftInterval[0]; // 1
            let rightRange = rightInterval[1]; // 6

            if (leftInterval[1] <= rightRange && rightInterval >= leftRange){
                results.push([leftRange, rightRange]);
            }
        }
        
    }

}




console.log(mergeInjury([[1,4],[2,6],[15,17]]));
