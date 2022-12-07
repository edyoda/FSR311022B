/*

Try to answer the following questions.
var mStr = "This is my test string to practice the JavaScript string function concepts. This is gonna be 
fun."
1. Find the length of the first sentence in the string.
2. Find the length of the second sentence in the string.
3. Find the first and last occurrence of the word "This".
4. Find the substring with length 12 from the START of the string mStr.
5. Find the substring with length 12 from the END of the string mStr.

*/

var mStr = "This is my test string to practice the JavaScript string function concepts. This is gonna be fun."

//1
var firstSentence = mStr.split('.')
console.log(firstSentence[0].length)

//2

var secondSentence = firstSentence[1].trim()
console.log(secondSentence.length)

//3

console.log(mStr.indexOf('This')) // First Occurance
console.log(mStr.lastIndexOf('This'))// Last Occurance

//4

console.log(mStr.substr(0, 12))

//5

console.log(mStr.substr(-12, 12))

var length = 200
var breadth = 500

if(length === breadth){
    console.log('It is a square!')
}
else{
    console.log('It is not a square!')
}

var num1=500, num2=80, num3=20

if(num1 > num2 && num1 > num3){
    console.log(num1 , ' is greatest')
}
else if(num2 > num1 && num2 > num3){
    console.log(num2 , ' is greatest')
}
else{
    console.log(num3 , ' is greatest')
}

var numberOfItemPurchased = 12
var totalAmount = numberOfItemPurchased * 100

if(totalAmount >= 1000){
    var newAmount = 0.9 * totalAmount
    console.log('Price ', newAmount)
}
else{
    console.log('Price ', totalAmount)
}

var monthNumber = 1

switch(monthNumber){
    case 1: {
        console.log('January 31days')
        break
    }
    case 2: {
        console.log('February 28days')
        break
    }
    case 3: {
        console.log("March 31days")
        break
    }
    case 4: {
        console.log("April 30days")
        break
    }
    case 5: {
        console.log("May 31days")
        break
    }
    default: console.log('Invalid Month')
}

// Implicit Type Coersion

var str = 'Hey there!'
var num = false

var res = str + ' ' + num
console.log(res)
console.log(typeof(res))

var num1 = +'Ball'
console.log(num1)
console.log(typeof(num1))

if(50 + 'Sourav'){ 
    console.log('True block executed')
}
else{
    console.log('False block executed')
}