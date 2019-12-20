
    var word = ["Craig na dun", "Culldon Moor", "Jamie", "Claire", "Fraser", "Scotland", "Jacobite Army"];

    var maxNumGuesses = 10;
    var guessedLetters = []; 
    var ansWordArr = []; 
    var numGuessesRemaining = 0;
    var numWins = 0; 
    var numLosses = 0; 
    var ansWord = word[choice]; 
    
    // function runs at the start of page and used to restart after game isFinished
    function setup() {
        //picks random word from words list
        ansWord = word[Math.floor(Math.random() * word.length)];
        ansWordArr= [];
        // adds "_" to ansWordArr
        for (var i = 0; i < ansWord.length; i++) {
            ansWordArr[i] = "_";
        }
    var maxNumGuesses
        // reset the variables 
        numGuessesRemaining = maxNumGuesses;
        guessedLetters = [];

        //show the selected elements on the screen 
        updateScreen();
    };
    
    //updates the HTML from the functions
    function updateScreen() {
        document.getElementById("numWins").innerText = numWins;
        document.getElementById("numLosses").innerText = numLosses;
        document.getElementById("numGuesses").innerText = numGuessesRemaining;
        document.getElementById("answerWord").innerText = ansWordArr.join("");
        document.getElementById("guessedLetters").innerText = guessedLetters;
    
    };
  
    