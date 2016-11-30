var currentPage = "TitleScreen";
var currentPhrase = "Now more than ever";
var timeBetweenCycles = 7; //seconds
var cycleInterval;
var resetTimeout;
var resetTimeA = 60; //seconds
var resetTimeB = 90; //seconds
var autoBeginTime = 45;

var Record = [];

function reset() {
    Data.reset();
    TextProcesses.reset();
    Navigation.reset();
    if(resetTimeout) {
        clearTimeout(resetTimeout);
    }
    resetTimeout = setTimeout(autoBegin, autoBeginTime * 1000);
}