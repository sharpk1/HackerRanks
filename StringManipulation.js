// Substring
let mainString = "hello";
let subString = "hell";

console.log(mainString.includes(subString));

const capitalizeFirstLetter = (stringToChange) => {
    return stringToChange.charAt(0).toUpperCase() + stringToChange.slice(1);


}

console.log(capitalizeFirstLetter('hello'));


// starts with

let checker = "Good Morning".startsWith('Good');
console.log(checker);

let trimmed = " Hello World  ".trim();

console.log(trimmed);

let add = 1+2+'3';
console.log(add);

let firstName = "Kush";
let lastName = "Shah";

let greeting = `Welcome ${firstName} and ${lastName}`;

console.log(greeting);

let myNum = 1;
console.log(myNum.toString());

const parseZero = (str) => {
    // if (str.length === 0){
    //     return 0
    // }
    return Number("")
};

const empty = "";

console.log(parseZero(empty));

let str = 'a4f93j39';


//Regex to remove all numbers
console.log(str.replace(/[a-zA-Z]/g, ''));

let sentence = "hello, my name is kush";

const capitalize = (str) => {
    let result = [];
    str = str.split(' ');
    for (let i = 0; i < str.length; i++){
        console.log(str[i]);
        let letter = str[i][0].toUpperCase();
        console.log(letter);
        result.push(letter + str[i].slice(1))
    }
    return result.join(' ')
}

console.log(capitalize(sentence));