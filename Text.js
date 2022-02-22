
const textEditor = (input) => {
    let output = [];
    let actions = [];
    let undoRedoQueue = [];
    let isSelect = false;
    let startIndex = -1;
    let endIndex = -1;
    let pointer = 0;

    for (let i = 0; i < input.length; i++){
        input[i].unshift(`${i}`);
    }
    console.log(input);

    input.sort((a, b) => a[0] - b[0]);

    for (inputLine of input){
        const [index, operation, payload, endIndexTemp] = inputLine;
        
        switch (operation){
            case 'APPEND':
                if (isSelect){
                    let tempOutput = output.join('');

                    if ((startIndex <= tempOutput.length)){
                        tempOutput = tempOutput.split('');
                        tempOutput.splice(startIndex, endIndex - 1, payload);
                        output = tempOutput;
                        isSelect = false;
                        startIndex = -1;
                        endIndex = -1;
                        actions.push(operation);

                    }
                } else {
                    let tempOutput = output.join('');
                    if (pointer != 0){
                        tempOutput = tempOutput.split('');
                        console.log(tempOutput);
                        tempOutput.splice(pointer, 0, payload);
                        output = tempOutput;

                        
                    }else {
                        output.push(payload);
                        actions.push(operation);
                    }
                    
                }

                break;
            case 'BACKSPACE':
                if (isSelect){


                    let tempOutput = output.join('');

                    if ((startIndex <= tempOutput.length)){
                        tempOutput = tempOutput.split('')
                        tempOutput.splice(startIndex, endIndex - 1);
                        output = tempOutput;
                        isSelect = false;
                        startIndex = -1;
                        endIndex = -1;

                    }
                } else {
                    if (output){
                        output = output.join('')
                        output = output.split('');
                        output.pop();
                        actions.push(operation);
                    }
                }
                
                break;
            case 'UNDO':
                if (actions.slice(-1)[0] == "BACKSPACE" || actions.slice(-1)[0] == "APPEND"){
                    let capture = output.slice(-1)[0];
                    undoRedoQueue.push([index, operation, capture]);
                    output.pop();
                    
                }
                break;
            case 'REDO':

                if (undoRedoQueue.slice(-1)[0][0] == index - 1){
                    output.push(undoRedoQueue.slice(-1)[0][2]);
                }
                break;
            case "SELECT":
                startIndex = payload;
                endIndex  = endIndexTemp;
                isSelect = true;
                break;
            case "BOLD":
                if (isSelect){
                    let tempOutput = output.join('');

                    if ((startIndex <= tempOutput.length)){
                        tempOutput = tempOutput.split('');
                        tempOutput.splice(startIndex, 0, "*");
                        endIndex++;
                        tempOutput.splice(endIndex, 0, "*");
                        output = tempOutput;
                        isSelect = false;
                        startIndex = -1;
                        endIndex = -1;
                        actions.push(operation);

                    }
                }
                break;
            case "MOVE":
                pointer = payload;
                break;

                
                
        }


    }
    
    // console.log(output.join(''))
    return output.join('');
}


const testInput = [
    ["0", 'APPEND', "Hey"],
    ["1", "APPEND", " there"],
    ["2", "APPEND", "!"]
];

const testInput2 = [
    ["0", 'APPEND', "Hey you"],
    ["1", "BACKSPACE"],
    ["2", "BACKSPACE"]
];

const testInput3 = [
    ["0", 'APPEND', "Hey"],
    ["1", "APPEND", " there"],
    ["2", "APPEND", "!"],
    ["3", 'UNDO'],
    ["4", 'UNDO']
];

const testInput4 = [
    ["0", "APPEND", "Hey"],
    ["1", 'UNDO'],
    ["2", 'UNDO']
]

const testInput5 = [
    ["0", "APPEND", "Hey"],
    ["1", "APPEND", " there"],
    ["2", 'UNDO'],
    ["3", 'REDO']
];

const testInput6 = [
    ["0", "APPEND", "Hey"],
    ["1", 'UNDO'],
    ["2", "APPEND", " there"],
    ["3", 'REDO']
]

const testInput7 = [
    ["1548185072722", "APPEND", "ey"],
    ["1548185072721", "APPEND", "H"],
]

const testInput8 = [
    ["0", "APPEND", "Hello"],
    ["1", "SELECT", "1", "3"],
    ["2", "BACKSPACE"]
];

const testInput9 = [
    ["0", "APPEND", "Hello"],
    ["1", "SELECT", "2", "5"],
    ["2", "APPEND", "y there"]
];

const testInput10 = [
    ["0", "APPEND", "Hello"],
    ["1", "SELECT", "1", "3"],
    ["2", "BOLD"]
];

const testInput11 = [
    ["0", 'APPEND', "Hey"],
    ["1", "APPEND", " there"],
    ["2", "APPEND", "!"]
];

const testInput12 = [
    ["0", 'APPEND', "This"],
    ["1", "APPEND", " is "],
    ["2", "BACKSPACE"],
    ["3", "APPEND", " a "],
    ["4", "APPEND", "second test"],
    ["5", "UNDO"]
]

const query1 = [
    ["APPEND", "Hey you"],
    ["MOVE", "3"],
    ["APPEND", ","]
]

// console.log(textEditor(testInput) == "Hey there!");
// console.log(textEditor(testInput2) == "Hey y");
// console.log(textEditor(testInput3) == "Hey");
// console.log(textEditor(testInput4) == "");
// console.log(textEditor(testInput5) == "Hey there");
// console.log(textEditor(testInput6) == " there");
// console.log(textEditor(testInput7) == "Hey");
// console.log(textEditor(testInput8) == "Hlo");
// console.log(textEditor(testInput9) == "Hey there");
// console.log(textEditor(testInput10) == "H*el*lo");
// console.log(textEditor(testInput11) == "Hey there!");
// console.log(textEditor(testInput12) == "This is a ");
console.log(textEditor(query1) == "Hey, you");