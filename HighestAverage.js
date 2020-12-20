function highestAverage(scores){
    // create a key value dictionary
    let gradeBook = {};
    let len = scores.length;
    let studentName;
    let studentScore;
    let existingGrade;
    let max = 0;

    for (let i = 0; i < len; i++){
        studentName = scores[i][0];
        
        if (studentName in gradeBook){
            existingGrade = parseInt(gradeBook[studentName]);
            studentScore = parseInt(scores[i][1]);
            let average = (existingGrade + studentScore) / 2;
            gradeBook[studentName] = average;
            
        }else{
            gradeBook[studentName] = scores[i][1];
        }
    }

    for (let name in gradeBook){
        if (gradeBook[name] > max){
            max = gradeBook[name];
        }
    }

    // Object.keys(gradeBook).forEach(function (grade) {
    //     if (gradeBook[grade] > max){
    //         max = gradeBook[grade];
    //     }
    // });
    
    return max;
    
}



let testScores = [['Kush', '87'],['Charles', '100'],['Jay', '50'],['Charles', '22']];


// return the highest average
highestAverage(testScores);