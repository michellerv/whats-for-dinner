//querySelectors
var foodSuggest = document.querySelector('.food-suggest');
var foodItem = document.querySelector('.food-item');
var potImage = document.querySelector('img');

var cookButton = document.querySelector('#cook-button');
var sideRadioButton = document.querySelector('#side');
var mainRadioButton = document.querySelector('#main-dish');
var dessertRadioButton = document.querySelector('#dessert');

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

//eventListeners
 cookButton.addEventListener('click', displayFood);
 

//functions and event handlers
function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
    }

 function displayFood() {
    potImage.classList.add('hidden')
    foodSuggest.classList.remove('hidden')
    
    if (sideRadioButton.checked) {
        foodItem.innerText = sides[getRandomIndex(sides)]
    } else if (mainRadioButton.checked) {
        foodItem.innerText = mainDishes[getRandomIndex(mainDishes)]
    } else if (dessertRadioButton.checked) {
        foodItem.innerText = desserts[getRandomIndex(desserts)]
    } else {
        foodItem.innerText = 'Please select a choice.'
    }
 }

    


