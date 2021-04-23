// let listCake = [
//     {
//         name: 'Brownies Keju',
//         type: 'Brownies',
//         price: 50_000,
//         image: 'src asetnya'
//     },
//     {
//         name: 'Bolu Karamel',
//         type: 'Bolu',
//         price: 45_000,
//         image: 'src asetnya'
//     }
// ]

// Data yang akan ditampilkan 
// Daftar kue

let listCake = [
    {
        name: 'Blue Ribbon Butter Cake',
        type: 'Cake',
        price: 50_000,
        image: 'https://lh3.googleusercontent.com/bqMun4ufYHw1pPzIeCDKoCmv0P7hPQzV70V8qHz-cHqNS5Pb43uBsRuuJ_9WA0Fa034awEyPCKnWRajW0fcKAAxJKOOsSjawqRSCfAY=w600-rw-l68-e365',
        desc: 'Butter cake originated from the English pound cake, which traditionally used equal amounts of butter, flour, sugar, and eggs to bake a heavy, rich cake.'
    },
    {
        name: 'Lemon Pound Cake',
        type: 'Cake',
        price: 45_000,
        image: 'https://assets.epicurious.com/photos/57c6f789082060f11022b586/6:4/w_1600%2Cc_limit/no-recipe-required-pound-cake-lemon-poppy-seed-30082016.jpg',
        desc: 'Pound cake is traditionally made with a pound of each of four ingredients: flour, butter, eggs, and sugar. Sometimes served either dusted with powdered sugar, lightly glazed, or with a coat of icing.'
    },
    {
        name: 'Pan Di Spagna',
        type: 'Cake',
        price: 45_000,
        image: 'https://www.misya.info/wp-content/uploads/2018/08/pan-di-spagna.jpg',
        desc: 'Pan di Spagna (Italian Sponge Cake) is a simple, airy sponge cake flavored with vanilla or lemon zest.'
    },
    {
        name: 'Génoise Sponge',
        type: 'Cake',
        price: 45_000,
        image: 'https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/gnoise_sponge_with_69988_16x9.jpg',
        desc: 'Genoise (pronounced "Jenn-wahz") is a simple sponge cake made with eggs, sugar, flour, and sometimes melted butter and vanilla extract.'
    },
    {
        name: 'Chocolate Biscuit Cake',
        type: 'Cake',
        price: 85_000,
        image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/2/7/0/FNM_030118-Chocolate-Biscuit-Cake-Recipe_s4x3.jpg.rend.hgtvcom.616.462.suffix/1518020373933.jpeg',
        desc: 'Biscuit cake is no-bake tea cake, similar to American icebox cake, found in Irish, English, Danish, Arabic and Jewish cuisine. Made with digestive biscuits and optionally prepared with a chocolate glaze.'
    },
    {
        name: 'Marble Chiffon Cake',
        type: 'Cake',
        price: 65_000,
        image: 'https://www.hersheyland.com/content/dam/hersheyland/en-us/recipes/recipe-images/227-marble-chiffon-cake.jpg',
        desc: 'Chiffon cake is a very light cake made with vegetable oil, eggs, sugar, flour, baking powder, and flavorings.'
    },
    {
        name: 'Carrot Cake',
        type: 'Cake',
        price: 50_000,
        image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2007/2/16/0/ry0401_carrotcake.jpg.rend.hgtvcom.826.620.suffix/1552488933139.jpeg',
        desc: 'Carrot cake is a moist, dense, sweet cake made with carrots.'
    },
    {
        name: 'Southern Red Velvet Cake',
        type: 'Cake',
        price: 95_000,
        image: 'https://www.foodnetwork.com/content/dam/images/food/video/0/01/013/0134/0134061.jpg',
        desc: 'Red velvet cake is traditionally a red, red-brown, crimson, or scarlet-colored chocolate layer cake, layered with ermine icing'
    },
    {
        name: 'Coconut Angel Cake',
        type: 'Cake',
        price: 45_000,
        image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/coconut-angel-cake-1578333326.jpg?crop=1.00xw:0.798xh;0,0.202xh&resize=768:*',
        desc: 'Angel food cake, or angel cake, is a type of sponge cake made with egg whites, flour, and sugar. A whipping agent, such as cream of tartar, is commonly added.'
    },
    {
        name: 'Flourless Chocolate Cake',
        type: 'Cake',
        price: 45_000,
        image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/flourless-cake-horizontal-jpg-1521475080.jpg',
        desc: 'A flourless chocolate cake is a dense "fallen" cake made from an aerated chocolate custard.'
    },
    {
        name: 'Devil’s Food Cake',
        type: 'Cake',
        price: 55_000,
        image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/devils-food-cake-1577124539.jpg?crop=1.00xw:0.911xh;0,0.0658xh&resize=980:*',
        desc: 'Devil’s food cake is a moist, rich chocolate layer cake. The cake is usually paired with a rich chocolate frosting.'
    },
    {
        name: 'Opera Cake',
        type: 'Cake',
        price: 75_000,
        image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/opera-cake-royalty-free-image-1578350233.jpg?crop=1xw:1xh;center,top&resize=980:*',
        desc: 'Opera cake is made with layers of almond sponge cake (known as Joconde in French) soaked in coffee syrup, layered with ganache and coffee French buttercream, and covered in a chocolate glaze'
    },
    {
        name: 'Fruit Cake',
        type: 'Cake',
        price: 45_000,
        image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/fruit-cake-1577124877.jpg?crop=1.00xw:0.921xh;0,0.0691xh&resize=980:*',
        desc: 'Fruitcake (or fruit cake or fruit bread) is a cake made with candied or dried fruit, nuts, and spices, and optionally soaked in spirits.'
    }
]

