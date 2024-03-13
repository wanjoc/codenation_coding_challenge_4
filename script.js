let testButton = document.querySelector(".test-button");
let whatsYourGuess = document.querySelector(".whats-your-guess");
let result = document.querySelector(".result");
let guessedSentence = document.querySelector(".guessed-sentence");


testButton.addEventListener("click", function () {
  let randomNumber = Math.floor(Math.random() * 100); // Generates a random number between 0 and 99

  console.log("Random Number: " + randomNumber);

  // CODE ALONG
  // - When the button is clicked, a random number between 0 and 99 is generated.
  // - Depending on the value of this number, different actions will occur and a message will be displayed on the web page.:

  // 1. If the number is less than 30
  //  - The message should read: "The number is less than 30 🥶. You guessed {your input}
  // 2. If the number is between 30 and 69,
  //  - The message should read: "The number is between 30 and 69 😌. You guessed {your input}"

  // 3. If the number is 70 or greater
  //  - The message should read: "The number is 70 or greater 🥵. You guessed {your input}"

  // Copy/paste these two lines of code below in each condition
  // whatsYourGuess.style.display = "none";
  // guessInput.style.display = "none";
  // testButton.style.display = "none";

  // Extensions:
  //  - Try modifying the conditions or the actions taken (such as changing the text or adding new conditions).
  let defaultGuessSentencePrefix = "You guessed ";
});
