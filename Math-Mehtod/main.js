// Round 
// Matlab ka desimal value .5 sa bari ho to 3 ha to 4 ho jai ga agr.5 sa choti to 3 hi raha ga!

// ceil
// Higest Value print kara na ka liya like 2.1 bhi hoto wo 3 print hi krai ga matlab ka desimal value ko bhi wo 1 smja ga!

// floor
// Point ka bad wali value ko .5 ko zero hi smja ga!

// trunc 
// Point ka bad wali value na show nahi krta!

// pow 
// power check krna ka liya!

// sqrt
// squre pata krna ka liya!

// random
// random number lana ka liya 

// parseInt
// ParseFloat

// let num = 2.8;
// console.log(Math.round(num)); ==> point ka bad wali value agr .5 sa bari ho to 2. hoto 3 print krai ga agr .5 sa choti hoto 2.4 ha to 2 hi print krain ga

// let num = 2.5; 
// console.log(Math.ceil(num)); 

// let x = Math.ceil(Math.round(5.7))==> .5 ka bad wali value ko 1 smja ga!
// console.log(x);

// let x = Math.floor(5.6)  // ==> point k bad wali value ko 0 hi smja ga 
// console.log(x);

// let h1 = document.querySelector('h1');
// let num = 1;

// let x = Math.pow(10, 3) // ==> Power nikal na ka liya!
// console.log(x);

// let x = Math.sqrt(100); // Squre nikal na ka liya!
// console.log(x);


// function toss(clickBtn){
//     console.log("TOSS" , clickBtn);
//     console.log(Math.ceil(Math.random(num)*2));
//     if(num == 2){
//         h1.innerHTML += "TAIL <br />"
//     }else {
//         h1.innerHTML += 'Head <br />'
//     }

// function hello(username){
//     console.log(username);
// }
// console.log(hello('haseeb'));

// Round 
// Matlab ka desimal value .5 sa bari ho to 3 ha to 4 ho jai ga agr.5 sa choti to 3 hi raha ga!

// ceil
// Higest Value print kara na ka liya like 2.1 bhi hoto wo 3 print hi krai ga matlab ka desimal value ko bhi wo 1 smja ga!

// floor
// Point ka bad wali value ko .5 ko zero hi smja ga!

// trunc 
// Point ka bad wali value na show nahi krta!

// pow 
// power check krna ka liya!

// sqrt
// squre pata krna ka liya!

// random
// random number lana ka liya 


let ceil = Math.ceil(1.23) // ==> 1 ko 2 kr daga
console.log(`CEAIL KA RESULT => ${ceil}`);

let floor = Math.floor(1.5) // ==> jo ha wohi hi raha ga
console.log(`FLOOR KA RESULT => ${floor}`);

let trunc = Math.trunc(4.2354435) // ==> point ka bad wali value print nahi krta
console.log(`TRUNC KA RESULT => ${trunc}`);

let pow = Math.pow(10,2) // power nikal na ka liya 
console.log(`POW KA RESLUT => ${pow}`);