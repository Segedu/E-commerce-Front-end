var tableCartDiv = document.getElementById("tableCartDiv");
var dataTable = document.getElementById("dataTable");
var total = document.getElementById("totalSum");
var cartItems = [];
// var sum = 0;

for (let i = 0; i < 3; i++) {
  dataTable.innerHTML += `<tr id="${products[i].id}">
  <td>
  <article><img src="${products[i].images[0]}"/>
  <p>${products[i].name}</p>
  <input class="quantity" type="number" value="1">
  <button class="up" onclick="addQuantity()">+</button>
  <button class="down" onclick="reduceQuantity()">-</button> 
  <p>${products[i].discription}</p>
  <h1 class="priceCont">${products[i].price}₪</h1>
  <button onclick="removeFromCart(${products[i].id})" id="removeBtn"><i class="fas fa-trash-alt"></i></button></article></td>  
  </tr> `;
  cartItems.push(products[i]);
  total.innerHTML = `<h3> Total: ${calculateSum()}₪</h3><article id="totCont"><button id="checkoutBtn">Checkout</button></article>`;
}

var quantity = document.getElementsByClassName("quantity");
var priceCont = document.getElementsByClassName("priceCont");
// var upBtn = document.getElementsByClassName("up");
// var downBtn = document.getElementsByClassName("down");

// upBtn.addEventListener("click", function (params) {
//   var valueCont = quantity.value;
//   valueCont++;
//   quantity.value = valueCont;
// });

function addQuantity() {
  for (let i = 0; i < cartItems.length; i++) {
    if (quantity[i].value > 1 && !undefined) {
      var price = cartItems[i].price;
      var totalPerItem = cartItems[i].price * quantity[i].value;
      cartItems[i].price = totalPerItem;
      priceCont[i].innerHTML = `${totalPerItem}₪`;
      total.innerHTML = `<h3> Total: ${calculateSum()}₪</h3><article id="totCont"><button id="checkoutBtn">Checkout</button></article>`;
      cartItems[i].price = price;
    }
  }
}
console.log(cartItems);

function reduceQuantity() {
  for (let i = 0; i < cartItems.length; i++) {
    if (quantity[i].value > 0 && !undefined) {
      // var price = cartItems[i].price;
      var multiply = cartItems[i].price * quantity[i].value;
      cartItems[i].price = multiply;
      priceCont[i].innerHTML = `${multiply}₪`;
      total.innerHTML = `<h3> Total: ${calculateSum()}₪</h3><article id="totCont"><button id="checkoutBtn">Checkout</button></article>`;
      // cartItems[i].price = price;
    }
  }
}

console.log(cartItems);

function removeFromCart(id) {
  for (let i = 0; i < cartItems.length; i++) {
    if (cartItems[i].id === id) {
      cartItems.splice(i, 1);
      document.getElementById(id).innerHTML = "";
      const sum = calculateSum();
      total.innerHTML = `<p>Total: ${sum + "₪"}</p>`;
    }
  }
}

function calculateSum() {
  let sum = 0;
  for (let i = 0; i < cartItems.length; i++) {
    sum += cartItems[i].price;
  }
  return sum;
}
