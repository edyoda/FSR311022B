// console.log(window)
// var name = 'Rahul'
// var obj = {
//     name: 'Ajay',
//     institute: 'Edyoda',
//     courseName: 'MERN',
//     getName: function(){
//         console.log(this.name)
//     }
// }

// obj.getName()

function Details(name, age, course){
    this.name = name
    this.age = age
    this.courseName = course
    this.getName = function(){
        console.log(this.name)
    }
    this.getAge = function(){
        console.log(this.age)
    }
    this.getCourseName = function(){
        console.log(this.courseName)
    }
}

function Person(name, age, dob, location){
    this.userName = name
    this.userAge = age
    this.userDoB = dob
    this.userLocation = location
    this.getInfo = function(){
        console.log(this.userName, this.userAge, this.userDoB, this.userLocation)
    }
}

var stud1 = new Details('Sourav', 22, 'MERN')
var stud2 = new Details('Pawan', 25, 'Angular')
stud1.getCourseName()
stud2.getName()

console.log(stud1)

var person1 = new Person('Akshay', 56, '01/01/1967', 'Mumbai')
person1.getInfo()

var arr = [1,2,3,4,5]
console.log(arr)


var person = {
    name: 'Sourabh',
    age: 25,
    dob: '01/01/1998',
    location: 'Chennai'
}

var gender = {
    genderOfPerson: 'male'
}

gender.__proto__ = person

console.log(gender)

console.log(gender.name)

console.log(gender.location)