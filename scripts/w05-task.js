const templesElement = document.getElementById('temples'); // Replace 'temples' with the actual ID of your HTML div element.
const templeList = [];

const displayTemples = (temples) => {
  temples.forEach((temple) => {
    const article = document.createElement('article');
    const h3 = document.createElement('h3');
    h3.textContent = temple.templeName;
    const img = document.createElement('img');
    img.src = temple.imageUrl;
    img.alt = temple.location;
    article.appendChild(h3);
    article.appendChild(img);
    templesElement.appendChild(article);
  });
};

const getTemples = async () => {
  try {
    const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json'); // Replace 'YOUR_TEMPLE_DATA_URL' with the actual URL to fetch data from.
    const templeData = await response.json();
    templeList.length = 0; // Clear the existing templeList.
    templeList.push(...templeData);
    displayTemples(templeList);
  } catch (error) {
    console.error('Error fetching temple data:', error);
  }
};

const reset = () => {
  templesElement.innerHTML = ''; // Clear all the temple elements in the templesElement.
};

const sortBy = (temples) => {
  reset();
  const filter = document.getElementById('sortBy').value; // Replace 'sortBy' with the actual ID of your select element.

  switch (filter) {
    case 'utah':
      displayTemples(temples.filter(temple => temple.location.includes('Utah'));
      break;
    case 'nonutah':
      displayTemples(temples.filter(temple => !temple.location.includes('Utah'));
      break;
    case 'older':
      displayTemples(temples.filter(temple => new Date(temple.dedicatedDate) < new Date(1950, 0, 1)));
      break;
    case 'all':
      displayTemples(temples);
      break;
  }
};

const sortBySelect = document.getElementById('sortBy'); // Replace 'sortBy' with the actual ID of your select element.
sortBySelect.addEventListener('change', () => {
  sortBy(templeList);
});

// You can call getTemples at the end of your JavaScript file to load the initial data.
// getTemples();
