// let userNumber = +prompt('Enter Your Number?')
// console.log(userNumber);

// if (userNumber % 3 === 0){
//     console.log('This number is divisible by 3');
// }else {
//     console.log('This number is not divisible by 3');
// }

// let age = +prompt('please! Enter Your Age Here.')

// if (age <= 18){
//     console.log('Too Young');
// }else {
//     console.log('Old Enough');
// }

// let userName = prompt('Enter Your Name?')

// if(userName == "Haseeb"){
//     console.log("Hello, Haseeb! It's great to see you again!");
// }else {
//     console.log("Do nothing if the name entered is not 'Haseeb' ");
// }

// let userPassword = prompt('Enter Your Password')

// if (userPassword == "12345678"){
//     console.log('Corret Password');
// }else {
//     console.log('Incorret');
// }

// let mathNumber = prompt('Enter Your Math Number?')
// let englishNumber = prompt('Enter Your English Number?')
// let urduNumber = prompt('Enter Your Urdu Number?')
// let ComNumber = prompt('Enter Your Computer Number?')
// let totalNumber = 400;

// const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi', 'strawberry'];

// let ol = document.querySelector('ol')

// function myfun(){
//     ol.innerHTML = ' '
//     for (let i = 0; i <= fruits.length; i++){
//         ol.innerHTML += `<li>${fruits[i]}</li>`
//     }
// }


const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi', 'strawberry'];

let ol = document.querySelector('ol')

// function myfun(){
//     ol.innerHTML = ''
//     let i = 0;
//     while(i < fruits.length){
//         ol.innerHTML += `<li>${fruits[i]}</li>` 
//         i++
//     }
// }


// FOR LOOP

// for (let i = 1; i <= 10; i++){
//     console.log(i);
// }

// WHILE LOOP

// function myfun(){
//     ol.innerHTML = ' '
//     let i = 0;
//     while(i < fruits.length){
//         ol.innerHTML += `<li>${fruits[i]}</li>`
//         i++
//     }
// }

// DO WHILE LOOP

// let i = 1;
// do{
//     console.log('do while loop ==>',i )
//     i++
// }while (i <= 10){

// }

let input = document.querySelector('input')
let head = document.querySelector('h2')
let ul = document.querySelector('ul')
function addTask() {
    input.value = ""
    if (input.value === '') {
        alert('Enter Your Task!')
    }else {
        ul.innerHTML += <li>input.value</li>
    }
}






















































