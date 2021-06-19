var removeElement = function(nums, val) {
    
    if (nums.length == 0){
        return 0;
    }

    for (let i = 0; i < nums.length; i++){
        if (nums[i] === val){
            console.log(i)
            nums.splice(i, 1);
            i--;
        }
    }
    console.log(nums);
    return nums.length;
};

let myList = [0,1,2,2,3,0,4,2];
let myVal = 2; 

removeElement(myList, myVal);