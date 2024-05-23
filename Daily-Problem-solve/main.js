// DATE 5/18/2024

// 1. Write a program to check whether the given input number is
// divisible by 3 or else show a message “Number is not divisible
// by 3”

// let UserInput = prompt('Enter your Number!')

// if(UserInput % 3 === 0){
//     console.log('THIS NUMBER IS DIVISBLE BYE 3');
// }else {
//     console.log('ITS NOT DIVISIBLE BY 3');
// }

// 2. Write a program that checks whether the given input is an even
// number or an odd number.

// let oddNumber = +prompt('ENTER YOUR NUMBER');

// if(oddNumber % 2 === 0){
//     console.log('THIS IS NOT ODD NUMBER');
// }else{
//     console.log('THIS IS ODD NUMBER!');
// }

// 3. Write an if/else statement with the following condition:
// If the variable age is greater than 18, output "Old enough",
// otherwise output "Too young".

// let age = +prompt('Enter your Age')

// if(age > 18){
//     console.log('Old enough');
// }else{
//     console.log('Too young');
// }

// 8. Declare and Initialize an array and store available education
// qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS,
// M. Phil., PhD). Show the listed qualifications in your browser
// like:


// let education = [];
let ul = document.querySelector('ul')

// for(let i = 0; i < 5; i++){
//     education.push(prompt('Enter Education do you want'))
//     ul.innerHTML += `
//     <li>${education[i]}</li>
//     `
// }
// console.log(education);


// 9. Declare and initialize an empty array to store top movies of
// 2015. Add movies one by one in an array. Display the elements
// & length of array in your browser. (Use array’s length method)

// let famousMovie = []

// for(let i = 0; i < 5; i++){
//     famousMovie.push(prompt('ENTER MOVIE NAME!'))
//     ul.innerHTML += `
//     <li>${famousMovie[i]}</li>
//     `
// }
// console.log(famousMovie);

// 1. Write a program to display the message “Hello World” 5 times
// in your browser using for loop.

// for(let i = 0; i < 5; i++){
//     console.log('HELLO WORLD');
// }


// 2. Write a program to print numeric counting from 1 to 10.

// for(let i = 1; i <= 10; i++){
//     console.log(i);
// }



// 3. Write a program to print multiplication table of any number
// using for loop. Table number & length should be taken as an
// input from user.

let table = +prompt('enter your table number')
let length = +prompt('enter table number')

for(let i = 1; i <= length; i++){
    console.log(`${table} x ${i} = ${table*i}`);
}