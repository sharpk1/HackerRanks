const textEditor = (input) => {
    let output = [];
    let cursorPosition = 0;
    let clipboard = [];
    let documents = []; // [documentName, cursor position, document data]
    let lastKnownState = {
        content: -1,
        selection: false,
        selectionStart: -1,
        selectionEnd: -1
    }
    let isSelect = false;
    // let startPosition = -1;
    let endPosition = -1;

    for (inputLine of input){
        

        const [operation, contentOrStartPosition, endingPosition] = inputLine;

        switch (operation) {
            case "APPEND":

                lastKnownState.content = output;
                lastKnownState.selection = isSelect;
                if (isSelect){
                    let tempOutput = output.join('');
                    tempOutput = tempOutput.split('');
                    tempOutput.splice(cursorPosition, endPosition - cursorPosition, contentOrStartPosition);
                    cursorPosition = parseInt(cursorPosition) + contentOrStartPosition.length;
                    output = tempOutput;
                    isSelect = false;

                }else if (cursorPosition !== output.join('').length - 1){
                    
                    let tempOutput = output.join('');
                    tempOutput = tempOutput.split('');
                    tempOutput.splice(cursorPosition, 0, contentOrStartPosition);
                    cursorPosition = parseInt(cursorPosition) + contentOrStartPosition.length;
                    output = tempOutput;
                    

                }else {
                    output.push(contentOrStartPosition);
                    cursorPosition += contentOrStartPosition.length;
                }
                
                break;
            case "MOVE":
                cursorPosition = contentOrStartPosition;
                break;
            case "DELETE":
                lastKnownState.content = output;
                lastKnownState.selection = isSelect;
                if (isSelect){
                    let tempOutput = output.join('');
                    tempOutput = tempOutput.split('');
                    tempOutput.splice(cursorPosition, endPosition - cursorPosition);
                    // cursorPosition = parseInt(cursorPosition) + contentOrStartPosition.length;
                    output = tempOutput;
                    isSelect = false;
                }else {
                    let tempOutput = output.join('');
                    tempOutput = tempOutput.split('');
                    tempOutput.splice(cursorPosition, 1);
                    output = tempOutput;
                }
                

                break;
            case "SELECT":
                isSelect = true;
                cursorPosition = contentOrStartPosition;
                endPosition = endingPosition;
                break;
            case "CUT":
                // do what DELETE and COPY does
                lastKnownState.content = output;
                lastKnownState.selection = isSelect;
                if (isSelect){
                    let tempOutput = output.join('');
                    tempOutput = tempOutput.split('');
                    clipboard.push(tempOutput.slice(cursorPosition, endPosition).join(''));
                    tempOutput.splice(cursorPosition, endPosition - cursorPosition);
                    
                    // cursorPosition = parseInt(cursorPosition) + contentOrStartPosition.length;
                    output = tempOutput;
                    isSelect = false;
                }
                break;
            case "PASTE":
                lastKnownState.content = output;
                lastKnownState.selection = isSelect;
                let tempClipboard = clipboard.join('');
                let tempOutput = output.join('');

                tempOutput = tempOutput.split('');
                tempOutput.splice(cursorPosition, 0, tempClipboard);
                cursorPosition = parseInt(cursorPosition) + tempClipboard.length;
                output = tempOutput;
                break;
            case "UNDO":
                
                output = lastKnownState.content;
                isSelect = lastKnownState.selection;

                break;
            case "REDO":
                // Needs to be after UNDO
                // Restore previous state including CURSOR POSITION and SELECTION


        }

        


    }
    // console.log(output.join(''));
    return output.join('');
}

const query1 = [
    ["APPEND", "Hey you"],
    ["MOVE", "3"],
    ["APPEND", ","]
]
const query2 = [
    ["APPEND", "Hello! world!"],
    ["MOVE", "5"],
    ["DELETE"],
    ["APPEND", ","]

]

const query3 = [
    ["APPEND", "!"],
    ["DELETE"],
    ["MOVE", "0"],
    ["DELETE"],
    ["DELETE"]
]

const query4 = [
    ["APPEND", "Hello cruel world!"],
    ["SELECT", "5", "11"],
    ["APPEND", ","],
    ["SELECT", "5", "12"],
    ["DELETE"],
    ["SELECT", "4", "6"],
    ["MOVE", "1"]
]

const query5 = [
    ["APPEND", "Hello, world!"],
    ["SELECT", "5", "12"],
    ["CUT"],
    ["MOVE", "4"],
    ["PASTE"],
    ["PASTE"]
];

const query6 = [
    ["APPEND", "Hello, world!"], 
    ["SELECT", "7", "12"], 
    ["DELETE"],
    ["UNDO"],
    ["APPEND", "you"]
]

const query7 = [
    ["APPEND", "Hello, world!"],
    ["SELECT", "7", "12"],
    ["DELETE"],
    ["MOVE", "6"],
    ["UNDO"],
    ["UNDO"],
    ["REDO"],
    ["REDO"]
]

console.log(textEditor(query1) == "Hey, you");
console.log(textEditor(query2) == "Hello, world!");
console.log(textEditor(query3) == "");
console.log(textEditor(query4) == "Hello!");
console.log(textEditor(query5) == "Hell, world, worldo!");
console.log(textEditor(query6) == "Hello, you!");
console.log(textEditor(query7) == "Hello, !");