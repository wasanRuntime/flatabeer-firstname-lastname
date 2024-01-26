document.addEventListener('DOMContentLoaded', function () {
    // Make a GET request to retrieve beer data
    fetch('/beers/1')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Update the HTML with the beer details
            updateBeerDetails(data);
        })
        .catch(error => console.error(error));
});

function updateBeerDetails(beerData) {
    // Get the container element
    var container = document.getElementById("beerDetailsContainer");

    // Create HTML elements for beer details
    var beerHTML = `
        <h2>${beerData.name}</h2>
        <img src="${beerData.image_url}" alt="${beerData.name}">
        <p>${beerData.description}</p>
        <div class="reviews">
            <h3>Reviews:</h3>
            <ul>
                ${beerData.reviews.map(review => `<li>${review}</li>`).join('')}
            </ul>
        </div>
    `;

    // Update the container with beer details
    container.innerHTML = beerHTML;
}
