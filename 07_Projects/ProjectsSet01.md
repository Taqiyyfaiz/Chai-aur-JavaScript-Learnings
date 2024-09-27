# Projects related to DOM


## Project Link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

## Project 1 Solution

```javaScript

// Selects all the classes which named as button 
const Btn = document.querySelectorAll('.button')
const body = document.querySelector("body")

Btn.forEach(function(button){
  console.log(button);
  button.addEventListener('click', function(e) {
    console.log(e)    
    console.log(e.target)
    
    if(e.target.id === "grey") {
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === "white") {
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === "blue") {
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === "red") {
      body.style.backgroundColor = e.target.id
    }
  })
})

```

## Project 2 Solution
```javascript

const form = document.querySelector('form');
// This usecase will give you empty value
// const height = parseInt(document.querySelector('#height').value)
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const BMI = (weight / ((height * height) / 10000)).toFixed(2);
    // Show the result
    results.innerHTML = `<span>${BMI}</span>`;
  }
});


```

## Project 3 Solution
```javascript
const clock = document.getElementById('clock')
// document.querySelector('#clock')

setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000)

```

## Project 4 Solution
```javaScript

let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses'); 
const remaining = document.querySelector('.lastResult'); 
const lowOrHi = document.querySelector('.lowOrHi'); 
const startOver = document.querySelector('.resultParas'); 

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  // it will validate guess
  if(isNaN(guess)) {
    alert('Please Enter a Valid Number')
  } else if (guess < 1) {
    alert('Please Enter a Number more than 1')
  } else if (guess > 100) {
    alert('Please Enter a Number less than 100')
  } else {
    prevGuess.push(guess)

    if(numGuess === 11) {
      displayGuess(guess)
      displayMessage(`Game Over. Random Number was ${randomNumber}`)
      endGame()
    } else {
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess) {
  // it will check the guess
  if(guess === randomNumber) {
    displayMessage(' You guessed it right')
    endGame()
  }  else if(guess < randomNumber) {
    displayMessage('Number is Tooo Low')

  } else if(guess > randomNumber) {
    displayMessage('Number is Tooo High')
  }
}

function displayGuess(guess) {
  // 
  userInput.value = ' '
  guessSlot.innerHTML += `${guess},   `
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value=' '
  userInput.setAttribute('disabled', '')
  p.classList.add('button')  
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p)
  playGame = false
  newGame();
}

function newGame() {
  const newGamebtn = document.querySelector('#newGame')
  newGamebtn.addEventListener('click', function(e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame = true
  })
}

```