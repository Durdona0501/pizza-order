// arrays-list
let pizzaBreadArray = ["Yupqa", "O'rta", "Qalin"];
let pizzaSizeArray = ["25sm", "30sm", "35sm"];
let pizzaIngredientsArray = ["Pomidor", "Kurka go'shti", "Zaytun", "Tuzlangan bodring", "Qo'ziqorin", "Qazi"];
let pizzaExtrasArray = ["Achchiq", "Sosiskali"];
let checkedIngredientsArray = [];
let checkedExtrasArray = []; 

// pizza order part
let elForm = document.querySelector("pizza__form");
let elOrderPizza = document.querySelector(".pizza__order");
let elOrderBread = document.querySelector(".order__bread");
let elOrderSize = document.querySelector(".order__size");
let elOrderIngredients = document.querySelector(".order__ingredients");
let elOrderExtras = document.querySelector(".order__extras");

// order result part
let elBreadResult = document.querySelector(".bread__result");
let elSizeResult = document.querySelector(".size__result");
let elIngredientsResult = document.querySelector(".ingredients__result");
let elExtrasResult = document.querySelector(".extras__result");

// pizza-bread-array
for (let i = 0; i < pizzaBreadArray.length; i++) {
  let pizzaBreadOption = document.createElement("option");

  pizzaBreadOption.textContent = pizzaBreadArray[i];
  pizzaBreadOption.value = pizzaBreadArray[i];

  elOrderBread.appendChild(pizzaBreadOption);

  elOrderBread.addEventListener("change", function() {
    elBreadResult.textContent = this.value;
  })
}

// pizza-size-array
for (let i = 0; i < pizzaSizeArray.length; i++) {
  
  let pizzaRadio = document.createElement("div");
  let pizzaSize = document.createElement("p");
  let radioInput = document.createElement("input");

  elOrderSize.appendChild(pizzaRadio);
  pizzaRadio.append(pizzaSize, radioInput);

  pizzaRadio.setAttribute("class", "form-check");
  pizzaSize.setAttribute("class", "text-start");
  radioInput.setAttribute("class", "radio__input form-check-input me-5 p-5");
  radioInput.setAttribute("type", "radio");
  radioInput.setAttribute("name", "pizza-size");

  pizzaSize.textContent = pizzaSizeArray[i];
  radioInput.value = pizzaSizeArray[i]; 

  radioInput.addEventListener("change", function() {
    elSizeResult.textContent = this.value;
  })
}


// pizza-on-products-array
for (let i = 0; i < pizzaIngredientsArray.length; i++) {

  let elToppingsBox = document.createElement("div");
  let elToppingsInput = document.createElement("input");
  let elToppingsLabel = document.createElement("label");

  elToppingsBox.setAttribute("class", "form-check col-6 d-flex align-items-center mb-1");

  elToppingsInput.setAttribute("class", "form-check-input me-3 p-3"); 
  elToppingsInput.name = "pizza-top-ingredient";
  elToppingsInput.id = "pizza-top";
  elToppingsInput.type = "checkbox";
  elToppingsInput.value = pizzaIngredientsArray[i];

  elToppingsLabel.setAttribute("class", "form-check-label");
  elToppingsLabel.setAttribute("for", "pizza-top");
  elToppingsLabel.textContent = pizzaIngredientsArray[i];

  elOrderIngredients.appendChild(elToppingsBox);
  elToppingsBox.append(elToppingsInput, elToppingsLabel);

  elToppingsInput.addEventListener("change", function() {
    if(checkedIngredientsArray.includes(this.value)){

      let toppingIndex = checkedIngredientsArray.indexOf(this.value);
      checkedIngredientsArray.splice(toppingIndex, 1);

    } else {
      checkedIngredientsArray.push(this.value);
    }

    elIngredientsResult.innerHTML = "";

    for(let i = 0; i < checkedIngredientsArray.length; i++){

      let elToppingsList = document.createElement("li");
      elToppingsList.setAttribute("class", "text-start mb-1");
      elToppingsList.textContent = checkedIngredientsArray[i];
      elIngredientsResult.appendChild(elToppingsList);
    }
  })
}


// pizza-extras-order-array
for (let i = 0; i < pizzaExtrasArray.length; i++) {

  let elExtrasBox = document.createElement("div");
  let elExtrasInput = document.createElement("input");
  let elExtrasLabel = document.createElement("label");

  elExtrasBox.setAttribute("class", "form-check col-6 d-flex align-items-center mb-1");
  elExtrasInput.setAttribute("class", "form-check-input me-3 p-3"); 
  elExtrasInput.name = "pizza-extra-ingredient";
  elExtrasInput.id = "pizza-extra";
  elExtrasInput.type = "checkbox";
  elExtrasInput.value = pizzaExtrasArray[i];

  elExtrasLabel.setAttribute("class", "form-check-label");
  elExtrasLabel.setAttribute("for", "pizza-extra");
  elExtrasLabel.textContent = pizzaExtrasArray[i];

  elOrderExtras.appendChild(elExtrasBox);
  elExtrasBox.append(elExtrasInput, elExtrasLabel);

  elExtrasInput.addEventListener("change", function() {
    if(checkedExtrasArray.includes(this.value)){

      let extraIndex = checkedExtrasArray.indexOf(this.value);
      checkedExtrasArray.splice(extraIndex, 1);
    } else {
      checkedExtrasArray.push(this.value);
    }

    elExtrasResult.innerHTML = "";

    for(let i = 0; i < checkedExtrasArray.length; i++){

      let elExtrasList = document.createElement("li");
      elExtrasList.setAttribute("class", "text-start mb-1");
      elExtrasList.textContent = checkedExtrasArray[i];
      elExtrasResult.appendChild(elExtrasList);
    }
  })
}