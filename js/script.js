'use strict';



// var loader = document.getElementById("load");
// window.addEventListener("load", function(){
//   loader.style.display = "none";
// })

// script.js
window.addEventListener("load", function() {
  var loader = document.getElementById("load");
  setTimeout(function() {
    loader.style.display = "none";
    document.getElementById("content").style.display = "block";
  }, 1000); 
});


const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);




const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});




const revealElements = document.querySelectorAll("[data-reveal]");
const revealDelayElements = document.querySelectorAll("[data-reveal-delay]");

const reveal = function () {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.2) {
      revealElements[i].classList.add("revealed");
    }
  }
}

for (let i = 0, len = revealDelayElements.length; i < len; i++) {
  revealDelayElements[i].style.transitionDelay = revealDelayElements[i].dataset.revealDelay;
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

const stocks = [
  { symbol: "AAPL", price: 145.12, logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Apple_logo_grey.svg/1724px-Apple_logo_grey.svg.png" },
  { symbol: "GOOGL", price: 2789.45, logo: "https://www.imagensempng.com.br/wp-content/uploads/2023/05/278-4.png" },
  { symbol: "MSFT", price: 288.67, logo: "https://static.vecteezy.com/system/resources/previews/027/127/473/non_2x/microsoft-logo-microsoft-icon-transparent-free-png.png" },
  { symbol: "AMZN", price: 3276.12, logo: "https://cdn0.iconfinder.com/data/icons/most-usable-logos/120/Amazon-512.png" },
  { symbol: "META", price: 698.34, logo: "https://pngimg.com/d/meta_PNG5.png" },
  { symbol: "TSLA", price: 628.34, logo: "https://static.vecteezy.com/system/resources/previews/020/336/735/non_2x/tesla-logo-tesla-icon-transparent-png-free-vector.jpg" }
];

// Function to generate tape-like display
function displayTape() {
  const tickerTape = document.getElementById("ticker-tape");

  // Clone the original set of stock items
  const originalStockItems = [];
  stocks.forEach(stock => {
      const stockItem = createStockItem(stock);
      originalStockItems.push(stockItem);
      tickerTape.appendChild(stockItem);
  });

  // Clone the original set of stock items and append them after the original set
  originalStockItems.forEach(stockItem => {
      tickerTape.appendChild(stockItem.cloneNode(true));
  });
}

// Function to create a stock item
function createStockItem(stock) {
  const stockItem = document.createElement("div");
  stockItem.classList.add("stock-item");

  // Create image element for logo
  const logoImg = document.createElement("img");
  logoImg.classList.add("stock-logo");
  logoImg.src = stock.logo;

  // Create span for stock information
  const stockInfo = document.createElement("span");
  stockInfo.textContent = `${stock.symbol}: $${stock.price.toFixed(2)}`;

  // Append image and text to stock item
  stockItem.appendChild(logoImg);
  stockItem.appendChild(stockInfo);

  return stockItem;
}

// Run the tape display
displayTape();