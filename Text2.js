// Create methods for common used code
// Create a more consistent state

const textEditor = (input) => {
    let currentDocument = {
        title: 'document0',
        output: [],
        selection: false,
        selectionStart: -1,
        selectionEnd: -1,
        cursorPosition: 0
    }
    let clipboard = [];
    let documents = []; // [documentName, cursor position, document data]
    let isSelect = false;
    let endPosition = -1;
    let redoQueue = [];
    let previousState = [];
    

    for (inputLine of input){
        

        const [operation, contentOrStartPosition, endingPosition] = inputLine;

        switch (operation) {
            
            case "APPEND":
                currentDocument.selection = isSelect;
                if (isSelect){
                    // if (currentDocument.selectionEnd != -1){
                    //     console.log(currentDocument.selectionEnd);
                    //     endPosition = currentDocument.selectionEnd;
                    // }
                    let tempOutput = currentDocument.output.join('');
                    tempOutput = tempOutput.split('');
                    tempOutput.splice(currentDocument.cursorPosition, currentDocument.selectionEnd - currentDocument.cursorPosition, contentOrStartPosition);
                    currentDocument.cursorPosition = parseInt(currentDocument.cursorPosition) + contentOrStartPosition.length;
                    currentDocument.output = tempOutput;
                    isSelect = false;
                    currentDocument.selectionStart = currentDocument.cursorPosition;
                    currentDocument.selectionEnd = -1;
                    
                    
                }else if (currentDocument.cursorPosition !== currentDocument.output.join('').length - 1){
                    let tempOutput = currentDocument.output.join('');
                    tempOutput = tempOutput.split('');
                    tempOutput.splice(currentDocument.cursorPosition, 0, contentOrStartPosition);
                    currentDocument.cursorPosition = parseInt(currentDocument.cursorPosition) + contentOrStartPosition.length;
                    currentDocument.output = tempOutput;
                }else {
                    currentDocument.output.push(contentOrStartPosition);
                    currentDocument.cursorPosition += contentOrStartPosition.length;
                }
                break;
            case "MOVE":
                currentDocument.cursorPosition = contentOrStartPosition;
                endPosition = -1;
                break;
            case "DELETE":
                
                previousState.push(currentDocument);
                currentDocument.selection = isSelect;
                
                if (isSelect){
                    let tempOutput = currentDocument.output.join('');
                    tempOutput = tempOutput.split('');
                    tempOutput.splice(currentDocument.cursorPosition, currentDocument.selectionEnd - currentDocument.cursorPosition);
                    currentDocument.output = tempOutput;
                    isSelect = false;
                    currentDocument.selectionStart = currentDocument.cursorPosition;
                    // currentDocument.selectionEnd = endPosition;
                    currentDocument.selectionEnd = -1;
                    
                }else {
                    let tempOutput = currentDocument.output.join('');
                    tempOutput = tempOutput.split('');
                    tempOutput.splice(currentDocument.cursorPosition, 1);
                    currentDocument.output = tempOutput;
                }
                break;
            case "SELECT":
                isSelect = true;
                currentDocument.cursorPosition = contentOrStartPosition;
                currentDocument.selectionEnd = endingPosition;
                // cursorPosition = contentOrStartPosition;
                // endPosition = endingPosition;
                break;
            case "CUT":
                // do what DELETE and COPY does
                currentDocument.selection = isSelect;
                if (isSelect){
                    let tempOutput = currentDocument.output.join('');
                    tempOutput = tempOutput.split('');
                    
                    clipboard.push(tempOutput.slice(currentDocument.cursorPosition, currentDocument.selectionEnd).join(''));
                    
                    tempOutput.splice(currentDocument.cursorPosition, currentDocument.selectionEnd - currentDocument.cursorPosition);
                    currentDocument.output = tempOutput;
                    isSelect = false;
                    currentDocument.selectionStart = currentDocument.cursorPosition;
                    currentDocument.selectionEnd = currentDocument.selectionEnd;
                    currentDocument.selectionEnd = -1;
                    currentDocument.cursorPosition--;
                }
                break;
            case "PASTE":
                currentDocument.selection = isSelect;
                let tempClipboard = clipboard.join('');
                let tempOutput = currentDocument.output.join('');

                tempOutput = tempOutput.split('');
                tempOutput.splice(currentDocument.cursorPosition, 0, tempClipboard);
                currentDocument.cursorPosition = parseInt(currentDocument.cursorPosition) + tempClipboard.length;
                currentDocument.output = tempOutput;
                break;
            case "UNDO":
                // UNDO - take previous state, apply it to currentDocument.output, and take current state and place it in redoQueue
                // REDO - take currentDocument.output and place it in undoQueue, take last from redoQueue, apply it to currentDocument.output and
                if (previousState.length == 0){
                    redoQueue.push(currentDocument.output)
                    currentDocument.output = [""];
                    isSelect = currentDocument.selection;
                } else {
                    let temp = previousState.pop();
                    redoQueue.push(currentDocument.output);
                    currentDocument = temp;
                    isSelect = currentDocument.selection;                        
                } 
                break;
            case "REDO":
                // Needs to be after UNDO
                // Restore previous state including CURSOR POSITION and SELECTION
                if (redoQueue.length != 0){
                    let tempRedo = redoQueue.pop();
                    currentDocument.output = tempRedo;
                    break;
                }
            case "CREATE":
                // Create object with document title, document data, and state
                let found = documents.find(o => o.title === contentOrStartPosition);
                if (found){
                    // console.log("");
                } else {
                    documents.push({
                        title: contentOrStartPosition,
                        output: [],
                        selection: false,
                        selectionStart: -1,
                        selectionEnd: -1,
                        cursorPosition: 0
                    });
                }
                break;
            case "SWITCH":
                try {
                    currentDocument = documents.find(o => o.title === contentOrStartPosition);
                } catch (error) {
                    console.log(error);
                }
                break;
        }
    }
    // console.log(currentDocument.output.join(''));
    return currentDocument.output.join('');
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
    ["APPEND", "Hello, world!"], // good
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

const query9 = [
    
    ["CREATE", "document1"],
    ["CREATE", "document2"],
    ["SWITCH", "document1"]
    
]

const query10 = [
    ["CREATE", "document1"],
    ["CREATE", "document2"],
    ["CREATE", "document1"],
    ["SWITCH", "document1"],
    ["APPEND", "Hello, world!"],
    ["SELECT", "7", "12"],
    ["CUT"],
    ["SWITCH", "document2"],
    ["PASTE"],
    ["SWITCH", "document1"],
    ["DELETE"]
]

// UNDO - take previous state, apply it to output, and take current state and place it in redoQueue
// REDO - take output and place it in undoQueue, take last from redoQueue, apply it to output and 
console.log(textEditor(query1) == "Hey, you");
console.log(textEditor(query2) == "Hello, world!");
console.log(textEditor(query3) == "");
console.log(textEditor(query4) == "Hello!"); // 
console.log(textEditor(query5) == "Hell, world, worldo!");
console.log(textEditor(query6) == "Hello, you!"); 
console.log(textEditor(query7) == "Hello, !");
console.log(textEditor(query9) == "");
console.log(textEditor(query10) == "Hello,!");