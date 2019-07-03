var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.round(Math.random() * 100) + 1;
  var item_object = {
    itemName: item,
    itemPrice: price
  }
  cart.push(item_object)
  return `${item} has been added to your cart.`
}

/*(`In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}.`)*/
function viewCart() {
    if (cart.length === 0) 
      return "Your shopping cart is empty."
    else {
      var cartMsg = "In your cart, you have"
      for (var i = 0; i < cart.length; i++) {
        if (i === 0)
          cartMsg += ` ${cart[i].itemName} at $${cart[i].itemPrice}`
        else if (cart.length > 1 && i === cart.length - 1)
          cartMsg += `, and ${cart[i].itemName} at $${cart[i].itemPrice}`
        else
          cartMsg += `, ${cart[i].itemName} at $${cart[i].itemPrice}`
      }
    cartMsg += "."
    return cartMsg
    }
    
}
function total() {
  var cartTotalMsg = ""
  for (var i = 0; i < cart.length; i++){
    cartTotalMsg += `${cart[i].itemPrice}`
  }
  return cartTotalMsg
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
