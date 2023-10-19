// Declare global variables
const templesElement = document.querySelector("#temples");
const templeList = [];

// Function: displayTemples
const displayTemples = (temples) => {
  // Clear existing temple cards
  templesElement.innerHTML = "";

  // Process each temple in the temple array
  temples.forEach((temple) => {
    // Create an HTML <article> element
    const templeCard = document.createElement("article");

    // Create an HTML <h3> element
    const templeNameElement = document.createElement("h3");
    templeNameElement.textContent = temple.templeName;

    // Create an HTML <img> element
    const templeImageElement = document.createElement("img");
    templeImageElement.src = temple.imageUrl;
    templeImageElement.alt = temple.location;

    // Append the <h3> element and the <img> element to the <article> element
    templeCard.appendChild(templeNameElement);
    templeCard.appendChild(templeImageElement);

    // Append the <article> element to the global templesElement variable
    templesElement.appendChild(templeCard);
  });
};

// Function: getTemples
const getTemples = async () => {
  try {
    // Fetch temple data
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (!response.ok) {
      throw new Error("Failed to fetch temple data");
    }

    // Convert response to JSON and assign to templeList
    templeList.length = 0; // Clear the existing templeList
    const templeData = await response.json();
    templeList.push(...templeData);

    // Call displayTemples to display the temple cards
    displayTemples(templeList);
  } catch (error) {
    console.error("Error:", error);
  }
};

// Function: reset
const reset = () => {
  templesElement.innerHTML = ""; // Clear all temple cards
};

// Function: sortBy
const sortBy = (temples) => {
  reset(); // Clear the existing temple cards

  const filter = document.querySelector("#sortBy").value;

  switch (filter) {
    case "utah":
      displayTemples(temples.filter((temple) => temple.location.includes("Utah")));
      break;
    case "nonutah":
      displayTemples(temples.filter((temple) => !temple.location.includes("Utah")));
      break;
    case "older":
      displayTemples(temples.filter((temple) => new Date(temple.dedicationDate) < new Date(1950, 0, 1)));
      break;
    case "all":
    default:
      displayTemples(temples);
      break;
  }
};

// Event Listener: sortBy Element change
const sortByElement = document.querySelector("#sortBy");
sortByElement.addEventListener("change", () => {
  sortBy(templeList);
});

// Initial call to getTemples to fetch and display the temple data
getTemples();
