var fs = require('fs');
var file = process.argv[2];
var fileout = process.argv[3] + ".🗿";
var contents = fs.readFileSync(file).toString().split(";");
var output = "";

function replaceV2(str, replaceThese, withThis) {
	for (let i in str)
        for (let j in replaceThese)
            if (str[i] == replaceThese[j]) str[i] = withThis;
	return str;
}

// console.log(contents);
for (var i = 0; i < contents.length-1; i++) {
    var line = contents[i].split(" ");
    var command = line[0].replace(/(\r\n|\r|\n|\t)/g, "");
    if (command == "Sound") {
        var sound = line[1];
        var pitch = line[2];
        output += sound;

        if (pitch == undefined || pitch == null) pitch = 0;
        if (pitch != "0") output += "@" + pitch;
        output += "|";
    } else if (command == "Loop") {
        var amt = line[1];
        output += "!loopmany@" + amt + "|";
    } else if (command == "LoopOnce") {
        output += "!loop|";
    } else if (command == "LoopPoint") {
        output += "!looptarget|";
    } else if (command == "BPM") {
        var bpm = line[1];
        var use = line[2];
        var u = "";
        if (use != "=" && (use == "+" || use == "x"))
            u = "@" + use;
        output += "!speed@" + bpm + u + "|";
    } else if (command == "StartPosition") {
        output += "!startpos|";
    } else if (command == "Volume") {
        var vol = line[1];
        output += "!volume@" + vol + "|";
    } else if (command == "Pause") {
        var amt = line[1];
        if (amt == "1") output += "_pause|";
        else output += "_pause=" + amt + "|";
    } else if (command == "<=>") {
        var amt = line[1];
        output += "!combine|";
    } else if (command == "Background") {
        var color = line[1];
        var fadeTime = line[2];
        output += "!bg@#" + color + "," + fadeTime + "|";
    } else if (command == "Transpose") {
        var amt = line[1].substring(1);
        output += "!transpose@" + amt + "@" + line[1].charAt(0) + "|";
    } else if (command == "Pulse") {
        var amt = line[1];
        var every = line[2];
        output += "!pulse@" + amt + "," + every + "|";
    } else if (command == "Divider") {
        output += "!divider|";
    } else if (command == "Target") {
        var num = line[1];
        output += "!target@" + num + "|";
    } else if (command == "GotoTarget") {
        var num = line[1];
        output += "!jump@" + num + "|";
    } else if (command == "StopSounds") {
        output += "!cut|";
    } else if (command == "Flash") {
        output += "!flash|";
    } else {
        console.log("Unknown command: " + command);
    }
}

// remove last char
output = output.slice(0, -1);
fs.writeFileSync(fileout, output);