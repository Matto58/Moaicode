var fs = require('fs');
var file = process.argv[2];
var fileout = process.argv[3] + ".🗿";
var contents = fs.readFileSync(file).toString().split(";");
var output = "";
// console.log(contents);
for (var i = 0; i < contents.length-1; i++) {
    var line = contents[i].split(" ");
    var command = line[0];
    var lineletters = line[0].split("");
    if (command == "Sound" || command == " Sound" || command == "\r\nSound" || command == "\nSound" || command == "\tSound") {
        var sound = line[1];
        var pitch = line[2];
        output += sound;

        if (pitch == undefined || pitch == null) pitch = 0;
        if (pitch != "0") output += "@" + pitch;
        output += "|";
    } else if (command == "Loop" || command == " Loop" || command == "\r\nLoopSound" || command == "\nLoopSound" || command == "\tLoopSound") {
        var amt = line[1];
        output += "!loopmany@" + amt + "|";
    } else if (command == "LoopPoint" || command == " LoopPoint" || command == "\r\nLoopPoint" || command == "\nLoopPoint" || command == "\tLoopPoint") {
        output += "!looptarget|";
    } else if (command == "BPM" || command == " BPM" || command == "\r\nBPM" || command == "\nBPM" || command == "\tBPM") {
        var bpm = line[1];
        var use = line[2];
        var u = "";
        if (use != "=" && (use == "+" || use == "x"))
            u = "@" + use;
        output += "!speed@" + bpm + u + "|";
    } else if (command == "StartPosition" || command == " StartPosition" || command == "\r\nStartPosition" || command == "\nStartPosition" || command == "\tStartPosition") {
        output += "!startpos|";
    } else if (command == "Volume" || command == " Volume" || command == "\r\nVolume" || command == "\nVolume" || command == "\tVolume") {
        var vol = line[1];
        output += "!volume@" + vol + "|";
    } else if (command == "Pause" || command == " Pause" || command == "\r\nPause" || command == "\nPause" || command == "\tPause") {
        var amt = line[1];
        if (amt == "1") output += "_pause|";
        else output += "_pause=" + amt + "|";
    } else if (command == "<=>" || command == " <=>" || command == "\r\n<=>" || command == "\n<=>" || command == "\t<=>") {
        var amt = line[1];
        output += "!combine|";
    } else {
        console.log("Unknown command: " + command);
    }
}

// remove last char
output = output.slice(0, -1);
fs.writeFileSync(fileout, output);