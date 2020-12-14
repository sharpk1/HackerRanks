var longestCommonPrefix = function(strs) {

    let len = strs.length;
    let tempString = "";

    for(let i = 0; i < len; i++){

        tempString = strs[i][0];

        if (i > 0){
            if(tempString != strs[i][0]){
                return "";
            }else{
                
            }
        }
    }
    
};


let strs1 = ["flower","flow","flight"];
let strs2 = ["dog","racecar","car"];

// longestCommonPrefix(strs1);
longestCommonPrefix(strs2);