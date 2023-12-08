const fs = require('fs');

fs.readFile('input.txt', (err, data) => {
    var lines = data.toString().split('\n');
    var instructions = lines[0];
    var hashmap = {};
    for (var i = 2; i < lines.length; i++) {
        var id = lines[i].split('=')[0].trim();
        var left = lines[i].split('=')[1].trim().split(',')[0].substring(1, 4);
        var right = lines[i].split('=')[1].trim().split(',')[1].trim().substring(0, 3);
        hashmap[id] = new Node(id, left, right);
    }
    var Aarr = [];
    for (var id in hashmap) {
        if (id[2] == 'A') {
            Aarr.push(id);
        }
    }
    var stepsArr = [];
    for (var a of Aarr) {
        var currentId = a;
        var steps = 0;
        while (currentId[2] != "Z") {
            for (var instructionIdx = 0; instructionIdx < instructions.length; instructionIdx++) {
                var currentInstruction = instructions[instructionIdx];
                if (currentInstruction == "L") {
                    var currentId = hashmap[currentId].left;
                } else if (currentInstruction == "R") {
                    var currentId = hashmap[currentId].right;
                }
                steps = steps + 1;
            }
        }
        stepsArr.push(steps);
    }
    var lcm = 1;
    for (var num of stepsArr) {
        lcm = leastCommonMultiple(lcm, num);
    }
    console.log(lcm);
});

class Node {
    constructor(id, left, right) {
        this.id = id;
        this.left = left;
        this.right = right;
    }
}

function leastCommonMultiple(num1, num2) {
    return (num1 * num2 / gcd(num1, num2));
}

function gcd(num1, num2) {
    return !num2 ? num1 : gcd(num2, num1 % num2);
}



