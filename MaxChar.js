function maxChar(str) {
    let charMap = {};
    let max = 0;
    let maxChar = '';

    for (let char of str){
        // charMap[char] = charMap[char] + 1 || 1;
        if (!charMap[char]){
            charMap[char] = 1;
        } else {
            charMap[char]++;
        }
    }

    for (let char in charMap){
        if (charMap[char] > max){
            max = charMap[char];
            maxChar = char;
        }
    }

    return maxChar;
}

maxChar("abcccccccd");
maxChar("apple 1231111");