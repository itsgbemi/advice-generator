    const API_URL = 'https://api.adviceslip.com/advice';

    // Menu Toggle Script
    const menuIcon = document.querySelector('.menu-icon');
    const menuContent = document.querySelector('.menu-content');
    menuIcon.addEventListener('click', () => {
      menuContent.classList.toggle('show');
    });

    // Fetch advice from API
    async function fetchAdvice() {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.slip; // Return the entire slip object containing both id and advice
      } catch (error) {
        console.error('Error fetching advice:', error);
        displayError('Could not fetch advice. Please try again later.');
        return null;
      }
    }

    // Display the fetched advice and its number
    function displayAdvice(adviceData) {
      document.getElementById('adviceNumber').textContent = `ADVICE #${adviceData.id}`;
      document.getElementById('adviceText').textContent = `"${adviceData.advice}"`;
    }

    // Display error message
    function displayError(message) {
      document.getElementById('error').textContent = message;
    }

    // Clear error messages
    function clearError() {
      document.getElementById('error').textContent = '';
    }

    // Event listener for the shuffle button
    document.getElementById('shuffleAdvice').addEventListener('click', async () => {
      clearError();  // Clear any previous errors
      const adviceData = await fetchAdvice();
      if (adviceData) {
        displayAdvice(adviceData);
      }
    });

    // Load advice when the page loads
    window.onload = async () => {
      const initialAdvice = await fetchAdvice();
      if (initialAdvice) {
        displayAdvice(initialAdvice);
      }
    };
