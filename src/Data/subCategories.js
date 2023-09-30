const subCategories = [
    {Shops:[
        "Barber",
        "Electical",
        "Hardware",
        "Tent House",
        "Medical",
        "Photo Studio",
        "Vegitable",
        "Sweet Shop",
        "Tea Stall",
        "Book Store",
        "Printing Press",
        "Fast Food",
        "Beej Bhandar",
        "Cobbler Shoes Shop",
        "Butcher",
        "Blacksmith",
        "Goldsmith",
        "Mobile Phone",
        "Dj",
        "Petrol Pumps",
        "Beauty Parlour",
        "Galla-kirana Shop",
        "General Store",
        "E-mitra Shop",
        "Auto Parts & Services",
        "Car Repair",
        "Cycle Repair",
        "Hotal & Restaurant",
        "Life Style & Clothing",
        "Vessel shop",

    ]},
    {Schools:[
        "Government Schools",
        "Private Schools",
    ]},
    {
        Governments:[
            "Banks",
            "Police",
            "Railways",
            "Airports",
            "Electrical",
            "Municipality",
            "Hospitals",
            "Post Offices",
        ]
    },
    {
        "Private Workers":[
            "Plumber",
            "Electrician",
            "DTH TV Operator",
            "Travel & Tourism",
            "Milkman",
            "Painter",
            "Pandit",
            "Shoes Repair Man",
            "Lilgar",
            "Halwai",
            "youtube's",
            "Photographers",
            "पंडित",
            "मौलवी"
        ]
    },
    {
        Hospitals:[
            "Government Hospitals",
            "Private Hospitals",
        ]
    },
    // {
    //     // Temple:null
    //     // Temple:[
    //     //     "Shiva Temple",
    //     //     "Shree Ganesha Temple",
    //     //     "Shree Ram Temple",
    //     //     "Shree Krishna Temple",
    //     //     "Shree Vishnu Temple",
    //     //     "Shree Hanuman Temple",
    //     //     "Shree Lakshmi Temple",
    //     //     "Shree Durga Temple",
    //     //     "Shree Shiv Temple",
    //     //     "Shree Ramdev ji Temple",
    //     //     "Omkar Asaram",
    //     //     "Prayagnath Ji Asaram",
    //     //     "Goga Ji Madi",
    //     //     "Shree Sani Temple",
    //     //     "Shree Sitala Mata Temple",
    //     //     "Ramdev Ji Temple",
    //     //     "Santoshi Matha Temple",
    //     //     "Shree Syam Temple",

    //     // ]
    // },
    {
        Masjid:[
            "Masjid",
        ]
    },
    // {
    //     "Wooden Industry":[
    //         "Wooden Industry",
    //     ]
    // },
    // {
    //     "Iron Industry":[
    //         "Iron Industry",
    //     ]
    // },
    // {
    //     "Guest House":[]
    // }

    
];
const sortedSubCategories = subCategories.map((subCategories) => {
    const sortedCategory = {};
    for (const key in subCategories) {
      sortedCategory[key] = subCategories[key].slice().sort();
    }
    return sortedCategory;
  });
// export default subCategories;
export default sortedSubCategories