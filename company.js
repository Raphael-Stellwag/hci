

// Function to render company cards with the first product visible
function renderCompanies() {
    const container = document.getElementById('company-list');
    container.innerHTML = "";
    products.forEach((company, companyIndex) => {
        const companyCard = document.createElement('div');
        companyCard.classList.add('company-card');
        companyCard.setAttribute('data-company-index', companyIndex);  // Add an attribute to identify the company
        companyCard.dataset.id = companyIndex;

        let currentProductIndex = 0;

        let mainProducts = company.mainProducts.join(", ")
        let serviceGuarentees = "";
        company.serviceGuarentees.forEach((serviceGuarentee, serviceGuarenteeIndex) => {
            serviceGuarentees += `<li>${serviceGuarentee}</li>`;
        })

        // Render the first product
        companyCard.innerHTML = `
            <div class="company-header">
                <div class="company-info">
                    <img src="${company.logo}" alt="${company.company}" class="company-logo">
                    <span class="company-name">${company.company}</span>
                </div>
                <span class="favorite-star ${company.favorite ? 'favorited' : ''}"">&#9733;</span>
            </div>
            <div class="company-content">
                <p class="company-main-products">Main products: ${mainProducts}</p>
                <p class="company-service-guarantees-description">SERVICE GUARANTEE</p>
                <ul class="company-service-guarantees">
                    ${serviceGuarentees}
                </ul>
            </div>
            <div class="product-image">
                <img src="${company.items[currentProductIndex].imgSrc}" alt="${company.items[currentProductIndex].name}">
                <button class="btn-prev">&larr;</button>
                <button class="btn-next">&rarr;</button>
            </div>
            <h4 class="product-name">${company.items[currentProductIndex].name}</h4>
            <p class="product-price">Price: ${company.items[currentProductIndex].price.toFixed(2)} $</p>
            <p class="product-min-order">Min. Order: ${company.items[currentProductIndex].minOrder}</p>
            <button class="connect-button">Connect</button>
        `;

        // Previous button functionality
        const prevButton = companyCard.querySelector('.btn-prev');
        prevButton.addEventListener('click', (event) => {
            event.stopPropagation();

            // Update to the previous product
            currentProductIndex = (currentProductIndex - 1 + company.items.length) % company.items.length;
            updateProductCard(companyCard, company, currentProductIndex);
        });

        // Next button functionality
        const nextButton = companyCard.querySelector('.btn-next');
        nextButton.addEventListener('click', (event) => {
            event.stopPropagation();

            // Update to the next product
            currentProductIndex = (currentProductIndex + 1) % company.items.length;
            updateProductCard(companyCard, company, currentProductIndex);
        });

        const favoriteStar = companyCard.querySelector('.favorite-star');
        favoriteStar.addEventListener('click', (event) => {
            event.stopPropagation();

            // Toggle the favorite boolean
            products[companyCard.dataset.id].favorite = !products[companyCard.dataset.id].favorite;
            renderCompanies();
        });
       
        container.appendChild(companyCard);
    });

    // Add click event to redirect to details page
    container.addEventListener('click', function (event) {
        const card = event.target.closest('.company-card');
        if (card) {
            const companyId = card.dataset.id;
            window.location.href = `company-detail.html#${companyId}`;
        }
    });
}

// Function to update product info in the same card
function updateProductCard(companyCard, company, productIndex) {
    const product = company.items[productIndex];
    companyCard.querySelector('.product-image img').src = product.imgSrc;
    companyCard.querySelector('.product-image img').alt = product.name;
    companyCard.querySelector('.product-name').textContent = product.name;
    companyCard.querySelector('.product-price').textContent = `Price: ${product.price.toFixed(2)} $`;
    companyCard.querySelector('.product-min-order').textContent = `Min. Order: ${product.minOrder}`;
}

// Call the render function to display companies
renderCompanies();