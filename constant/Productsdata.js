 const Products = [
    { 
        id: 'product1',
        url: 'https://m.media-amazon.com/images/I/51DGcy8eBCL._SL1080_.jpg', 
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70',
        title: {
            shortTitle: 'Home & Kitchen',
            longTitle: 'Pigeon FAVOURITE Electric Kettle  (1.5 L, Silver, Black)'
        }, 
        price: {
            mrp: 1195,
            cost: 625,
            discount: '47%'
        },
        description: 'This electric kettle from Pigeon will soon become a travelers best friend, a hostelite saviour and an answer to all the midnight cravings. With this handy appliance, you can boil water and use it to make instant noodles, packet soup, coffee and green tea.',
        discount: 'Extra 10% Off', 
        tagline: 'Deal of the day' 
    },
    { 
        id: 'product2',
        url: 'https://rukminim1.flixcart.com/image/416/416/kl6wx3k0/sandwich-maker/8/r/d/sandwich-01-flipkart-smartbuy-original-imagydds4zthxt8z.jpeg?q=70', 
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kl6wx3k0/sandwich-maker/8/r/d/sandwich-01-flipkart-smartbuy-original-imagydds4zthxt8z.jpeg?q=70',
        title: {
            shortTitle: 'Sandwich Makers',
            longTitle: 'Amazon SmartBuy Sandwich 01 Grill  (Black)'
        },
        price: {
            mrp: 1499,
            cost: 899,
            discount: '40%'
        },
        description: 'This non-stick sandwich toaster .easy to use and very handy. Directly hold over flame to make tasty toasts and toasted sandwiches. Specially designed by keeping your needs in mind, the sandwich maker makes whatever youre doing simpler, smarter and better',
        discount: 'From 999', 
        tagline: 'Pestige, Nova & more' 
    },
    { 
        id: 'product3',
        url: 'https://m.media-amazon.com/images/I/8109UiHWJiL._SL1500_.jpg', 
        detailUrl: 'https://m.media-amazon.com/images/I/8109UiHWJiL._SL1500_.jpg', 
        title: {
            shortTitle: 'Fitness Gear',
            longTitle: 'AJRO DEAL New Adjustable Single Resistance Tube (Multicolor) Resistance Tube  (Multicolor)'
        }, 
        price: {
            mrp: 499,
            cost: 166,
            discount: '66%'
        },
        description: 'This unique product can tone your back muscles, reduce belly fat, improve blood circulation and also improves your body posture. It increases the stamina, energy and vitality of the body. The elastic resistance of the rubber training rope can be used to train and exercise in whichever way you want, according to your physical needs.',
        discount: 'Upto 70% Off', 
        tagline: 'Deal of the Day' 
    },
    { 
        id: 'product4',
        url: 'https://rukminim1.flixcart.com/image/300/300/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70', 
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70',
        title: {
            shortTitle: 'Smart Watches',
            longTitle: 'Molife Sense 500 Smartwatch  (Black Strap, Freesize)',
        }, 
        price: {
            mrp: 6999,
            cost: 4049,
            discount: '42%'
        },
        description: 'The Molife Sense 500, a brilliant smartwatch with a beautiful large display. Say hello to the infinity 1.7-inch display with 2.5D curved edges. Thanks to seamless Bluetooth 5.0 connectivity, you wont have to keep waiting. Bring a change to your outfit every day with changeable straps. A splash of color every day keeps the boredom away.',
        discount: 'Grab Now', 
        tagline: 'Best Seller' 
    },
    { 
        id: 'product5',
        url: 'https://rukminim1.flixcart.com/image/416/416/k3uhhu80/hair-dryer/n/m/t/nova-2800-w-professional-nhp-8220-original-imafmvwfhmzsxdrw.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/k3uhhu80/hair-dryer/n/m/t/nova-2800-w-professional-nhp-8220-original-imafmvwfhmzsxdrw.jpeg?q=70', 
        title: {
            shortTitle: 'Trimmers, Dryers & more',
            longTitle: 'Nova Professional NHP 8220 Hair Dryer  (1800 W, Multicolor)'
        }, 
        price: {
            mrp: 1899,
            cost: 1124,
            discount: '40%'
        },
        description: '',
        discount: 'From ₹499', 
        tagline: 'Kubra, Nova & more' 
    },
    { 
        id: 'product6',
        url: 'https://m.media-amazon.com/images/I/71-wJCkNKKL._UY879_.jpg', 
        detailUrl: 'https://m.media-amazon.com/images/I/71-wJCkNKKL._UY879_.jpg',
        title: {
            shortTitle: 'Sanwara',
            longTitle: 'Sanwara Men Silk Solid Kurta'
        }, 
        price: {
            mrp: 1199,
            cost:439            ,
            discount: '63%'
        },
        description: 'Product Dimensions :29 x 21 x 4 cm; 400 Grams',
        discount: 'Extra 10% Off', 
        tagline: 'Deal of the day' 
    },
    {
        id:'product7',
        url: 'https://m.media-amazon.com/images/I/71wVB2DnIEL._UL1500_.jpg',
        detailUrl:'https://m.media-amazon.com/images/I/71wVB2DnIEL._UL1500_.jpg',
        title : {
            shortTitle:'Puma Shoes',
            longTitle:'Puma Unisex-Adult Playmaker Pro Basketball Shoe'
        },
        price:{
            mrp: '8999',
            cost: '5,579' ,
            discount: '38%'
        },
        description:'Puma Unisex-Adult Playmaker Pro Basketball Shoe'
    },
    {
        id:'product8',
        url: 'https://m.media-amazon.com/images/I/41+bIFMI9GL.jpg',
        detailUrl:'https://m.media-amazon.com/images/I/41+bIFMI9GL.jpg',
        title : {
            shortTitle:'T-Shirt',
            longTitle:'The Souled Store Men T-Shirt'
        },
        price:{
            mrp:'1499            ' ,
            cost:'996' ,
            discount: '34'
        },
        description:'Item model number :187590',
        discount:''
    },
    {
        id:'product9',
        url: 'https://m.media-amazon.com/images/I/71IVLqBQIWL._UL1440_.jpg',
        detailUrl:'https://m.media-amazon.com/images/I/71IVLqBQIWL._UL1440_.jpg',
        title : {
            shortTitle:'The Souled Store',
            longTitle:'Official Popeye: Comic Strip Mens and Boys T-Shirts'
        },
        price:{
            mrp: '1499',
            cost: '1049',
            discount: '30%'
        },
        description:'The Souled Store|Official Popeye: Comic Strip Mens and Boys T-Shirts |Half Sleeve| Loose Fit Graphic Printed| 80% Cotton 20% Polyester White Color Men Oversized T-Shirts',
        discount:''
    },
    {
        id:'product10',
        url: 'https://m.media-amazon.com/images/I/714G8PirJWL._UL1109_.jpg',
        detailUrl:'https://m.media-amazon.com/images/I/714G8PirJWL._UL1109_.jpg',
        title : {
            shortTitle:'ODI jersey',
            longTitle:'Nike ODI Men Jersey'
        },
        price:{
            mrp: '3795',
            cost: '2279',
            discount: '40%'
        },
        description:'Nike Men Blue ODI SS Stadium Jersey 2015 (Small), 667870-481',
        discount:''
    },
    {
        id:'product11',
        url: 'https://m.media-amazon.com/images/I/61B0+qQriPL._SX679_.jpg',
        detailUrl:'https://m.media-amazon.com/images/I/61B0+qQriPL._SX679_.jpg',
        title : {
            shortTitle:'iPhone 14',
            longTitle:'Apple iPhone 14 Plus (128 GB) - Midnight'
        },
        price:{
            mrp:89900 ,
            cost:79999 ,
            discount: '11%'
        },
        description:'16.95 cm (6.7-inch) Super Retina XDR display and Industry-leading durability features with Ceramic Shield and water resistance',
        discount:''
    },
    
    {
        id:'product12',
        url: 'https://m.media-amazon.com/images/I/81nz+ly32HL._SL1500_.jpg',
        detailUrl:'https://m.media-amazon.com/images/I/81nz+ly32HL._SL1500_.jpg',
        title : {
            shortTitle:'Cosmic Earbuds',
            longTitle:'Cosmic Byte CosmoBuds X200'
        },
        price:{
            mrp: 5999,
            cost:1299 ,
            discount: '78%'
        },
        description:'Cosmic Byte CosmoBuds X200 True Wireless Earbuds (TWS), BT 5.3, 38ms Latency GOD Mode™, Music Mode, 40Hrs, ENC, IPX5, Voice Assistant (Black)',
        discount:''
    },
    
    {
        id:'product13',
        url: 'https://m.media-amazon.com/images/I/81xnSQAMDLL._SX679_.jpg',
        detailUrl:'https://m.media-amazon.com/images/I/81xnSQAMDLL._SX679_.jpg',
        title : {
            shortTitle:'ASUS ROG Zephyrus M16 (2022)',
            longTitle:'ASUS ROG Zephyrus M16 (2022)'
        },
        price:{
            mrp: '311990', 
            cost: '299900',
            discount: '15%'
        },
        description:'ASUS ROG Zephyrus M16 (2022), 16-inch (40.64 cms) 2K QHD 165Hz/3ms, Intel Core i9-12900H 12th Gen, RTX 3070 Ti 8GB Graphics, Gaming Laptop (32GB/1TB SSD/Win 11/Office 2021/Black/2 Kg), GU603ZW-K8033WS',
        discount:''
    },
    {
        id:'product14',
        url: 'https://m.media-amazon.com/images/I/71-E+cXcs1L._SX679_.jpg',
        detailUrl:'https://m.media-amazon.com/images/I/71-E+cXcs1L._SX679_.jpg',
        title : {
            shortTitle:'Sony DSLR',
            longTitle:'Sony Alpha ILCE-6400M 24.2MP Mirrorless Digital SLR Camera '
        },
        price:{
            mrp:'116490' ,
            cost: '102989',
            discount: '12%'
        },
        description:'Sony Alpha ILCE-6400M 24.2MP Mirrorless Digital SLR Camera (Black) with 18-135mm Power Zoom Lens (APS-C Sensor, Real-Time Eye Auto Focus, 4K Vlogging Camera, Tiltable LCD) - Black',
        discount:''
    },
    {
        id: 'product15',
        url: 'https://m.media-amazon.com/images/I/51HBom8xz7L._SX679_.jpg', 
        detailUrl: 'https://m.media-amazon.com/images/I/51HBom8xz7L._SX679_.jpg',
        title: {
            shortTitle: 'boAt Airdopes 141',
            longTitle: 'boAt Airdopes 141 Bluetooth Truly Wireless in Ear Earbuds with mic, 42H Playtime'
        }, 
        price: {
            mrp: 2099,
            cost: 999,
            discount: '40%'
        },
        description: 'boAt Airdopes 141 Bluetooth Truly Wireless in Ear Earbuds with mic, 42H Playtime, Beast Mode(Low Latency Upto 80ms) for Gaming, ENx Tech, ASAP Charge, IWP, IPX4 Water Resistance (Bold Black)',
        discount: 'Extra 10% Off', 
        tagline: 'Deal of the day' 
    }
]

module.exports=Products;




// const d = "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Jupiter/Launches/T3/DesktopGateway_CategoryCard2x_758X608_T3._SY608_CB639883570_.jpg"