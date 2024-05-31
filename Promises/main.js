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


let div = document.querySelector('div')

axios('https://fakestoreapi.com/products')
.then((res)=>{
    console.log(res.data);
    res.data.map(item => {
        div.innerHTML += `
        <div class="card p-3" style="width: 18rem;">
  <img src="${item.image}" width='300' height='300' class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Price : $${item.price}</h5>
    <h5 class="card-title">${item.category}</h5>
    <p class="card-text">Rating : ${item.rating.rate} Count : ${item.rating.count}</p>
    <a href="#" class="btn btn-danger">Add to Card</a>
  </div>
</div>
        `
    })
    
})
.catch((error)=>{
    console.log(error);
})



