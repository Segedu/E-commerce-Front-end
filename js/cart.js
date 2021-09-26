var cartTableDiv = document.getElementById("cartTableDiv");
var table = document.getElementById("table");
var total = document.getElementById("totalSum");
var cartItems = [];
var sum = 0;

for (let i = 0; i < 5; i++) {
  table.innerHTML += `<tr id="${products[i].id}">
  <td>
  <article><img src="${products[i].images[0]}"/>
  <p>${products[i].name}</p></article>
  </td>
  <td><button onclick="removeFromCart(${products[i].id})" id="removeBtn">remove</button></td>  
  <td><h2>${products[i].price}</h2></td>
  </tr> `;
  cartItems.push(products[i]);
  total.innerHTML = `<h3> Total: ${calculateSum()}₪</h3>`;
}
console.log(cartItems);

function removeFromCart(id) {
  for (let i = 0; i < cartItems.length; i++) {
    if (cartItems[i].id === id) {
      cartItems.splice(i, 1);
      document.getElementById(id).innerHTML = "";
      const sum = calculateSum();
      total.innerHTML = `<p>Total: ${sum + "₪"}</p>`;
      console.log(cartItems);
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
