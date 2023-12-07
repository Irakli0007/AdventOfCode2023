const fs = require('fs');

fs.readFile('input.txt', (err, data) => {
    var lines = data.toString().split('\n');
    var timeData = lines[0];
    var distanceData = lines[1];
    var times = timeData.split(':')[1].trim().split(' ');
    var distances = distanceData.split(':')[1].trim().split(' ');
    var counts = [];

    for (var race = 0; race < times.length; race++) {
        var count = 0;
        for (var holdTime = 1; holdTime < times[race]; holdTime++) {
            var speed = holdTime;
            var remainingTime = times[race] - holdTime;
            var distance = speed * remainingTime;
            if (distance > distances[race]) {
                count = count + 1;
            }
        }
        counts.push(count);
    }
    var answer = 1;
    for (var count of counts) {
        answer = answer * count;
    }
    console.log(answer);

});