
const fullname = 'Umah Godday';
const favoriteFoods = ['Bread','Fried Rice','Pizza','Ramen','Halal Burger'];

//const currentYear = currentDate.getFullYear();
//const currentYear = new Date().getFullYear();   
const currentYear = 2023



//const directory = 'images/';
//const fileName = 'myself.jpg';
//const profilePicture = directory + fileName;
//console.log('profile picture:', profilePicture);

const nameElement = document.getElementById('name');
nameElement.textContent = fullname

const profilePicture = 'images/myself.jpg'

//const foodElement = document.getElementById('food');
const foodElement = document.getElementById('food');
foodElement.textContent = favoriteFoods
foodElement.innerHTML = favoriteFoods.join(", ");


var yearElement = document.querySelector('#year');
yearElement.textContent = currentYear;

//const yearElement = document.querySelector('#year');

//var imageElement = document.querySelector('home');

nameElement.innerHTML = `<strong>${fullname}</strong>`; 
//yearElement.textContent = currentYear.toString();
yearElement.textContent = currentYear;


const delicious= "Lasagna";
favoriteFoods.push(delicious);
//foodElement.innerHTML += "<br>" + delicious;
foodElement.innerHTML+= `<br>${favoriteFoods}`;
//foodElement.textContent = favoriteFoods
favoriteFoods.shift();
foodElement.innerHTML+= `<br>${favoriteFoods}`;
//foodElement.innerHTML += favoriteFoods;
favoriteFoods.pop();
foodElement.innerHTML+= `<br>${favoriteFoods}`;
//foodElement.innerHTML += favoriteFoods;

imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `profile image of ${fullname}`);

//var profilePicture = "images/myself.jpg";
//var imageElement = document.querySelector("#profilePicture");
//imageElement.setAttribute("src", profilePicture);
// var profilePicturePath = 'myself.jpg';
// var profileimage = document.getElementById('profileimage');
// profileimage.setAttribute('src', profilePicturePath);
// profileimage.alt = 'profile image of ' + fullname;
//const favoriteFoods = ['bread','Fried Rice','Pizza','Ramen','Halal Burger'];
//const foodText = favoriteFoods.join(', ');




//imageElement.setAttribute('src', console());
//imageElement.setAttribute('alt', `profile image of ${fullname}`);
//foodElement.textContent = foodText;


