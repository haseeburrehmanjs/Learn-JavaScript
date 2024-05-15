const products = [
    {
        name: "Laptop",
        price: 999.99,
        description: "Powerful laptop for all your computing needs.",
        Image:  (src =
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAVRE5yhqQNEC-k-pjXRm3MWfxII6UVZXStDen-vs813r4myrT6RqA3KV38_3LB6c2arg&usqp=CAU")
    },
    {
        name: "Headphones",
        price: 79.99,
        description: "High-quality headphones for immersive audio experience.",
        Image:  (src =
            "https://static-01.daraz.pk/p/dba1e68fadf6df2c6212cce52af02714.jpg_300x0q75.webp")
    },
    {
        name: "Smartphone",
        price: 699.99,
        description: "Advanced smartphone with cutting-edge features.",
        Image:  (src =
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAVRE5yhqQNEC-k-pjXRm3MWfxII6UVZXStDen-vs813r4myrT6RqA3KV38_3LB6c2arg&usqp=CAU")
    },
    {
        name: "Tablet",
        price: 449.99,
        description: "Portable tablet for entertainment and productivity.",
        Image:  (src =
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAVRE5yhqQNEC-k-pjXRm3MWfxII6UVZXStDen-vs813r4myrT6RqA3KV38_3LB6c2arg&usqp=CAU")
    },
    {
        name: "Smartwatch",
        price: 249.99,
        description: "Stay connected and track your fitness with this smartwatch.",
        Image:  (src =
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAVRE5yhqQNEC-k-pjXRm3MWfxII6UVZXStDen-vs813r4myrT6RqA3KV38_3LB6c2arg&usqp=CAU")
    },
    {
        name: "Gaming Console",
        price: 399.99,
        description: "Experience the thrill of gaming with this powerful console.",
        Image:  (src =
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAVRE5yhqQNEC-k-pjXRm3MWfxII6UVZXStDen-vs813r4myrT6RqA3KV38_3LB6c2arg&usqp=CAU")
    },
    {
        name: "Camera",
        price: 599.99,
        description: "Capture life's moments with stunning clarity and detail.",
        Image:  (src =
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAVRE5yhqQNEC-k-pjXRm3MWfxII6UVZXStDen-vs813r4myrT6RqA3KV38_3LB6c2arg&usqp=CAU")
    },
    {
        name: "Wireless Speaker",
        price: 129.99,
        description: "Enjoy your favorite music wirelessly with this speaker.",
        Image:  (src =
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAVRE5yhqQNEC-k-pjXRm3MWfxII6UVZXStDen-vs813r4myrT6RqA3KV38_3LB6c2arg&usqp=CAU")
    },
    {
        name: "External Hard Drive",
        price: 129.99,
        description: "Expand your storage and backup your files with ease.",
        Image:  (src =
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAVRE5yhqQNEC-k-pjXRm3MWfxII6UVZXStDen-vs813r4myrT6RqA3KV38_3LB6c2arg&usqp=CAU")
    },
    {
        name: "Wireless Mouse",
        price: 29.99,
        description: "Navigate your computer with precision and comfort.",
        Image:  (src =
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAVRE5yhqQNEC-k-pjXRm3MWfxII6UVZXStDen-vs813r4myrT6RqA3KV38_3LB6c2arg&usqp=CAU")
    },
    {
        name: "Printer",
        price: 199.99,
        description: "Print documents and photos with exceptional quality.",
        Image:  (src =
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAVRE5yhqQNEC-k-pjXRm3MWfxII6UVZXStDen-vs813r4myrT6RqA3KV38_3LB6c2arg&usqp=CAU")
    },
    {
        name: "Desk Lamp",
        price: 49.99,
        description: "Illuminate your workspace with adjustable brightness.",
        Image:  (src =
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAVRE5yhqQNEC-k-pjXRm3MWfxII6UVZXStDen-vs813r4myrT6RqA3KV38_3LB6c2arg&usqp=CAU")
    },
    {
        name: "Fitness Tracker",
        price: 79.99,
        description: "Monitor your health and track your workouts.",
        Image:  (src =
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAVRE5yhqQNEC-k-pjXRm3MWfxII6UVZXStDen-vs813r4myrT6RqA3KV38_3LB6c2arg&usqp=CAU")
    },
    {
        name: "Bluetooth Earbuds",
        price: 99.99,
        description: "Wireless earbuds for on-the-go audio enjoyment.",
        Image:  (src =
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAVRE5yhqQNEC-k-pjXRm3MWfxII6UVZXStDen-vs813r4myrT6RqA3KV38_3LB6c2arg&usqp=CAU")
    },
    {
        name: "Portable Charger",
        price: 39.99,
        description: "Charge your devices anywhere, anytime.",
        Image:  (src =
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAVRE5yhqQNEC-k-pjXRm3MWfxII6UVZXStDen-vs813r4myrT6RqA3KV38_3LB6c2arg&usqp=CAU")
    },
    {
        name: "USB Flash Drive",
        price: 19.99,
        description: "Store and transfer your files conveniently.",
        Image:  (src =
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAVRE5yhqQNEC-k-pjXRm3MWfxII6UVZXStDen-vs813r4myrT6RqA3KV38_3LB6c2arg&usqp=CAU")
    },
    {
        name: "Monitor",
        price: 299.99,
        description: "Upgrade your display for enhanced productivity.",
        Image:  (src =
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAVRE5yhqQNEC-k-pjXRm3MWfxII6UVZXStDen-vs813r4myrT6RqA3KV38_3LB6c2arg&usqp=CAU")
    },
    {
        name: "Keyboard",
        price: 49.99,
        description: "Type comfortably with this reliable keyboard.",
        Image:  (src =
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAVRE5yhqQNEC-k-pjXRm3MWfxII6UVZXStDen-vs813r4myrT6RqA3KV38_3LB6c2arg&usqp=CAU")
    }
];


let section = document.querySelector('#card-section');

for (let i = 0; i < products.length; i++) {
    // console.log(products[i]);
    section.innerHTML += `
    <div>
    <div class="card" style="width: 18rem;">
    <img class="card-img-top" src="${products[i].Image}" alt="Card image cap">
    <div class="card-body">
    <h5 class="card-title">${products[i].name}</h5>
    <h5 class="card-title">Price : ${products[i].price}</h5>
    <p class="card-text">${products[i].description}</p>
    <a onclick='addToCard(${i})' class="btn btn-primary">Go somewhere</a>
    </div>
    </div>
    </div>
    `
}

let addItemes = [];

function addToCard(index) {
    // console.log(products[index]);
    if (addItemes.includes(products[index])) {
        products[index].quaintity += 1
        console.log(addItemes);
    } else {
        products[index].quaintity = 1
        addItemes.push(products[index])
        console.log(addItemes)
    }

}

// =====> LOCAL STORAGE ELEMENTS <=====

//localStorage.setItem('key', 'Value')
// localStorage.getItem('keynmame','value')
// JSON.stringify()
// JSON.parse()


function checkOut(){
    window.location = 'card.html'
    localStorage.setItem('SendData', JSON.stringify(addItemes))
}

