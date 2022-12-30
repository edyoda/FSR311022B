var color = document.getElementById('color')
var counterVal = document.getElementById('counterVal')
var inc = document.getElementById('inc')
var dec = document.getElementById('dec')
var reset = document.getElementById('reset')

color.addEventListener('input', function(e){
    document.body.style.backgroundColor = e.target.value
})

inc.onclick = function(){
    counterVal.innerHTML = Number(counterVal.innerHTML) + 1
}

dec.onclick = function(){
    counterVal.innerHTML -= 1
}

reset.onclick = function(){
    counterVal.innerHTML = 0
}

/*
    var arr = [2,4,6,1,8,9,12]
    print sum of this array.
*/

var arr = [2,4,6,1,8,9,12,15]
var sum = 0

for(var i=0;i<arr.length;i++){
    sum += arr[i]
}

console.log(sum)

/*
matrix 1 = 

2 8
10 20

matrix 2 = 

3 4
12 18

result = 

5 12
22 38

*/

var m1 = [
    [2,8],
    [10,20]
]

var m2 = [
    [3,4],
    [12,18]
]
var res = []

for(var i=0;i<m1.length;i++){
    var temp = []
    for(var j=0;j<m1[i].length;j++){
        temp.push(m1[i][j]+m2[i][j])
    }
    res.push(temp)
}

console.log(res)
