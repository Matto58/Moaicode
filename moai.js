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
    if (command == "Sound" || command == "\r\nSound" || command == " Sound") {
        var sound = line[1];
        var pitch = line[2];
/*      sounds and their ids:
        "bone" = 🦴
        "otto_on" = otto_on
        "otto_off" = otto_off
        "otto_happy" = otto_happy
        "otto_stress" = otto_stress
        "piano" = builttoscale
        "moai" = boom
        "bruh" = bruh
        "tacobell" = bong
        "fart" = 💨
        "xp_error" = 🚫
        "samsung_notification" = 📲
        "samsung_alarm" = 🌄
        "whatsapp_whistle" = whatsapp
        "bonk" = 🏏
        "!" = ❗
        "crab" = 🦀
        "e" = e
        "ayo_the_pizza_here" = 🍕
        "gnome" = gnome
        "tada" = 🎉
        "whapow" = whipcrack
        "9+10=21" = 21
        "op" = op
        "slam" = SLAM
        "coin" = smw_coin
        "1up" = smw_1up
        "mariospin" = smw_spinjump
        "rhythm_doctor1" = preecho
        "rhythm_doctor2" = tonk
        "fnf_left" = fnf_left
        "fnf_right" = fnf_right
        "fnf_up" = fnf_up
        "fnf_down" = fnf_down
        "punch" = karateman_hit
        "sans" = megalovania
        "undertale_encounter" = undertale_encounter
        "undertale_life" = undertale_hit
        "undertale_death" = undertale_crack
        "john_cena" = gaster
        "yahoo" = yahoo
        "amongus" = amongus
        "amongus_drip" = amongdrip
        "amogus_drip" = amongdrip
        "amogus" = amogus
        "gd_death" = gdcrash
        "gd_death_orbs" = gdcrash_orbs
        "gd_coin" = gd_coin
        "gd_orbs" = gd_orbs
        "gd_diamond" = gd_diamonds
        "bwomp" = bwomp
        "oof" = oof
        "yoda_scream" = yoda
        "hehehehaw" = hehehehaw
        "drip" = ultrainstinct */

        if (sound == "bone") {
            output += "🦴";
        } else if (sound == "otto_on") {
            output += "otto_on";
        } else if (sound == "otto_off") {
            output += "otto_off";
        } else if (sound == "otto_happy") {
            output += "otto_happy";
        } else if (sound == "otto_stress") {
            output += "otto_stress";
        } else if (sound == "piano") {
            output += "builttoscale";
        } else if (sound == "moai") {
            output += "boom";
        } else if (sound == "bruh") {
            output += "bruh";
        } else if (sound == "tacobell") {
            output += "bong";
        } else if (sound == "fart") {
            output += "💨";
        } else if (sound == "xp_error") {
            output += "🚫";
        } else if (sound == "samsung_notification") {
            output += "📲";
        } else if (sound == "samsung_alarm") {
            output += "🌄";
        } else if (sound == "whatsapp_whistle") {
            output += "whatsapp";
        } else if (sound == "bonk") {
            output += "🏏";
        } else if (sound == "!") {
            output += "❗";
        } else if (sound == "crab") {
            output += "🦀";
        } else if (sound == "e") {
            output += "e";
        } else if (sound == "ayo_the_pizza_here") {
            output += "🍕";
        } else if (sound == "gnome") {
            output += "gnome";
        } else if (sound == "tada") {
            output += "🎉";
        } else if (sound == "whapow") {
            output += "whipcrack";
        } else if (sound == "9+10=21") {
            output += "21";
        } else if (sound == "op") {
            output += "op";
        } else if (sound == "slam") {
            output += "SLAM";
        } else if (sound == "coin") {
            output += "smw_coin";
        } else if (sound == "1up") {
            output += "smw_1up";
        } else if (sound == "mariospin") {
            output += "smw_spinjump";
        } else if (sound == "rhythm_doctor1") {
            output += "preecho";
        } else if (sound == "rhythm_doctor2") {
            output += "tonk";
        } else if (sound == "fnf_left") {
            output += "fnf_left";
        } else if (sound == "fnf_right") {
            output += "fnf_right";
        } else if (sound == "fnf_up") {
            output += "fnf_up";
        } else if (sound == "fnf_down") {
            output += "fnf_down";
        } else if (sound == "punch") {
            output += "karateman_hit";
        } else if (sound == "sans") {
            output += "megalovania";
        } else if (sound == "undertale_encounter") {
            output += "undertale_encounter";
        } else if (sound == "undertale_life") {
            output += "undertale_hit";
        } else if (sound == "undertale_death") {
            output += "undertale_crack";
        } else if (sound == "john_cena") {
            output += "gaster";
        } else if (sound == "yahoo") {
            output += "yahoo";
        } else if (sound == "amongus") {
            output += "amongus";
        } else if (sound == "amongus_drip" || sound == "amogus_drip") {
            output += "amongdrip";
        } else if (sound == "amogus") {
            output += "amogus";
        } else if (sound == "gd_death") {
            output += "gdcrash";
        } else if (sound == "gd_death_orbs") {
            output += "gdcrash_orbs";
        } else if (sound == "gd_coin") {
            output += "gd_coin";
        } else if (sound == "gd_orbs") {
            output += "gd_orbs";
        } else if (sound == "gd_diamond") {
            output += "gd_diamonds";
        } else if (sound == "bwomp") {
            output += "bwomp";
        } else if (sound == "oof") {
            output += "oof";
        } else if (sound == "yoda_scream") {
            output += "yoda";
        } else if (sound == "hehehehaw") {
            output += "hehehehaw";
        } else if (sound == "drip") {
            output += "ultrainstinct";
        } else console.log("Sound not found: " + sound);

        if (pitch == undefined) pitch = 0;
        if (pitch != "0") output += "@" + pitch;
        output += "|";
    } else if (command == "Loop" || command == "\r\nLoop" || command == " Loop") {
        var amt = line[1];
        output += "!loopmany@" + amt + "|";
    } else if (command == "LoopPoint" || command == "\r\nLoopPoint" || command == " LoopPoint") {
        output += "!looptarget|";
    } else if (command == "BPM" || command == "\r\nBPM" || command == " BPM") {
        var bpm = line[1];
        var use = line[2];
        var u = "";
        if (use != "=" && (use == "+" || use == "x"))
            u = "@" + use;
        output += "!speed@" + bpm + u + "|";
    } else if (command == "StartPosition" || command == "\r\nStartPosition" || command == " StartPosition") {
        output += "!startpos|";
    } else if (command == "Volume" || command == "\r\nVolume" || command == " Volume") {
        var vol = line[1];
        output += "!volume@" + vol + "|";
    } else if (command == "Pause" || command == "\r\nPause" || command == " Pause") {
        var amt = line[1];
        if (amt == "1") output += "_pause|";
        else output += "_pause=" + amt + "|";
    } else {
        console.log("Unknown command: " + command);
    }
}

// remove last char
output = output.slice(0, -1);
fs.writeFileSync(fileout, output);