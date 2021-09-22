const isAnagram = (word1, word2) => {
    let word1Map = placeInMap(word1);
    let word2Map = placeInMap(word2);

    return objectEquality(word1Map, word2Map)

}

const placeInMap = (word) => {
    let charMap = {};
    for (let i = 0; i < word.length; i++){
        if (!(word[i] in charMap)){
            charMap[word[i]] = 1;
        }else {
            let count = charMap[word[i]];
            count++;
            charMap[word[i]] = count;
        }
    }
    return charMap;
}

function objectEquals(x, y) {
    'use strict';

    if (x === null || x === undefined || y === null || y === undefined) { return x === y; }
    // after this just checking type of one would be enough
    if (x.constructor !== y.constructor) { return false; }
    // if they are functions, they should exactly refer to same one (because of closures)
    if (x instanceof Function) { return x === y; }
    // if they are regexps, they should exactly refer to same one (it is hard to better equality check on current ES)
    if (x instanceof RegExp) { return x === y; }
    if (x === y || x.valueOf() === y.valueOf()) { return true; }
    if (Array.isArray(x) && x.length !== y.length) { return false; }

    // if they are dates, they must had equal valueOf
    if (x instanceof Date) { return false; }

    // if they are strictly equal, they both need to be object at least
    if (!(x instanceof Object)) { return false; }
    if (!(y instanceof Object)) { return false; }

    // recursive object equality check
    var p = Object.keys(x);
    return Object.keys(y).every(function (i) { return p.indexOf(i) !== -1; }) &&
        p.every(function (i) { return objectEquals(x[i], y[i]); });
}

function objectEquals2(obj1, obj2) {
    for (var i in obj1) {
        if (obj1.hasOwnProperty(i)) {
            if (!obj2.hasOwnProperty(i)) return false;
            if (obj1[i] != obj2[i]) return false;
        }
    }
    for (var i in obj2) {
        if (obj2.hasOwnProperty(i)) {
            if (!obj1.hasOwnProperty(i)) return false;
            if (obj1[i] != obj2[i]) return false;
        }
    }
    return true;
}

const objectEquality = (obj1, obj2) => {
    for (const i in obj1){
        if(obj1.hasOwnProperty(i)){
            if(!obj2.hasOwnProperty(i)) return false;
            if(obj1[i] != obj2[i]) return false;
        }
    }

    for (const i in obj2){
        if(obj2.hasOwnProperty(i)){
            if(!obj1.hasOwnProperty(i)) return false;
            if(obj2[i] != obj1[i]) return false;
        }
    }

    return true;
}

console.log(isAnagram('silent', 'listen'));