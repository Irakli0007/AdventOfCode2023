const fs = require('fs');

fs.readFile('input.txt', (err, data) => {
    var lines = data.toString().split('\n');
    var timeData = lines[0];
    var distanceData = lines[1];
    var times = timeData.split(':')[1].trim().split(' ');
    var distances = distanceData.split(':')[1].trim().split(' ');
    var actualTime = '';
    var actualDistance = '';
    for (var time of times) {
        actualTime = actualTime + time;
    }
    for (var distance of distances) {
        actualDistance = actualDistance + distance;
    }
    actualTime = parseInt(actualTime);
    actualDistance = parseInt(actualDistance);
    var count = 0;
    for (var holdTime = 1; holdTime < actualTime; holdTime++) {
        var speed = holdTime;
        var remainingTime = actualTime - holdTime;
        var distance = speed * remainingTime;
        if (distance > actualDistance) {
            count = count + 1;
        }
    }
    console.log(count);
});