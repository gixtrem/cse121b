/* LESSON 3 - Programming Tasks */

/* Profile Object */
const myProfile = {};

myProfile.name = "Umah Godday";
myProfile.photo = "images/myself.jpg"; // Assuming the path is correct
myProfile.favoriteFoods = ["Rice", "Tikka Masala", "Prioshki", "shrimp", "Banana Cream Pie"];
myProfile.hobbies = ["Volleyball", "Soccer", "Basketball"]; // Fixed typo in "Basket ball"
myProfile.placesLived = [];

myProfile.placesLived.push({place: "San Francisco", length: "3 years"});
myProfile.placesLived.push({place: "Rexburg, USA", length: "2 years"}); // Fixed typo in "year"
myProfile.placesLived.push({place: "Lagos, Nigeria", length: "12 years"}); // Fixed typo in "year"
myProfile.placesLived.push({place: "Accra, Ghana", length: "3 years"}); // Fixed typo in "year"
myProfile.placesLived.push({place: "Emirate, Dubai", length: "4 years"}); // Fixed typo in "year"

/* DOM Manipulation - Output */

// Name
document.getElementById("name").textContent = myProfile.name;

// Photo with attributes
const photoElement = document.getElementById("photo");
photoElement.src = myProfile.photo;
photoElement.alt = myProfile.name;

// Favorite Foods List
const favoriteFoodsList = document.getElementById("favorite-foods");
myProfile.favoriteFoods.forEach(food => {
    const li = document.createElement("li");
    li.textContent = food;
    favoriteFoodsList.appendChild(li);
});

// Hobbies List
const hobbiesList = document.getElementById("hobbies");
myProfile.hobbies.forEach(hobby => {
    const li = document.createElement("li");
    li.textContent = hobby;
    hobbiesList.appendChild(li);
});

// Places Lived DataList
myProfile.placesLived.forEach(function (place) {
    let dt = document.createElement("dt");
    dt.textContent = place.place;

    let dd = document.createElement("dd");
    dd.textContent = place.length;

    let dl = document.getElementById("places-lived");
    dl.appendChild(dt);
    dl.appendChild(dd);
});
