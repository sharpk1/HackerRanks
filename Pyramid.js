var lengthOfLongestSubstring = function(s) {
    // Edge cases
    if (s.length == 0){
        return 0;
    }
    
    let runningString = '';
    let runningLength = 0;
    let finalLength = 0;
    let stringMap = {};
    
    s = s.split('');
    
    for (let i = 0; i < s.length; i++){
        console.log(s[i] + ' '+i)
        if (s[i] in stringMap){
            if(runningLength >= finalLength){
                finalLength = runningLength;
                runningString = s[i];
                runningLength = 1;
                stringMap = {};
                stringMap[s[i]] = 1;
            }
        }else {
            stringMap[s[i]] = 1;
            runningString += s[i];
            runningLength++;
        }
    }
    console.log(finalLength);
    if (runningLength >= finalLength){
        return runningLength;
    }else {
        return finalLength;
    }
    
};

lengthOfLongestSubstring("dvdf");