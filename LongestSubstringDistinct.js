const longest_substring_with_k_distinct = function(str, k) {
   
   let explode = str.split('');
   let longestLength = 0;

   const charMapLengthFinder = (arr) => {
    let charMap = {};
    for (let i = 0; i < arr.length; i++){
        if(!(arr[i] in charMap)){
            charMap[arr[i]] = 1;
        }else{
            let count = charMap[arr[i]];
            charMap[arr[i]] = count++;
        }
    }
    if (Object.keys(charMap).length < k){
        return arr.length
    }else {
        return 0;
    }
   }

   for (let i = 0; i < explode.length; i++){
       for (let j = explode.length - 1; j > 1; j--){
        let trimmed = explode.slice(i, j + 1);
        if (charMapLengthFinder(trimmed) > longestLength){
            longestLength = charMapLengthFinder(trimmed);
        }
       }
   }

   return longestLength;
};

// longest_substring_with_k_distinct("cbbebi", 3);
console.log(longest_substring_with_k_distinct("cbbebi", 3));
// longest_substring_with_k_distinct("araaci", 1);
// longest_substring_with_k_distinct("cbbebi", 2);