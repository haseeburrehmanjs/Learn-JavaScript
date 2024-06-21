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

let arr = [1, 2, 3, 4, 45, 54, 656, 576, 76, 8, 68,]
let arr2 = [32, 345, 46, 546, 547, 6867, 8, 67, 45, 32]

let arr3 = [...arr, ...arr2] // ak sath mearg krna ka liya 
// console.log(arr3);

let obj1 = {
    first: '1',
    last: '2',
    end: '3'
}

let obj2 = {
    ...obj1, // spread Operator 
    lname: 'haseeb ur rehman'
}

// console.log(obj2);
// hoisting 

// Normal Func || Traditinal Func 
function abc() {
    console.log('hello world');
}
// abc()

// Function of Expression
let foo = function () {
    console.log('haseeb');
}
// foo()

// Arrow of function 
let ab = (a, b) => {
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

function checkVowels() {
    for (let i = 0; i < vowels.length; i++) {
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


let maxNumber = [21, 121, 2312, 3213, 213, 13212, 1, 212, 1]

function max() {
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

function palindrome() {
    for (let i = 0; i < userName.length; i++) {
        let check = userName.split('')
        console.log(check[i]);
        let checkAgain = check.reverse(userName[i])
        if (checkAgain === beesah) {
            console.log('this is palindrome');
        } else {
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

// color.map((items,index)=> {
//     colorDiv.innerHTML += `
//     <h1>${items}</h1>
//     `
//     console.log(index);
//     console.log(items);
// })

// regex 

// regular experssion are pattern use to match charactor combination in javascript. regular experssion are also object


const products = [
    // Electronics
    {
        name: "Wireless Mouse",
        price: 25.99,
        category: "Electronics",
        brand: "Logitech"
    },
    {
        name: "Smartphone",
        price: 699.99,
        category: "Electronics",
        brand: "Samsung"
    },
    {
        name: "LED Monitor",
        price: 129.99,
        category: "Electronics",
        brand: "Dell"
    },
    {
        name: "Bluetooth Speaker",
        price: 45.99,
        category: "Electronics",
        brand: "JBL"
    },
    {
        name: "Laptop",
        price: 999.99,
        category: "Electronics",
        brand: "Apple"
    },

    // Footwear
    {
        name: "Running Shoes",
        price: 59.99,
        category: "Footwear",
        brand: "Nike"
    },
    {
        name: "Sneakers",
        price: 75.99,
        category: "Footwear",
        brand: "Adidas"
    },
    {
        name: "Sandals",
        price: 25.99,
        category: "Footwear",
        brand: "Teva"
    },
    {
        name: "Formal Shoes",
        price: 120.00,
        category: "Footwear",
        brand: "Clarks"
    },
    {
        name: "Boots",
        price: 150.00,
        category: "Footwear",
        brand: "Timberland"
    },

    // Home Appliances
    {
        name: "Blender",
        price: 34.99,
        category: "Home Appliances",
        brand: "Oster"
    },
    {
        name: "Microwave Oven",
        price: 99.99,
        category: "Home Appliances",
        brand: "Panasonic"
    },
    {
        name: "Air Conditioner",
        price: 299.99,
        category: "Home Appliances",
        brand: "LG"
    },
    {
        name: "Vacuum Cleaner",
        price: 149.99,
        category: "Home Appliances",
        brand: "Dyson"
    },
    {
        name: "Toaster",
        price: 29.99,
        category: "Home Appliances",
        brand: "Breville"
    },

    // Stationery
    {
        name: "Notebook",
        price: 3.99,
        category: "Stationery",
        brand: "Moleskine"
    },
    {
        name: "Pen Set",
        price: 12.99,
        category: "Stationery",
        brand: "Parker"
    },
    {
        name: "Highlighters",
        price: 5.99,
        category: "Stationery",
        brand: "Sharpie"
    },
    {
        name: "Stapler",
        price: 7.99,
        category: "Stationery",
        brand: "Swingline"
    },
    {
        name: "Planner",
        price: 14.99,
        category: "Stationery",
        brand: "Erin Condren"
    },

    // Furniture
    {
        name: "Desk Chair",
        price: 89.99,
        category: "Furniture",
        brand: "Ikea"
    },
    {
        name: "Coffee Table",
        price: 129.99,
        category: "Furniture",
        brand: "West Elm"
    },
    {
        name: "Sofa",
        price: 499.99,
        category: "Furniture",
        brand: "Ashley Furniture"
    },
    {
        name: "Bookshelf",
        price: 79.99,
        category: "Furniture",
        brand: "Sauder"
    },
    {
        name: "Dining Table",
        price: 399.99,
        category: "Furniture",
        brand: "Pottery Barn"
    },

    // Fitness
    {
        name: "Yoga Mat",
        price: 19.99,
        category: "Fitness",
        brand: "Gaiam"
    },
    {
        name: "Dumbbells",
        price: 49.99,
        category: "Fitness",
        brand: "Bowflex"
    },
    {
        name: "Treadmill",
        price: 699.99,
        category: "Fitness",
        brand: "NordicTrack"
    },
    {
        name: "Resistance Bands",
        price: 14.99,
        category: "Fitness",
        brand: "Fit Simplify"
    },
    {
        name: "Exercise Bike",
        price: 299.99,
        category: "Fitness",
        brand: "Peloton"
    },

    // Kitchen Appliances
    {
        name: "Coffee Maker",
        price: 49.99,
        category: "Kitchen Appliances",
        brand: "Keurig"
    },
    {
        name: "Air Fryer",
        price: 89.99,
        category: "Kitchen Appliances",
        brand: "Ninja"
    },
    {
        name: "Stand Mixer",
        price: 199.99,
        category: "Kitchen Appliances",
        brand: "KitchenAid"
    },
    {
        name: "Refrigerator",
        price: 799.99,
        category: "Kitchen Appliances",
        brand: "Whirlpool"
    },
    {
        name: "Dishwasher",
        price: 399.99,
        category: "Kitchen Appliances",
        brand: "Bosch"
    }
];

// let total = products.reduce((accumulator , initialvalue)=> {
//     return accumulator + initialvalue.price
// }, 0)

// console.log(Math.round(total));


// let totalCost = products.map(item => {
//     console.log(item.price).reduce((accumolator, initialvalu) => {
//         return accumolator.price + in
//     }) 
// })


// function greetUsere(username, lastname, age) {
//     console.log('hello ' + username + lastname + age);
// }

// greetUsere('abdullah', 'khan', 20)



// function greetUser(username, lastname, age) {
//     console.log('hello ', username, lastname, age);
// }

// greetUser('abdullah', 'khan', 20)


// line no 254 ka console ma usernames ki jaga undefined araha ha abdullah ka bajay Q ka yaha pa mujha function kuch return nahi kraha 

// let student = function(username){
//     console.log(username);
//     return username
// }
// console.log(student('haseeb'));



// return ka ander ap jo chez bhi likhta ho wo scope ka bahar wala console ma show hoti ha

// let jawadUsersjj = function (user1) {
//     console.log('hello ' + user1);
//     return 'hellow' + user1
// }
// console.log(jawadUsersjj('jawad'));


// var userss = jawadUsersjj('abdullah');
// console.log("username=>", userss);


// variable function ka just uper bhi bansakhta ha 

// var uservalue = jawadUsersgg('abdullah');

// // function jawadUsersgg(user2) {
// //     console.log('hello ' + user2);
// //     return 'jawad' + user2
// // }

// console.log("username=>", uservalue);


// var total = user('haseeb','khalid')
// console.log(`total ${total}`);

// console.log(user);

// let user = function (user,user2){
//     console.log(user + ' ' +user2);
//     return user + ' ' + user2
// }

// console.log(user1);
// user('jawad' , 'haseeb')
// console.log(user('ahmed', 'haseeb'));


// or variable function ka just nicha  bhi bansakhta ha 

// function jawadUsersww(user3, user4) {
//     console.log('hello ' + user3 + user4);
//     // return 'jawad' + user3
//     return 'jawad ' + user3 + user4  
// }

// var usernames = jawadUsersww('abdullah',' haseeb');
// console.log("!username=> ", usernames);





// function jawadUsers(user5, user6) {
//     console.log('hello ' + user5 + user6);
//     return 'jawad ' + user5 + user6
// }

// var usernames = jawadUsers('abdullah ', "hasnain");
// console.log("username!=> ", usernames);





// function sum(physics , maths) {
//     console.log(physics , maths);
// }
// sum(50 , 48)



// let find = 'true' + 'true'
// let fine2 = find + 'true'

// console.log(fine2);


// let a = [1,2,3]
// a[10] = 4

// console.log(a);


// let student = ['photoshop', 'figma', 'ilustrator', 'vs code', 'javascript']
// let total = student.slic(0,1)
// console.log(total);

axios('https://fakestoreapi.com/products')
.then(responce => {
    console.log(responce);
})
.catch(error => {
    console.log(error);
})