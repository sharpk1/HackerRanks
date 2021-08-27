class Solution {
    solve(nums) {
        let finalArray = [];
        let objectMap = {};

         for (let i = 0; i < nums.length; i++) {
            if (!(nums[i] in objectMap)){
                objectMap[nums[i]] = 1;
            }else{
                let count = objectMap[nums[i]];
                count++;
                objectMap[nums[i]] = count;
            }
        }
        
        let half = Math.ceil(nums.length / 2);
        Array.prototype.byCount= function(){
            var itm, a= [], L= this.length, o= {};
            for(var i= 0; i<L; i++){
                itm= this[i];
                if(!itm) continue;
                if(o[itm]== undefined) o[itm]= 1;
                else ++o[itm];
            }
            for(var p in o) a[a.length]= p;
            return a.sort(function(a, b){
                return o[b]-o[a];
            });
        };
        
        for (let i = 0; i < nums.length; i++){
            let numberToSubtract = objectMap[nums[i]];
            half -= numberToSubtract
            if (half > 0){
                finalArray.push(nums[i])
            }
        }
        return finalArray.length;
        
    }
}