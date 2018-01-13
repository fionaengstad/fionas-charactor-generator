// First: What is an array?
//
// Sometimes, we have a list of things. We can do this:
//    var thing0 = "Vase";
//    var thing1 = "Lupe";
//    var thing2 = "Boots";
// etc. However, then we can only reference them by the name, and not
// by a number. So, for example:
//
// if (variable == 0) return thing0;
// else if (variable == 1) return thing1;
// exle if (variable == 2) return thing2;
//
// Tedious! Annoying!!
// INSTEAD, we can use a "table", called an array:
//
// var things = ["Vase", "Lupe", "Boots"];
//
// Now things[0], corresponds to thing0. And now, instead of the if-else-chain
// we can just write:
//
//     things[variable].
//

function dice(max) {
  return Math.floor(Math.random() * max) + 1
}

function choose(choices) {
    var choiceR = Math.floor(Math.random() * choices.length);
    return choices[choiceR];
}

var genders = ["male", "female"];

// array of strings => array of (string, array of strings)
var races = [
  { race:"dragonborn", subraces:[] },
  { race:"dwarf", subraces:["stone", "mountain", "cave"]},
  { race:"elf", subraces:["high", "wood", "dark"]},
  { race:"human", subraces:["calishite", "chondathan", "damaran", "illuskan", "mulan",
            "rashemi", "shou", "tethyrian", "turami"]},
  { race:"gnome", subraces:["forest", "rock"]},
  { race:"half-elf", subraces:[] },
  { race:"half-orc", subraces:[] },
  { race:"tiefling", subraces:[] }
];

function race() {
  var chosenRace = choose(races);
  if (chosenRace.subraces.length == 0) {
    return chosenRace.race;
  } else {
    var chosenSubRace = choose(chosenRace.subraces);
    return chosenSubRace + " " + chosenRace.race;
  }
}

var classes = ["barbarian", "bard", "cleric", "druid", "fighter",
               "monk", "paladin", "ranger", "rogue", "sorcerer",
               "warlock", "wizard"];

//document.write("<h1>" + choose(genders) + " " + race() + " " + choose(classes) + "</h1>");

document.write("<h1>" + choose(genders) + "</h1>");
document.write("<h1>" + race() + "</h1>");
document.write("<h1>" + choose(classes) + "</h1>");

//document.write("<h2>STR: " + dice(100) + "</h2>");
