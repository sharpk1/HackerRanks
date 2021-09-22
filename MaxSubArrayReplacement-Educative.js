const subArrayReplace = (str, k) => {

    let maxLength = 0;
    let windowEnd = str.length; 
    let maxRepeatingCharacterCount = k;

    for (let windowStart = 0; windowStart < str.length; windowStart++){
        let comparativeChar = str[windowStart];
        while (windowEnd > windowStart){
            let trimmed = str.slice(windowStart, windowEnd);

            let charMap = putIntoMap(trimmed, comparativeChar);
            if (trimmed[trimmed.length - 1] != comparativeChar){
                maxRepeatingCharacterCount--;
            }
            if (maxRepeatingCharacterCount == 0){
               
                maxRepeatingCharacterCount = k;
                if(trimmed.length - charMap[comparativeChar] == k){
                    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);

                }
            }

            windowEnd--;
        }
        windowEnd = str.length; 
        
    }
    console.log(maxLength);
    return maxLength;

}

const putIntoMap = (str, k) => {
    let charMap = {};
    for (let i = 0; i < str.length; i++){
        if (str[i] == k){
            if (!(str[i] in charMap)){
                charMap[str[i]] = 1;
            }else {
                let count = charMap[str[i]];
                count++;
                charMap[str[i]] = count;
            }
        }
    }
    return charMap;
}

subArrayReplace("abccde", 1);
subArrayReplace("abbcb", 1);
subArrayReplace("aabccbb", 2);