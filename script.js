const locationsDropdown = document.getElementById('locationsDropdown');
const subLocationsDropdown = document.getElementById('subLocationsDropdown');
const displayImage = document.getElementById('display-image');

// Define options for the second dropdown
const subOptions = {
  335: ['Sub Location 1', 'Sub Location 2', 'Sub Location 3'],
  336: ['Arnakonda', 'Bhupalapatnam','Chakunta','Chityalpalle','Choppadandi','Gumlapur','Katnepalle','Kolimikunta','Konerupalle','Ragampeta','Rukmapur','Vedurughatta'],
  337: ['Sub Location 6', 'Sub Location 7', 'Sub Location 8'],
  // Add more options as needed
};

// Mapping between sub locations and image filenames
const subLocationImages = {
  'Arnakonda': 'arnakonda.jpg',
  'Bhupalapatnam': 'bhupalapatnam.jpg',
  'Chakunta': 'chakunta.jpg',
  'Chityalpalle': 'chityalpalle.jpg',
  'Choppadandi': 'choppadandi.jpg',
  'Gumlapur': 'gumlapur.jpg',
  'Katnepalle': 'katnepalle.jpg',
  'Kolimikunta': 'kolimikunta.jpg',
  'Konerupalle': 'konerupalle.jpg',
  'Ragampeta': 'ragampeta.jpg',
  'Rukmapur': 'rukmapur.jpg',
  'Vedurughatta': 'vedurughatta.jpg',
  // Add more mappings as needed
};

// Function to populate the second dropdown based on the selected option from the first dropdown
function populateSubLocationsDropdown(selectedValue) {
  // Clear existing options
  subLocationsDropdown.innerHTML = '';
  
  // Create and add options to the second dropdown
  const options = subOptions[selectedValue];
  if (options) {
    options.forEach(option => {
      const optionElem = document.createElement('option');
      optionElem.value = option;
      optionElem.textContent = option;
      subLocationsDropdown.appendChild(optionElem);
    });
  }
}

// Event listener for the change event on the first dropdown
locationsDropdown.addEventListener('change', function() {
  const selectedValue = this.value;
  if (selectedValue !== "0") {
    console.log("Selected location ID: " + selectedValue);
    // Populate the second dropdown
    populateSubLocationsDropdown(selectedValue);
  } else {
    console.log("Please select a valid option.");
  }
});

// Event listener for the change event on the second dropdown
subLocationsDropdown.addEventListener('change', function() {
  const selectedLocation = this.value;
  if (selectedLocation !== "0") {
    const imageName = subLocationImages[selectedLocation];
    if (imageName) {
      displayImage.src = "images/" + imageName;
      displayImage.style.display = "block"; // Display the image
    } else {
      console.log("Image not found for selected location:", selectedLocation);
    }
  } else {
    console.log("Please select a valid option.");
    displayImage.style.display = "none"; // Hide the image
  }
});
