console.log('hello javascript');


// function shadi(bankBalance){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             if(bankBalance > 20000){
//                 console.log('shadi paki');
//                 resolve('then')
//             }else {
//                 console.log('abu nahi man raha');
//                 reject('catch')
//             }
//         }, 1000)
//     })
// }

// shadi(100000)
// .then(res) // RESPONCE
// .catch(error) // ERROR


// function shadi(bankBalance){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=> {
//             if(bankBalance > 100000-){
//                 console.log('shadi muhbarak');
//             }else {
//                 console.log('babu abu nahi man raha');
//             }
//         }, 1000)
//     })
// }

// shadi(100000)
// .then()
// .catch()


// let div = document.querySelector('div')

// axios('https://fakestoreapi.com/products')
//   .then((res) => {
//     console.log(res.data);
//     res.data.map((item, index) => {
//       div.innerHTML += `
//         <div class="card p-3" style="width: 18rem;">
//   <img src="${item.image}" width='300' height='300' class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">Price : $${item.price}</h5>
//     <h5 class="card-title">${item.category}</h5>
//     <p class="card-text">Rating : ${item.rating.rate} Count : ${item.rating.count}</p>
//     <a class="btn btn-info" onclick='addtocard(${index})'>Add to Card</a>
//   </div>
// </div>
//         `
//     })

//   })
//   .catch((error) => {
//     console.log(error);
//   })



// axios('https://fakestoreapi.com/users')
// .then((responce)=>{
//   console.log(responce.data);
//   responce.data.map(item => {
//     // console.log(item);
//     div.innerHTML += `
//   <h1>${item.name.firstname} ${item.name.lastname}</h1>
//   <h1>${item.id}</h1>
//   <h1>${item.address}</h1>
//   <h1></h1>
//   <hr />
//   `
//   })
// })
// .catch(error => {
//   console.log(error);
// })



// const againCard = document.querySelector('.again-Card')

// axios('https://fakestoreapi.com/products')
// .then(responnce => {
//   console.log(responnce.data)
//   responnce.data.map(item => {
//     console.log(item);
//     againCard.innerHTML += `
//   <div class="card" style="width: 18rem;" p-3>
//   <img width='300' height='300' src="${item.image}" class="card-img-top" alt="...">
//   <div class="card-body">
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//   </div>
// </div>
//   `
//   })
// })
// .catch(error => {
//   console.log(error);
// })


// let modal = document.querySelector('.modal1')
// function addtocard(i){
//   console.warn(
//   <div class="modal" tabindex="-1">
//   <div class="modal-dialog">
//     <div class="modal-content">
//       <div class="modal-header">
//         <h5 class="modal-title">Modal title</h5>
//         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//       </div>
//       <div class="modal-body">
//         <p>Modal body text goes here.</p>
//       </div>
//       <div class="modal-footer">
//         <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//         <button type="button" class="btn btn-primary">Save changes</button>
//       </div>
//     </div>
//   </div>
// </div>
//   )
// }


// axios('https://fakestoreapi.com/products')
//   .then(responce => {
//     console.log(responce.data);
//     responce.data.map(item => {
//       console.log(item)
//       againCard.innerHTML += `
//     <div class="card" style="width: 18rem;" p-3>
//   <img width='300' height='300' src="${item.image}" class="card-img-top" alt="...">
//   <div class="card-body">
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//   </div>
// </div>
//     `
//     })
//   })
//   .catch(error => {
//     console.log(error);
//   })


// axios('https://fakestoreapi.com/products')
// .then(reponce => {
//   console.log(reponce.data);
//   reponce.data.map(item => {
//     return item.category
//   })
// })
// .catch(error => {
//   console.log(error);
// })






// axios('https://jsonplaceholder.typicode.com/users')
// .then(responce => {
//   console.log(responce.data);
// })
// .catch(error => {
//   console.log(error);
// })


// function add(a = 10, b = 15, c = 25){4
//   console.log(a, b, c);
// }

// add(1, undefined, undefined)
// let modal1 = document.querySelector('.modal1')


// axios('https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple')
//     .then(responce => {
//         let data = responce.data.results
//         let index = 1
//         // console.log(data.question);
//         modal1.innerHTML = `
//     <h1>Qno :${index} ${data[index].question}</h1>
//     <button id="nextBtn">Next</button>
//     `
//         let nextBtn = document.querySelector('#nextBtn')

//         nextBtn.addEventListener('click', () => {
//             // console.log('next');
//             nextBtn + 1
//         })
//     })
//     .catch(error => {
//         console.log(error);
//     })


let form = document.querySelector('#form')
let inputVal = document.querySelector('#input')
let list = document.querySelector('#input')
let addTodo = []

form.addEventListener('submit', event => {
    event.preventDefault()
    addTodo.push(inputVal.value)
    inputVal.value = ''
})

function renderScreen(){
    addTodo.map(item => {
        console.log(item);
    })
}

renderScreen()
