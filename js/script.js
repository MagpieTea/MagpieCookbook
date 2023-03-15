
// variables
var shoppingList = [];


// arrays with recipe ingredients in them
var 
  cajunShrimp = ["1lb Jumbo shrimp (cajun shrimp)", "garlic cloves(cajun shrimp)", "chicken broth (cajun shrimp)"], 
  teriyakiBurger = ["2lbs ground turkey (turkey burgers)", "1 egg (turkey burgers)", "panko (turkey burgers)", "onion (turkey burgers)", "teriyaki sauce (turkey burgers)", "1 pineapple (turkey burgers)", "hamburger buns (turkey burgers)", "lettuce (turkey burgers)", "tomato (turkey burgers)", "cheese (turkey burgers)"], 
  broccoliBeef = [""],
  recipe3 = [],
  raspberryChicken = [],
  pizza = []
  lentilCurry = [],
  shrimpSausage = [""], 
  pulledPork = [],
  salmonSheetPan = [],
  beefEggRoll = [],
  sesameChicken = [],
  shrimpScampi = [],
  porkStirFry = [],
  fishTacos = [],
  beefStirFry = [],
  chickenKorma = [],
  smokedChicken = [],
  squashPasta = [];

// functions

function addToList(recipe){  //this function adds the ingerdeints of a recipe, that are stored as an array to another array.
  if (shoppingList.includes(recipe) === false){
    shoppingList.push(recipe);
  }
}

//display shopping list

var list = document.getElementById("list-items");

shoppingList.forEach((item)=>{
  var li = document.createElement("li");
  li.innerText = item;
  list.appendChild(li);
})

//cookies //all cookies have to be in string format, so I have to convert the shoppingList into a string, store it, and then convert it back into an array when the cookie gets called.
function shoppingListCookie(){
  if (shoppingList.length !== 0){
    var cookie = JSON.stringify(shoppingList);
    document.cookie = cookie;  
  } else {
    var text = document.cookie;
    shoppingList = JSON.parse(text);
  }
}
