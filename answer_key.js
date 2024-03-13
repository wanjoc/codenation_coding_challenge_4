let testButton = document.querySelector(".test-button");
let whatsYourGuess = document.querySelector(".whats-your-guess");
let guessInput = document.querySelector(".guess-input").value;
let result = document.querySelector(".result");
let guessSentence = document.querySelector(".guessed-sentence");


testButton.addEventListener("click", function () {
  let randomNumber = Math.floor(Math.random() * 100); // Generates a random number between 0 and 99

  console.log("Random Number: " + randomNumber);

  // CODE ALONG
  // - When the button is clicked, a random number between 0 and 99 is generated.
  // - Depending on the value of this number, different actions will occur and a message will be displayed on the web page.:

  // 1. If the number is less than 30
  //  - The message should read: "The number is less than 30 🥶."
  // 2. If the number is between 30 and 69,
  //  - The message should read: "The number is between 30 and 69 😌."

  // 3. If the number is 70 or greater
  //  - The message should read: "The number is 70 or greater 🥵."

  // Extensions:
  //  - Try modifying the conditions or the actions taken (such as changing the text or adding new conditions).
  let defaultGuessSentencePrefix = "You guessed ";
  if (randomNumber < 30) {
    result.innerHTML = "The number is less than 30" + "🥶.";
    whatsYourGuess.style.display = "none";
    guessInput.style.display = "none";
    guessedSentence.innerHTML = defaultGuessSentencePrefix + guessInput;
  } else if (randomNumber >= 30 && randomNumber <= 69) {
    result.innerHTML = "The number is between 30 and 69 " + "😌.";
    whatsYourGuess.style.display = "none";
    guessInput.style.display = "none";
    guessedSentence.innerHTML = defaultGuessSentencePrefix + guessInput;
  } else {
    result.innerHTML = "The number is 70 or greater" + "🥵.";
    whatsYourGuess.style.display = "none";
    guessInput.style.display = "none";
    guessedSentence.innerHTML = defaultGuessSentencePrefix + guessInput;
  }
});
