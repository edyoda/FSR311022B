// console.log('Script Connected')

console.log('I love "JavaScript"!')

var text = 'EdYoda'
var text1 = 'Digitalsity University'

var upperText = text.toUpperCase()
console.log(upperText)

var lowerText = text.toLowerCase()
console.log(lowerText)

var combinedText = text.concat(' ',text1) // 'Edyoda' + ' ' + 'Digital University'
console.log(combinedText)

var text2 = '         Hello World!          '
console.log(text2)
var newText2 = text2.trim()
console.log(newText2)

console.log(text.charAt(2))
console.log(text1.charAt(8))

var splittedText = text1.split(" ")
console.log(splittedText)

var months = 'Jan,Feb,March,April,May,June,July,Aug,Sept,Oct,Nov,Dec'
var spliitedMonths = months.split(',')
console.log(spliitedMonths)

var splittedVal = text.split('')
console.log(splittedVal)

var str1 = 'Today is'
var str2 = ' a beautiful day '
var str3 = ' In Hawaii. '

var result = str1.concat(str2, str3.trim())

console.log(result)

console.log(text1.length)

var subStr = 'sity'

console.log(text1.lastIndexOf(subStr))

console.log(text1.slice(-10,-3))

console.log(text1.substring(0, 7))

var x
console.log(x)

var y = null
console.log(y)

var a = 50
var b = 30

if(a>b){
    console.log('a is greater than b')
}
else{
    console.log('b is greater than a')
}