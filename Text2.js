// Create methods for common used code
// Create a more consistent state

const textEditor = (input) => {
    let output = [];
    let cursorPosition = 0;
    let clipboard = [];
    let documents = []; // [documentName, cursor position, document data]
    let lastKnownState = {
        content: -1,
        selection: false,
        selectionStart: -1,
        selectionEnd: -1,
        actions: [],
        previousState: []
    }
    let isSelect = false;
    let endPosition = -1;
    let undoQueue = [];
    let redoQueue = [];
    let previousState = [];
    let currentDocument = {};

    for (let i = 0; i < input.length; i++){
        input[i].unshift(`${i}`);
    }

    for (inputLine of input){
        

        const [index, operation, contentOrStartPosition, endingPosition] = inputLine;
        switch (operation) {
            case "APPEND":

                lastKnownState.content = output;
                lastKnownState.selection = isSelect;
                if (isSelect){
                    if (lastKnownState.selectionEnd != -1){
                        endPosition = lastKnownState.selectionEnd;
                    }
                    let tempOutput = output.join('');
                    tempOutput = tempOutput.split('');
                    tempOutput.splice(cursorPosition, endPosition - cursorPosition, contentOrStartPosition);
                    cursorPosition = parseInt(cursorPosition) + contentOrStartPosition.length;
                    output = tempOutput;
                    isSelect = false;
                    lastKnownState.selectionStart = cursorPosition;
                    lastKnownState.selectionEnd = endPosition;
                    endPosition = -1;
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
                lastKnownState.actions.push(operation);
                break;
            case "MOVE":
                cursorPosition = contentOrStartPosition;
                endPosition = -1;
                lastKnownState.actions.push(operation);

                break;
            case "DELETE":
                previousState.push(output)
                lastKnownState.selection = isSelect;
                if (isSelect){
                    
                    let tempOutput = output.join('');
                    tempOutput = tempOutput.split('');
                    tempOutput.splice(cursorPosition, endPosition - cursorPosition);
                    output = tempOutput;
                    isSelect = false;
                    lastKnownState.selectionStart = cursorPosition;
                    lastKnownState.selectionEnd = endPosition;
                    endPosition = -1;
                    
                }else {
                    let tempOutput = output.join('');
                    tempOutput = tempOutput.split('');
                    tempOutput.splice(cursorPosition, 1);
                    output = tempOutput;
                }
                
                lastKnownState.actions.push(operation);
                break;
            case "SELECT":
                isSelect = true;
                cursorPosition = contentOrStartPosition;
                endPosition = endingPosition;
                lastKnownState.actions.push(operation);

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
                    output = tempOutput;
                    isSelect = false;
                    lastKnownState.selectionStart = cursorPosition;
                    lastKnownState.selectionEnd = endPosition;
                    endPosition = -1;
                }
                lastKnownState.actions.push(operation);
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
                lastKnownState.actions.push(operation);
                break;
            case "UNDO":
                // UNDO - take previous state, apply it to output, and take current state and place it in redoQueue
                // REDO - take output and place it in undoQueue, take last from redoQueue, apply it to output and 
                if (lastKnownState.actions.slice(-1)[0] != "MOVE" || lastKnownState.actions.slice(-1)[0] != "SELECT"){
                    if (previousState.length == 0){
                        redoQueue.push(output)
                        output = [""];
                        isSelect = lastKnownState.selection;
                    } else {
                        
                        let temp = previousState.pop();
                        redoQueue.push(output);
                        output = temp;
                        isSelect = lastKnownState.selection;                        
                    }
                }
                break;
            case "REDO":
                // Needs to be after UNDO
                // Restore previous state including CURSOR POSITION and SELECTION
                if (redoQueue.length != 0){
                    let tempRedo = redoQueue.pop();
                    output = tempRedo;
                    break;
                }
            case "CREATE":
                // Create object with document title, document data, and state
                let found = documents.find(o => o.title === contentOrStartPosition);
                if (found){
                    return "";
                }
                documents.push({
                    "title": contentOrStartPosition,
                    "content": [],
                    "state": {
                        "cursorPosition": 0,
                        "endSelection": -1
                    },
                    "modificationHistory": []
                });
                break;
            case "SWITCH":
                currentDocument = documents.find(o => o.title === contentOrStartPosition);
                if (!currentDocument){
                    return "";
                }
                break;


        }

        


    }
    // console.log(output.join(''))
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

const query8 = [
    ["APPEND", "Dog"],
    ["MOVE", "0"],
    ["DELETE"],
    ["DELETE"],
    ["DELETE"],
    ["UNDO"],
    ["UNDO"],
]

const query9 = [
    
    ["CREATE", "document1"],
    ["CREATE", "document2"],
    ["SWITCH", "document1"]
    
]

// UNDO - take previous state, apply it to output, and take current state and place it in redoQueue
// REDO - take output and place it in undoQueue, take last from redoQueue, apply it to output and 
console.log(textEditor(query1) == "Hey, you");
console.log(textEditor(query2) == "Hello, world!");
console.log(textEditor(query3) == "");
console.log(textEditor(query4) == "Hello!");
console.log(textEditor(query5) == "Hell, world, worldo!");
console.log(textEditor(query6) == "Hello, you!");
console.log(textEditor(query7) == "Hello, !");
console.log(textEditor(query8) == "og");
console.log(textEditor(query9) == "");