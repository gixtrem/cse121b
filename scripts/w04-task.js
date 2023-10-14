/* LESSON 3 - Programming Tasks */

/* Profile Object  */
const myProfile = {};

myProfile.name = "Umah Godday";
myProfile.photo = "images/myself.jpg";
Image.src = "myself.jpg"
photo.alt = "An updated image"
myProfile.favoriteFoods = ["Rice", "Tikka Masala", "Prioshki", "shrimp", "Banana Cream Pie"];
myProfile.hobbies = ["Volleyball", "Soccer", "Basket ball"];
// myProfile.placeLived = ["Nigeria", "Ghana", "Dubai", "USA"];
myProfile.placesLived = [];

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place:'Rexburg, USA',
        length : '2 year'
    }
);
myProfile.placesLived.push({place: "Lagos, Nigeria", length: "12 year"});
myProfile.placesLived.push({place: "Accra, Ghana", length: "3 year"});
myProfile.placesLived.push({place: "Emirate, Dubai", length: "4 year"});


/* DOM Manipulation - Output */

/* Photo with attributes */
document.getElementById("name").textContent = myProfile.name;
document.getElementById("photo").textContent = myProfile.photo;
document.getElementById("photo").alt = myProfile.name;

const favoriteFoodsList = document.getElementById("favorite-foods");
myProfile.favoriteFoods.forEach(food => {
    const li = document.createElement("li");
    li.textContent = food;
    favoriteFoodsList.appendChild(li);
});


const hobbiesList = document.getElementById("hobbies");
myProfile.hobbies.forEach(hobby => {
    const li = document.createElement("li");
    li.textContent = hobby;
    hobbiesList.appendChild(li);
})

// const placesLivedDL =document.getElementById("places-lived");
// myProfile.placesLived.forEach(place => {
//     const dt = document.createElement("dt");
//     dt.textContent = place.place;

//     const dd = document.createElement("dd");
//     dd.textContent = place.length;

//     placesLivedDL.appendChild(dt);
//     placesLivedDL.appendChild(dd);
// })

myProfile.placesLived.forEach(function (place) {
    let dt = document.createElement("dt");
    dt.textContent = place.place;

    let dd = document.createElement("dd");
    dd.textContent = place.length;

    let dl = document.getElementById("places-lived");
    dl.appendChild(dt);
    dl.appendChild(dd);

})

/* Name */







/* Favorite Foods List*/


/* Hobbies List */


/* Places Lived DataList */


