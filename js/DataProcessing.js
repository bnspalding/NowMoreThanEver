var Data = (function() {
    
    var rawData = _RawData.slice();
    var _changeChance = 0.2;

    var _categories = Object.keys(rawData[0]);
    _categories.splice(0, 2);

    rawData.forEach(function(phrase) {
        if(phrase.y2016) {
            phrase.text += "*";
        }
    });

    

    var data = {
        phraseList: rawData.slice(),
        categories: _categories.slice(),
        currentCategory: _categories[0],
        changeChance: _changeChance
    }

    function filterPhrases(property) {
        var filtered = data.phraseList.filter(function(phrase) {
            return phrase[property] == true;
        });
        if(filtered.length < 1) {
            console.log("unable to find phrases from filter - "+property);
        }
        return filtered;
    }

    var possiblePhrases = filterPhrases(data.currentCategory);
    function selectTransition(phrase) {
        var possibleTransitions = [];
        for(var property in phrase) {
            if(phrase.hasOwnProperty(property)) {
                if(property != "phrase" || property != data.currentCategory) {
                    possibleTransitions.push(property);
                }
            }
        }
        
        return Utility.getRandomElement(possibleTransitions);
    }

    data.newCategory = function() {
        this.currentCategory = Utility.getRandomElement(this.categories);
        possiblePhrases = filterPhrases(data.currentCategory);
        if(possiblePhrases.length < 1 && this.categories.length > 1) {
            console.log("Cutting category for lack of phrases - remaining categories" + this.categories)
            this.categories.splice(this.categories.indexOf(this.currentCategory), 1);
            data.newCategory();
        }
    }

    data.getPhrase = function() {
        console.log(this.phraseList.length);
         var phrase = Utility.getRandomElement(possiblePhrases);
         possiblePhrases.splice(possiblePhrases.indexOf(phrase), 1);
         //Ensure no repeating ever
         this.phraseList.splice(this.phraseList.indexOf(phrase), 1);

         if(Math.random() < this.changeChance || possiblePhrases.length < 1) {
             console.log("Remaining Phrases - "+ possiblePhrases.length);
             var transition = selectTransition();
             if(transition == null) {
                 this.newCategory();
             } else {
                 this.currentCategory = transition;
             }
             console.log("Category jump to - "+ this.currentCategory);
             Record.push("");
         }

         return phrase;

    }

    data.reset = function() {
        this.phraseList = _RawData.slice();
        this.categories = _categories.slice();
    }

     return data;

}());

var Utility = (function() {
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max-min) + min);
    } 

    function getRandomElement(array) {
        var randomIndex = Utility.getRandomInt(0, array.length - 1);        
        return array[randomIndex];
    }

    return {
        getRandomInt: function(min, max) { return getRandomInt(min, max); },
        getRandomElement: function(array) { return getRandomElement(array); }
    }
}());