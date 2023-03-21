const products = [
  {
    id: 1,
    name: "shoes",
    price: 10.99
  },
  {
    id: 2,
    name: "shirt",
    price: 0.99
  },
  {
    id: 3,
    name: "pants",
    price: 100.99
  },
  {
    id: 4,
    name: "hat",
    price: 1.99
  }
]
var cart = []

function addToCart(id, quantity){
  console.log(cart)
  for(let i=0; i< cart.length; i++){
    if(cart[i].id == id){
      console.log(cart[i])
      cart[i].quantity ? cart[i].quantity += quantity : cart[i]['quantity'] = quantity
      console.log(cart)
      return
    }
  }
  cart = [...cart, {id: id,quantity: quantity}]
  console.log(cart)
}

function removeFromCart(id){
  cart = cart.filter(product => product.id != id)
  console.log(cart)
}



addToCart(3,2)
addToCart(3,6)
addToCart(2,4)
addToCart(1,3)
function calculateTotal(){
  var total=0;
  console.log("MY CART")
  console.log("****************")
  for (let i = 0; i < cart.length; i++) {
    targetId = cart[i].id
    targetQuantity = cart[i].quantity
    for(const product of products){
      if(product.id === targetId){
        console.log(`Quoting ${product.name} at a price of ${product.price} for ${targetQuantity} = ${targetQuantity* product.price}`)
        total +=  product.price * targetQuantity
      }
    }
    
  }
  return total
}
// cart.forEach((item,index)=> {
//   if(products.id == item.id){
//     total+= products.price * item.quantity
//     console.log(total)
//   }
// })
console.log(calculateTotal())