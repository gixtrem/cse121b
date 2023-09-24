
let fullname = 'Umah Godday';

//const currentYear = currentDate.getFullYear();
const currentYear = new Date().getFullYear();   
const directory = 'images/';
const fileName = 'myself.jpg';
const profilePicture = directory + fileName;
console.log('profile picture:', profilePicture);

const nameElement = document.getElementById('name');
nameElement.textContent = fullname
//const foodElement = document.getElementById('food');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');


//const yearElement = document.querySelector('#year');
const imageElement = document.getElementById('profilePicture');
yearElement.textContent = currentYear;



nameElement.innerHTML = `<strong>${fullname}</strong>`; 
yearElement.textContent = currentYear.toString();




//const favoriteFoods = ['bread','Fried Rice','Pizza','Ramen','Halal Burger'];
//const foodText = favoriteFoods.join(', ');

const favoriteFoods = ['Bread','Fried Rice','Pizza','Ramen','Halal Burger'];
foodElement.textContent = favoriteFoods


//imageElement.setAttribute('src', console());
//imageElement.setAttribute('alt', `profile image of ${fullname}`);
//foodElement.textContent = foodText;

const delicious= 'mac n cheese';
favoriteFoods.push(delicious);
foodElement.textContent = favoriteFoods
foodElement.innerHTML+= `<br>${favoriteFoods}`;
favoriteFoods.shift();
foodElement.innerHTML += favoriteFoods;
favoriteFoods.pop();
foodElement.innerHTML += favoriteFoods;
