function countingValleys(steps, path) {
    // Break the path down into separate array
    let currentLevel = 0;
    let seaLevel = 0;
    let valleys = 0;
    let explodedPath = path.split("");
    
    // if currentLevel is 0 and the last step was D then it does not count 
    // if the currentLevel is 0 and the last step was U the it does count
    for (let i = 0; i < steps; i++){
        if(explodedPath[i] == 'U'){
            currentLevel++;
            if (currentLevel == seaLevel){
                valleys++;
            }
        }else if (explodedPath[i] == 'D'){
            currentLevel--;
        }
    }
    // explodedPath.forEach(element => {
    //     if(element == 'U'){
    //         currentLevel++;
    //         if (currentLevel == seaLevel){
    //             valleys++;
    //         }
    //     }else if (element == 'D'){
    //         currentLevel--;
    //     }
        
    // });
    console.log(valleys);
    return valleys;

}


let mySteps = 8;
let myPath = "UDDDUDUU";
countingValleys(mySteps, myPath);