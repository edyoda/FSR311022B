console.log(document.getElementById('header'))
console.log(document.getElementsByClassName('test'))
console.log(document.getElementsByTagName('h1'))

console.log(document.querySelector('#header'))
console.log(document.querySelectorAll('.test'))
console.log(document.querySelectorAll('h1'))

var newHeader = document.createElement('h1')
var textNode = document.createTextNode('Hello!')
newHeader.appendChild(textNode)
console.log(newHeader)
document.body.appendChild(newHeader)

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

var tasks = ['Revise JS', 'Practice Hands-On', 'Solve Assignments']

/*

    <ol>
        <li>Revise JS</li>
        <li>Practice Hands-On</li>
        <li>Solve Assignments</li>
    </ol>

*/

var list = document.createElement('ol')

for(var i=0; i<tasks.length;i++){
    var li = document.createElement('li')
    var text = document.createTextNode(tasks[i])
    li.appendChild(text)
    list.appendChild(li)
}

document.body.appendChild(list)