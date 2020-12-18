var isRobotBounded = function(instructions) {
    // console.log(instructions);
    let position = [0,0];
    instructions = instructions.split("");
    let len = instructions.length;
    let direction = ["north", "east", "south", "west"];
    let currentDirection = "north";
    for (let i = 0; i < len; i++){
        if (instructions[i] == "G"){

        }else if (instructions[i] == "L"){
            // find the current direction and iterate to the next (or go left in the array)
            // if you're north, immediately go to the last

            
        }else if (instructions[i] == "R"){
            
        }
    }
    console.log(position);
};


let myString1 = "GGLLGG";
let myString2 = "GG";
let myString3 = "GL";

isRobotBounded(myString1);
// isRobotBounded(myString2);
// isRobotBounded(myString3);