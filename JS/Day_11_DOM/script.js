console.log(document.getElementById('header'))
console.log(document.getElementsByClassName('test'))
console.log(document.getElementsByTagName('h1'))

console.log(document.querySelector('#header'))
console.log(document.querySelectorAll('.test'))
console.log(document.querySelectorAll('h1'))

// var newHeader = document.createElement('h1')
// var textNode = document.createTextNode('Hello bc!')
// var element = document.getElementById('element')
newHeader.appendChild(textNode)
element.appendChild(newHeader.appendChild(textNode))

console.log(newHeader)

var firstHeader = document.getElementById('header')
console.log(firstHeader)

firstHeader.innerHTML = 'Hello there! JS altered this line :)'

var div = document.getElementById('random')
div.innerHTML = 'JS aka JavaScript'

var header1 = document.getElementById('header1')
header1.style.color = 'green'
header1.style.fontSize = '60px'
header1.style.backgroundColor = 'cyan'

div.remove()
header1.remove()