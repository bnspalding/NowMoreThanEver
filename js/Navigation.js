var Navigation = (function() {
    var changePage = function (target) {
        document.getElementById(currentPage).style.display = "none";
        currentPage = target;
        document.getElementById(currentPage).style.display = "block";
    }
    var toggleDisplay = function(element) {
        if (element.style.display == "block") {
            element.style.display = "none";
        } else {
            element.style.display = "block";
        }
    }

    var setup = function() {
        //Title Blocks to Main Page
        var titleblocks = document.getElementsByClassName("TitleBlock");
        Array.prototype.forEach.call(titleblocks, function(block) {
            block.addEventListener("click", function(){
                changePage("Main");
                if(cycleInterval) {
                    clearInterval(cycleInterval);
                }
                cycleInterval = setInterval(TextProcesses.cycleText, timeBetweenCycles * 1000);
            });
        });
        //Main Page to Title
        document.getElementById("Menu_ToTitle").addEventListener("click", function() {
            changePage("TitleScreen");
            document.getElementById("Menu").style.display = "none";
            reset();
        });
        //Main Page to Record
        document.getElementById("Menu_ToRecord").addEventListener("click", function() {
            changePage("Record");
            document.getElementById("Menu").style.display = "none";
            TextProcesses.createRecord();
        });
        //Record to Title
        document.getElementById("Record_ToTitle").addEventListener("click", function() {
            changePage("TitleScreen");
            reset();
        })
        //Main Page Menu Toggle
        document.getElementById("Menu_Button").addEventListener("click", function() {
            var menu = document.getElementById("Menu");
            toggleDisplay(menu);
        });
        //Main Page Click Behaviour
        document.getElementById("Main").addEventListener("click", function() {
            TextProcesses.cycleText();    
        });
    }

    function localReset() {
        document.getElementById("Menu").style.display = "none";
        changePage("TitleScreen");
    }

    var returnObject = {
        changePage: function() {changePage();},
        toggleDisplay: function() {toggleDisplay();},
        setup: function() {setup();},
        reset: function() { localReset(); }
    }

    return returnObject;
}());