// JavaScript Array Function

//push {Last ma value add krna ka liya.}
//pop {Last wali value remove krna ka liya}
//unshift {start ma value add krna ka liya.}
//shift {start ma value remove krna ka liya}
//splice {Bich ma sa value hata na ka liya}
//split {array bana ka liya}
//join {pragraf krna ka liya}
//concat {dono ko array ko jorna ka liya}
//slice {bich sa kisi word ko hatana ya lagana}
//sort
//reverse
//indexof



// let softwere = ['Photoshop', 'figma', 'indeign']
// softwere.push('premiere') {last ma value add krna ka liya}
// softwere.pop('')  {last ma value reomve krna ka liya}
// softwere.unshift('Vs code') {start ma value add krna ka liya}
// softwere.shift('') { start ma value add krna ka liya}
// softwere.splice(1 , 1) {bich ma sa value hata or laga na ka liya}
// softwere.length=0 {Array ki length 0 krna ka liya}
// softwere.splice(1 , 2)
// array = softwere.split(" ")
// array = softwere.join('')
// console.log(array);

// .length = Array ki length Check krna ka liya 
// console.log(softwere.length);

// console.log(softwere[1]);


// const shop = ['Apple', 'Banana', 'Orange', 'Mango', 'Grape', 'Strawberry'];
// const input = document.querySelector('#input');
// const h2 = document.querySelector('h2');
// function getFruits() {
//     console.log(input.value)
//     if (shop.includes(input.value)) {
//         console.log('fruit available haa..')
//         h2.innerHTML = `${input.value} is available`
//     } else {
//         console.log('fruit available nahi ha');
//         h2.innerHTML = `${input.value} is not available`
//     }
//     input.value = ''
// }



// let shop = ['Apple', 'Banana', 'Orange', 'Mango', 'Grape', 'Strawberry'];

// let input = document.querySelector('input')
// let heading = document.querySelector('h1')

// function getFruits(){
//     console.log(input.value);
//     if (shop.includes(input.value)){
//         // console.log('input.value');
//         heading.innerHTML = `${input.value} Is Avalible`
//     }else {
//         heading.innerHTML = `${input.value} Is not Availble`
//     }
//     input.value = ''
// }



// let input = document.querySelector('input')
// let head = document.querySelector('h1')

// function getFruits(){
//     console.log(input.value);
//     if(shop.includes(input.value)){
//         head.innerHTML = `${input.value} Is Available`
//     }else {
//         head.innerHTML = `${input.value} its not Available`
//     }
//     input.value = ''
// }



// // myShop.length()
// console.log(myShop.length);

let myShop = ['Apple', 'Banana', 'Orange', 'Mango', 'Grape', 'Strawberry'];

let input = document.querySelector('input');
let  head = document.querySelector('h1');

function myFunk(){
    console.log(input.value);
    if (myShop.includes(input.value)){
        head.innerHTML = `${input.value} Its Availble`
    }else {
        head.innerHTML =` ${input.value} its not Available`
    }
}









































