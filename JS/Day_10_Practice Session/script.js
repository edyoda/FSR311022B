// var num1 = 25

// function findSum(num2){
//     var sum = num1 + num2
//     console.log(sum)
// }

// findSum(30)

// console.log(sum)

/*

    1. Find the maximum and minimum value from an array of integers.

    Eg.: arr = [1,2,4,3,9,8,10,15,12,13,18,35,28,26,20]

*/

var arr = [2,4,3,9,8,10,1,15,12,13,18,35,28,26,20]

var minVal = arr[0]
var maxVal = arr[0]

for(var i=0;i<arr.length;i++){
    if(arr[i]<minVal){
        minVal = arr[i]
    }
    if(arr[i]>maxVal){
        maxVal = arr[i]
    }
}

console.log(minVal, maxVal)

/*
    minVal = 1
    maxVal = 35
*/
