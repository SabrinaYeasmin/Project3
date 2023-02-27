// ------------------- Cached Element References -------------------
scrDiv = document.querySelector('.score')
rstBtnDiv = document.querySelector('.btn-div')
rstBtn = document.querySelector('.reset-button')
scrLog = document.querySelector('.show-score')
highScrLog = document.querySelector('.high-score')
inputDiv = document.querySelector('.input-div')
guessInput = document.querySelector('#guess-input')
chckBtn = document.querySelector('#guess-button')
inputMsg = document.querySelector('.message')
winDiv = document.querySelector('#winner-div')
winMsgP = document.querySelector('.winner-msgP')
winScrShow = document.querySelector('.winner-msgh3')
winScr = document.querySelector('.winner-msgS')
playAgainBtn = document.querySelector('#play-again')
loseDiv = document.querySelector('#lose-div')
showGuess = document.querySelector('#prev-guesses')
loseMsg = document.querySelector('.lose-msg')
tryAgainBtn = document.querySelector('#try-again')
inputDiv.removeAttribute('hidden')
winDiv.setAttribute('hidden', true)
loseDiv.setAttribute('hidden', true)

// ------------------- Variables -------------------

let secretNum = Math.floor(Math.random() * 100 + 1); 
console.log(secretNum);
let guessList = [''];

// ----------------- Event Listener / Functions -----------------------

playAgainBtn.addEventListener('click', playAgain)
rstBtn.addEventListener('click', reset)
tryAgainBtn.addEventListener('click', reset)


chckBtn.addEventListener('click', function(){
  let guess = guessInput.value
  if(isNaN(guess) || guess < 0 || guess > 100){
    inputMsg.innerText = 'Please enter number 1 to 100 and check'
  } 
  else if(guessList.includes(guess)) {
    inputMsg.innerText = 'You already guessed this number'
    inputMsg.style.color = 'crimson'
  }
  else if(guess == secretNum){
    scrDiv.setAttribute('hidden', true)
    rstBtnDiv.setAttribute('hidden', true)
    inputDiv.setAttribute('hidden', true)
    winDiv.removeAttribute('hidden')
    winMsgP.innerText = `Your guess was correct. ${guess} is my secret number.`
    confetti.start(2000)
  } 
  else if(guess > secretNum){
    inputMsg.innerText = `${guess} is too high, try another number`
    inputMsg.style.color = 'navy'
    guessList.push(guess)
    showGuess.innerText = guessList.join(' ')
  } 
  else if(guess < secretNum) {
    inputMsg.innerText = `${guess} is too low, try another number`
    inputMsg.style.color = 'indigo'
    guessList.push(guess)
    showGuess.innerText = guessList.join(' ')
  } 
  showScore()
})


let previousScore;

function showScore(){
  for(let i = 0; i < guessList.length; i++ ){
    scrLog.innerText = `Attempts: ${i}`
    highScrLog.innerText = `Lowest Attempts: ${i}`
    winScrShow.innerText = `Your Attempts: ${i}`
    winScr.innerText = `Best: ${i}`
    previousScore = i
    if(i === 11){
      scrDiv.setAttribute('hidden', true)
      rstBtnDiv.setAttribute('hidden', true)
      inputDiv.setAttribute('hidden', true)
      loseDiv.removeAttribute('hidden')
      loseMsg.innerText = `My number was: ${secretNum}`
    }
  } 
}

function playAgain(){
  secretNum = Math.floor(Math.random() * 100 + 1)
  console.log(secretNum);
  guessList = [''];
  scrLog.innerText = `Attempts: `
  highScrLog.innerText = `High Score: ${previousScore}`
  guessInput.value = ''
  showGuess.innerText = ''
  inputMsg.innerText = `Try your luck again. Remember, pick a number between 1 and 100`
  inputMsg.style.color = 'black'
  scrDiv.removeAttribute('hidden')
  rstBtnDiv.removeAttribute('hidden')
  inputDiv.removeAttribute('hidden')
  winDiv.setAttribute('hidden', false)
  loseDiv.setAttribute('hidden', false)
}

function reset(){
  secretNum = Math.floor(Math.random() * 100 + 1)
  console.log(secretNum);
  guessList = [''];
  scrLog.innerText = `Attempts: `
  highScrLog.innerText = `High Score: `
  guessInput.value = ''
  showGuess.innerText = ''
  inputMsg.innerText = `Enter a number between 1 and 100!`
  inputMsg.style.color = 'black'
  scrDiv.removeAttribute('hidden')
  rstBtnDiv.removeAttribute('hidden')
  inputDiv.removeAttribute('hidden')
  winDiv.setAttribute('hidden', false)
  loseDiv.setAttribute('hidden', false)
}