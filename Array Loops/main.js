// forof
// forin
// forEach
// map
// filter


// =======> FORIN LOOP FOR OBJECT <=======

let userDetails = {
    username : 'Haseeb Ur Rehman',
    phoneNumber : '+92 3167979839',
    email : 'haseeb@gmail.com',
    Hobbies : ['criket', 'eating', 'art']
}

// for (const key in obj) {
//     console.log(`${key} ==> ${obj[key]}`);
// }

// for(let key in userDetails){
//     console.log(`${key} ==> ${userDetails.username}`);
// }

// for(let key in userDetails){
//     console.log(`${userDetails[key]}`);
// }

// =======> FOROF LOOP FOR ARRAY <=======

// let num = [1,2,3,4,5,6,7,8,9]

// for (const iterator of number) {
//     console.log(iterator)
// }

// for(let iterator of num){
//     console.log(iterator);
// }

// for(const iterator of num){
//     console.log(iterator);
// }

// callback
// koi bhi function ya method as an aurgument apna under function la wo callback function hota hain.

// =======> MAP FILTER FOREACH  METHOD <=======

const fruits = ['apple', 'banaana', 'orange', 'watermelon', 'guava', 'mango'];

// let check = num.map(items => items > 5)
// console.log(check);

// let checkAgain = num.filter(items => items > 5)
// console.log(checkAgain);

// let numCheck = fruits.map((item, index) => {
//     console.log(index);
//     console.log(item);
// })

const products = [
    // Electronics
    {
        name: "Wireless Mouse",
        price: 25.99,
        category: "Electronics",
        brand: "Logitech"
    },
    {
        name: "Smartphone",
        price: 699.99,
        category: "Electronics",
        brand: "Samsung"
    },
    {
        name: "LED Monitor",
        price: 129.99,
        category: "Electronics",
        brand: "Dell"
    },
    {
        name: "Bluetooth Speaker",
        price: 45.99,
        category: "Electronics",
        brand: "JBL"
    },
    {
        name: "Laptop",
        price: 999.99,
        category: "Electronics",
        brand: "Apple"
    },

    // Footwear
    {
        name: "Running Shoes",
        price: 59.99,
        category: "Footwear",
        brand: "Nike"
    },
    {
        name: "Sneakers",
        price: 75.99,
        category: "Footwear",
        brand: "Adidas"
    },
    {
        name: "Sandals",
        price: 25.99,
        category: "Footwear",
        brand: "Teva"
    },
    {
        name: "Formal Shoes",
        price: 120.00,
        category: "Footwear",
        brand: "Clarks"
    },
    {
        name: "Boots",
        price: 150.00,
        category: "Footwear",
        brand: "Timberland"
    },

    // Home Appliances
    {
        name: "Blender",
        price: 34.99,
        category: "Home Appliances",
        brand: "Oster"
    },
    {
        name: "Microwave Oven",
        price: 99.99,
        category: "Home Appliances",
        brand: "Panasonic"
    },
    {
        name: "Air Conditioner",
        price: 299.99,
        category: "Home Appliances",
        brand: "LG"
    },
    {
        name: "Vacuum Cleaner",
        price: 149.99,
        category: "Home Appliances",
        brand: "Dyson"
    },
    {
        name: "Toaster",
        price: 29.99,
        category: "Home Appliances",
        brand: "Breville"
    },

    // Stationery
    {
        name: "Notebook",
        price: 3.99,
        category: "Stationery",
        brand: "Moleskine"
    },
    {
        name: "Pen Set",
        price: 12.99,
        category: "Stationery",
        brand: "Parker"
    },
    {
        name: "Highlighters",
        price: 5.99,
        category: "Stationery",
        brand: "Sharpie"
    },
    {
        name: "Stapler",
        price: 7.99,
        category: "Stationery",
        brand: "Swingline"
    },
    {
        name: "Planner",
        price: 14.99,
        category: "Stationery",
        brand: "Erin Condren"
    },

    // Furniture
    {
        name: "Desk Chair",
        price: 89.99,
        category: "Furniture",
        brand: "Ikea"
    },
    {
        name: "Coffee Table",
        price: 129.99,
        category: "Furniture",
        brand: "West Elm"
    },
    {
        name: "Sofa",
        price: 499.99,
        category: "Furniture",
        brand: "Ashley Furniture"
    },
    {
        name: "Bookshelf",
        price: 79.99,
        category: "Furniture",
        brand: "Sauder"
    },
    {
        name: "Dining Table",
        price: 399.99,
        category: "Furniture",
        brand: "Pottery Barn"
    },

    // Fitness
    {
        name: "Yoga Mat",
        price: 19.99,
        category: "Fitness",
        brand: "Gaiam"
    },
    {
        name: "Dumbbells",
        price: 49.99,
        category: "Fitness",
        brand: "Bowflex"
    },
    {
        name: "Treadmill",
        price: 699.99,
        category: "Fitness",
        brand: "NordicTrack"
    },
    {
        name: "Resistance Bands",
        price: 14.99,
        category: "Fitness",
        brand: "Fit Simplify"
    },
    {
        name: "Exercise Bike",
        price: 299.99,
        category: "Fitness",
        brand: "Peloton"
    },

    // Kitchen Appliances
    {
        name: "Coffee Maker",
        price: 49.99,
        category: "Kitchen Appliances",
        brand: "Keurig"
    },
    {
        name: "Air Fryer",
        price: 89.99,
        category: "Kitchen Appliances",
        brand: "Ninja"
    },
    {
        name: "Stand Mixer",
        price: 199.99,
        category: "Kitchen Appliances",
        brand: "KitchenAid"
    },
    {
        name: "Refrigerator",
        price: 799.99,
        category: "Kitchen Appliances",
        brand: "Whirlpool"
    },
    {
        name: "Dishwasher",
        price: 399.99,
        category: "Kitchen Appliances",
        brand: "Bosch"
    }
];

