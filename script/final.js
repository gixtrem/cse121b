document.addEventListener("DOMContentLoaded",() =>{
    const quoteElement = document.getElementById("quote");
    const authorElement = document.getElementById("author");
    const newQuoteButton = document.getElementById("new-quote-button");
    const loader = document.getElementById("loader");
  
    const quotesApiUrl = "https://api.quotable.io/random"; 
  
    
    const changeBackgroundColor = () => {
      const colors = ["#766F74", "#291A24", "#321629", "#A33081", "#571845"];
      const randomIndex = Math.floor(Math.random() * colors.length);
      document.body.style.backgroundColor = colors[randomIndex];
    };
  
    
    const showLoading = () => {
      loader.classList.remove("hidden");
    };
  
  
    const hideLoading = () => {
      loader.classList.add("hidden");
    };
  
    // Function to fetch and display a new quote
    const fetchNewQuote = () => {
      showLoading();
      fetch(quotesApiUrl)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Failed to fetch quote");
          }
        })
        .then((data) => {
          quoteElement.textContent = data.content;
          authorElement.textContent = `- ${data.author}`;
          changeBackgroundColor();
          hideLoading();
        })
        .catch((error) => {
          console.error(`Error: ${error}`);
          hideLoading();
        });
    };
  
    // Fetch the initial quote
    fetchNewQuote();
  
    
    newQuoteButton.addEventListener("click", fetchNewQuote);
  });
  