// var title = document.getElementById('title')
// var btn = document.getElementById('btn')

// btn.addEventListener('click', function(){
//     title.classList.toggle('title')
// })

var div = document.getElementById('div')
// div.addEventListener('mousedown', function(event){
//     if(event.which == 1){
//         console.log('Left')
//     }
//     else if(event.which == 2){
//         console.log('middle')
//     }
//     else{
//         console.log('right')
//     }
// })

// div.addEventListener('mouseup',function(){
//     console.log('Mouse Up Event Triggered')
// })

// div.addEventListener('dblclick', function(){
//     console.log('Double Click Event Triggered')
// })

div.addEventListener('mouseenter', function(){
    div.style.backgroundColor = 'lightgreen'
})

// div.addEventListener('mouseleave', function(){
//     div.style.backgroundColor = 'rgb(90, 184, 255)'
// })

// div.addEventListener('mousemove', function(){
//     console.log('Mouse Move is happening')
// })

// div.addEventListener('contextmenu', function(event){
//     event.preventDefault()
//     console.log('Right click hapenned')
// })

// window.addEventListener('mousemove',function(e){
//     console.log('Client:', e.clientX, e.clientY)
//     console.log('Page', e.pageX, e.pageY)
//     console.log('Screen', e.screenX, e.screenY)
// })

var timer = document.getElementById('timer')

// setTimeout(function(){
//     timer.innerHTML = timer.innerHTML - 1
// },1000)

var value = timer.innerHTML
var interval = setInterval(function(){
    value = value > 0 ? value - 1 : 0
    timer.innerHTML = value
    console.log('Event trigerring')
    if(value == 0){
        clearInterval(interval)
    }
},1000)
