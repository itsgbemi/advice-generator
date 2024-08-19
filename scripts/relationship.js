    const menuIcon = document.querySelector('.menu-icon');
    const menuContent = document.querySelector('.menu-content');
    menuIcon.addEventListener('click', () => {
        menuContent.classList.toggle('show');
    });    

    const adviceText = document.getElementById("adviceText");
    const adviceNumber = document.getElementById("adviceNumber");
    const shuffleAdvice = document.getElementById("shuffleAdvice");

    let adviceList = [];

    fetch('api/relationshipadvice.json')
      .then(response => response.json())
      .then(data => {
        adviceList = data;
        displayAdvice(0);
      })
      .catch(error => {
        console.error("Error fetching the advice data:", error);
        adviceText.textContent = "Failed to load advice.";
      });

    function displayAdvice(index) {
      const selectedAdvice = adviceList[index];
      adviceText.textContent = `"${selectedAdvice.advice}"`;
      adviceNumber.textContent = `${selectedAdvice.label}`;
    }

    let debounceTimer;
    function debounce(func, delay) {
      return function() {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => func.apply(this, arguments), delay);
      };
    }

    function shuffleRandomAdvice() {
      if (adviceList.length === 0) {
        alert("No advice available. Please try again later.");
        return;
      }
      
      const randomIndex = Math.floor(Math.random() * adviceList.length);
      displayAdvice(randomIndex);
    }

    shuffleAdvice.addEventListener("click", debounce(shuffleRandomAdvice, 300));