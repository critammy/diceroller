//number3 of assessment

const rollButton = document.querySelector('.roll-button')
const dieRolls = []
let totalsElement = document.querySelector('.Total')
const allRolls = document.querySelector('.show-all-rolls')
const listElement = document.querySelector('ol')
const input = document.querySelector('#number-of-dice')


rollButton.addEventListener('click', function () {
    let diceRolled = input.value;
    let counter = 0
    let total = 0
    while (counter < diceRolled) {
        //   console.log(counter);
        let diceRoll = Math.floor(Math.random() * 6 + 1);
        console.log(diceRoll)
        dieRolls.push(diceRoll)

        total += diceRoll
        counter += 1
    }
    console.log(dieRolls)
    totalsElement.innerHTML = 'the sum of the rolls ' + total
})


allRolls.addEventListener('click', function () {
    let counter = 0
    let total = 0
    while (counter < dieRolls.length) {
       listElement.innerHTML += '<li>' + dieRolls[counter] + '</li>';

        counter += 1
    }

    console.log(total)
})

let reset=0
let resetButton=document.querySelector('#reset-button')
let resetNumber=document.querySelector('#num-resets')
resetButton.addEventListener('click', function() {
    let reset= Number(resetNumber.innerHTML)+ 1;
    resetNumber.innerHTML= reset

    // resetNumber.innerHTML= 0;
    listElement.innerHTML= 0;
    totalsElement.innerHTML= 0;
    input.value = "";

})

// Extra Credit
// Create a reset button which, on click, will empty the array and the innerHTML of your Total and All Rolls elements. (3 points)
// Make each "dice roll" element look more like an actual six-sided (cube) die. You don't have to show dice pips – numbers are fine. Just find some ways to style these "dice" elements to help the user "see" them as dice. (2 points)
// Create a user input box, where a user can specify the number of sides on the dice. For example, instead of six-sided dice, the user could opt for a 20-sided die. (3 points)