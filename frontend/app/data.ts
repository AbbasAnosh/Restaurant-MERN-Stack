type Product = {
    id: number;
    title: string;
    desc?: string;
    img?: string;
    price: number;
    options?: { title: string; additionalPrice: number }[];
  };
  
  type Products = Product[];
  
  export const featuredProducts: Products = [
    {
      id: 1,
      title: "Sicilian",
      desc: "Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.",
      img: "/temporary/p1.png",
      price: 24.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 2,
      title: "Bacon Deluxe",
      desc: "Indulge in smoky goodness with a flame-grilled beef patty, topped with crispy bacon, melted cheddar cheese, caramelized onions, and a smattering of tangy BBQ sauce.",
      img: "/temporary/p2.png",
      price: 29.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 3,
      title: "Bella Napoli",
      desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
      img: "/temporary/p3.png",
      price: 24.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 4,
      title: "Spicy Arrabbiata",
      desc: "Ignite your taste buds with this fiery pasta creation, combining penne in a spicy tomato sauce infused with garlic, red chili flakes, and fresh basil for the ultimate comfort food experience.",
      img: "/temporary/p4.png",
      price: 26.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 5,
      title: "Jalapeño Fiesta",
      desc: "Ignite your taste buds with a fiery kick! This burger features a succulent beef patty, fiery jalapeños, pepper jack cheese, and a zesty chipotle mayo sauce , and all the classic fixings on a toasted bun.",
      img: "/temporary/p5.png",
      price: 29.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 6,
      title: "Margherita Magic",
      desc: "A timeless favorite with a twist, showcasing a thin crust topped with sweet tomatoes, fresh basil, creamy mozzarella, and a drizzle of extra virgin olive oil, fresh arugula, and a drizzle of balsamic glaze.",
      img: "/temporary/p6.png",
      price: 24.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 7,
      title: "Garlic Parmesan Linguine",
      desc: "A garlic lover's delight, featuring linguine smothered in a creamy Parmesan sauce, infused with garlic and garnished with chopped parsley, bell peppers, and cherry tomatoes.",
      img: "/temporary/p7.png",
      price: 28.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 8,
      title: "Mediterranean Delight",
      desc: "Embark on a culinary journey with this Mediterranean-inspired creation, featuring zesty feta cheese, Kalamata olives, sun-dried tomatoes, and a sprinkle of oregano.",
      img: "/temporary/p8.png",
      price: 32.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 9,
      title: "Hawaiian Teriyaki",
      desc: "Experience a taste of the tropics with a juicy beef patty glazed in tangy teriyaki sauce, topped with grilled pineapple, crispy bacon, and fresh lettuce, and all the classic fixings on a toasted bun.",
      img: "/temporary/p9.png",
      price: 29.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
];
  

type Wine = {
  title: string;
  price: string;
  tags: string[];
}[]

export const wines: Wine = [
  {
    title: 'Chapel Hill Shiraz',
    price: '$56',
    tags: ['AU',  'Bottle'],
  },
  {
    title: 'Catena Malbee',
    price: '$59',
    tags: ['AU' , 'Bottle'],
  },
  {
    title: 'La Vieillw Rose',
    price: '$44',
    tags: ['FR' , '750 ml'],
  },
  {
    title: 'Rhino Pale Ale',
    price: '$31',
    tags: ['CA' , '750 ml'],
  },
  {
    title: 'Irish Guinness',
    price: '$26',
    tags: ['IE' , '750 ml'],
  },
];

export const cocktails: Wine = [
  {
    title: 'Aperol Sprtiz',
    price: '$20',
    tags: ['Aperol'  ,'Villa', 'Marchesi',  'prosecco' , 'soda ', '30 ml'],
  },
  {
    title: "Dark 'N' Stormy",
    price: '$16',
    tags: ['Dark rum ',  'Ginger beer' , 'Slice of lime'],
  },
  {
    title: 'Daiquiri',
    price: '$10',
    tags: ['Rum' , 'Citrus juice' , 'Sugar'],
  },
  {
    title: 'Old Fashioned',
    price: '$31',
    tags: ['Bourbon ',  'Brown sugar',  'Angostura Bitters'],
  },
  {
    title: 'Negroni',
    price: '$26',
    tags: ['Gin',  'Sweet Vermouth',  'Campari',  'Orange garnish'],
  },
];




  
  export const pizzas: Products = [
    {
      id: 1,
      title: "Pepperoni Passion",
      desc: "Experience a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.",
      img: "/food/food1.png",
      price: 24.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 2,
      title: "Mediterranean Delight",
      desc: "Embark on a culinary journey with this Mediterranean-inspired creation, featuring zesty feta cheese, Kalamata olives, sun-dried tomatoes, and a sprinkle of oregano.",
      img: "/food/food2.png",
      price: 32.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 3,
      title: "Bella Napoli",
      desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
      img: "/food/food3.png",
      price: 26.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 4,
      title: "Pesto Primavera",
      desc: "Indulge in a classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
      img: "/food/food4.png",
      price: 28.5,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },

    {
      id: 5,
      title: "Veggie Supreme",
      desc: "A garden-fresh delight loaded with colorful bell peppers, mushrooms, red onions, black olives, and a blend of mozzarella and cheddar cheeses.",
      img: "/food/food5.png",
      price: 23.5,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 6,
      title: "Four Cheese Feast",
      desc: "A cheese lover's dream! Enjoy a symphony of flavors with a combination of mozzarella, cheddar, gouda, and parmesan cheeses, all melted to perfection.",
      img: "/food/food6.png",
      price: 30.0,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
  ];
  
  
  
  // export const pizzas: Products = [
  //   {
  //     id: 1,
  //     title: "Sicilian",
  //     desc: "Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.",
  //     img: "/food/food1.png",
  //     price: 24.9,
  //     options: [
  //       {
  //         title: "Small",
  //         additionalPrice: 0,
  //       },
  //       {
  //         title: "Medium",
  //         additionalPrice: 4,
  //       },
  //       {
  //         title: "Large",
  //         additionalPrice: 6,
  //       },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     title: "Mediterranean Delight",
  //     desc: "Embark on a culinary journey with this Mediterranean-inspired creation, featuring zesty feta cheese, Kalamata olives, sun-dried tomatoes, and a sprinkle of oregano.",
  //     img: "/food/food2.png",
  //     price: 32.9,
  //     options: [
  //       {
  //         title: "Small",
  //         additionalPrice: 0,
  //       },
  //       {
  //         title: "Medium",
  //         additionalPrice: 4,
  //       },
  //       {
  //         title: "Large",
  //         additionalPrice: 6,
  //       },
  //     ],
  //   },
  //   {
  //     id: 3,
  //     title: "Bella Napoli",
  //     desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
  //     img: "/food/food3.png",
  //     price: 26.9,
  //     options: [
  //       {
  //         title: "Small",
  //         additionalPrice: 0,
  //       },
  //       {
  //         title: "Medium",
  //         additionalPrice: 4,
  //       },
  //       {
  //         title: "Large",
  //         additionalPrice: 6,
  //       },
  //     ],
  //   },
  //   {
  //     id: 4,
  //     title: "Pesto Primavera",
  //     desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
  //     img: "/food/food4.png",
  //     price: 28.9,
  //     options: [
  //       {
  //         title: "Small",
  //         additionalPrice: 0,
  //       },
  //       {
  //         title: "Medium",
  //         additionalPrice: 4,
  //       },
  //       {
  //         title: "Large",
  //         additionalPrice: 6,
  //       },
  //     ],
  //   },
  //   {
  //     id: 5,
  //     title: "Veggie Supreme",
  //     desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
  //     img: "/food/food5.png",
  //     price: 24.9,
  //     options: [
  //       {
  //         title: "Small",
  //         additionalPrice: 0,
  //       },
  //       {
  //         title: "Medium",
  //         additionalPrice: 4,
  //       },
  //       {
  //         title: "Large",
  //         additionalPrice: 6,
  //       },
  //     ],
  //   },
  //   {
  //     id: 6,
  //     title: "Four Cheese Fantasy",
  //     desc: "Experience pure cheesy bliss with a melty blend of mozzarella, cheddar, provolone, and Parmesan cheeses, creating a rich and indulgent pizza experience.",
  //     img: "/food/food6.png",
  //     price: 22.9,
  //     options: [
  //       {
  //         title: "Small",
  //         additionalPrice: 0,
  //       },
  //       {
  //         title: "Medium",
  //         additionalPrice: 4,
  //       },
  //       {
  //         title: "Large",
  //         additionalPrice: 6,
  //       },
  //     ],
  //   },
  // ];
  
  export const singleProduct: Product = {
    id: 1,
    title: "Sicilian",
    desc: "Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.",
    img: "/temporary/p1.png",
    price: 24.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  };
  
  
  type Menu = {
    id: number;
    slug: string;
    title: string;
    desc?: string;
    img?: string;
    color: string;
  }[];
  
  export const menu: Menu = [
    {
      id: 1,
      slug: "pastas",
      title: "Italian Pastas",
      desc: "Savor the taste of perfection with our exquisite Italian handmade pasta menu.",
      img: "/temporary/m1.png",
      color: "white",
    },
    {
      id: 2,
      slug: "burgers",
      title: "Juicy Burgers",
      desc: "Burger Bliss: Juicy patties, bold flavors, and gourmet toppings galore.",
      img: "/temporary/m2.png",
      color: "black",
    },
    {
      id: 3,
      slug: "pizzas",
      title: "Cheesy Pizzas",
      desc: "Pizza Paradise: Irresistible slices, mouthwatering toppings, and cheesy perfection.",
      img: "/temporary/m3.png",
      color: "white",
    },
  ];