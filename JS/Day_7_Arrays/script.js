
var arr = ['John', 'Alice', 'Cara', 'Claire'];
var arr1 = ['Edyoda','Digital','University']

// arr.push('Sourav')

// console.log(arr.pop())

// arr.reverse()

// arr.splice(2, 0, 'Bob', 'Jack')

// console.log(arr)

// arr.splice(1, 5)

// arr.splice(4, 2, 'Sourav')

// arr.shift()

// arr.unshift('Michale')

// arr.splice(0 , 1)
// arr.splice(0, 0, 'Michale')

console.log(arr)

// console.log(arr.slice(1,4))

// console.log(arr.slice(2))

// console.log(arr.concat(arr1))

// console.log(arr.sort().reverse())

var numArr = [15,29,34,22,58,100]

// console.log(numArr.sort(function(a,b){return a-b}))

function compare(a,b){
    if(a.score > b.score){
        return 1
    }
    else if(b.score > a.score){
        return -1
    }
    else{
        return 0
    }
}

var mObj = [{
    'name': 'John',
    'score': 98
   },{
    'name': 'Alice',
    'score': 99
   },{
    'name': 'Johnathan',
    'score': 90
   }]
   
console.log(mObj.sort(compare))