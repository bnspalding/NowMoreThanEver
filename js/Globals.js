var currentPage = "TitleScreen";
var currentPhrase = "Now more than ever";
var timeBetweenCycles = 7; //seconds
var cycleInterval;
var resetTimeout;
var resetTimeA = 90; //seconds
var resetTimeB = (5 * 60); //seconds
var autoBeginTime = 60;

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