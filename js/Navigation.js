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
            });
        });
        //Main Page to Title
        document.getElementById("Menu_ToTitle").addEventListener("click", function() {
            changePage("TitleScreen");
            document.getElementById("Menu").style.display = "none";
        });
        //Main Page to Record
        document.getElementById("Menu_ToRecord").addEventListener("click", function() {
            changePage("Record");
            document.getElementById("Menu").style.display = "none";
        });
        //Record to Title
        document.getElementById("Record_ToTitle").addEventListener("click", function() {
            changePage("TitleScreen");
        })
        //Main Page Menu Toggle
        document.getElementById("Menu_Button").addEventListener("click", function() {
            var menu = document.getElementById("Menu");
            toggleDisplay(menu);
        });
    }

    var returnObject = {
        changePage: function() {changePage()},
        toggleDisplay: function() {toggleDisplay()},
        setup: function() {setup()}
    }

    return returnObject;
}());