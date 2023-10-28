export const changeBackgroundColor = () => {
    const colors = ["#766F74", "#291A24", "#321629", "#A33081", "#571845"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomIndex];
  };
  
  export const showLoading = (loader) => {
    loader.classList.remove("hidden");
  };
  
  export const hideLoading = (loader) => {
    loader.classList.add("hidden");
  };
  