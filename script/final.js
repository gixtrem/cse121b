document.addEventListener("DOMContentLoaded", () => {
    const quoteElement = document.getElementById("quote");
    const authorElement = document.getElementById("author");
    const newQuoteButton = document.getElementById("new-quote-button");
  
    const quotesApiUrl = "https://api.quotable.io/random"; 
  
    // Function to fetch and display a new quote
    const fetchNewQuote = () => {
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
        })
        .catch((error) => {
          console.error(`Error: ${error}`);
        });
    };
  
    // Fetch the initial quote
    fetchNewQuote();
  
    // Set up the button click event
    newQuoteButton.addEventListener("click", fetchNewQuote);
  });
  