

// JavaScript to create and animate flowers randomly
const flowersContainer = document.getElementById("flowers");

// Function to generate a random flower element
function createFlower() {
    const flower = document.createElement("img");
    flower.src = "http://clipart-library.com/images_k/transparent-pink-flower/transparent-pink-flower-21.png"; // Replace with the path to your flower image
    flower.classList.add("flower");
    
    // Set random position and random animation duration
    flower.style.left = Math.random() * 100 + "vw"; // Random horizontal position (100% of viewport width)
    flower.style.animationDuration = Math.random() * 5 + 5 + "s"; // Random falling speed (between 5s and 10s)

    flowersContainer.appendChild(flower);
    
    // Remove flower after animation completes to prevent memory leak
    flower.addEventListener("animationend", () => {
        flower.remove();
    });
}

// Function to create flowers every 200ms
function startFlowerBombing() {
    setInterval(createFlower, 500)// Adjust the frequency as needed
}

// Start the effect when the page loads
window.onload = startFlowerBombing;
