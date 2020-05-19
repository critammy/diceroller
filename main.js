//number3 of assessment

const rollButton = document.querySelector('.roll-button')
const dieRolls = []
let totalsElement = document.querySelector('.Total')
const allRolls = document.querySelector('.show-all-rolls')
const listElement = document.querySelector('ol')

rollButton.addEventListener('click', function () {
    let diceRolled = document.querySelector('#number-of-dice').value;
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

// Add a click event listener to your "Show All Rolls" button.
// Write a new loop: Loop over the dieRolls array, creating a new List Item for each number and adding that List Item to the innerHTML of the "All Rolls" element. This LI should show the value of the roll. (4 points