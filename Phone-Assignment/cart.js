let items = JSON.parse(localStorage.getItem('sendData'))
console.log(items);

let cardCheck = document.querySelector('#card-box2');
let h2 = document.querySelector('h2')
let afterBtn = document.querySelector('#after')

function renderScreen() {
    if (items != null && items.length > 0) {
        for (let i = 0; i < items.length; i++) {
            console.log(items[i]);
            cardCheck.innerHTML += `
            <div class="card bg-dark" style="width: 18rem;">
      <div class="card-body text-light">
        <h5 class="card-title">${items[i].brand}</h5>
        <h6 class="card-subtitle mb-2 mt-2">MODEL : ${items[i].color}</h6>
        <h6 class="card-subtitle mb-2 mt-2">SIZE : ${items[i].size}</h6>
        <p class="card-text mt-2">PRICE : ${items[i].price}</a><br />
        <h6 class="card-subtitle mb-2 mt-2">Quantity : <button onclick='addQuan(${i})' class='btn btn-danger'>-</button>${items[i].quantity}<button onclick='lessQuan(${i})' class="btn btn-danger">+</button></h6>
        <button class="btn btn btn-danger" onclick="deleteCart(${i})">Delete</button>
      </div>
    </div>
            `
        }
    } else {
        console.log('CHECK OUT EMPTY HA MALIK!');
        h2.innerHTML = 'No items found...'
    }
}

afterBtn.innerHTML = `
        <button class='btn btn-danger' onclick='goBack()'>GO BACK</button>
        `

function goBack() {
    window.location = 'index.html'
}

renderScreen()

function addQuan(index) {

}

function lessQuan() {

}


function deleteCart(index) {
    items.splice(index, 1)
    JSON.parse(localStorage.getItem('sendData'))
}

