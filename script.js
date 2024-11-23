function searchProducts() {
    // Get the search input and convert it to lowercase for case-insensitive matching
    const searchQuery = document.getElementById("search").value.toLowerCase();
    
    // Get all the product elements
    const products = document.querySelectorAll(".product");

    // Loop through each product and hide/show based on the search query
    products.forEach(product => {
        const productName = product.querySelector("h2").textContent.toLowerCase();
        
        // If the product name contains the search query, show it, otherwise hide it
        if (productName.includes(searchQuery)) {
            product.style.display = "block";  // Show product
        } else {
            product.style.display = "none";  // Hide product
        }
    });
}
