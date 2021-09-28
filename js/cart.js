var tableCartDiv = document.getElementById("tableCartDiv");
var dataTable = document.getElementById("dataTable");
var total = document.getElementById("totalSum");
var cartItems = [];
var sum = 0;

for (let i = 0; i < 4; i++) {
  dataTable.innerHTML += `<tr id="${products[i].id}">
  <td>
  <article><img src="${products[i].images[0]}"/>
  <p>${products[i].name}</p>
  <p>${products[i].discription}</p>
  <h1>${products[i].price}₪</h1>
  <button onclick="removeFromCart(${products[i].id})" id="removeBtn"><i class="fas fa-trash-alt"></i></button></article></td>  
  </tr> `;
  cartItems.push(products[i]);
  total.innerHTML = `<h3> Total: ${calculateSum()}₪</h3><article><button id="checkoutBtn">Checkout</button></article>`;
}

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
