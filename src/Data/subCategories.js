const subCategories = [
    {Shops:[
        "Barber Shop",
        "Electrical Shop",
        "Hardware Shop",
        "Tent House Shop",
        "Medical Store",
        "Photo Studio Shop",
        "Vegetable Shop",
        // "Sweet Shop",
        "Tea Stall Shop",
        "Book Store Shop",
        "Printing Press Shop",
        "Fast Food Shop",
        "Beej Bhandar",
        "Cobbler Shoes Shop",
        "Butcher Shop",
        "Blacksmith Shop",
        "Goldsmith Shop",
        "Mobile Phone Shop",
        "Dj Shop",
        "Petrol Pumps",
        "Beauty Parlor",
        "Grocery Shop",
        "General Store",
        "E-mitra Shop",
        "Auto Parts & Services Shop",
        "Car Repair Shop",
        "Cycle Repair Shop",
        "Hotel & Restaurant",
        "Life Style & Clothing Shop",
        "Vessel Shop",

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
            "Electrical Department",
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
            "Rangrez",
            "Confectionery",
            "youtube's",
            "Photographer",
            "Maulavi",
            "Social Media Handler"
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