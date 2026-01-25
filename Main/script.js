const imagesPerPage = 30;
let currentPage = 1;

// Array of objects containing image path and price
const games = [
    { image: "images/1.jpeg", price: "$19.99" },
    { image: "images/2.jpeg", price: "$24.99" },
    { image: "images/3.jpeg", price: "$14.99" },
    { image: "images/4.jpeg", price: "$29.99" },
    { image: "images/5.jpeg", price: "$9.99" },
    { image: "images/6.jpeg", price: "$34.99" },
    { image: "images/7.jpeg", price: "$39.99" },
    { image: "images/8.jpeg", price: "$49.99" },
    { image: "images/9.jpeg", price: "$59.99" },
    { image: "images/10.jpeg", price: "$12.99" },
    { image: "images/11.jpeg", price: "$22.99" },
    { image: "images/12.jpeg", price: "$27.99" },
    { image: "images/13.jpeg", price: "$17.99" },       
    { image: "images/14.jpeg", price: "$31.99" },
    { image: "images/15.jpeg", price: "$44.99" },
    { image: "images/18.jpeg", price: "$21.99" },
    { image: "images/17.jpeg", price: "$11.99" },
    { image: "images/16.jpeg", price: "$54.99" },
    { image: "images/19.jpeg", price: "$26.99" },
    { image: "images/20.jpeg", price: "$16.99" },
    { image: "images/21.jpeg", price: "$32.99" },
    { image: "images/22.jpeg", price: "$42.99" },
    { image: "images/23.jpeg", price: "$52.99" },
    { image: "images/24.jpeg", price: "$13.99" },
    { image: "images/25.jpeg", price: "$23.99" },
    { image: "images/26.jpeg", price: "$28.99" },
    { image: "images/27.jpeg", price: "$18.99" },
    { image: "images/28.jpeg", price: "$33.99" },
   

    // Add more games here
    // { image: "images/6.jpeg", price: "$34.99" },
];

// Function to display images for the current page
function displayImages() {
    const start = (currentPage - 1) * imagesPerPage;
    const end = start + imagesPerPage;
    const gamesToShow = games.slice(start, end);

    const gameGrid = document.getElementById("game-grid");
    gameGrid.innerHTML = ""; // Clear existing content

    gamesToShow.forEach((game) => {
        const gameItem = document.createElement("div");
        gameItem.classList.add("game-item"); // Changed from "icon" to "game-item"
        
        // Create image element
        const img = document.createElement("img");
        img.src = game.image;
        img.alt = "Game Cover";
        img.loading = "lazy";
        
        // Create price element
        const priceElement = document.createElement("div");
        priceElement.classList.add("game-price");
        priceElement.textContent = game.price;
        
        // Append image and price to gameItem
        gameItem.appendChild(img);
        gameItem.appendChild(priceElement);
        
        // Append gameItem to the grid
        gameGrid.appendChild(gameItem);
    });

    // Update page number
    document.getElementById("page-number").textContent = `${currentPage}`;
    
    // Update active state for pagination
    updatePagination();
}

// Function to update pagination buttons state
function updatePagination() {
    const totalPages = Math.ceil(games.length / imagesPerPage);
    const prevBtn = document.querySelector('.pagination a:first-child');
    const nextBtn = document.querySelector('.pagination a:last-child');
    
    // Disable previous button on first page
    if (currentPage === 1) {
        prevBtn.style.opacity = "0.5";
        prevBtn.style.cursor = "not-allowed";
        prevBtn.onclick = null;
    } else {
        prevBtn.style.opacity = "1";
        prevBtn.style.cursor = "pointer";
        prevBtn.onclick = function() { changePage(-1); return false; };
    }
    
    // Disable next button on last page
    if (currentPage === totalPages) {
        nextBtn.style.opacity = "0.5";
        nextBtn.style.cursor = "not-allowed";
        nextBtn.onclick = null;
    } else {
        nextBtn.style.opacity = "1";
        nextBtn.style.cursor = "pointer";
        nextBtn.onclick = function() { changePage(1); return false; };
    }
}

// Function to handle page change (next/previous)
function changePage(direction) {
    const totalPages = Math.ceil(games.length / imagesPerPage);
    const newPage = currentPage + direction;

    // Only change page if within valid range
    if (newPage >= 1 && newPage <= totalPages) {
        currentPage = newPage;
        displayImages();
        // Scroll to top of grid when changing pages
        document.getElementById('game-grid').scrollIntoView({ behavior: 'smooth' });
    }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    displayImages();
});