// console.log(products);

// let filterCategry = products.filter(item => {
//     return item.category === 'Home Appliances'
// })

// console.log(filterCategry);

// console.log('hello world!');

let array = ['apple','banana','gawava','naspati','mango','watermelaon']

// for(let i of array){
//     console.log(i);
// }

// for (const iterator of array) {
//     console.log(iterator);
// }

// for (const key in products) {
//     console.log(products[key])  
// }

// for(const key in products){
//     console.log(products[key]);
// }

// let render = products.map(item => {
//     console.log(item);
// })

// function hello(){
//     console.log('WORLD!');
// }

// btn.addEventListener('click', hello)
// btn.addEventListener('click',funck)





// let h1 = document.querySelector('h1')
// let btn = document.querySelector('button');

// let funck = array.map((item , index) => {
//     return h1.innerHTML += `${item} of ${index}  <br />`
// })

// console.log(funck);


let number = [1,2,3,4,5,6,8,9]

// let find = number.map(item => item > 5)
// console.log(find);

// let find2 = number.filter(item => item < 5)
// console.log(find2);

// let find = number.filter(item => {
//     return item < 5
// })

// console.log(find);

// let arraya = []
// for(let i = 0; i < number.length; i++){
//     // console.log(number[i]);
//     if(number[i] > 5){
//         // console.log(number[i]);
//         arraya.push(number[i])
//     }

// }

// console.log(arraya);

// let filterd = products.filter((item) => item.category === 'Kitchen Appliances' && item.price > 100 && item.price <  500
// )

// console.log(filterd);

let div = document.querySelector('div')

function filterdbtn(btn){
    div.innerHTML = ''
    console.log(btn.innerHTML);
    let filterd2 = products.filter(item => {
        return item.category === btn.innerHTML
    }).map(item => {
        div.innerHTML += 
        `
    <h1>${item.brand} ${item.name}</h1>
    <h1>${item.price}</h1>
    <h1>${item.category}</h1>
    <hr />h
    `
    // return item.category === btn.innerHTML
    })
    // console.log(filterd2);
}


products.map(item => {
    div.innerHTML += `
    <h1>${item.brand} ${item.name}</h1>
    <h1>${item.price}</h1>
    <h1>${item.category}</h1>
    <hr />h
    `
})



// console.log(filterdItem);