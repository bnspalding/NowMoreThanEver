//------------------------------------------ Page Setup -------------------------------------------------

window.onload = function() {
    Navigation.setup();
    resetTimeout = setTimeout(autoBegin, autoBeginTime * 1000);

    document.body.addEventListener("click", function() {
        console.log("resetting idle timer");
        if(resetTimeout) {
            clearTimeout(resetTimeout);
        }
        resetTimeout = setTimeout(MenuDropOnIdle, resetTimeA * 1000);
    })
}

function ResetOnIdle() {
    console.log("resetting");
    reset();
    
}

function MenuDropOnIdle() {
    console.log(resetTimeA + " seconds have passed without input");
    if(currentPage == "Main") {
        console.log("dropping menu to nudge interaction");
        document.getElementById("Menu").style.display = "block";
    }
  
    resetTimeout = setTimeout(ResetOnIdle, resetTimeB * 1000);
}

function autoBegin() {
    console.log("automatically beginning");
    Navigation.changePage("Main");
    if(cycleInterval) {
        clearInterval(cycleInterval);
    }
    cycleInterval = setInterval(TextProcesses.cycleText, timeBetweenCycles * 1000);
    if(resetTimeout) {
        clearTimeout(resetTimeout);
    }
    resetTimeout = setTimeout(MenuDropOnIdle, resetTimeA * 1000);
}
