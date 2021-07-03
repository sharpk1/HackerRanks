var maxProfit = function(prices) {
    // Edge cases
        if (prices.length == 0){
            return 0;
        }
        
        if (prices.length == 1){
            return 0;
        }
    
    // declare variables to be used later
        let profit = 0;
        let cheapestPrice = prices[0];
        
        // iterate through array to check for cheapest price
        for(let i = 1; i < prices.length; i++){
            if (prices[i] < cheapestPrice){
                cheapestPrice = prices[i];
            }else{
            // reassign profit if it is higher than the set profit
                if (prices[i] - cheapestPrice > profit){
                    profit = prices[i] - cheapestPrice;
                }
            }
        }
        
        return profit
        
    };