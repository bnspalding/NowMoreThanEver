//------------------------------------------ Page Setup -------------------------------------------------

window.onload = function() {
    Navigation.setup();
    test();
}

function test() {
    var phrases = ["FATHERS MATTER", "He now has access", "Our technology is zapping our memories", "everything is on the table"];

    function changeText() {
        var textDiv = document.getElementById("Text_Main").firstElementChild;
        currentPhrase = phrases[Math.floor(Math.random() * phrases.length)];
        textDiv.innerHTML = currentPhrase;
        textDiv.classList.remove("fade_in");
        void textDiv.offsetWidth;
        textDiv.classList.add("fade_in");
    }

    function addBottomText() {
        var bottomTextDiv = document.getElementById("Text_Bottom");
        var newElement = document.createElement("p");
        newElement.classList.add("Old_Text");
        newElement.classList.add("fade_in");
        newElement.innerHTML = currentPhrase;
        var xPos = getRandomInt(10, screen.width/2);
        var yPos = getRandomInt(20, 370);
        var rotation = getRandomInt(-40, 40);
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

    document.body.addEventListener("click", function() {
        addBottomText();
        changeText();
    });

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max-min) + min);
    } 
    
}
