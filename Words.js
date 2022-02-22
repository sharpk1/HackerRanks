const words = [
    "round",
    "royal",
    "route",
    "roger",
    "roman",
    "rough",
    "robin",
    "rocky",
    "rover",
    "rouge",
    "robot",
    "roast",
    "rogue",
    "rotor",
    "roach",
    "rowan",
    "rouse",
    "rodeo",
    "roost",
    "rowdy",
    "roomy",
    "rowen",
    "rosin",
    "roque",
    "rondo",
    "roble",
    "roust",
    "roshi",
    "rooty",
    "roily",
    "rowel",
    "rooky",
    "rooms",
    "rooks",
    "roofs",
    "roose",
    "roots",
    "ropey",
    "roped",
    "roper",
    "ropes",
    "roods",
    "romps",
    "roils",
    "roles",
    "rolfs",
    "rolls",
    "romeo",
    "robes",
    "roars",
    "robed",
    "roams",
    "roans",
    "roads",
    "rodes",
    "rocks",
    "rowed",
    "rower",
    "rowth",
    "roves",
    "routh",
    "roups",
    "roupy",
    "roved",
    "roven",
    "routs",
    "rotas",
    "rosed",
    "roset",
    "roses",
    "rotls",
    "rotos",
    "rotis",
    "rotch",
    "rotes",
    "roues",
    "rouen",
    "rotte",
    ]
    
    
    

const eliminateSubstring = (word) => {
    // console.log(word.substring(0,2));
    const checker = value =>
  !['t', 'e', 'm', 'v', 'o', 'c', 'f'].some(element => value.includes(element));

    
    if (word.substring(0,2) !== "sa"){
        word = word.split("");
        // console.log(word.filter(checker));
        word = word.filter((checker))
        word = word.join("");
        if (word.length == 5){
            if (word[1]  != "a" && word[4]  != "r" && word[3] != "a" && word[1] != "c" && word[4] != "f" && word[2] == "a" && word[3] == "r"){
                console.log(word)
            }
        }
    }
};

// const eliminateWord = (word) => {
//     const unused = ['t', 'e', 'm', 'v', 'o'];
//     for (let i = 0; i < unused.length; i++){
//         if (word.indexOf(unused[i]) == 1){
//             unused.splice()
//         }
//     }

// }
 

const wordChecker = (word) => {
    const letters = ['i'];
    for (let i = 0; i < letters.length; i++){
        if(word.indexOf(letters[i]) > -1){
            letters.splice(i, 1);
            i--;
        }
    }

    if (letters.length == 0){
        console.log(word);
    }
}

for (let i = 0; i < words.length; i++){
    wordChecker(words[i])
    // eliminateSubstring(words[i])
}

//telos
// besot, escot

