const keys = document.querySelector('.keys')

let clearkey = document.querySelector('#clearkey')
console.log(clearkey)
let numba = document.querySelector('#numba')
let opto = document.querySelector('#opto')
let equals = document.querySelector('.equalskey')
console.log(equals)
let decimal = document.querySelector('#decimalkey')
let screen = document.querySelector('.output')
console.log(numba)
console.log(equals)
numba.addEventListener('click')
opto.addEventListener('click')

/* clearButtons.forEach((button, i) => {
  button.addEventListener('click', ()=>{
  output.textContent=''
  })
  })

  function addValuetoOutput(event){
    const number = event.target.dataset.value
    output.textContent +=number
}

opsButton.forEach((button, i) =>
  button.addEventListener(click, addValuetoOutput) => {
)}
numberButtons.forEach((button, i)=> {
    button.addEventListener('click,' (event) =>{
    const number = event.target.data.value
    })
})
*/
for (let i = 0; i < numba.length; i++) {
	var x = numba[i]
	//const number = event.target.data.value
	screen.textContent += number
}

/*
Mark's code
let numberButtons=document.querySelectorAll(".number-butter")numba for me
Mark is using a foreach loop
Mark uses data-value in HTML to set the button "value"
numberButtons.forEach((button, i)=> {
    button.addEventListener('click,' (event) =>{
    const number = event.target.data.value
    })
})

/*
const numberify = document.querySelector(.numberify)
numberify.addEventListener('click',()=>)


const numberButtons = document.querySelector('.buttons button')
numberButtons.forEach(button=> console.log(button.textContent))
 console.log above


LETS do something besides console.log for button
(CHANGING THE VALUE of the BUTTONS thru set attributes )
 numberButtons.forEach(button=> {
    button.setAttribute('value', 42)
})

let numberVersion = dictionary[text]
button.value = numberVersion

google this ^^^^^


const sumify = document.querySelector(.'sumify')
sumify.addEventListener('click', ()=>{})

      We want to add up the value of the BUTTONS
      Nouns + verbs =
        value
        add
        sum
numberButtons.forEach(button=> {
let value =buttons.value
let sum = 0
sum += value


let numberVersion = 0
switch (text){
  case: 'One':
  number = 1
  break
  case: 'Two':
  number = 2
  break
  case: 'Three':
  number = 3
  break
  case: 'Four':
  number = 4
  break
default:
  numberVersion = 0
}
*/
