// DOM elements
const beerName = document.getElementById('beer-name');
const beerImage = document.getElementById('beer-image');
const beerDescription = document.getElementById('beer-description');
const beerReviewForm = document.getElementById('review-form');
const beerReviewText = document.getElementById('review');
const beerDescriptionForm = document.getElementById('description-form');
const beerEditDescription = document.getElementById('description');
const beerReviewList = document.getElementById('review-list');

// Display beer information
function beerDisplay(beer) {
    // Clear existing reviews
    while (beerReviewList.firstElementChild) {
        beerReviewList.removeChild(beerReviewList.lastElementChild);
    }

    // Display beer details
    beerName.textContent = beer.name;
    beerImage.src = beer.image_url;
    beerDescription.textContent = beer.description;
    beerEditDescription.value = beer.description;

    // Display beer reviews
    for (let review of beer.reviews) {
        let beerReview = document.createElement('li');
        beerReview.textContent = review;
        beerReviewList.appendChild(beerReview);
    }

    // Update beer description
    beerDescriptionForm.addEventListener('submit', (event) => {
        event.preventDefault();
        beer.description = beerEditDescription.value;
        updateBeer(beer);
    });

    // Add reviews
    beerReviewForm.addEventListener('submit', (event) => {
        event.preventDefault();
        if (beerReviewText.value !== '') {
            beer.reviews.push(beerReviewText.value);
            updateBeer(beer);
        } else {
            alert('Please add a review!');
        }
    });
}

// Update beer using PATCH method
function updateBeer(beer) {
    fetch(`http://localhost:3000/beers/${beer.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(beer)
    })
    .then(response => response.json())
    .then(data => beerDisplay(data));
}

// Fetch beer data
function fetchData(beer = null) {
    let baseURL = 'http://localhost:3000/beers/';
    return new Promise((resolve) => {
        let url = beer == null ? baseURL : `${baseURL + beer}`;
        fetch(url)
            .then(response => response.json())
            .then(data => resolve(data));
    });
}

// Display navigation on the left side
function navDisplay(beers) {
    const navBeerList = document.querySelector('#beer-list');
    // Clear existing beer names
    while (navBeerList.firstElementChild) {
        navBeerList.removeChild(navBeerList.lastElementChild);
    }

    // Populate the left side bar with beer names
    beers.forEach(beer => {
        const navElement = document.createElement('li');
        navElement.textContent = beer.name;
        navElement.setAttribute('index', beer.id);
        navBeerList.appendChild(navElement);

        // Add event listener to beer names onClick
        navElement.addEventListener('click', (event) => {
            fetchData(event.target.getAttribute('index'))
                .then(beer => {
                    beerDisplay(beer);
                });
        });
    });
}

// Initialize FlataBeer
function initializeFlataBeer() {
    fetchData()
        .then(beers => navDisplay(beers));

    fetchData(1)
        .then(beers => beerDisplay(beers));
}

initializeFlataBeer();
// DOM elements
const beerName = document.getElementById('beer-name');
const beerImage = document.getElementById('beer-image');
const beerDescription = document.getElementById('beer-description');
const beerReviewForm = document.getElementById('review-form');
const beerReviewText = document.getElementById('review');
const beerDescriptionForm = document.getElementById('description-form');
const beerEditDescription = document.getElementById('description');
const beerReviewList = document.getElementById('review-list');

// Display beer information
function beerDisplay(beer) {
    // Clear existing reviews
    while (beerReviewList.firstElementChild) {
        beerReviewList.removeChild(beerReviewList.lastElementChild);
    }

    // Display beer details
    beerName.textContent = beer.name;
    beerImage.src = beer.image_url;
    beerDescription.textContent = beer.description;
    beerEditDescription.value = beer.description;

    // Display beer reviews
    for (let review of beer.reviews) {
        let beerReview = document.createElement('li');
        beerReview.textContent = review;
        beerReviewList.appendChild(beerReview);
    }

    // Update beer description
    beerDescriptionForm.addEventListener('submit', (event) => {
        event.preventDefault();
        beer.description = beerEditDescription.value;
        updateBeer(beer);
    });

    // Add reviews
    beerReviewForm.addEventListener('submit', (event) => {
        event.preventDefault();
        if (beerReviewText.value !== '') {
            beer.reviews.push(beerReviewText.value);
            updateBeer(beer);
        } else {
            alert('Please add a review!');
        }
    });
}

// Update beer using PATCH method
function updateBeer(beer) {
    fetch(`http://localhost:3000/beers/${beer.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(beer)
    })
    .then(response => response.json())
    .then(data => beerDisplay(data));
}

// Fetch beer data
function fetchData(beer = null) {
    let baseURL = 'http://localhost:3000/beers/';
    return new Promise((resolve) => {
        let url = beer == null ? baseURL : `${baseURL + beer}`;
        fetch(url)
            .then(response => response.json())
            .then(data => resolve(data));
    });
}

// Display navigation on the left side
function navDisplay(beers) {
    const navBeerList = document.querySelector('#beer-list');
    // Clear existing beer names
    while (navBeerList.firstElementChild) {
        navBeerList.removeChild(navBeerList.lastElementChild);
    }

    // Populate the left side bar with beer names
    beers.forEach(beer => {
        const navElement = document.createElement('li');
        navElement.textContent = beer.name;
        navElement.setAttribute('index', beer.id);
        navBeerList.appendChild(navElement);

        // Add event listener to beer names onClick
        navElement.addEventListener('click', (event) => {
            fetchData(event.target.getAttribute('index'))
                .then(beer => {
                    beerDisplay(beer);
                });
        });
    });
}

// Initialize FlataBeer
function initializeFlataBeer() {
    fetchData()
        .then(beers => navDisplay(beers));

    fetchData(1)
        .then(beers => beerDisplay(beers));
}

initializeFlataBeer();
