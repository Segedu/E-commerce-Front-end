var bedRCont = document.getElementById("bedRCont");
var bathCont = document.getElementById("bathCont");
var kitchCont = document.getElementById("kitchCont");
var livingCont = document.getElementById("livingCont");
var itemCounter = document.getElementById("itemCounter");
var likeCounter = document.getElementById("likeCounter");
var itemsArray = [];
var likedItemsArray = [];

function printToWindowByCategory(divElement, category) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].category === category && divElement !== null) {
      divElement.innerHTML += `<section>
      <img src="${products[i].images[0]}"/>
      <article>
      <p>${products[i].name}</p>
      <p>${products[i].description}</p>
      <h1>${products[i].price + " ₪"}</h1>
      <button onclick="addToCart(${products[i].id})" id="addBtn">
      add to cart</button>
      <button onclick="addTolikedItems(${
        products[i].id
      })" id="likeBtn"><img src="https://img.icons8.com/ios-glyphs/30/000000/like--v1.png"/></button>
      </article>
      </section>`;
    }
  }
}
printToWindowByCategory(bedRCont, "bedroom");
printToWindowByCategory(livingCont, "living room");
printToWindowByCategory(kitchCont, "kitchen");
printToWindowByCategory(bathCont, "bath");

function addToCart(id) {
  for (let i = 0; i < products.length; i++) {
    if (id === products[i].id) {
      itemsArray.push(products[i]);
      itemCounter.innerHTML = `<p id="counter">${itemsArray.length}</p>`;
    }
  }
}

function addTolikedItems(id) {
  for (let i = 0; i < products.length; i++) {
    if (id === products[i].id) {
      likedItemsArray.push(products[i]);
      likeCounter.innerHTML = `<p id="saveItem">${likedItemsArray.length}</p>`;
    }
  }
}

function showMobileNav() {
  var navLinks = document.getElementById("navLinks");
  if (navLinks.className === "navBarCont") {
    navLinks.className += " responsive";
  } else {
    navLinks.className = "navBarCont";
  }
}
