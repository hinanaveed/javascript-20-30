// Problem 1: Positive Integer Math Operations
function calculateValues() {
    let number = parseFloat(document.getElementById('numberInput').value);
    document.getElementById('result').innerHTML = `
        Number: ${number}<br>
        Round off value: ${Math.round(number)}<br>
        Floor value: ${Math.floor(number)}<br>
        Ceil value: ${Math.ceil(number)}
    `;
}

// Problem 2: Negative Floating Point Math Operations
function calculateFloatValues() {
    let number = parseFloat(document.getElementById('floatInput').value);
    document.getElementById('resultFloat').innerHTML = `
        Number: ${number}<br>
        Round off value: ${Math.round(number)}<br>
        Floor value: ${Math.floor(number)}<br>
        Ceil value: ${Math.ceil(number)}
    `;
}

// Problem 3: Absolute Value
function showAbsoluteValue() {
    let number = parseFloat(document.getElementById('absInput').value);
    document.getElementById('absResult').innerHTML = `Absolute value: ${Math.abs(number)}`;
}

// Problem 4: Dice Roll Simulation
function rollDice() {
    let diceValue = Math.floor(Math.random() * 6) + 1;
    document.getElementById('diceResult').innerHTML = `Dice Value: ${diceValue}`;
}

// Problem 5: Coin Toss Simulation
function tossCoin() {
    let coinValue = Math.random() < 0.5 ? "Heads" : "Tails";
    document.getElementById('coinResult').innerHTML = `Coin Result: ${coinValue}`;
}

// Problem 6: Random Number Between 1 and 100
function showRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById('randomResult').innerHTML = `Random Number: ${randomNumber}`;
}

// Problem 7: Parse User Weight
function showWeight() {
    let weight = document.getElementById('weightInput').value;
    weight = parseFloat(weight); // Extract only the numerical part
    document.getElementById('weightResult').innerHTML = `Your weight is: ${weight} kgs`;
}

// Problem 8: Guess the Secret Number Between 1 and 10
function guessSecretNumber() {
    let secretNumber = Math.floor(Math.random() * 10) + 1;
    let userGuess = parseInt(document.getElementById('guessInput').value);

    if (userGuess === secretNumber) {
        document.getElementById('guessResult').innerHTML = `Congratulations! You guessed it right. The secret number was ${secretNumber}.`;
    } else {
        document.getElementById('guessResult').innerHTML = `Sorry, wrong guess. The secret number was ${secretNumber}.`;
    }
}
