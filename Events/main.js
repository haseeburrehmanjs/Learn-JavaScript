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

// let ul = document.querySelector('#ul');
// let instgram = document.querySelector('#instgram')

// ul.addEventListener('click', function(){
//     console.log('CHECKED EVENTS');
// })

// instgram.addEventListener('click', function(){
//     console.log('instagram checked');
// })



let images = document.querySelector('#images')

images.addEventListener('click', function(){
    console.log(event.target.tagName);
    event.target.parentNode.remove()
})