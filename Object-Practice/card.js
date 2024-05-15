let card = document.querySelector('#card-items')
let cardItems = JSON.parse(localStorage.getItem('SendData'))
console.log(cardItems);

function renderScren() {
    for (let i = 0; i < cardItems.lenght; i++) {
        card.innerHTML += `
        <div>
        <div class="card" style="width: 18rem;">
         <ul class="list-group list-group-flush">
        <li class="list-group-item">${cardItems[i].price}</li>
        <li class="list-group-item">Dapibus ac facilisis in</li>
        <li class="list-group-item">Vestibulum at eros</li>
        </ul>
        </div>
        </div>
        `
    }
}
renderScren()


