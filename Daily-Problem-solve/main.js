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
// let ul = document.querySelector('ul')

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

// let table = +prompt('enter your table number')
// let length = +prompt('enter table number')

// for(let i = 1; i <= length; i++){
//     console.log(`${table} x ${i} = ${table*i}`);
// }

// 1. Write a program to check whether the given input number is
// divisible by 3 or else show a message “Number is not divisible
// by 3”.

// let number = 12

// if(number % 3 === 0){
//     console.log('THIS NUMBER IS DIVISBLE BY 3');
// }else {
//     console.log('number is not divisible by 3');
// }

// 2. Write a program that checks whether the given input is an even
// number or an odd number

// let number = 10;

// if (number % 2 === 0 ){
//     console.log('this is even number');
// }else {
//     console.log('This is odd number');
// }


// 3. Write an if/else statement with the following condition:
// If the variable age is greater than 18, output "Old enough",
// otherwise output "Too young".


// let age = 18;

// if (age > 18){
//     console.log('Old enough');
// }else {
//     console.log('Too young');
// }


// 4. Write a program that prompts the user for their name, and then
// displays a special greeting to that person if their name is the
// same as yours. If the name entered by the user is anything
// other than your name, your code should not produce any
// output.


let usnerName = 'Haseeb Ur Rehman'

if (usnerName === 'Haseeb Ur Rehman') {
    console.log('thanks haseeb for your joing');
} else {
    console.log('you are not haseeb');
}


let fruits = ['apple', 'banana', 'graps', 'watermelon', 'khubani']
let ul = document.querySelector('ul')

function renderItem() {
    ul.innerHTML = ''
    for (let i = 0; i < fruits.length; i++) {
        // console.log(fruits[i]);
        ul.innerHTML += `
        <li>${fruits[i]} <button onclick='deleteBtn(${i})'>delete</button></li>
        `
    }
}
// renderItem()

function deleteBtn(i) {
    ul.innerHTML = ''
    fruits.splice(1, i)
    renderItem()
}


let h1 = document.querySelector('h1')
let input = document.querySelector('input')
let form = document.querySelector('form')

let cites = ['karachi', 'lahore', 'islamabad', 'peshawer']

form.addEventListener('submit', event => {
    event.preventDefault()
    if (cites.includes(input.value.toLocaleLowerCase())) {
        console.log('you are live in safest city');
        h1.innerHTML = 'you are live in safest city'
    } else {
        console.log('zindagi jhand ha bhai');
        h1.innerHTML = 'Zindagi jhand ha bhai'
        console.log(input.value.toLocaleLowerCase());
    }
    input.value = ''
})



function renderScreen() {
    ul.innerHTML = ''
    for (let i = 0; i < cites.length; i++) {
        // console.log(cites[i]);
        ul.innerHTML += `
        <li>${cites[i]} <button onclick='deleteBTN(${i})'> DELETE</button></li>
        `
    }
}
renderScreen()

function deleteBTN(index) {
    cites.splice(1, index)
    renderScreen()
}