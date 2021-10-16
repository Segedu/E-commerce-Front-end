var tableCartDiv = document.getElementById("tableCartDiv");
var dataTable = document.getElementById("dataTable");
var total = document.getElementById("totalSum");
var cartItems = [
  {
    name: "bed",
    id: 1,
    price: 899,
    description: "Lorem, ipsum dolor. Maiores.",
    category: "bedroom",
    images: [
      "https://images.pexels.com/photos/916339/pexels-photo-916339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "https://images.pexels.com/photos/916339/pexels-photo-916339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    ],
  },
  {
    name: "bed",
    id: 2,
    price: 799,
    description: "Lorem, ipsum dolor. Maiores.",
    category: "bedroom",
    images: [
      "https://images.pexels.com/photos/3201761/pexels-photo-3201761.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/3201761/pexels-photo-3201761.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    ],
  },
  {
    name: "bed",
    id: 3,
    price: 999,
    description: "Lorem, ipsum dolor. Maiores.",
    category: "bedroom",
    images: [
      "https://images.pexels.com/photos/4993094/pexels-photo-4993094.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/4993094/pexels-photo-4993094.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    ],
  },
];
var quantityArr = [];

for (let i = 0; i < cartItems.length; i++) {
  dataTable.innerHTML += `<tr id="${cartItems[i].id}">
  <td>
  <article id="tabArticle"><img src="${cartItems[i].images[0]}"/>
  <p id="pName">${cartItems[i].name}</p>
  <p>${cartItems[i].price}₪</p>
  <input oninput="changeQuantity()" class="quantity" type="number" value="1">
  <h1 class="priceCont">${cartItems[i].price}₪</h1>
  <button onclick="removeFromCart(${cartItems[i].id})" id="removeBtn"><i class="fas fa-trash-alt"></i></button></article></td>  
  </tr> `;
  quantityArr.push(products[i]);
  total.innerHTML = `<h3> Total: ${calculateSum(cartItems)}₪
  </h3><article id="totCont"><button id="checkoutBtn">Checkout</button></article>`;
}

var quantity = document.getElementsByClassName("quantity");
var priceCont = document.getElementsByClassName("priceCont");

function changeQuantity() {
  for (let i = 0; i < cartItems.length; i++) {
    if (quantity[i].value >= 1 && !undefined) {
      var price = cartItems[i].price;
      var totalPerItem = price * quantity[i].value;
      quantityArr[i].price = totalPerItem;
      priceCont[i].innerHTML = `${totalPerItem}₪`;
      total.innerHTML = `<h3> Total: ${calculateSum(quantityArr)}₪</h3>
      <article id="totCont"><button id="checkoutBtn">Checkout</button></article>`;
    }
  }
}
console.log("quantity array:", quantityArr);
console.log("cart items array:", cartItems);

function removeFromCart(id) {
  for (let i = 0; i < cartItems.length; i++) {
    if (cartItems[i].id === id) {
      cartItems.splice(i, 1);
      document.getElementById(id).innerHTML = "";
      const sum = calculateSum(cartItems);
      total.innerHTML = `<p>Total: ${sum + "₪"}</p>`;
    }
  }
}

function calculateSum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i].price;
  }
  return sum;
}
