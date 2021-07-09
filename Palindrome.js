var isPalindrome = function(s) {
    s = s.split(' ').join('');

    const stripPunctuationAndLowerCase = (x) => {
        x = x.replace(/[^\x00-\x7F]/g, "");
        x = x.replace(/(~|`|!|@|#|$|%|^|&|\*|\(|\)|{|}|\[|\]|;|:|\"|'|<|,|\.|>|\?|\/|\\|\||-|_|\+|=)/g,"");
        return x.replace(/[^0-9a-zA-Z]+/gmi,"").toLowerCase();
    }
    let reversed = stripPunctuationAndLowerCase(s).split('').reverse().join('');
    // console.log(stripPunctuationAndLowerCase(comparable));
    console.log(stripPunctuationAndLowerCase(s));
    console.log(reversed);

  if (reversed === stripPunctuationAndLowerCase(s)){
      console.log(true);
      return true;
  }else {
      console.log(false);
      return false;
  }
};

isPalindrome("A man, a plan, a canal: Panama");
isPalindrome("race a car")
isPalindrome("Marge, let's \"[went].\" I await {news} telegram.")
isPalindrome("\"Stop!\" nine myriad murmur. \"Put up rum, rum, dairymen, in pots.\"")