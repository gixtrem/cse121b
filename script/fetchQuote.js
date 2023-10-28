export const fetchNewQuote = (quoteElement, authorElement, loader, changeBackgroundColor, showLoading, hideLoading) => {
    const quotesApiUrl = "https://api.quotable.io/random"; 
    showLoading(loader);
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
        hideLoading(loader);
      })
      .catch((error) => {
        console.error(`Error: ${error}`);
        hideLoading(loader);
      });
  };
  