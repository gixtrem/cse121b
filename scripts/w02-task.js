
const fullname = 'Umah Godday';
const favoriteFoods = ['Bread','Fried Rice','Pizza','Ramen','Halal Burger'];

//const currentYear = currentDate.getFullYear();
//const currentYear = new Date().getFullYear();   
const currentYear = 2023
var profilePicture = "images/myself.jpg";

//const directory = 'images/';
//const fileName = 'myself.jpg';
//const profilePicture = directory + fileName;
//console.log('profile picture:', profilePicture);

const nameElement = document.getElementById('name');
nameElement.textContent = fullname

//const foodElement = document.getElementById('food');
const foodElement = document.getElementById('food');
foodElement.textContent = favoriteFoods

var yearElement = document.querySelector('#year');
yearElement.textContent = currentYear;

//const yearElement = document.querySelector('#year');
const imageElement = document.getElementById('profilePicture');
//var imageElement = document.querySelector('home');

nameElement.innerHTML = `<strong>${fullname}</strong>`; 
//yearElement.textContent = currentYear.toString();
yearElement.textContent = currentYear;

const delicious= 'mac n cheese';
favoriteFoods.push(delicious);
foodElement.textContent = favoriteFoods
foodElement.innerHTML+= `<br>${favoriteFoods}`;
favoriteFoods.shift();
foodElement.innerHTML += favoriteFoods;
favoriteFoods.pop();
foodElement.innerHTML += favoriteFoods;

imageElement.setAttribute("src", profilePicture);

//const favoriteFoods = ['bread','Fried Rice','Pizza','Ramen','Halal Burger'];
//const foodText = favoriteFoods.join(', ');




//imageElement.setAttribute('src', console());
//imageElement.setAttribute('alt', `profile image of ${fullname}`);
//foodElement.textContent = foodText;


