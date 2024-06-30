// Variables for Strings

let userName = 'Haseeb ur rehman'
console.log(userName);

//arithmetic operators
// +-*/

let num = 10
let num2 = num + 100
console.log(num2);

let multiply = 5;
let time = 56;

console.log(multiply * time);


// prompt 

// let userNumber = +prompt('please enter your number')
// console.log(userNumber);


// if Statement 

let number = 10

if (number > 9) {
    console.log('your number is under 10');
}

// if else 

let marks = 100

if (marks >= 100) {
    console.log('A1 Grade');
} else if (marks >= 50) {
    console.log('B Grade');
} else {
    console.log('your are fail');
}

let array = []

array.push('haseeb')
array.push('jawad') //last ma value add krna ka liya
array.push('khalid')

array.unshift('khan') // start ma value add krna ka liya

// array.pop() //last sa value hata ka liya 
// array.splice(0,1,'khan ha bhai')
// array.push('khan ha bhai')
// console.log(array);

// For loop
// 
let friends = ['haseeb', 'khalid', 'khan', 'farroq']

// for(let i = 0; i < friends.length; i++){
//     console.log(friends[i]);
// }


let firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
let lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
let empty = []

for (var i = 0; i < firstNames.length; i++) {
    for (var j = 0; j < lastNames.length; j++) {
        firstNames.push(firstNames[i] + lastNames[j]);
        console.log(empty[j]);
    }
}
