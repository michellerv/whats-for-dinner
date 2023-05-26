//querySelectors
var foodSuggest = document.querySelector('.food-suggest');
var foodItem = document.querySelector('.food-item');

var cookButton = document.querySelector('#cook-button');
var radioButtons= document.querySelectorAll("input[name='meals']")

//data
var side = [
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

var mainDish = [
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

var dessert = [
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

var randomSide ;
var randomMain;
var randomDessert;

//eventListeners
cookButton.addEventListener('click', displayFood)

//functions and event handlers
function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
    }

function displayFood(){
  //for loop for the buttons- iterate over radioButton array
  //if radiobuttons[i].checked() {
    // can move on to see which one is checked
// } else alert
    
//do I have access to radio buttons?
//check one thing at a time
}

//helper function


