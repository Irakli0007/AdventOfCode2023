const fs = require('fs');

var answer = 0;
var numArr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
var numArrRev = ["orez", "eno", "owt", "eerht", "ruof", "evif", "xis", "neves", "thgie", "enin"];
var chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

fs.readFile('input.txt', (err, data) => {
    var lines = data.toString().split('\n');
    for (var line = 0; line < lines.length; line++) {
        var lineStr = lines[line];
        var lineStrRev = lineStr.split('').reverse().join('');

        var firstInt = {
            value: '0',
            index: 1000,
        }
        var secondInt = {
            value: '0',
            index: 1000,
        }
        var one = 0;
        var two = 0;

        ///////////////////////////////////////////
        for (var i = 0; i < lineStr.length; i++) {
            var char = lineStr[i];
            if (char >= '0' && char <= '9') {
                firstInt = {
                    value: char,
                    index: i
                }
                break;
            }
        }
        var oneStrIdx = {
            value: 0,
            index: 1000,
        }
        for (var i = 0; i < numArr.length; i++) {
            var index = lineStr.indexOf(numArr[i]);
            if (index < oneStrIdx.index && index != -1) {
                oneStrIdx = {
                    value: i,
                    index: index,
                }
            }
        }

        if (firstInt.index < oneStrIdx.index) {
            one = parseInt(firstInt.value);
        } else {
            one = oneStrIdx.value;
        }
        ////////////////////////////////////////////


        ////////////////////////////////////////////
        for (var i = 0; i < lineStrRev.length; i++) {
            var char = lineStrRev[i];
            if (char >= '0' && char <= '9') {
                secondInt = {
                    value: char,
                    index: i,
                }
                break;
            }
        }
        var twoStrIdx = {
            value: 0,
            index: 1000,
        }
        for (var i = 0; i < numArrRev.length; i++) {
            var index = lineStrRev.indexOf(numArrRev[i]);
            if (index < twoStrIdx.index && index != -1) {
                twoStrIdx = {
                    value: i,
                    index: index,
                }
            }
        }
        if (secondInt.index < twoStrIdx.index) {
            two = parseInt(secondInt.value);
        } else {
            two = twoStrIdx.value;
        }
        /////////////////////////////////////////////

        var oneChar = chars[one];
        var twoChar = chars[two];
        var lineNum = oneChar + twoChar;
        answer = answer + parseInt(lineNum);
    }
    console.log(answer);
})

