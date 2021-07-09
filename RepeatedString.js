function repeatedString(s, n) {
    // Write your code here
    // Edge case
    if (s == "a"){
        return 1;
    }

    let aCount = 0;
    let counter = 0;
    let stringBuilt = "";
    // Build the string

    for (let i = 0; i <= s.length; i++){
        console.log(s[i], i);
        while(counter <= n - 1){
            
            if ((i == s.length - 1)){
                stringBuilt += s[i];
                i = -1;
                break;
            }

            stringBuilt += s[i];


            counter++;
            break;
        }
        
    }

    console.log(stringBuilt);

    // Count the number of a's

    // return the integer of a's

}

repeatedString("abcac", 10)