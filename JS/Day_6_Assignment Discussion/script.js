console.clear();

// Question 1:
// var str1 = 'Today is';
// var str2 = '      a beautiful day     '
// var str3 = ' In Hawaii.     '
// Result = 'Today is a beautiful day In Hawaii.'
// Use the str1, str2, str3 variables to create the Result string. Keep the extra spaces, lowercase and uppercase letters in mind.

// var str1 = 'Today is';
// var str2 = '      a beautiful day     '
// var str3 = ' In Hawaii.     '

// var res = str1 + ' ' + str2.trim() + str3.trimEnd()
// console.log(res)

// console.log("Q1 END =====================")

// Question 2:
// var enteredAlphabet = 'd' or "D"
// Write a program to check vowel, consonant or non-alphabet using switch case. Change value of enteredAlphabet and check if your code works fine.

// alert('Hello there')
// confirm('Are you sure you want to leave')
// var input = prompt('Enter an character')

// switch(true){
//   case input == 'a':
//   case input == 'e':
//   case input == 'i':
//   case input == 'o':
//   case input == 'u':
//   case input == 'A':
//   case input == 'E':
//   case input == 'I':
//   case input == 'O':
//   case input == 'U': console.log('Vowel'); break;
//   case !((input>='A' && input<='Z') || (input>='a' && input<='z')): console.log('Non Alphabet'); break;
//   default: console.log('Consonent')
// }


// console.log("Q2 END =====================")

// Question 3:
// Write a JavaScript program to create menu driven calculator that performs basic arithmetic operations (add, subtract, multiply and divide) using switch case. The calculator should input two numbers and an operator: +, -, *, / from the user. It should perform operation according to the operator entered and must take input in given format.

// var val1 = Number(prompt('Enter first value'))
// var val2 = Number(prompt('Enter second value'))
// var operator = prompt('Enter the operator (+, -, *, /)')

// switch(operator){
//   case '+' : console.log(val1 + val2); break;
//   case '-' : console.log(val1 - val2); break;
//   case '*' : console.log(val1 * val2); break;
//   case '/' : console.log(val1 / val2); break;
//   default: console.log('Invalid Operator')
// }

// var exp = prompt('Enter the complete expression with space')
// var values = exp.split(' ')
// console.log(values)
// var val1 = Number(values[0])
// var val2 = Number(values[2])
// switch(values[1]){
//   case '+' : console.log(val1 + val2); break;
//   case '-' : console.log(val1 - val2); break;
//   case '*' : console.log(val1 * val2); break;
//   case '/' : console.log(val1 / val2); break;
//   default: console.log('Invalid Operator')
// }


// console.log("Q3 END =====================")


// Question 4:
// Write a JavaScript program to input sides of a triangle and check whether a triangle is equilateral, scalene or isosceles triangle using if else.
// Properties of triangle:
// A triangle is said Equilateral Triangle, if all its sides are equal. If a, b, c are three sides of triangle. Then, the triangle is equilateral only if a == b == c.
// A triangle is said Isosceles Triangle, if its two sides are equal. If a, b, c are three sides of triangle. Then, the triangle is isosceles if either a == b or a == c or b == c.
// A triangle is said Scalene Triangle, if none of its sides are equal.

// var side1 = Number(prompt('Enter value of side 1'))
// var side2 = Number(prompt('Enter value of side 2'))
// var side3 = Number(prompt('Enter value of side 3'))

// if(side1 == side2 && side2 == side3){
//   console.log('Equilateral Triangle')
// }
// else if(side1 == side2 || side2 == side3 || side3 == side1){
//   console.log('Isosceles Triangle')
// }
// else{
//   console.log('Scalene Triangle')
// }


// console.log("Q4 END =====================")


// Question 5:
// Write a JavaScript program to input electricity unit charge and calculate the total electricity bill according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 100 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit. An additional surcharge of 20% is added to the bill.
// For example, input: 20 units then bill is Rs10
// Total Units: 300
// 50 * 0.5 = 25
// 100 * 0.75 = 75
// 100 * 1.2 = 120
// 50 * 1.5 = 75
// Total = 295 + 20% surcharge on 295
// Result = INR 354

// var unit = prompt('Enter Unit')
// if(unit > 250){
//   var finalAmount = 0;
//   finalAmount += 50 * 0.50
//   unit = unit - 50
//   finalAmount += 100 * 0.75
//   unit = unit - 100
//   finalAmount += 100 * 1.2
//   unit -= 100
//   finalAmount += unit * 1.5
//   finalAmount = finalAmount + 0.2 * finalAmount
//   console.log('Final Amount', finalAmount)
//   // finalAmount += 25 + 75 + 120 + ((unit - 250)*1.5)
//   // finalAmount = finalAmount + 0.2 * finalAmount
//   // console.log('Final Amount', finalAmount)
// }
// else{
//   var finalBill = 0
//   if(unit <= 50){
//     finalBill += unit * 0.50
//   }
//   else if(unit <= 150){
//     finalBill += 50 * 0.50
//     finalBill += (unit - 50) * 0.75
//   }
//   else if(unit <= 250){
//     finalBill += 50 * 0.50
//     finalBill += 100 * 0.75
//     finalBill += (unit - 150) * 1.2
    
//     // finalBill += 50*0.50 + 100*0.75 + (units-150)*1.2
//   }
//   console.log('Final Amount', finalBill)
// }
// console.log("Q5 END =====================")

// sum = sum + 10
// sum += 10