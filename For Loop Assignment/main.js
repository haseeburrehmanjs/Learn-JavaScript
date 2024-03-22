// 1. Write a program to display the message “Hello World” 5 times
// in your browser using for loop.

// let message = "Hello World"
// for(let i = 1; i <= 5; i++)[
//     console.log(message);
// ]

// 2. Write a program to print numeric counting from 1 to 10.

// for (let i = 1; i <= 10; i++){
//     console.log(i);
// }

// 3. Write a program to print multiplication table of any number
// using for loop. Table number & length should be taken as an
// input from user.

// let number = +prompt('Enter Your Table Number');
// let length = +prompt('How many Times Do you want?');

// for(let number = length; number <= length; number++){
//     for(let j = 1; j <= length; j++){
//     console.log(`${number} x ${j} = ${number*j}`);
//     }
// }

// 4. You have an array
// A = [“Nokia”, “Samsung”, “Apple”, “Sony”, “Huawei”]
// Write each element on new line with the help of for loop

// let MobileName = ['Nokia', 'Oppo', 'Samsung', 'Tecno']
// let ul = document.querySelector('ul')

// for (let i = 0; i < MobileName.length; i++){
//     ul.innerHTML += `<li>${MobileName[i]}</li>`
// }

// 5.Write a program to print items of the following array using for
// loop:

fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry']

let ul = document.querySelector('#orderlist');
let para = document.querySelector('#orderlist')

for (let i = 0; i < fruits.length; i++) {
    ul.innerHTML += `<li>Element at index ${i} ${fruits[i]}</li>`
}
