/*-------------------------------- Constants --------------------------------*/
const state = {
    boredom: 0,
    hunger: 0,
    sleepiness: 0,
}


/*---------------------------- Variables (state) ----------------------------*/
let timer
let gameOver = false

/*------------------------ Cached Element References ------------------------*/
boredomStatEl = document.querySelector('#boredom-stat')
hungerStatEl = document.querySelector('#hunger-stat')
sleepinessStatEl = document.querySelector('#sleepiness-stat')
playBtnEl = document.querySelector('#play')
feedBtnEl = document.querySelector('#feed')
sleepBtnEl = document.querySelector('#sleep')
gameMessageEl = document.querySelector('#message')
resetBtnEl = document.querySelector('#restart')




/*-------------------------------- Functions --------------------------------*/
function init() {
resetBtnEl.classList.add('hidden')
gameMessageEl.classList.add('hidden')

gameOver = false

state.boredom = 0
state.hunger = 0
state.sleepiness = 0

    timer = setInterval(runGame, 2000)
}
init()

function runGame() {
    updateStates()
    checkGameOver()
    render()
}

function render() {
boredomStatEl.textContent = state.boredom
hungerStatEl.textContent = state.hunger
sleepinessStatEl.textContent = state.sleepiness

if (gameOver === true) {
    clearInterval(timer)
    resetBtnEl.classList.remove('hidden')
    gameMessageEl.classList.remove('hidden')
}

}

function updateStates() {
     
    state.boredom += Math.floor(Math.random() * 4)
    state.hunger += Math.floor(Math.random() * 4)
    state.sleepiness += Math.floor(Math.random() * 4)
  
}

function checkGameOver() {
    if (state.boredom >= 10 || state.hunger >= 10 || state.sleepiness >= 10) {
        gameOver = true
    }
}

function playBtnClick() {
    state.boredom = 0
    render()
   
}

function feedBtnClick() {
    state.hunger = 0
    render()
   
}

function sleepBtnClick() {
    state.sleepiness = 0
    render()

}




/*----------------------------- Event Listeners -----------------------------*/
playBtnEl.addEventListener('click', playBtnClick)
feedBtnEl.addEventListener('click', feedBtnClick)
sleepBtnEl.addEventListener('click', sleepBtnClick)
resetBtnEl.addEventListener('click', init)