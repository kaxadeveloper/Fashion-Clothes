const visitUsLink = document.querySelector('h1 a');
const shopNowLink = document.querySelector('.block');
const popup = document.getElementById('popup');
const popupTitle = document.getElementById('popup-title');
const popupInput = document.getElementById('popup-input');
const popupSubmit = document.getElementById('popup-submit');
const closePopup = document.getElementById('close-popup');

// Show popup with dynamic title and placeholder
function openPopup(titleText, placeholderText) {
  popup.classList.remove('hidden');
  popupTitle.textContent = titleText;
  popupInput.placeholder = placeholderText;
  popupInput.value = '';
}

// Visit Us event
visitUsLink.addEventListener('click', (e) => {
  e.preventDefault();
  openPopup("Visit Us", "Enter your name or location...");
});

// Shop Now event
shopNowLink.addEventListener('click', (e) => {
  e.preventDefault();
  openPopup("Shop Now", "Enter your email to start shopping...");
});

// Handle popup submission
popupSubmit.addEventListener('click', () => {
  const inputVal = popupInput.value.trim();
  if (inputVal) {
    alert(`You entered: ${inputVal}`);
    popup.classList.add('hidden');
  } else {
    alert("Please enter a value.");
  }
});

// Close popup
closePopup.addEventListener('click', () => {
  popup.classList.add('hidden');
});

