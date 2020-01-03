// Make a div
const myDiv = document.createElement('div')

// add a class of wrapper to it
myDiv.className = 'wrapper'

// put it into the body
document.body.appendChild(myDiv)

// make an unordered list
const myList = document.createElement('ul')

// add three list items with the words "one, two three" in them
let myItem
;['one', 'two', 'three'].forEach(item => {
  myItem = document.createElement('li')
  myItem.innerText = item
  myList.appendChild(myItem)
})

// put that list into the above wrapper
const wrapper = document.querySelector('.wrapper')
wrapper.appendChild(myList)

// create an image
const myImage = document.createElement('img')

// set the source to an image
myImage.src = 'https://www.stockvault.net//data/2008/07/12/105845/thumb16.jpg'
// set the width to 250
myImage.width = 250
// add a class of cute
myImage.className = 'cute'
// add an alt of Cute Puppy
myImage.alt = 'Cute Puppy'
// Append that image to the wrapper
wrapper.appendChild(myImage)

// with HTML string, make a div, with two paragraphs inside of it
const myHTMLString = `
    <div>
        <p>para 1</p>
        <p>para 2</p>
    </div>`
// put this div before the unordered list from above
myList.insertAdjacentHTML('beforebegin', myHTMLString)

// add a class to the second paragraph called warning
const paragraphs = document.querySelectorAll('p')
paragraphs[1].className = 'warning'
// remove the first paragraph
paragraphs[0].remove()

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

const generatePlayerCard = (name, age, height) => {
  return `
    <div class="playerCard">
      <h2>${name} — ${age}</h2>
      <p>
        They are ${height} and ${age} years old. In Dog years this person would be
        ${7 * age}. That would be a tall dog!
      </p>
      <button class='delete' type='button'>Delete</button>
    </div>
  `
}

// make a new div with a class of cards
const myCards = document.createElement('div')
myCards.className = 'cards'

// Have that function make 4 cards
const card1 = generatePlayerCard('Andrew', 2, 100)
const card2 = generatePlayerCard('Bob', 4, 120)
const card3 = generatePlayerCard('Claire', 5, 80)
const card4 = generatePlayerCard('Donald', 9, 200)

// append those cards to the div
myCards.insertAdjacentHTML('afterbegin', card1)
myCards.insertAdjacentHTML('beforeend', card2)
myCards.insertAdjacentHTML('beforeend', card3)
myCards.insertAdjacentHTML('beforeend', card4)
// put the div into the DOM just before the wrapper element
wrapper.insertAdjacentElement('beforebegin', myCards)
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
const buttons = document.querySelectorAll('.delete')
// make out delete function
const deleteCard = event => {
  const card = event.currentTarget.parentElement
  card.remove()
}
// loop over them and attach a listener
buttons.forEach(button => {
  button.addEventListener('click', deleteCard)
})
