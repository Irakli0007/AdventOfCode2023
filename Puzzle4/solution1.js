const fs = require('fs');

var answer = 0;

fs.readFile('input.txt', (err, data) => {
    var lines = data.toString().split('\n');
    var linePoints = 0;
    for (var lineIdx = 0; lineIdx < lines.length; lineIdx++) {
        var currentLine = lines[lineIdx];
        var lineData = currentLine.split('|');
        var winningNums = lineData[0].trim().split(':')[1].trim().split(' ');
        var checkNums = lineData[1].trim().split(' ');
        var count = 0;
        for (var winNum of winningNums) {
            for (var checkNum of checkNums) {
                if (winNum == checkNum && winNum != '' && checkNum != '') {
                    count = count + 1;
                }
            }
        }
        if (count == 0) {
            linePoints = 0;
        } else if (count == 1) {
            linePoints = 1;
        } else {
            linePoints = Math.pow(2, count - 1);
        }
        console.log("line: " + lineIdx + " " + linePoints);
        answer = answer + linePoints;
        console.log(winningNums);
        console.log(checkNums);
    }

    console.log(answer);
});