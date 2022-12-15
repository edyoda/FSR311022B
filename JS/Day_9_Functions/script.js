// function sum2num(num1 , num2){
//     var sum = num1+num2;
//     console.log(sum)
// }

// sum2num(5,3)
// sum2num(128, 190)

/*

    WAF which accepts a number and prints hello world that many no. of times

*/


// function printMessage(num){
//     for(var i=1;i<=num;i++){
//         console.log("Hello World")
//     }
// }

// var num = Number(prompt('Enter a number'))
// printMessage(num)

/*

    WAF to accept a number and print first 10 values of tables for that number

*/

// function printTables(num1){
//     for(var i=1;i<=10;i++){
//         console.log(num1,'*',i,'=',num1*i)
//     }
// }
// var num = Number(prompt('Enter a number'))
// printTables(num)

// function converter(str){
//     return str.toUpperCase()
// }

// console.log(converter('sourav'))

// function checker(num){
//     if(num % 2 == 0){
//         return "Even"
//     }
//     else{
//         return "Odd"
//     }
// }

// console.log(checker(5))

/*
Find the name of people who are not invited to the wedding from the following list
var invitationList = [
{name: ‘Jacob’, invited: true},
{name: ‘Alison’, invited: false},
{name: ‘Winston’, invited: true},
{name: ‘Lee’, invited: false},
{name: ‘Bowry’, invited: true},
{name: ‘Wan’, invited: false},
{name: ‘Jovovich’, invited: true},
]
*/

// var invitationList = [
//     {name: 'Jacob', invited: true},
//     {name: 'Alison', invited: false},
//     {name: 'Winston', invited: true},
//     {name: 'Lee', invited: false},
//     {name: 'Bowry', invited: true},
//     {name: 'Wan', invited: false},
//     {name: 'Jovovich', invited: true}
// ]

// for(var i=0;i<=invitationList.length-1;i++){
//     if(invitationList[i].invited == false){
//         console.log(invitationList[i].name)
//     }
// }