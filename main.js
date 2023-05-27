//querySelectors
var foodSuggest = document.querySelector('.food-suggest');
var foodItem = document.querySelector('.food-item');
var potImage = document.querySelector('img');

var cookButton = document.querySelector('#cook-button');
var sideRadioButton = document.querySelector('#side');
var mainRadioButton = document.querySelector('#main-dish');
var dessertRadioButton = document.querySelector('#dessert');
var mealRadioButton = document.querySelector('#entire-meal')
var clearButton = document.querySelector('.clear-button')

//data
var sides = [
    'Miso Glazed Carrots',
    'Coleslaw',
    'Garden Salad',
    'Crispy Potatoes',
    'Sweet Potato Tots',
    'Coconut Rice',
    'Caeser Salad',
    'Shrimp Summer Rolls',
    'Garlic Butter Mushrooms',
    'Hush Puppies' 
    ];

var mainDishes = [
    'Spaghetti and Meatballs',
    'Pineapple Chicken',
    'Shakshuka',
    'Thai Yellow Curry',
    'Bibimbap',
    'Chicken Parmesean',
    'Butternut Squash Soup',
    'BBQ Chicken Burgers',
    'Ramen',
    'Empanadas',
    'Chicken Fried Rice',
    'Sheet Pan Fajitas',
    'Margarita Pizza' 
    ];

var desserts = [
    'Apple Pie',
    'Lemon Meringue Pie',
    'Black Forest Cake',
    'Banana Bread',
    'Peach Cobbler',
    'Cheesecake',
    'Funfetti Cake',
    'Baklava',
    'Flan',
    'Macarons',
    'Macaroons',
    'Chocolate Cupcakes',
    'Pavlova',
    'Pumpkin Pie',
    'Key Lime Pie',
    'Croissants',
    'Eclairs'
    ];

var currentFood;
var entireMeal

//eventListeners
 cookButton.addEventListener('click', displayFood);
 clearButton.addEventListener('click', clearFood);


//functions and event handlers
function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
    }

 function pickFood() {
    if (sideRadioButton.checked) {
        currentFood = sides[getRandomIndex(sides)]        
    } else if (mainRadioButton.checked) {
        currentFood = mainDishes[getRandomIndex(mainDishes)]
    } else if (dessertRadioButton.checked) {
        currentFood = desserts[getRandomIndex(desserts)]
    } else if (mealRadioButton.checked) {
        currentFood = `Have ${mainDishes[getRandomIndex(mainDishes)]}
        with a side of ${sides[getRandomIndex(sides)]}, and 
        ${desserts[getRandomIndex(desserts)]} for dessert`  
    } else {
        currentFood = 'Please select a choice'
    }
        return currentFood
    }    

function displayFood() {
    potImage.classList.add('hidden')
    foodSuggest.classList.remove('hidden')
    clearButton.classList.remove('hidden')
 
    pickFood()
    foodItem.innerText = `${currentFood}!`   
}

function clearFood() {
    potImage.classList.remove('hidden')
    foodSuggest.classList.add('hidden')
    clearButton.classList.add('hidden')
  
    if (currentFood === currentFood) {
    return foodItem.innerText = ''
  }
}   




