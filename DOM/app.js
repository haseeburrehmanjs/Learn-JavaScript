// childNodes 
// textContent 
// FirstChild
// parentElement
// parentNode
// getElementsByTagName



// let a = document.childNodes[1].childNodes[5].childNodes[1].textContent = 'hahahaha'
// console.log(a);

// let a = document.childNodes[1].childNodes[5].childNodes[3].childNodes[3].textContent = 'javscript'

// console.log(a);


// let a = document.getElementById('getli')

// console.log(a.parentElement.childNodes[1].textContent = 'HEHEHEHE');

// function changeColor(){
//     let getElements = document.getElementsByTagName('h1')
//     // console.log(getElements);
//     for(let i = 0; i < getElements.length; i++){
//         // console.log(getElements[i]);
//         getElements[i].style.backgroundColor = 'Green'
//     }
// }


// let a = document.childNodes[1].childNodes[5].childNodes[1].childNodes[1].textContent = 'haseeb ur rehman'

// console.log(a);

function changeColor() {
    let getElement = document.getElementsByTagName('h1')
    for (let i = 0; i < getElement.length; i++) {
        getElement[i].className = 'abc'
        let randonNumber = Math.ceil(Math.random(1) * 4)
        console.log(randonNumber);
    if (randonNumber === 1) {
        getElement[i].style.backgroundColor = 'Green'
        getElement[i].style.color = 'White'
    }else if(randonNumber === 2) {
        getElement[i].style.backgroundColor = 'red'
        getElement[i].style.color = 'black'
    }else if(randonNumber === 3) {
        getElement[i].style.backgroundColor = 'blue'
        getElement[i].style.color = 'white'
    }else if(randonNumber === 4) {
        getElement[i].style.backgroundColor = 'yellow'
        getElement[i].style.color = 'black'
    }else {
        document.write(0)
    }
    };
}
