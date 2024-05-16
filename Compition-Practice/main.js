// 1. Write a program to display the message “Hello World” 5 times
// in your browser using for loop.

// for(let i = 0; i < 5; i++){
//     console.log('hello Worlds');
// }

// 2. Write a program to print numeric counting from 1 to 10.

// for(let i = 1; i <= 10; i++){
//     console.log(i);
// }

// 3. Write a program to print multiplication table of any number
// using for loop. Table number & length should be taken as an
// input from user

// let tableNumber = +prompt('Enter Table Number');
// let times = +prompt('Which time do you want!')

// for(let i = 1; i <= times; i++){
//     console.log(`${tableNumber} x ${i} = ${i*tableNumber}`);
// }

// . You have an array
// A = [“Nokia”, “Samsung”, “Apple”, “Sony”, “Huawei”]
// Write each element on new line with the help of for loop.

// let A = ['Nokia', 'Samsung', 'Apple', 'Sony', 'Huawei']

// for(let i = 0; i <= A.length; i++){
//     console.log(`${i} ${A[i]}`);
// }

// 5. Write a program to print items of the following array using for
// loop:

// let fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry']

// for(let i = 0; i < fruits.length; i++){
//     console.log(`Eelement index ${i} of ${fruits[i]}`);
// }


// 6. Write a program to initialize an array of N items by using
// prompt. Where N is number of items as entered by the user.

// let time = +prompt('How many items do you need!')
// console.log(`Number of items ${time}`);

// for(let i = 0; i < time; i++){
//     console.log(prompt('enter items name'));
// }

// let N = +prompt("Enter the number of items:");
// let array = [];
// for (let i = 0; i < N; i++) {
// let item = prompt("Enter item " + (i+1) + ":");
// array.push(item);
// document.write(`${array[i]},</br>`)
// }
// console.log(array);

// 7. Generate the following series in your browser. See example
// output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// for(let i = 1; i <= 10; i++){
//     console.log(i);
// }

// for(let i = 10; i >= 1; i--){
//     console.log(i);
// }

// for(let i = 0; i < 10; i++){
//     console.log(i*2+1);
// }

// for(let i = 0; i <+ 20; i += 2){
//     console.log(i + "k");
// }


// 8. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example

// let userInput = prompt('What do you want!')
// let bakery = ['cake', 'apple pie', 'cookie', 'chips', 'patties']
// let isAvailable = false

// for(let i = 0; i < bakery.length; i++){
//     if(userInput === bakery[i]){
//         console.log('Its Available')
//         isAvailable = true
//     }
// }
// if (!isAvailable){
//     console.log('Its Not Available');
// }


// 9. Write a program to identify the largest number in the given
// array.

// let a = [24, 53, 78, 91, 12];
// let b = Math.max(...a)
// console.log(`THIS IS LARGEST NUMBER :${b}`);

// 10. Write a program to identify the smallest number in the given
// array.

// let a = [24, 53, 78, 91, 12]
// let b = Math.min(...a)
// console.log(`THIS IS SMALLES NUMBER :${b}`);


// 11. Write a program to identify the largest & the smallest
// number in the given array.

let a = [24, 53, 78, 91, 12]

let b = Math.max(...a)
let c = Math.min(...a)

console.log(`THIS IS LARGEST NUMBER :${b} <br />
THIS IS SMALLEST NUMBER : ${c}
`);