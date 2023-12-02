const fs = require('fs');
var maxRed = 12;
var maxGreen = 13;
var maxBlue = 14;
var totalIDs = 0;

fs.readFile('input.txt', (err, data) => {
    var lines = data.toString().split('\n');
    for (var line = 0; line < lines.length; line++) {
        var lineValid = true;
        var lineStrPieces = lines[line].split(':')[1]
        var lineStrPiecesGames = lineStrPieces.split(';');
        //console.log(lineStrPiecesGames);
        for (var round = 0; round < lineStrPiecesGames.length; round++) {
            var gameRed = 0;
            var gameGreen = 0;
            var gameBlue = 0;
            var currentRound = lineStrPiecesGames[round].trim();
            var thisRoundColors = currentRound.split(',');
            //console.log(thisRoundColors);
            for (var color = 0; color < thisRoundColors.length; color++) {
                var thisColor = thisRoundColors[color].trim();
                //console.log(thisColor);
                var data = thisColor.split(' ');
                //console.log(data);
                if (data[1] == "red") {
                    gameRed = gameRed + parseInt(data[0]);
                }
                if (data[1] == "green") {
                    gameGreen = gameGreen + parseInt(data[0]);
                }
                if (data[1] == "blue") {
                    gameBlue = gameBlue + parseInt(data[0]);
                }
            }
            if (gameRed > maxRed || gameGreen > maxGreen || gameBlue > maxBlue) {
                lineValid = false;
            }
        }
        if (lineValid) {
            var gameData = lines[line].split(':')[0];
            var gameId = gameData.split(' ')[1];
            //console.log(gameId);
            totalIDs = totalIDs + parseInt(gameId);
        }
    }
    console.log(totalIDs);
})