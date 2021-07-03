var strStr = function(haystack, needle) {

    //edge case
    if (needle === ""){
        return 0;
    }
    if (needle === haystack){
        return 0;
    }

    haystack = haystack.split('');
    // needle = needle.split('');
    let explodedNeedle = needle.split('');
    let needleLength = explodedNeedle.length; // 2
    let needleFirst = explodedNeedle[0];
    let index = -1;
    let finalString = "";
    let needleMap = {};
    
    for (let i = 0; i < haystack.length; i++){
        if (needleLength === 1){
            if (haystack.includes(needle)){
                return haystack.indexOf(needle);
            }
        }
        if (needleFirst == haystack[i]){
    
            finalString = haystack.join('');
            finalString = haystack.toString();
            finalString = haystack.slice(i, i + needleLength);
            finalString = finalString.join('');
    
            index = i;
            // needleMap[index] = finalString;
            needleMap[index] = finalString;
        }
    }

    function getKeyByValue(object, value) {
        return Object.keys(object).find(key => object[key] === value);
      }

    if (Object.values(needleMap).includes(needle)){
        return getKeyByValue(needleMap, needle);
        // return index;
    }else {
        console.log("-1");
        return -1;
    }
    
    
};

let haystack1 = "hello";
let needle1 = "ll";
let haystack2 = "aaaaa";
let needle2 = "bba";
let haystack3 = "";
let needle3 = "";
let haystack4 = "aaa";
let needle4 = "a";
let haystack5 = "aaaaa";
let needle5 = "bba";
let haystack6 = "mississippi";
let needle6 = "issip"

// strStr(haystack1, needle1);
// strStr(haystack2, needle2);
// strStr(haystack3, needle3);
// strStr(haystack4, needle4);
// strStr(haystack5, needle5);
strStr(haystack6, needle6);