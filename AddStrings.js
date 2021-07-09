/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
 var addStrings = function(num1, num2) {
    let convertedNum1 = parseInt(num1);
    let convertedNum2 = parseInt(num2);

    let sum = convertedNum1 + convertedNum2;
    console.log(sum.toString());
    return sum.toString();
};

addStrings("11", "123");
addStrings("456", "77");
addStrings("0", "0");

addStrings("9333852702227987",
"85731737104263")
