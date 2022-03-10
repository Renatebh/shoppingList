//Velkommstmelding
`use strict`;

alert(
  "Hi, and welcome to your shoppinglist. You can add items in all tree lists, and in things you need more off list you must also add an price. Good shopping!! "
);
let today = new Date();
var date =
  today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
document.getElementById("date").innerHTML = date;
// Things you need more of list...
let shoppingList = document.getElementById("shopping-list");
let shoppingArray = [];
let totalPrice = 0;
let prices = 0;

function addToList() {
  let shopInput = document.getElementById("shop-input").value;
  let priceInput = parseInt(document.getElementById("price-input").value);

  shoppingArray.push({
    name: shopInput,
    price: priceInput,
  });

  if (priceInput === 0) {
    alert("Error! You need to add a price.");
    shoppingArray.pop();
  } else if (isNaN(priceInput)) {
    alert("Error! You need to add a price.");
    shoppingArray.pop();
  }

  listToShop();
}

function listToShop() {
  shoppingList.innerHTML = "";

  for (let i = 0; i < shoppingArray.length; i++) {
    shoppingList.innerHTML += `<li><p>${shoppingArray[i].name}</p><p>${shoppingArray[i].price}</p>
    <button id="delete-btn" onclick="deleteItem(${i}, 'shop')">x</button></li>`;

    // Sum total of shopping list
    // her er reducern!!!
    // let prices = shoppingArray.map((shoppingPrice) => shoppingPrice.price);
    // let reducer = (accumulator, curr) => accumulator + curr;
    // console.log(prices.reduce(reducer));
    // document.getElementById("total-price").innerHTML = prices.reduce(reducer);
    let sum = 0;

    shoppingArray.forEach((price) => {
      sum += shoppingArray[i].price;
    });
    console.log(shoppingArray.length);
    document.getElementById("total-price").innerHTML = sum;
  }
  if (shoppingArray.length === 0) {
    document.getElementById("total-price").innerHTML = 0;
  }
}

// Things you have enough of list
let enoughList = document.getElementById("enough-list");
let enoughArray = [];

function addEnough() {
  let enoughInput = document.getElementById("enough-input").value;

  enoughArray.push({
    name: enoughInput,
  });

  listToEnough();
}

function listToEnough() {
  enoughList.innerHTML = "";

  for (let i = 0; i < enoughArray.length; i++) {
    enoughList.innerHTML += `<li><p>${enoughArray[i].name}</p>
    <button id="delete-btn" onclick="deleteItem(${i}, 'enough')">x</button></li>`;
  }
}

// Things you soon need more of...
let soonEmptyList = document.getElementById("soon-empty-list");
let soonEmptyArray = [];

function addSoonEmpty() {
  let soonEmptyInput = document.getElementById("soon-empty-input").value;

  soonEmptyArray.push({
    name: soonEmptyInput,
  });

  listToSoonEmpty();
}

function listToSoonEmpty() {
  soonEmptyList.innerHTML = "";

  for (let i = 0; i < soonEmptyArray.length; i++) {
    soonEmptyList.innerHTML += `<li><p>${soonEmptyArray[i].name}</p>
    <button id="delete-btn" onclick="deleteItem(${i}, 'soon')">x</button></li>`;
  }
}

// Delete button
function deleteItem(i, listId) {
  let userAnswear = prompt(
    `Will you delete this item? Type "yes". If not type "no".`
  );
  userAnswear = userAnswear.toLowerCase();
  if (userAnswear === "yes") {
    if (listId === "shop") {
      shoppingArray.splice(i, 1);
    } else if (listId === "enough") {
      enoughArray.splice(i, 1);
    } else if (listId === "soon") {
      soonEmptyArray.splice(i, 1);
    }
  } else if (userAnswear === "no") {
    if (listId === "shop") {
      shoppingArray.splice(0, 0);
    } else if (listId === "enough") {
      enoughArray.splice(0, 0);
    } else if (listId === "soon") {
      soonEmptyArray.splice(0, 0);
    }
  }

  if (listId === "shop") {
    listToShop();
  } else if (listId === "enough") {
    listToEnough();
  } else if (listId === "soon") {
    listToSoonEmpty();
  }
}
