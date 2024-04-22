// ceil
// floor
// random
// parseInt
// ParseFloat

// let num = 2.8;
// console.log(Math.round(num));

// let num = 2.5; 
// console.log(Math.ceil(num));


let h1 = document.querySelector('h1');
let num = 1;


function toss(clickBtn){
    console.log("TOSS" , clickBtn);
    console.log(Math.ceil(Math.random(num)*2));
    if(num == 2){
        h1.innerHTML += "TAIL <br />"
    }else {
        h1.innerHTML += 'Head <br />'
    }

}