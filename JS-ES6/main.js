// Destructuring // ================== DONE
// Template literals // =============== DONE
// Default parameters // ============== DONE
// Rest parameter // ================== DONE
// Spread Operator // ================= DONE
// Ternary Operator // =============== DONE
// Arrow functions  // ================ DONE
// Promises  //p
// Variable Scoping // p
// Closure //p
// lexical scoping //p
// Modules //p
// Object Methods (keys,values,freez,entries)
// Exponentiation Operator // p
// Optional chaining //p
// Enhanced object literals //p
// Iterators & For..of  //p
// Map  //p
// Array methods  //p
// Higher-order function  //p
// CallBack  //p

// ================> Destructuring <==============

// OBJECT DESTRUCTURING
let user = {
    username: 'Haseeb Ur Rehman',
    education: 'Matric Pass',
    age: 17
}

let { username, education, age } = user
// console.log(username);

// let employee = {
//     name: 'Jawad Nadmeem',
//     sallary: 50000,
//     employeeId: 1
// }

// let { name, sallary, employeeId } = employee
// console.log(employeeId);

// ARRAY DESTRUCTURING
let student = ['haseeb', 'jawad', 'ahmed', 'shohaib']

let [haseeb, jawad, ahmed, shohaib] = student
// console.log(haseeb);

let fruits = ['Banana', 'apple', 'watermelon', 'grapes']

let [Banana, apple, watermelon, grapes] = fruits
// console.log(Banana);


// ================> Template literals <==============

let UserName = 'Haseeb Ur Rehman'
let intro = 'My age is 17 and i am student saylani mass it training program'
// console.log(UserName + intro);

// TEMPLARA LITERALS
// console.log(`${UserName} ${intro}`);


// ================> Default parameters <==============


// DEFAULT PARAMETERS
function sayHello(username = 'Haseeb Ur Rehman', cast = 'rajput') {
    console.log(username + ' ' + cast);
}
// sayHello()


// ================> Rest parameter <==============

// REST PARAMETER
function Hello(...student) {
    console.log(student);
}
// Hello('Haseeb', 'Jawad', 'Ahmed');


// ================> Spread parameter <==============

// SPREAD PARAMETER
let number = [1, 2, 3, 4, 5, 6, 7]
let number2 = [8, 9, 10, 11, 12, 13, 14]

for (const iterator of number2) {
    console.log(iterator);
}

let finalResults = [...number, ...number2]
// console.log(finalResults);


// ================> Ternary Operator  <==============

let marks = 10

// if (marks >= 50) {
//     console.log('You are passed');
// } else {
//     console.log('You are failed');
// }

// TERNARY OPERATOR
// marks >= 50 ? console.log('you are passed') : console.log('you are failed');


// ================> Arrow functions  <==============

// NORMAL FUNCTION

function deleteBtn() {
    return 'delete'
}
// console.log(deleteBtn());

// ARROW FUNCTION
const deletebtn = () => {
    return console.log('delete');
}
// deletebtn()


// ================> Promises <==============

// let bankBalance = 550000;

// function shadi(){
//     return new Promise((resolve, resject)=>{
//         if(bankBalance >= 80000){
//             resolve('aba man gai')
//             console.log('aba man gai');
//         }else {
//             resject('ama nahi mana gi');
//             console.log('ama nahi mana gi');
//         }
//     })
// }
// shadi()
// .then(responce => {
//     console.log(responce);
// })
// .catch(error => {
//     console.log(error);
// })


// Object.entries
// Object.value
// Object.keys














const employee = {
    name: 'Jawad Nadmeem',
    sallary: 50000,
    employeeId: 1
}


let haseeb1 = Object.entries(employee)
// console.log(haseeb1);

// for (const key in haseeb1) {
//     console.log(haseeb1[1]);
// }
for (let i = 0; i < 1; i++) {
    console.log(haseeb1[1]);
    
}


// object destructuring
// let email = 'hasldhasl'
// let password = 'asdkljasdl'

// let addLocal = []

// addLocal.push({
//     email, 
//     password
// })

// console.log(addLocal);


