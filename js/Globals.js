var currentPage = "TitleScreen";
var currentPhrase = "Now more than ever";
var timeBetweenCycles = 7; //seconds
var cycleInterval;
var resetTimeout;
var resetTimeA = 60; //seconds
var resetTimeB = 120; //seconds

var Record = [];

function reset() {
    Data.reset();
    TextProcesses.reset();
    Navigation.reset();
}