// Cart Kue
let listCart = {}
// {
//     namakue: {
//         price: 0,
//         quantity: 0
//     },
// {

// Variabel-variabel

let productContainer    = document.getElementById('product-container')
let mainContainer       = document.getElementById("main-container")

////////////////////////////
// Function 

// Menambah kue ke dalam cart
function addToCart(object) {

    // let result = {}
    const name = object.name
    const price = object.price

    if (listCart[name] === undefined){
        listCart[name] = {
            price, quantity: 1
        }
        // listCart.push(result)
    } else {
        listCart[name].quantity++
    }
    
    console.log(listCart[name])
    // console.log(listCart)
    return listCart
    
}

// addToCart(listCake[2])
// addToCart(listCake[2])
// addToCart(listCake[1])
// console.log(listCart);



// DOM

// Membuat cart
function generateCart() {
    
    const object = listCart
    if (!Object.keys(object).length){
        //bikin alert di prompt
        alert(`You haven't choose any cake yet`)
    } else {
        mainContainer.style.display = 'none'
        productContainer.style.display = 'none'

        console.log(object)
    }
}

// Membuat transaksi
function generateTransaction() {
    //
    const object = listCart
    if (!Object.keys(object).length){
        //bikin alert di prompt
        alert(`You haven't order any cake yet`)
    } else {
        console.log(object)
    }
    
}

function generateHome() {
    mainContainer.style.display = 'block'
    productContainer.style.display = 'block'
    generateProduct(listCake)
}

generateProduct(listCake)
// Menampilkan produk kue
function generateProduct(data){
    

    productContainer.innerHTML = ''
    for (let i = 0; i < data.length; i+=3){
        // if (i % 3 === 0){
        let divRow = document.createElement('div')
        divRow.classList.add('row')
        // }
        
        for (let j = i; j < i+3; j++){
            
            if (data[j] === undefined){
                continue
            }
            
            let divCol = document.createElement('div')
            divCol.classList.add('col-lg-4', "col-md-12", "mb-4")
            divRow.appendChild(divCol)
            
            let divCard = document.createElement('div')
            divCard.classList.add('card')
            divCol.appendChild(divCard)
            
            let img = document.createElement("img")
            img.src = data[j].image
            img.classList.add("card-img-top", "img-box")
            divCard.appendChild(img)
            
            let divBody = document.createElement('div')
            divBody.classList.add("card-body")
            divCard.appendChild(divBody)
            
            let title = document.createElement("h5")
            title.classList.add("card-title")
            title.innerHTML = data[j].name
            divBody.appendChild(title)
            
            let price = document.createElement('h6')
            price.innerHTML = `Rp. ${data[j].price / 1000}.000` 
            divBody.appendChild(price)
            
            let desc = document.createElement("p")
            desc.classList.add("card-text")
            desc.innerHTML = data[j].desc
            divBody.appendChild(desc)
            
            let button = document.createElement('button')
            button.type = 'button'
            button.classList.add("btn", "btn-primary")
            button.addEventListener("click", function () {
                addToCart(data[j])
            })

            button.innerHTML = "Add to Cart"

            // add event saat button di click
            // addToCart

            divBody.appendChild(button)
            
        }
        
        productContainer.appendChild(divRow)
        
    }
}
    

// function generateCart(cart) {
    
// }

// function addToCart() {
//     // let cart = 

    
    
// }