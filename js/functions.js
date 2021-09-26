var bedRCont = document.getElementById("bedRCont");
var bathCont = document.getElementById("bathCont");
var kitchCont = document.getElementById("kitchCont");
var livingCont = document.getElementById("livingCont");
var itemCounter = document.getElementById("itemCounter");
var itemsArray = [];

function addToCart(id) {
  for (let i = 0; i < products.length; i++) {
    if (id === products[i].id) {
      itemsArray.push(products[i]);
      console.log(itemsArray);
      itemCounter.innerHTML = `<p id="counter">${itemsArray.length}</p>`;
    }
  }
}
function printToWindowByCategory(divElement, category) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].category === category && divElement !== null) {
      divElement.innerHTML += `<section>
      <img src="${products[i].images[0]}"/>
      <article>
      <p>${products[i].name}</p>
      <p>${products[i].discription}</p>
      <h1>${products[i].price + " ₪"}</h1>
      <button onclick="addToCart(${products[i].id})" id="addBtn">
      add to cart</button>
      <button id="like"><img src="https://img.icons8.com/ios-glyphs/30/000000/like--v1.png"/></button>
      </article>
      </section>`;
    }
  }
}
printToWindowByCategory(bedRCont, "bedroom");
printToWindowByCategory(livingCont, "living room");
printToWindowByCategory(kitchCont, "kitchen");
printToWindowByCategory(bathCont, "bath");
