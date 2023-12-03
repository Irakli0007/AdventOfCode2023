const fs = require('fs');
//var nonSymbols = ['.', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var symbols = ['*', '&', '$', '#', '+', '=', '/', '@', '%', '-'];
var answer = 0;
var endOfLine = false;

fs.readFile('input.txt', (err, data) => {
    var lines = data.toString().split('\n');
    var arr = [];
    for (var line = 0; line < lines.length; line++) {
        if (arr.length > 0 && endOfLine == true) {
            answer = checkBoundaries(arr, answer, lines, line - 1);
            arr = [];
            endOfLine = false;
        }
        var currentLine = lines[line];
        for (var char = 0; char < currentLine.length; char++) {
            if (currentLine[char] >= '0' && currentLine[char] <= '9') {
                var obj = {
                    val: currentLine[char],
                    idx: char,
                }
                arr.push(obj);
            } else {
                if (arr.length > 0 && endOfLine == false) {
                    answer = checkBoundaries(arr, answer, lines, line);
                    arr = [];
                }
            }
            if (char == currentLine.length - 1 && currentLine[char] >= '0' && currentLine[char] <= '9') {
                endOfLine = true;
                break;
            }
        }
    }
    console.log(answer);
});

function checkBoundaries(arr, answer, lines, line) {
    var currentLine = lines[line];
    var addToTotal = false;
    var left = arr[0].idx;
    var right = arr[arr.length - 1].idx;
    var top = line - 1;
    var bottom = line + 1;
    if (left > 0) {
        left = left - 1;
    }
    if (right < currentLine.length - 1) {
        right = right + 1;
    }
    if (top < 0) {
        top = 0;
    }
    if (bottom >= lines.length) {
        bottom = bottom - 1;
    }
    for (var i = top; i <= bottom; i++) {
        for (var j = left; j <= right; j++) {
            var c = lines[i][j];
            for (var symbol = 0; symbol < symbols.length; symbol++) {
                if (c === symbols[symbol]) {
                    addToTotal = true;
                }
            }
        }
    }

    if (addToTotal == true) {
        var concatStr = "";
        for (var i = 0; i < arr.length; i++) {
            concatStr = concatStr + arr[i].val;
        }
        answer = answer + parseInt(concatStr);
        addToTotal = false;
    }
    return answer;
}