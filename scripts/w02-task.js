const fullname = 'Umah Godday';
const favoriteFoods = ['Bread', 'Fried Rice', 'Pizza', 'Ramen', 'Halal Burger'];

// Removed commented out lines for currentYear. You have already defined it below.
const currentYear = 2023;

// Initialize nameElement
const nameElement = document.getElementById('name');
if (nameElement) {
    nameElement.innerHTML = `<strong>${fullname}</strong>`;
}

// Initialize profilePicture
const profilePicture = 'images/myself.jpg';

// Initialize foodElement
const foodElement = document.getElementById('food');
if (foodElement) {
    foodElement.innerHTML = favoriteFoods.join(", ");
}

// Initialize yearElement
const yearElement = document.querySelector('#year');
if (yearElement) {
    yearElement.textContent = currentYear;
}

// Update favorite foods
const delicious = "Lasagna";
favoriteFoods.push(delicious);
if (foodElement) {
    foodElement.innerHTML += `<br>${favoriteFoods}`;
    favoriteFoods.shift();
    foodElement.innerHTML += `<br>${favoriteFoods}`;
    favoriteFoods.pop();
    foodElement.innerHTML += `<br>${favoriteFoods}`;
}

// Initialize imageElement
// Assuming the image element in your HTML has the id "profilePicture"
var imageElement = document.getElementById('profilePicture');
if (imageElement) {
    imageElement.setAttribute('src', profilePicture);
    imageElement.setAttribute('alt', `profile image of ${fullname}`);
}
