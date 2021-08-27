var maxArea = function(height) {
    let max = 0;
    let i = 0;
    let j = height.length - 1;
    let currentArea = 0;

    while(i < j){
        let distance = j - i;
        let trueHeight = Math.min(height[j], height[i]);
        currentArea = distance * trueHeight;

        if (height[i] <= height[j]){
            i++;
        } else {
            j--;
        }

        max = Math.max(currentArea, max);
    }

    return max;
};


console.log(maxArea([1,8,6,2,5,4,8,3,7]));