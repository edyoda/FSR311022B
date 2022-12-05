var value = 123
var val1 = 123.123
var var2 = "123.123"
var var3 = 'true'
var var4 = false
var var5 = null
var var6 = undefined

var var7
var7 = var2
var2 = '1234'
console.log('var2',var2)
console.log('var7',var7)

var arr = [1,2,3,4]
var arr1 = arr
arr.push(5)
console.log(arr, arr1)

var sum = 10 + 5
var diff = 10 - 5
var mul = 10 * 5
var div = 10 / 3

var x = 5 
var y = 10

console.log(x>3 || y<10)

console.log(isFinite(10/2))

console.log(isNaN('Banana'))

console.log(typeof('Banana'))

console.log(div)

console.log(parseInt(div))

console.log(div.toFixed(2))