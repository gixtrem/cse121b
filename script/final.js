import { changeBackgroundColor, showLoading, hideLoading } from './utils.js';
import { fetchNewQuote } from './fetchQuote.js';

document.addEventListener("DOMContentLoaded", () => {
  const quoteElement = document.getElementById("quote");
  const authorElement = document.getElementById("author");
  const newQuoteButton = document.getElementById("new-quote-button");
  const loader = document.getElementById("loader");

  // Fetch the initial quote
  fetchNewQuote(quoteElement, authorElement, loader, changeBackgroundColor, showLoading, hideLoading);
  
  newQuoteButton.addEventListener("click", () => fetchNewQuote(quoteElement, authorElement, loader, changeBackgroundColor, showLoading, hideLoading));
});
