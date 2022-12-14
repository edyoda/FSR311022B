// var i = 1
// while(i<=10){
//     if(i % 2 == 0){
//        console.log(i)
//     }
//     else{
//         i++
//         continue
//     }
//     console.log('Hey there!')
//     i++
// }

/*
    i->1 1<=10 true -> console.log('Hello World') 
    i->2 2<=10 true -> console.log('Hello World')
    i->3 3<=10 true -> console.log('Hello World')
    ....
    i->10 10<=10 true -> console.log('Hello World') 
    i->11 11<=10 false -> stop
*/

// for(initialization; condition; increment/decrement){

// }

// for(var i=1;i<=10;i++){
//     console.log('Hello Everyone!')
// }

//1. Add numbers from 1 to 100 until you get a sum more than or equal to 100.

// var i=1
// var sum = 0
// while(i<=100){
//     sum += i
//     if(sum >= 100)
//         break
//     i++
// }
// console.log(i)
// console.log(sum)

//2.  Find first 20 even numbers.

// var cnt = 0
// var value = 1
// while(true){
//     if(value % 2 == 0){
//         console.log(value)
//         cnt++;
//         value++;
//         if(cnt == 20){
//             break
//         }
//     }
//     else{
//         value++;
//     }
// }