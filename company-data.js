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
        serviceGuarantees: [
            "With raw material traceability mark",
            "RoHS"
        ],
        favorite: true,
        items: [
            { 
                name: "Ulefone Note 20 Pro", 
                price: 97.00, 
                minOrder: "50 pieces", 
                imgSrc: "assets/company/Shenzhen Gotron Electronic Co/products/Ulefone Note 20 pro.png",
                description: "A powerful smartphone with a stunning HD display, long-lasting battery, and efficient performance for multitasking."
            },
            { 
                name: "Ulefone Note 19", 
                price: 55.00, 
                minOrder: "100 pieces", 
                imgSrc: "assets/company/Shenzhen Gotron Electronic Co/products/Ulefone Note 19.png",
                description: "An affordable yet sleek mobile phone perfect for daily tasks, featuring a clear camera and lightweight design."
            }
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
        serviceGuarantees: [
            "With raw material traceability mark",
            "RoHS"
        ],
        favorite: false,
        items: [
            { 
                name: "3-in-1 Wireless Charger", 
                price: 8.29, 
                minOrder: "10 pieces", 
                imgSrc: "assets/company/apex/products/3-in-1 Wireless Charger.png",
                description: "Charge your phone, earbuds, and smartwatch simultaneously with this compact and efficient wireless charging station."
            }
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
        serviceGuarantees: [
            "Support ODM service",
            "Finished product inspection"
        ],
        favorite: true,
        items: [
            { 
                name: "iPhone 15 Pro Max", 
                price: 1039.00, 
                minOrder: "10 pieces", 
                imgSrc: "assets/company/Reference Tech shenzhen Limited/products/iPhone 15 Pro Max.png",
                description: "Apple's flagship smartphone with a titanium finish, A17 Bionic chip, and advanced camera capabilities."
            },
            { 
                name: "Redmi Note 11 Pro", 
                price: 180.00, 
                minOrder: "2 pieces", 
                imgSrc: "assets/company/Reference Tech shenzhen Limited/products/Redmi Note 11 Pro.png",
                description: "A feature-packed smartphone offering a 108MP camera, AMOLED display, and powerful performance at a great price."
            }
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
        serviceGuarantees: [
            "Supplier evaluation process",
            "In-depth customization",
            "Finished product inspection"
        ],
        favorite: false,
        items: [
            { 
                name: "4g feature phone", 
                price: 25.00, 
                minOrder: "1 piece", 
                imgSrc: "assets/company/Shenzhen Ulewei Electronics Co/products/4g feature phone.png",
                description: "A durable and reliable feature phone with 4G connectivity, perfect for communication in remote areas."
            },
            { 
                name: "Digital Video Camera", 
                price: 100.00, 
                minOrder: "2 pieces", 
                imgSrc: "assets/company/Shenzhen Ulewei Electronics Co/products/Digital Video Camera.png",
                description: "Capture every moment in high definition with this lightweight and easy-to-use digital video camera."
            }
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
        serviceGuarantees: [
            "Deep customization",
            "Support ODM service",
            "Light customization"
        ],
        favorite: true,
        items: [
            { 
                name: "iPhone 14 Plus", 
                price: 480.00, 
                minOrder: "1 piece", 
                imgSrc: "assets/company/Shenzhen Richgrand Electronic Co/products/image.png",
                description: "Experience the power of the iPhone 14 Plus, featuring a large Super Retina display and exceptional battery life."
            }
        ]
    },
    {
        company: "Shenzhen South Digital Limited",
        logo: "assets/company/Shenzhen South Digital Limited/logo.png",
        mainProducts: [
            "computers", "host computers", "data cables", "Bluetooth headsets", "second-hand phones"
        ],
        serviceGuarantees: [
            "OEM for big brands",
            "Supplier evaluation procedures",
            "Deep customization"
        ],
        favorite: false,
        items: [
            { 
                name: "Laptop Model A", 
                price: 355.00, 
                minOrder: "1 piece", 
                imgSrc: "assets/company/Shenzhen South Digital Limited/products/image.png",
                description: "A versatile and lightweight laptop perfect for work, study, and entertainment."
            }
        ]
    },
    {
        company: "Shenzhen Hopestar Sci-Tech Co., Ltd.",
        logo: "assets/company/Shenzhen Hopestar Sci-Tech Co/logo.png",
        mainProducts: [
            "mobile phones", "tablet computers", "walkie-talkies", "rugged tablet computers", "Android barcode scanners"
        ],
        serviceGuarantees: [
            "Supplier evaluation process",
            "Deep customization",
            "Support ODM service"
        ],
        favorite: false,
        items: [
            { 
                name: "34-inch monitor", 
                price: 208.00, 
                minOrder: "10 piece", 
                imgSrc: "assets/company/Shenzhen Hopestar Sci-Tech Co/products/image.png",
                description: "Enhance your productivity with this ultra-wide 34-inch monitor featuring vibrant colors and crisp resolution."
            }
        ]
    },
    {
        company: "Beijing Yike Century Technology Co., Ltd.",
        logo: "assets/company/Beijing Yike Century Technology Co/logo.png",
        mainProducts: [
            "workstations", "servers", "computers", "laptops", "computer parts"
        ],
        serviceGuarantees: [
            "Deep customization",
            "Support ODM service",
            "Light customization"
        ],
        favorite: false,
        items: [
            { 
                name: "Lenovo Legion Laptop", 
                price: 1355.00, 
                minOrder: "100 pieces", 
                imgSrc: "assets/company/Beijing Yike Century Technology Co/products/image.png",
                description: "A high-performance gaming laptop equipped with powerful hardware and advanced cooling."
            }
        ]
    },
    {
        company: "Junling Sihai Technology Group Co., Ltd.",
        logo: "assets/company/Junling Sihai Technology Group Co/logo.png",
        mainProducts: [
            "workstations", "servers", "computers", "laptops", "computer parts"
        ],
        serviceGuarantees: [
            "Support ODM service",
            "Supplier evaluation process",
            "Finished product inspection"
        ],
        favorite: false,
        items: [
            { 
                name: "Workstation", 
                price: 1530.00, 
                minOrder: "100 pieces", 
                imgSrc: "assets/company/Junling Sihai Technology Group Co/products/image.png",
                description: "A powerful workstation optimized for professionals needing superior computing performance."
            }
        ]
    }
];
