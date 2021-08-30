var lengthOfLastWord = function(s) {
    // Start at the end
    let count = 0;
    for (let i = s.length - 1; i >= 0; i--){
        if (s[i] != ' ') count++;
        if (s[i] == ' ' && count > 0) return count
    }
    return count;
};

console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord("luffy is still joyboy"));