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


// const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi', 'strawberry'];

// let ol = document.querySelector('ol')

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

// let input = document.querySelector('input')
// let ul = document.querySelector('ul')


// function addTask(){
//     if (input.value === ""){
//         alert('Enter YOur Task')
//     }else {
//         let myTask = [];
//         myTask = input.value
//         console.log(myTask);
//         ul.innerHTML += `<li>${myTask}</li>`
//     }
//     input.value = ''
// }

// let userName = "Haseeb Ur Rehman"
// alert(userName)

// var num = 1;
// var newNum = num++
// console.log(newNum);
// console.log(num);

// var num = 1;
// var newNum = ++num
// console.log(newNum);

// let num = 1;
// let newNum = num--
// console.log(newNum);
// console.log(num);


// phala braket wali value solve hoe
// var resultOfComputation = (2 * 4) * 4 + 2;
// console.log(resultOfComputation);


// var resultOfComputation = ((2 * 4) * 4) + 2;
// console.log(resultOfComputation);

// let message = "Thanks fro come to my website!"
// alert(message)

// var question = "Your species?";
// var defaultAnswer = "human";
// var spec = prompt(question, defaultAnswer);

// ==> plus laga na Sa string number ma convert ho jata ha

// var numberOfCats = prompt("How many cats?");
// var tooManyCats = numberOfCats + 1;
// console.log(tooManyCats);

// var x = prompt('Where are you live!');
// var y = 'kacrahi'
// if (x == 'karachi'){
//     alert('Correct')
// }else{
//     alert('wrong address')
// }


// var correctAnswer = "Vatican";
// if (x === correctAnswer) {
//     score++;
//     userIQ = "genius";
//     alert("Correct!");
// }


// let yourTicketNumber = 487208
// let x = +prompt('Enter Tickets Number')
// if (yourTicketNumber !== 487208) {
//     alert("Better luck next time.");
// }


// let fruits = ['apple' , 'banana' , 'orange'];
// fruits.splice(1 , 1, 'hasseeb')
// console.log(fruits);

// fruits.slice()

// let tableNumber = +prompt('Enter Your Value!')

// for (let i = 1; i <= 100; i++){
//     // console.log(`${i} x ${i} = ${tableNumber*i}`);
//     console.log(i);
//     for(let j = 1; j <= 10; j++){
//         console.log(`${i} x ${j} = ${j*i}`);
//     }
// }


// let arr = ['Haseeb', 'Javad', 'Asad bhai']
// let ul = document.querySelector('ul');

// for(let i = 0; i < arr.length; i++){
//     ul.innerHTML += `<li>
//     ${arr[i]}
//     </li>` 
// }

// let softwere = ['Illustartor', 'Photoshop', 'figma', 'indesgin']

// // softwere.push('figma');
// // softwere.pop('')

// // softwere.unshift('Haseeb');
// // softwere.shift('')

// // softwere.splice(1 , 2, 'haseeb ur rehman')

// let cut = softwere.slice()
// console.log(cut);

// console.log(softwere);

// console.log(softwere);

// let sum = 14;

// if (sum !== 20){
//     console.log('win');
// }else {
//     console.log('lose');
// }


// let h1 = document.querySelector('h1');
// let input = document.querySelector('input')
// let cities = ['karachi', 'islamabad', 'lahore', 'peshawer'];

// function check(){
//     if(cities.includes(input.value)){
//         console.log('you are live in safest city Bro?');
//         h1.innerHTML += 'you are live in safest city Bro?'
//     }else {
//         console.log('BHai life jhand ha');
//         h1.innerHTML += 'BHai life jhand ha'
//     }
//     input.value = ''
// }

// let haseeb = 'john appleseed';
// let khan = haseeb.slice(5, 10)

// console.log(khan);


// 1. Write a program to display the message “Hello World” 5 times
// in your browser using for loop.

// for(let i = 0; i <= 5; i++){
//     console.log('Hello World');
// }

// 2. Write a program to print numeric counting from 1 to 10.

// for(let i = 0; i <= 10; i++){
//     console.log(i);
// }

// 3. Write a program to print multiplication table of any number
// using for loop. Table number & length should be taken as an
// input from user


// let number = +prompt('Enter Table Number!');
// let length = +prompt('Enter Table Lenght!');

// for(let number = length; number <= length; number++){
//     console.log(number);
//     for(let j = 1; j < length; j++){
//         console.log(`${number} x ${j} = ${number*j}`);
//     }
// }

let number = +prompt('Enter Your Table Number');
let length = +prompt('How many Times Do you want?');

for(let number = length; number <= length; number++){
    for(let j = 1; j <= length; j++){
    console.log(`${number} x ${j} = ${number*j}`);
    }
}

for(let i = 0; i < 10; i++){
    console.log(i);
}











































