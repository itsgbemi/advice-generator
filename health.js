// Menu toggle logic
const menuIcon = document.querySelector('.menu-icon');
const menuContent = document.querySelector('.menu-content');
menuIcon.addEventListener('click', () => {
    menuContent.classList.toggle('show');
});

// DOM element references
const adviceText = document.getElementById("adviceText");
const adviceNumber = document.getElementById("adviceNumber");
const shuffleAdvice = document.getElementById("shuffleAdvice");

let adviceList = [];

// Fetch the advice data from JSON file
fetch('healthadvice.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    if (data.advice && data.advice.length > 0) {
      adviceList = data.advice;
      displayAdvice(0); // Display the first piece of advice by default
    } else {
      throw new Error('No advice data found');
    }
  })
  .catch(error => {
    console.error("Error fetching the advice data:", error);
    adviceText.textContent = "Failed to load advice.";
  });

// Display advice by index
function displayAdvice(index) {
  if (adviceList.length === 0) {
    adviceText.textContent = "No advice available.";
    adviceNumber.textContent = "";
    return;
  }

  const selectedAdvice = adviceList[index];
  adviceText.textContent = `"${selectedAdvice.content}"`;
  adviceNumber.textContent = `${selectedAdvice.label}`;
}

// Debounce function to prevent rapid clicks
let debounceTimer;
function debounce(func, delay) {
  return function() {
    const context = this;
    const args = arguments;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(context, args), delay);
  };
}

// Shuffle and display random advice
function shuffleRandomAdvice() {
  if (adviceList.length === 0) {
    alert("No advice available. Please try again later.");
    return;
  }

  const randomIndex = Math.floor(Math.random() * adviceList.length);
  displayAdvice(randomIndex);
}

// Attach the event listener with debouncing
shuffleAdvice.addEventListener("click", debounce(shuffleRandomAdvice, 300));
