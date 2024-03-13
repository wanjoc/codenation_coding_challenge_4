let testButton = document.querySelector(".test-button");
let whatsYourGuess = document.querySelector(".whats-your-guess");
let result = document.querySelector(".result");
let guessedSentence = document.querySelector(".guessed-sentence");
let guessInput = document.querySelector(".guess-input");


testButton.addEventListener("click", function () {
  let randomNumber = Math.floor(Math.random() * 100); // Generates a random number between 0 and 99

  console.log("Random Number: " + randomNumber);

  let defaultGuessSentencePrefix = "You guessed ";
  if (randomNumber < 30) {
    result.innerHTML = "The temperature is less than 30" + "🥶.";
    whatsYourGuess.style.display = "none";
    guessInput.style.display = "none";
    testButton.style.display = "none";
    guessedSentence.innerHTML = defaultGuessSentencePrefix + guessInput.value;
  } else if (randomNumber >= 30 && randomNumber <= 69) {
    result.innerHTML = "The temperature is between 30 and 69 " + "😌.";
    whatsYourGuess.style.display = "none";
    guessInput.style.display = "none";
    testButton.style.display = "none";
    guessedSentence.innerHTML = defaultGuessSentencePrefix + guessInput.value;
  } else {
    result.innerHTML = "The temperature is 70 or greater" + "🥵.";
    whatsYourGuess.style.display = "none";
    guessInput.style.display = "none";
    testButton.style.display = "none";
    guessedSentence.innerHTML = defaultGuessSentencePrefix + guessInput.value;
  }
});
