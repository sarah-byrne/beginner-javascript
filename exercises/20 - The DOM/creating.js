const myList = document.createElement('ul')
const things = [
  'first thing',
  'second thing',
  'third thing',
  'fourth thing',
  'fifth thing'
]

function addToList(i) {
  const item1 = document.createElement('li')
  item1.textContent = i
  myList.appendChild(item1)
}

things.forEach(i => addToList(i))

const heading = document.querySelector('h2')

heading.insertAdjacentElement('beforeBegin', myList)
