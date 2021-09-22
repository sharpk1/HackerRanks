const stockPriceCalc = (stockPrices, k) => {
    let result = 0;

    const isIncreasing = (arr) => {
        let isIncreasing = true;
        let comparable = arr[0];

        for (let i = 1; i < arr.length; i++){
            if (!(arr[i] >= comparable)){
                return false;
            }
        }

        return isIncreasing;
    }

    for (let i = 0; i < stockPrices.length; i++){
        let trimmed = stockPrices.slice(i, i + k);
        if (isIncreasing(trimmed) && trimmed.length == k) {
            result++;
        }
    }

    return result;


}

stockPriceCalc([1,2,3,3,4,5], 3);