// LEARN EVENT BY SIR ABDULLAH

// addEventListener('phala ma EVENT ka name lata ha', dosra ma function ya function ka refrence)

//onclick
//onchange
//onmouseover
//onmouseout
//onsubmit

let btn = document.querySelector('#btn')

// METHOD ONE  

// function abc(){
//     console.log('HELLO EVENTS');
// }
// btn.addEventListener('click',abc)

// METHOD TWO

// btn.addEventListener('click', function(){
//     console.log('HELLO EVENTS');
// })

// ===============> bubbling
// ===============> capturing

let ul = document.querySelector('#ul');
let instgram = document.querySelector('#instgram')

// ul.addEventListener('click', function(){
//     console.log('CHECKED EVENTS');
// })

// instgram.addEventListener('click', function(){
//     console.log('instagram checked');
// })



// let images = document.querySelector('#images')

// images.addEventListener('click', function(){
//     console.log(event.target.tagName);
//     event.target.parentNode.remove()
// })


// REGEX REGULAR EXPRESSIONS

// regular expression are paterns used to match charactor commbination in javascript regulor expression are also object.....

// let form = document.querySelector('#form')
// let username = document.querySelector('#username')
// let email = document.querySelector('#email')
// let password = document.querySelector('#password')

// form.addEventListener('submit', function(event){
//     event.preventDefault()
//     console.log(username.value);
//     console.log(email.value);
//     console.log(password.value);
// })



// const form = document.querySelector('#form');
// const username = document.querySelector('#username');
// const email = document.querySelector('#email');
// const password = document.querySelector('#password');


// let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// let regex = /^(?=.*!)[a-zA-Z0-9!]{4,5}$/;
// let cnicRegex = /^42\d{11}$/;

// form.addEventListener('submit' , (event)=>{
//     event.preventDefault()
//     console.log(username.value)
//     console.log(email.value)
//     console.log(password.value)

//     console.log(emailRegex.test(email.value))
//     console.log(regex.test(email.value))
//     console.log(cnicRegex.test(email.value))
// })
