// var isAlienSorted = function(words, order) {
//     if (words.length == 1){
//         return true;
//     }
    
//      // set to the first letter of the first word

//     const findIndex = (el) => {
//         return order.split('').indexOf(el);
//     }

//     for (let i = 0; i < words[0].length; i++){
//         let secretMessage = words.map((words) => words[i]).join('');
//         secretMessage = secretMessage.split(''); // the elements of each array
//         let lowestChar = order.split('').indexOf(words[0][i]);
//         for (let k = 0; k < secretMessage.length; k++){
//             console.log('lowestChar is ', lowestChar);
//             console.log(secretMessage[k]);
//             let index = findIndex(secretMessage[k]);
//             // console.log(words);
//             if (!(index <= lowestChar)){
//                 console.log('removing ', secretMessage[k]);
//                 words.splice(k,1);
//             }
//             console.log(words);            
//             if (secretMessage.length == 1){
//                 break;
//             }
            
            
//         }
//     }
//     if (words.length > 1){
//         console.log(false);
//         return false
//     }else{
//         console.log(true);
//         return true;
//     }
// };


var isAlienSorted = function(words, order) {

    // create order map
    let orderMap = {};

    for (let i = 0; i < order.length; i++){
        orderMap[order[i]] = i;
    }

    // iterate through all words
    for (let i = 1; i < words.length; i++){
        let word1 = words[i -1];
        let word2 = words[i];

        // if they are identical
        if (word1 === word2) return true;

        // immediately return false if the order does not match
        if(!compareWords(word1, word2, orderMap)){
            return false;
        }

    }
    return true;
    
}

const compareWords = (a,b,map) => {
    // compare the lengths and determine the minimum
    let length = Math.min(a.length, b.length);

    // using the length of the smallest word, create a for loop
    for (let i = 0; i < length; i++){
        // determine the characters we want to compare
        let char1 = a[i];
        let char2 = b[i];

        if (map[char1] < map[char2]){
            return true;
        }else if (map[char1] < map[char2]){
            return false;
        }
    }
    
    return a.length <= b.length;

}


isAlienSorted(["word","world","row"], "worldabcefghijkmnpqstuvxyz");
isAlienSorted(["hello","leetcode"], "hlabcdefgijkmnopqrstuvwxyz");
isAlienSorted(["apple","app"], "abcdefghijklmnopqrstuvwxyz");
isAlienSorted(["hello","hello"], "abcdefghijklmnopqrstuvwxyz");

