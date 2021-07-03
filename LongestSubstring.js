/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {

    let longestStr = '';
    let currentStr = '';
  
    for(let i = 0; i < s.length; i++) {
      let letter = s[i];
      let index = currentStr.indexOf(letter);
  
      if(index > -1) {
        if(currentStr.length > longestStr.length) longestStr = currentStr;
        currentStr = currentStr.slice(index + 1) + letter;
      }
      else {
        currentStr += letter;
      }
    }
    if(currentStr.length > longestStr.length) longestStr = currentStr;
    return longestStr.length;
    // // Edge cases
    // if (s.length == 0){
    //     return 0;
    // }

    // if (s.length == 1){
    //     return 1;
    // }

    // // explode the string
    // const explodedString = s.split('');
    // let charMap = {};
    // let runningLength = 0;
    // let finalLength = 0;
    // let lengthArray = [];
    // let runningString = "";

    // // iterate through the string
    // for (let i = 0; i < explodedString.length; i++) {
    //     const element = explodedString[i];
    //     // Check if element exists in charMap
    //     if (element in charMap){
            
    //         //Check to see if the first letter is the same as element, than start the string at i-- and break
    //         // and set the character map 
            

    //         // Check if its the longest string
    //         if(runningLength >= finalLength){
    //             finalLength = runningLength;
    //             lengthArray.push(runningString);
    //             runningLength = 1;
    //         }
           

    //         if(runningString.charAt(0) == element){
    //             runningString = runningString.charAt(1);
    //             charMap = {};
    //             charMap[runningString] = 1;
    //             charMap[element] = 1;
    //             runningString += element;
    //             runningLength++;  
    //         }else {
    //             runningString = element;
    //             charMap = {};
    //             charMap[element] = 1;
    //         }
            

    //     }else{
    //         charMap[element] = 1;
    //         runningString += element;
    //         runningLength++;
    //     }

    //     if (runningLength >= finalLength){
    //         finalLength = runningLength;
    //     }
    // }

    // // return finalLength;
    console.log(finalLength);
    
};



const testCase1 = "abcabcbb"; // 3
const testCase2 = "bbbbb"; // 1
const testCase3 = "pwwkew"; // 3
const testCase4 = "";
const testCase5 = " "; // 1
const testCase6 = "dvdf"; // 2

// lengthOfLongestSubstring(testCase1);
// lengthOfLongestSubstring(testCase2);
// lengthOfLongestSubstring(testCase3);
// lengthOfLongestSubstring(testCase5);
lengthOfLongestSubstring(testCase6);