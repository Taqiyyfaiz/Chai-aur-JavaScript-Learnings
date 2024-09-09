# Projects related to DOM


## Project Link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

## Project 1

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

## Project 2 Solution
```javascript
const clock = document.getElementById('clock')
// document.querySelector('#clock')

setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000)



```