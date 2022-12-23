// var task = document.getElementById('task')
// var addTaskBtn = document.getElementById('addTaskBtn')
// var allTasks = document.getElementById('allTasks')
// var deleteAllBtn = document.getElementById('deleteAll')

// var tasksAll = []

// addTaskBtn.addEventListener('click', function(){
//     if(tasksAll.includes(task.value)){
//         alert('Task already added')
//     }
//     else{
//         tasksAll.push(task.value)
//         allTasks.innerHTML += 
//         `
//             <li class='taskValue'>
//                 <span>${task.value}</span>
//                 <button class='delete'>Delete Task</button>
//             </li>
//         `
//         var deleteArr = document.querySelectorAll('.delete')
//         for(var i=0;i<deleteArr.length;i++){
//             deleteArr[i].onclick = function(){
//                 tasksAll.splice(tasksAll.indexOf(this.parentNode.children[0].innerHTML), 1) // Not needed just now :)
//                 this.parentNode.remove()
//             }
//         }
//         task.value = ''
//     }
// })

// deleteAllBtn.addEventListener('click', function(){
//     allTasks.innerHTML = ''
//     tasksAll = []
// })

/*

    Using any variable for function before its creation is called hoisting.
    Compiler automatically takes all the declarations of variables and function definition to the top of JS File.

*/

// x = 10
// console.log(x)
// var x
// x = 10
// console.log(x)

// console.log(sum(3,5))

// function sum(a,b){
//     return a+b
// }