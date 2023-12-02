const fs = require('fs');
var answer = 0;
fs.readFile('input.txt', (err, data) => {
    var lines = data.toString().split('\n');
    for (var line = 0; line < lines.length; line++) {
        var power = 0;
        var minRed = 0;
        var minGreen = 0;
        var minBlue = 0;
        var lineStrPieces = lines[line].split(':')[1]
        var lineStrPiecesGames = lineStrPieces.split(';');
        for (var round = 0; round < lineStrPiecesGames.length; round++) {
            var currentRound = lineStrPiecesGames[round].trim();
            var thisRoundColors = currentRound.split(',');
            for (var color = 0; color < thisRoundColors.length; color++) {
                var thisColor = thisRoundColors[color].trim();
                var data = thisColor.split(' ');
                if (data[1] == "red") {
                    if (parseInt(data[0]) > minRed) {
                        minRed = data[0];
                    }
                }
                if (data[1] == "green") {
                    if (parseInt(data[0]) > minGreen) {
                        minGreen = data[0];
                    }
                }
                if (data[1] == "blue") {
                    if (parseInt(data[0]) > minBlue) {
                        minBlue = data[0];
                    }
                }
            }
        }
        power = minRed * minGreen * minBlue;
        answer = answer + power;
    }
    console.log(answer);
})