const non_repeat_substring = function(str) {
    
    let maxLength = 0;
    let charMap = {};
    let windowStart = 0;

    for (windowEnd = 0; windowEnd < str.length; windowEnd++){
        const rightChar = str[windowEnd];
        console.log(charMap);
        if (rightChar in charMap){
            console.log('windowStart is ', windowStart);
            windowStart = Math.max(windowStart, charMap[rightChar] + 1);
        }

        charMap[rightChar] = windowEnd;
        

        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
        console.log('maxLength is ', maxLength);
    }

    return maxLength;

















    
};
  
console.log(non_repeat_substring("aabccbb"));; // should be 3
non_repeat_substring("abbbb"); // should be 2

// let windowStart = 0;
//     let maxLength = 0;
//     let charMap = {};

//     for (let windowEnd = 0; windowEnd < str.length; windowEnd++){
//         const rightChar = str[windowEnd]; // str[0]
//         console.log('windowEnd is at ', windowEnd, ' windowStart is at ', windowStart, ' trimmed is ', str.slice(windowStart, windowEnd));

//         if (rightChar in charMap){
//             windowStart = Math.max(windowStart, charMap[rightChar] + 1);
//         }

//         charMap[rightChar] = windowEnd;

//         maxLength = Math.max(maxLength, windowEnd - windowStart + 1);


//     }
//     return maxLength;