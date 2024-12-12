const products = [
    {
        company: "Shenzhen Gotron Electronic Co.,ltd.",
        logo: "assets/company/Shenzhen Gotron Electronic Co/logo.png",
        mainProducts: [
            "mobile phones", 
            "tablet computers", 
            "walkie-talkies", 
            "rugged tablet computers", 
            "Android barcode scanners"
        ],
        serviceGuarentees: [
            "With raw material traceability mark",
            "RoHS"
        ],
        favorite: true,
        items: [
            { name: "Ulefone Note 20 Pro", price: 97.00, minOrder: "50 pieces", imgSrc: "assets/company/Shenzhen Gotron Electronic Co/products/Ulefone Note 20 pro.png" },
            { name: "Ulefone Note 19", price: 55.00, minOrder: "100 pieces", imgSrc: "assets/company/Shenzhen Gotron Electronic Co/products/Ulefone Note 19.png" }
        ]
    },
    {
        company: "APEX TECH LIMITED",
        logo: "assets/company/apex/logo.png",
        mainProducts: [
            "mobile phones", 
            "data cable", 
            "Bluetooth headset", 
            "mobile phone case", 
            "second hand phone"
        ],
        serviceGuarentees: [
            "With raw material traceability mark",
            "RoHS"
        ],
        favorite: false,
        items: [
            { name: "3-in-1 Wireless Charger", price: 8.29, minOrder: "10 pieces", imgSrc: "assets/company/apex/products/3-in-1 Wireless Charger.png" }
        ]
    },
    {
        company: "Reference Tech (shenzhen) Limited.",
        logo: "assets/company/Reference Tech shenzhen Limited/logo.png",
        mainProducts: [
            "mobile phones", 
            "data cable", 
            "Bluetooth headset", 
            "mobile phone case", 
            "second hand phone"
        ],
        serviceGuarentees: [
            "Support ODM service",
            "Finished product inspection"
        ],
        favorite: true,
        items: [
            { name: "iPhone 15 Pro Max", price: 1039.00, minOrder: "10 pieces", imgSrc: "assets/company/Reference Tech shenzhen Limited/products/iPhone 15 Pro Max.png" },
            { name: "Redmi Note 11 Pro", price: 180.00, minOrder: "2 pieces", imgSrc: "assets/company/Reference Tech shenzhen Limited/products/Redmi Note 11 Pro.png" }
        ]
    },
    {
        company: "Shenzhen Ulewei Electronics Co., Ltd.",
        logo: "assets/company/Shenzhen Ulewei Electronics Co/logo.png",
        mainProducts: [
            "mobile phones", 
            "tablet computers", 
            "walkie-talkies", 
            "rugged tablet computers", 
            "Android barcode scanners"
        ],
        serviceGuarentees: [
            "Supplier evaluation process",
            "In-depth customization",
            "Finished product inspection"
        ],
        favorite: false,
        items: [
            { name: "4g feature phone", price: 25.00, minOrder: "1 piece", imgSrc: "assets/company/Shenzhen Ulewei Electronics Co/products/4g feature phone.png" },
            { name: "Digital Video Camera", price: 100.00, minOrder: "2 pieces", imgSrc: "assets/company/Shenzhen Ulewei Electronics Co/products/Digital Video Camera.png" }
        ]
    },
    {
        company: "Shenzhen Richgrand Electronic Co., Ltd.",
        logo: "assets/company/Shenzhen Richgrand Electronic Co/logo.png",
        mainProducts: [
            "mobile power",
            "data cable", 
            "Bluetooth headset", 
            "mobile phone case", 
            "second-hand phone"
        ],
        serviceGuarentees: [
            "Deep customization",
            "Support ODM service",
            "Light customization"
        ],
        favorite: true,
        items: [
            { name: "iPhone 14 Plus", price: 480.00, minOrder: "1 piece", imgSrc: "assets/company/Shenzhen Richgrand Electronic Co/products/image.png" }
        ]
    },
    {
        company: "Shenzhen South Digital Limited",
        logo: "assets/company/Shenzhen South Digital Limited/logo.png",
        mainProducts: [
            "computers", "host computers", "data cables", "Bluetooth headsets", "second-hand phones"
        ],
        serviceGuarentees: [
            "OEM for big brands",
            "Supplier evaluation procedures",
            "Deep customization"
        ],
        favorite: false,
        items: [
            { name: "Laptop Model A", price: 355.00, minOrder: "1 piece", imgSrc: "assets/company/Shenzhen South Digital Limited/products/image.png" }
        ]
    },
    {
        company: "Shenzhen Hopestar Sci-Tech Co., Ltd.",
        logo: "assets/company/Shenzhen Hopestar Sci-Tech Co/logo.png",
        mainProducts: [
            "mobile phones", "tablet computers", "walkie-talkies", "rugged tablet computers", "Android barcode scanners"
        ],
        serviceGuarentees: [
            "Supplier evaluation process",
            "Deep customization",
            "Support ODM service"
        ],
        favorite: false,
        items: [
            { name: "34-inch monitor", price: 208.00, minOrder: "10 piece", imgSrc: "assets/company/Shenzhen Hopestar Sci-Tech Co/products/image.png" }
        ]
    },
    {
        company: "Beijing Yike Century Technology Co., Ltd.",
        logo: "assets/company/Beijing Yike Century Technology Co/logo.png",
        mainProducts: [
            "workstations", "servers", "computers", "laptops", "computer parts"
        ],
        serviceGuarentees: [
            "Deep customization",
            "Support ODM service",
            "Light customization"
        ],
        favorite: false,
        items: [
            { name: "Lenovo Legion Laptop", price: 1355.00, minOrder: "100 pieces", imgSrc: "assets/company/Beijing Yike Century Technology Co/products/image.png" }
        ]
    },
    {
        company: "Junling Sihai Technology Group Co., Ltd.",
        logo: "assets/company/Junling Sihai Technology Group Co/logo.png",
        mainProducts: [
            "workstations", "servers", "computers", "laptops", "computer parts"
        ],
        serviceGuarentees: [
            "Support ODM service",
            "Supplier evaluation process",
            "Finished product inspection"
        ],
        favorite: false,
        items: [
            { name: "Workstation", price: 1530.00, minOrder: "100 pieces", imgSrc: "assets/company/Junling Sihai Technology Group Co/products/image.png" }
        ]
    }
];

// Function to render company cards with the first product visible
function renderCompanies() {
    const container = document.getElementById('company-list');
    container.innerHTML = "";
    products.forEach((company, companyIndex) => {
        const companyCard = document.createElement('div');
        companyCard.classList.add('company-card');
        companyCard.setAttribute('data-company-index', companyIndex);  // Add an attribute to identify the company

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
                <span class="favorite-star ${company.favorite ? 'favorited' : ''}" onclick="toggleFavorite(${companyIndex})">&#9733;</span>
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
        prevButton.addEventListener('click', () => {
            // Update to the previous product
            currentProductIndex = (currentProductIndex - 1 + company.items.length) % company.items.length;
            updateProductCard(companyCard, company, currentProductIndex);
        });

        // Next button functionality
        const nextButton = companyCard.querySelector('.btn-next');
        nextButton.addEventListener('click', () => {
            // Update to the next product
            currentProductIndex = (currentProductIndex + 1) % company.items.length;
            updateProductCard(companyCard, company, currentProductIndex);
        });

        container.appendChild(companyCard);
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

// Function to toggle favorite status
function toggleFavorite(companyIndex) {
    products[companyIndex].favorite = !products[companyIndex].favorite;
    renderCompanies();
}

// Call the render function to display companies
renderCompanies();