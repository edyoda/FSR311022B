var num = 10
var div = 3

console.log(num % div)

var a = 10
// console.log(++a)
// console.log(a++)

// console.log(--a)
// console.log(a--)
// console.log(a)

var res = a++ + ++a;
console.log(res)

//10 + 12 = 22

var input = 7;
var output1 = ++input + ++input + ++input; 
var output2 = input++ + input++ + input++;  // 13
var output3 = input++ + ++input + input++; // 16
console.log(input)
console.log(output1 + ' ' + output2 + ' ' + output3)

/*
    8 + 9 + 10 = 27 --> output 1
    10 + 11 + 12 = 33 --> output 2
    13 + 15 + 15 = 43 --> output 3
*/

var a = 1;
var b = 2;
var c;
var d;
c = ++b;
d = a++; //a=1; d=
c++;
b++;
++a;
console.log(a + " " + b + " " + c);

// var sum = sum + a // sum += a
// var diff = diff - a // diff -= a
// var mul = mul * a // mul *= a

console.log(typeof(String(true)))
console.log(typeof(String(-10.55)))

console.log(typeof(Number('5')))
console.log(typeof(Number(false)))

console.log(Boolean(-10))


var obj = {
    'name': 'Sourav',
    'designation': 'Instructor',
    'institute' : 'Edyoda',
    'batch' : 'FSR311022B',
    'workingFromYears': 1.5,
    'sessionCount': 155
}

obj.institute = 'Edyoda Digital University'
obj.workingFromYears = 1.3

delete obj.sessionCount
console.log(obj)

// Alternatives for creating objects
var newObj = new Object()
newObj.name= 'Naruto'
newObj.genere = 'Anime'
newObj.seasons = 2
newObj.noOfEpisodes = 720

console.log(newObj)

var obj1 = Object.create({
    name: 'Hunter x Hunter',
    seasons: 1,
    episode: '100+'
})

console.log(obj1)

// -----------------------------------

console.log(Object.keys(newObj))

console.log(Object.values(obj))

