document.addEventListener('DOMContentLoaded', () => {
    const wordList = ["APPLE", "LEMON", "ORANGE", "BANANA", "GRAPE"];
    const maxAttempts = 6;
    let targetWord = getRandomWord(wordList);
    let attemptsLeft = maxAttempts;
    
    const wordDisplay = document.getElementById('word-display');
    const guessInput = document.getElementById('guess-input');
    const guessButton = document.getElementById('guess-button');
    const attemptsLeftDisplay = document.getElementById('attempts-left');
    const messageDisplay = document.getElementById('message');
    
    // Initialize the word display with underscores
    let guessedWord = "_".repeat(targetWord.length);
    wordDisplay.textContent = guessedWord;
    
    // Function to get a random word from the list
    function getRandomWord(wordList) {
        const randomIndex = Math.floor(Math.random() * wordList.length);
        return wordList[randomIndex];
    }
    
    // Function to check if the guess is correct
    function checkGuess(guess) {
        let newGuessedWord = '';
        for (let i = 0; i < targetWord.length; i++) {
            if (guess === targetWord[i]) {
                newGuessedWord += guess;
            } else {
                newGuessedWord += guessedWord[i];
            }
        }
        return newGuessedWord;
    }
    
    // Event listener for the guess button
    guessButton.addEventListener('click', () => {
        const guess = guessInput.value.toUpperCase();
        if (guess.length !== 1 || !/[A-Z]/.test(guess)) {
            messageDisplay.textContent = 'Please enter a valid single letter guess.';
            return;
        }
        
        if (targetWord.includes(guess)) {
            guessedWord = checkGuess(guess);
            wordDisplay.textContent = guessedWord;
            if (guessedWord === targetWord) {
                messageDisplay.textContent = 'Congratulations! You guessed the word!';
                guessInput.disabled = true;
            }
        } else {
            attemptsLeft--;
            attemptsLeftDisplay.textContent = `Attempts Left: ${attemptsLeft}`;
            if (attemptsLeft === 0) {
                messageDisplay.textContent = `Sorry, you've run out of attempts. The word was ${targetWord}.`;
                guessInput.disabled = true;
            }
        }
        
        guessInput.value = '';
    });
});
