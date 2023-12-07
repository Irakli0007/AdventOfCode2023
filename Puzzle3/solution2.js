const fs = require('fs');

var answer = 0;

fs.readFile('input2.txt', (err, data) => {
    var linesArr = [];
    var lineArr = [];
    var lines = data.toString().split('\n');
    for (var line = 0; line < lines.length; line++) {
        for (var charidx = 0; charidx < lines[line].length; charidx++) {
            lineArr.push(lines[line][charidx]);
        }
        linesArr.push(lineArr);
        lineArr = [];
    }

    for (var line = 0; line < linesArr.length; line++) {
        var currentLine = linesArr[line];
        for (var charidx = 0; charidx < currentLine.length; charidx++) {
            if (currentLine[charidx] == '*') {
                var potentialGear = {
                    x: charidx,
                    y: line,
                }
                var box = {
                    top: potentialGear.y - 1,
                    left: potentialGear.x - 3,
                    right: potentialGear.x + 1,
                    bottom: potentialGear.y + 1,
                }
                if (box.top < 0) box.top = 0;
                if (box.left < 0) box.left = 0;
                if (box.right > currentLine.length - 1) box.right = currentLine.length - 1;
                if (box.bottom > linesArr.length - 1) box.bottom = linesArr.length - 1;
                var arr = [];
                var numArr = [];
                var gearNum = '';
                for (var i = box.top; i <= box.bottom; i++) {
                    for (var j = box.left; j <= box.right; j++) {
                        var currentChar = linesArr[i][j];
                        var k = j;
                        while (currentChar >= '0' && currentChar <= '9') {
                            arr.push(linesArr[i][k]);
                            linesArr[i][k] = 'X';
                            k = k + 1;
                            currentChar = linesArr[i][k];
                        }
                        console.log(arr);
                        for (var num of arr) {
                            gearNum = gearNum + num;
                        }
                        gearNum = parseInt(gearNum);
                        if (gearNum != '') {
                            numArr.push(gearNum);
                        }
                        arr = [];
                        gearNum = '';
                    }
                }
                //console.log(numArr);
                if (numArr.length == 2) {
                    var gearRatio = numArr[0] * numArr[1];
                    answer = answer + gearRatio;
                    numArr = [];
                }
            }
        }
    }
    console.log(answer);

});
