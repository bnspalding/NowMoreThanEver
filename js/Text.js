var TextProcesses = (function() {
    var text = {};
    text.changeText = function() {
        var textDiv = document.getElementById("Text_Main").firstElementChild;
        textDiv.classList.remove("y2016");
        if(currentPhrase) {
            textDiv.innerHTML = currentPhrase.text;
            if(currentPhrase.y2016 == true) {
                textDiv.classList.add("y2016");
            }
        } else {
            textDiv.innerHTML = "Now more than ever";
        }

        textDiv.classList.remove("fade_in");
        void textDiv.offsetWidth;
        textDiv.classList.add("fade_in");

        
    };

    text.addBottomText = function() {
        var bottomTextDiv = document.getElementById("Text_Bottom");
        var newElement = document.createElement("p");
        newElement.classList.add("Old_Text");
        newElement.classList.add("fade_in");
        if(currentPhrase && currentPhrase.text) {
            newElement.innerHTML = currentPhrase.text
            if(currentPhrase.y2016 == true) {
                // newElement.classList.add("y2016");
            }
        } else {
            newElement.innerHTML = "Now more than ever";
            console.log("No Phrase - NMTE");
        }
        var xPos = Utility.getRandomInt(10, screen.width/2);
        var yPos = Utility.getRandomInt(20, 370);
        var rotation = Utility.getRandomInt(-40, 40);
        var r = Math.random();
        if(r > 0.5) {
            newElement.style.left = xPos.toString() + "px";
        } else {
            newElement.style.right= xPos.toString() + "px"
        }
        
        newElement.style.bottom = yPos.toString() + "px";
        newElement.style.transform = "rotate("+rotation+"deg)";

        bottomTextDiv.appendChild(newElement);
    }

    text.cycleText = function() {
        text.addBottomText();
        currentPhrase = Data.getPhrase();
        Record.push(currentPhrase);
        text.changeText();
        if(cycleInterval) {
            clearInterval(cycleInterval);
        }
        cycleInterval = setInterval(text.cycleText, timeBetweenCycles * 1000);
    }

    text.createRecord = function() {
        var linesDiv = document.getElementById("Lines");
        //clear any previous record
        while (linesDiv.firstChild) {
            linesDiv.removeChild(linesDiv.firstChild);
        }
        //clean record
        Record = Record.filter(function(el) {
            return el != undefined;
        });
        Record.forEach(function(line) {
            var newElement;
            if (line.text) {
                newElement = document.createElement("p");
                newElement.innerHTML = line.text;
                if(line.y2016 == true) {
                    newElement.classList.add("y2016");
                }
            } else {
                newElement = document.createElement("br");
            }
            linesDiv.appendChild(newElement);
        });

    }

    text.reset = function() {
        var textDiv = document.getElementById("Text_Main").firstElementChild;
        textDiv.classList.remove("y2016");
        textDiv.innerHTML = "Now more than ever";

        var bottomTextDiv = document.getElementById("Text_Bottom");
        while (bottomTextDiv.firstChild) {
            bottomTextDiv.removeChild(bottomTextDiv.firstChild);
        }
        currentPhrase = "Now more than ever";
        clearInterval(cycleInterval);

        Record = [];
    }

    return text;

}());