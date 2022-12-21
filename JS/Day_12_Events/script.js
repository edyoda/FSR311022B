var title = document.getElementById('title')
// console.log(title.classList)

// title.classList.add('styleTitle')

// console.log(title.classList)

// title.classList.remove('styleTitle')

// console.log(title.classList)

var button = document.getElementById('btn')
var key = document.getElementById('key')
// button.onclick = function(){
//     console.log('Hey there! You just clicked the button')
// }

// button.onclick = function(){
//     var h1 = document.createElement('h1')
//     var text = document.createTextNode('Button Clicked!')
//     h1.appendChild(text)
//     document.body.appendChild(h1)
// }

// button.addEventListener('click', function(){
//     console.log('Hey there! You just clicked the button')
// })

// button.addEventListener('click', function(){
//     var h1 = document.createElement('h1')
//     var text = document.createTextNode('Button Clicked!')
//     h1.appendChild(text)
//     document.body.appendChild(h1)
// })

button.addEventListener('click', function(){
    title.classList.toggle('styleTitle')
})

// window.addEventListener('keydown', function(event){
//     // key.innerHTML = event.key
//     // key.innerHTML = event.which
//     console.log(event.key, event.altKey, event.ctrlKey, event.shiftKey)
// })

// window.addEventListener('keyup', function(event){
//     key.innerHTML = event.key
// })

// window.addEventListener('keypress', function(event){
//     console.log(event.key)
//     key.innerHTML = event.key
// })

var nameInput = document.getElementById('name')
var emailInput = document.getElementById('email')
var num = document.getElementById('num')
var submitBtn = document.getElementById('submit')

// nameInput.addEventListener('change', function(event){
//     console.log(event.target)
//     console.log(event.target.value)
// })

// nameInput.addEventListener('input', function(event){
//     // console.log(event.target)
//     console.log(event.target.value)
// })

// nameInput.addEventListener('focus', function(event){
//     // console.log(event.target)
//     // console.log(event.target.value)
//     event.target.value = ''
// })

// nameInput.addEventListener('blur', function(event){
//     // console.log(event.target)
//     console.log(event.target.value)
// })

var nameVal = ''
var email = ''
var mobile = ''


nameInput.addEventListener('input', function(event){
    nameVal = event.target.value
})

emailInput.addEventListener('input', function(event){
    email = event.target.value
})

num.addEventListener('input', function(event){
    mobile = event.target.value
})

submitBtn.addEventListener('click', function(event){
    event.preventDefault()
    var nameH1 = document.createElement('h1')
    var emailH1 = document.createElement('h1')
    var mobH1 = document.createElement('h1')

    var nameText = document.createTextNode(nameVal)
    var emailText = document.createTextNode(email)
    var mobText = document.createTextNode(mobile)

    nameH1.appendChild(nameText)
    emailH1.appendChild(emailText)
    mobH1.appendChild(mobText)

    document.body.appendChild(nameH1)
    document.body.appendChild(emailH1)
    document.body.appendChild(mobH1)
})