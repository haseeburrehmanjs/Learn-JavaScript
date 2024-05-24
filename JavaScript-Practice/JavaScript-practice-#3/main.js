// create Element ===>  for craete html element in javascript.
// AppendChild ===>  for create text in html element.


// function createlist(){
//     let ul = document.createElement('UL');
//     let li = document.createElement('li');
//     let li1Text = document.createElement('JavaScript')
//     li.appendChild(li1text);
//     l
// }

// const div = document.querySelector("div");

// let p = document.createElement("p");
// let text =  document.createTextNode("Hello Javascript and DOM Manipulation");
// p.setAttribute('onclick' , 'myFunct()')
// p.appendChild(text);
// console.log(div.appendChild(p));
// let items = document.getElementsByClassName('list-items')
// console.log(items[1].textContent = 'Haseeb');

// console.log(document.childNodes[0]);


// const arr = ['saad', 'ali', 'rehman']

// arr = ['osama', 'taha', 'jalal'] // Assginment to constant variabale.

// arr[0] = 'haseeb' // ya change ho jai ga pori array change nahi kr raha hum sirf ara ki value change kr raha hain 

// console.log(arr);

// const obj = {
//     fname : 'haseeb',
//     lname : 'Rehman'
// }

// obj.fname = 'Kamran'

// console.log(obj);

// obj = {
//     fname : 'shanto',
//     lname : 'ali gul pir'
// }
// console.log(obj);


// ... agr funcation ka under hon to! ===> Rest Operator

// ... obj, array , array of object ===> Spread Operator

let arr = [1,2,3,4,45,54,656,576,76,8,68,]
let arr2 = [32,345,46,546,547,6867,8,67,45,32]

let arr3 = [...arr, ...arr2] // ak sath mearg krna ka liya 
// console.log(arr3);

let obj1 = {
    first : '1',
    last : '2',
    end : '3'
}

let obj2 = {
    ...obj1, // spread Operator 
    lname : 'haseeb ur rehman'
}

// console.log(obj2);
// hoisting 

// Normal Func || Traditinal Func 
function abc(){
    console.log('hello world');
}
// abc()

// Function of Expression
let foo = function(){
    console.log('haseeb');
}
// foo()

// Arrow of function 
let ab = (a,b) => {
    console.log(a + b);
}

// ab('haseeb','kamran')


// let number1 = [1,23,1234,24,354,45,45];
// let number2 = [123,213,123,213,123,213,];

// console.log(abc);

// var abc = 'haseeb'

// const abcd = ['haseeb','saad', 'jawad']

// abcd[1] = 'khan'

// console.log(abcd[1]);

// Switch Case 

let DayOfWeek = 'kjhas';

// switch(DayOfWeek){
//     case 'Sun':
//         console.log('kam ki chuti ha bhai')
//         break
//     case 'sat':
//         console.log('bhai aj jana ha')   
//         break 
//     case 'mon':
//         console.log('kam kro bhai'); 
//         break
//     default :
//         console.log('bhai pagl ha kiya');
// }


// let number = 3

// if(number % 3 === 0){
//     alert('Number is Divible by 3')
// }else {
//     alert('This Number is Not divisble by 3')
// }

// let number = +prompt('Enter Number')

// if(number % 2 == 0){
//     alert('This is Even Number!')
// }else{
//     alert('This is odd number')
// }

// let YourAge = +prompt('Enter Your Age!')

// if(YourAge > 18){
//     alert('OLD ENOUGH')
// }else{
//     alert('Too Young')
// }

// let UserName = prompt('Enter your Password!')

// if(UserName === 'haseeb'){
//     alert('You Are Login')
// }else{
//     alert('Your Password encorrect')
// }

// let UserName = prompt('Enter your Name')

// if(UserName === 'haseeb'){
//     alert('You Are haseeb')
// }else{
//     alert('You are not haseeb')
// }

// let num1 = prompt()

// alert(typeof(num1))
// alert(typeof(num1))
// alert(typeof(num1))


// let UserName = 'haseeburrehman'

// console.log(UserName.slice(5,6));

// LEARN TERNAY OPERATOE

let age = 18;
// let drive = age >= 20 ? 'Too YOungh' : 'Old enough'
// console.log(drive);


// let HoliDays = 'sunday'
// let check = HoliDays === 'sunday' ? 'Today OFF' : 'Today ON'
// console.log(check);

// Write a function that takes a string as input and
// returns the number of vowels (a, e, i, o, u) in the
// string using a loop

// let UserName = prompt('Enter your Name!')
// let vowels = ['a', 'e', 'i', 'o', 'u']

// let split = UserName.split('')

// let check = vowels.find(split);
// console.log(check);


// STRING METHOD

// .lenght;
// .concat
// .split
// .reverse


// let JavaScript = 'Javascript is great language'
// let HTML = 'Hipper Text Markup language'
// let a = JavaScript.split(' ');

// console.log(a);

// let number1 = [213,231,321,312,313,231,13]
// let number2 = [121,3212,3213,1313,21,123,231,23]
// let number3 = [...number1,...number2]
// let totlaLenght = number3.join()

// console.log(totlaLenght);


// Write a function that takes a string as input and
// returns the number of vowels (a, e, i, o, u) in the
// string using a loop.

let UserName = 'aeiou'
let vowels = ['a', 'e', 'i', 'o', 'u']

function checkVowels(){
    for(let i = 0; i < vowels.length; i++){
        console.log(vowels[i]);
        // console.log(UserName[i]);
        let check = vowels.includes(UserName[i])
        console.log(check);
    }
}
// checkVowels()


// Write a function that takes an array of numbers
// as input and returns the maximum number in the
// array using a loop.


let maxNumber = [21,121,2312,3213,213,13212,1,212,1]

function max(){
    let check = Math.max(...maxNumber)
    console.log(check);
}
// max()

// Write a function that takes a string as input and
// returns whether the string is a palindrome or not
// using a loop. A palindrome is a word, phrase,
// number, or other sequence of characters that
// reads the same forward and backward. like
// “level” “madam”

let userName = 'haseeb'
let condition = true

function palindrome(){
    for(let i = 0; i < userName.length; i++){
        let check = userName.split('')
        console.log(check[i]);
        let checkAgain = check.reverse(userName[i])
        if(checkAgain === beesah){
            console.log('this is palindrome');
        }else{
            console.log('this is not palindrome');
        }
    }
}
// palindrome()



// Given an array of colors, write JavaScript code
// to create HTML elements (e.g., divs) with each
// color from the array assigned as the
// background color of each respective element
// using DOM manipulation.
// Example 


// let color = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'brown']

let colorDiv = document.querySelector('#color')

// function colorBox(){
//     for(let i = 0; i < color.length; i++){
//         console.log(color[i]);
//         colorDiv.innerHTML += `
//         <div>
//         ${color[i]}
//         </div>
//         `
//     }
// }

// colorBox()

// callback === >
// koi bhi function apna under as an argument function la ussa callback function khata hain

// .Map
// .filter
// .reduce



let color = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'brown']

// color.forEach((items) => {
//     console.log(items);
//     colorDiv.innerHTML += `
//     <h1>${items}</h1>
//     `
// })

color.map((items,index)=> {
    colorDiv.innerHTML += `
    <h1>${items}</h1>
    `
    console.log(index);
    console.log(items);
})

// regex 

// regular experssion are pattern use to match charactor combination in javascript. regular experssion are also object