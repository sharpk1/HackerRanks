var reverseString = function(s) {
    for (let i = s.length; i >= 0; i--){

        s.unshift(s.pop(s[i]));
        console.log(s, i)
    }
    
};

reverseString(["h","e","l","l","o"]);