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
        
      }
    }
    
}
function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
