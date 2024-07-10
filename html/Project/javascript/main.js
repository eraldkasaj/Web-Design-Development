let carts = document.querySelectorAll('.start');

let products = [
    {
        name:'Web Development',
        tag:'Development',
        price:25,
        inCart:0
    },
    {
        name:'Data Science',
        tag:'Science',
        price:20,
        inCart:0
    },
    {
        name:'Web Design',
        tag:'Design',
        price:15,
        inCart:0
    },
    {
        name:'Cybersecurity',
        tag:'security',
        price:10,
        inCart:0
    },
]

for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i])
    })
}


function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers')

    if(productNumbers) {
        document.querySelector('.count').textContent = productNumbers
    }
}

function cartNumbers(product) {
console.log('the product clicked is',product)
    let productNumbers = localStorage.getItem('cartNumbers')


    productNumbers = parseInt(productNumbers)

   if(productNumbers) {
    localStorage.setItem('cartNumbers', productNumbers + 1)
   document.querySelector('.count').textContent = productNumbers + 1;
   } else{
    localStorage.setItem('cartNumbers', 1)
    document.querySelector('.count').textContent = 1;
   }

setItems(product)
   
}

function setItems(product) {
   let cartItems = localStorage.getItem('productsInCart')
   cartItems = JSON.parse(cartItems)
  
   if(cartItems != null) {
    if(cartItems[product.tag] == undefined) {
        cartItems = {
            ...cartItems,
            [product.tag]:product
        }
    }
    cartItems[product.tag].inCart += 1
   }else {
    product.inCart = 1
    cartItems = {
        [product.tag]:product
    }
   }

localStorage.setItem("productsInCart", JSON.stringify(cartItems))
}

function totalCost(product) {
/*console.log("the product price is",product.price)*/
let cartCost = localStorage.getItem('totalCost')

if(cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + product.price);
}else{
    localStorage.setItem("totalCost",product.price);
}
}

function displayCart() {
let cartItems = localStorage.getItem("productsInCart")
let cartCost = localStorage.getItem('totalCost')
cartItems = JSON.parse(cartItems)
let productContainer = document.querySelector(".products")

console.log(cartItems)
if( cartItems && productContainer ) {
    productContainer.innerHTML = '';
    Object.values(cartItems).map(item => {
        productContainer.innerHTML += `
       
        <table class="table">
        <tbody>
          <tr>
            <td><img src="../images/${item.tag}.png"> <span class="name">${item.name}</span></td>
            <td><div class="price">${item.price},00</div></td>
            <td><div class="quantity"><span>${item.inCart}</span></div></td>
            <td><div class="total"><span>$${item.inCart*item.price},00</span></div></td>
          </tr>
        </tbody>
      </table>
      
 `});

       productContainer.innerHTML += `
       <div class="basketTotalContainer">
       <h5 class="basketTotalTitle">
       Basket Total </h5>
       <h5 class="basketTotal">
       $${cartCost},00
       </h5>
       ` }}


onLoadCartNumbers()
displayCart()
