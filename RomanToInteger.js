// LeetCode 13. Roman to Integer


let romanToInt = function(s) {
    // special cases for 4 and 9
    // IV and IX respectively

    // break string into an array
    s = s.split("");
    let len = s.length;

    // Check the letter, if the following substrings exist
    // IV, IX, XL, XC, or CD or CM
    let specialArray = ["IV", "IX", "XL", "XC", "CD", "CM"];
    let finalCount = 0;
    let iCounter = 0;
    let vCounter = 0; // Could be let vCounter = [5]
    let xCounter = 0;
    let lCounter = 0;
    let cCounter = 0;
    let dCounter = 0;
    let mCounter = 0;
    let specialCase = 0;

    for (let i = 0; i < len; i++){

        let possibleCombo = s[i] + s[i + 1];

        if(possibleCombo.includes('undefined')){
            possibleCombo.split("");
            possibleCombo = possibleCombo[0];
        }
        
        if (!specialArray.includes(possibleCombo)){

            if(s[i] == "I"){
                iCounter++;
            }else if(s[i] == "V"){
                vCounter++;
            }else if(s[i] == "X"){
                xCounter++;
            }else if(s[i] == "L"){
                lCounter++;
            }else if(s[i] == "C"){
                cCounter++;
            }else if(s[i] == "D"){
                dCounter++;
            }else if(s[i] == "M"){
                mCounter++;
            }

        }else{
            if (possibleCombo == "IV"){
                specialCase = specialCase + 4;
                i++;
            }else if (possibleCombo == "IX"){
                specialCase = specialCase + 9;
                i++;
            }else if (possibleCombo == "XL"){
                specialCase = specialCase + 40;
                i++;
            }else if (possibleCombo == "XC"){
                specialCase = specialCase + 90;
                i++;
            }else if (possibleCombo == "CD"){
                specialCase = specialCase + 400;
                i++;
            }else if (possibleCombo == "CM"){
                specialCase = specialCase + 900;
                i++;
            }

        } 
    }

    finalCount = (iCounter * 1) + (vCounter * 5) + (xCounter * 10) + (lCounter * 50) + (cCounter * 100) + (dCounter * 500) + (mCounter * 1000) + (specialCase)
    return finalCount;

    
};


let string1 = "III"; // return 3
let string2 = "IV"; // return 4
let string3 = "IX"; // return 9
let string4 = "LVIII"; // return 58
let string5 = "MCMXCIV"; // return 1994

romanToInt(string1);
romanToInt(string2);
romanToInt(string3);
romanToInt(string4);
romanToInt(string5);