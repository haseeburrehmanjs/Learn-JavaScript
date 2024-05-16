const tShirts = [
    {
        brand: "Nike",
        price: 25.99,
        size: "M",
        color: "Red"
    },
    {
        brand: "Adidas",
        price: 29.99,
        size: "L",
        color: "Blue"
    },
    {
        brand: "Puma",
        price: 19.99,
        size: "S",
        color: "Black"
    },
    {
        brand: "Under Armour",
        price: 35.99,
        size: "XL",
        color: "White"
    },
    {
        brand: "Reebok",
        price: 22.99,
        size: "M",
        color: "Gray"
    },
    {
        brand: "Calvin Klein",
        price: 27.99,
        size: "S",
        color: "Green"
    },
    {
        brand: "Tommy Hilfiger",
        price: 39.99,
        size: "L",
        color: "Navy"
    },
    {
        brand: "Levi's",
        price: 31.99,
        size: "XL",
        color: "Brown"
    },
    {
        brand: "H&M",
        price: 15.99,
        size: "M",
        color: "Yellow"
    },
    {
        brand: "Zara",
        price: 33.99,
        size: "L",
        color: "Pink"
    }
];

let getItems = JSON.parse(localStorage.getItem('sendData'))

let addItems;
if (getItems === null) {
    addItems = []
} else {
    addItems = getItems
}

let cardBox = document.querySelector('#card-box');

for (let i = 0; i < tShirts.length; i++) {
    cardBox.innerHTML += `
    <div class="card bg-dark" style="width: 18rem;">
  <div class="card-body text-light">
    <h5 class="card-title">${tShirts[i].brand}</h5>
    <h6 class="card-subtitle mb-2 mt-2">MODEL : ${tShirts[i].color}</h6>
    <h6 class="card-subtitle mb-2 mt-2">PRICE : ${tShirts[i].size}</h6>
    <p class="card-text mt-2">PRICE : ${tShirts[i].price}</a><br />
    <button onclick="addToCard(${i})" class="btn btn btn-primary">Add to Card</button>
  </div>
</div>
    `
}

function addToCard(index){
    if(addItems.includes(tShirts[index])){
        tShirts[index].quantity += 1
        console.log(addItems);
    }else {
        tShirts[index].quantity = 1
        addItems.push(tShirts[index])
        console.log(addItems);
    }
}

function checkOut(){
    localStorage.setItem('sendData', JSON.stringify(addItems))
    window.location = 'cart.html'
}