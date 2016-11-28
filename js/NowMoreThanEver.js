//------------------------------------------ Page Setup -------------------------------------------------

window.onload = function() {
    Navigation.setup();
    resetTimeout = setTimeout(MenuDropOnIdle, resetTimeA * 1000);

    document.body.addEventListener("click", function() {
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
    if(currentPage == "Main") {
        console.log("dropping menu to nudge interaction");
        document.getElementById("Menu").style.display = "block";
    }
  
    resetTimeout = setTimeout(ResetOnIdle, resetTimeB * 1000);
}
