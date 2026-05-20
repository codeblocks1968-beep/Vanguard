const fakeBrands = [
  "Luma", "Velo", "Aether", "Zenith", "Nova", "Artisan", "EcoWear", "FitTech", 
  "Sonic", "Lumina", "Aura", "Shades", "KeyTech", "Orion", "Pulse", "Terra", 
  "Glaze", "Swift", "Peak", "Haven", "Quest", "Vertex", "Flux", "Nexus"
];

const categoryTemplates = {
  Clothing: {
    names: [
      "Urban Techwear Jacket", "Organic Cotton Hoodie", "Premium Denim Jeans", "Merino Wool Beanie", "Breathable Mesh Sneakers",
      "Tailored Linen Blazer", "Sustainable Bamboo Socks", "Vintage Wash Tee", "Minimalist Trench Coat", "Athletic Performance Shorts",
      "Silk Evening Scarf", "Rugged Canvas Overalls", "Lightweight Rain Shell", "Cable Knit Cardigan", "Corduroy Button-Up",
      "Seamless Yoga Leggings", "Structured Peacoat", "Eco-Friendly Windbreaker", "Chambray Work Shirt", "Modern Fit Chinos",
      "Quilted Winter Vest", "Brushed Flannel Shirt", "High-Waist Cargo Pants", "Relaxed Fit Lounge Set", "Graphic Print Sweatshirt"
    ],
    images: [
      "photo-1521572163474-6864f9cf17ab", "photo-1591047139829-d91aecb6caea", "photo-1542272604-787c3835535d", "photo-1576871337622-98d48d7ca536", "photo-1560769629-975ec94e6a86",
      "photo-1598033129183-c4f50c717658", "photo-1582967788600-1bd72540a1e9", "photo-1523381210434-271e8be1f52b", "photo-1544022613-e87ca75a784a", "photo-1506629082955-511b1aa562c8",
      "photo-1520975954732-35dd2229969e", "photo-1473966968600-fa804b86d30b", "photo-1504198453319-5ce911bafcde", "photo-1434389677669-e08b4cac3105", "photo-1596755094514-f87e34085b2c",
      "photo-1506152983158-b4a74a01c721", "photo-1551028719-00167b16eac5", "photo-1556821840-3a63f95609a7", "photo-1593030761757-71fae45fa0e7", "photo-1475178626620-a4d074967452",
      "photo-1608231387042-66d1773070a5", "photo-1594633312681-425c7b97ccd1", "photo-1618354691373-d851c5c3a990", "photo-1620799140408-edc6dcb6d633", "photo-1525507119028-ed4c629a60a3"
    ],
    priceRange: [25, 200],
    hasSizes: true
  },
  Appliances: {
    names: [
      "Turbo-Heat Air Fryer", "Digital Cold Brew Maker", "Smart UV Air Purifier", "Compact Espresso Station", "Silent-Glide Ceiling Fan",
      "Precision Induction Cooktop", "Ionic Hair Dryer", "Robotic Mop & Vacuum", "Touchless Kitchen Faucet", "Programmable Slow Cooker",
      "Electric Gooseneck Kettle", "Countertop Composter", "Portable Dehumidifier", "Dual-Zone Wine Cooler", "Professional Grade Blender",
      "Smart Meat Thermometer", "Electric Milk Frother", "Infrared Toaster Oven", "Handheld Garment Steamer", "Digital Food Dehydrator"
    ],
    images: [
      "photo-1626074353765-517a681e40be", "photo-1559056199-641a0ac8b55e", "photo-158583750cc23-7364fcc6f4bb", "photo-1510127034890-ba27508e9f1c", "photo-1622394096677-b314a973346d",
      "photo-1556910103-1c02745aae4d", "photo-1522338242992-e1a54906a8da", "photo-1518640467707-6811f4a6ab73", "photo-1584622650111-993a426fbf0a", "photo-1547394765-185e1e68f34e",
      "photo-1584917865442-de89df76afd3", "photo-1591461762261-0731f8f3074d", "photo-1581404917879-53e19259fdda", "photo-1584269600464-37b1b58a9fe7", "photo-1517817748493-49ec54a32465",
      "photo-1563245332-692e8965f75a", "photo-1544145945-f904253db0ad", "photo-1584269600464-37b1b58a9fe7", "photo-1563245332-692e8965f75a", "photo-1584269600464-37b1b58a9fe7"
    ],
    priceRange: [50, 450],
    hasSizes: false
  },
  Electronics: {
    names: [
      "Nova-Charge Power Bank", "Sonic-Wave Earbuds", "Apex Mechanical Keyboard", "Quantum VR Headset", "Crystal HD Webcam",
      "Zenith Smart Watch", "Pulse Portable Speaker", "Stream-Deck Hub", "Glide Wireless Mouse", "Vector Graphics Tablet",
      "Aura LED Strip Kit", "Orbit Mesh Router", "Titan External SSD", "Flow Noise-Canceling Headphones", "Focus Monitor Light Bar",
      "Ignite Gaming Controller", "Echo Studio Mic", "Link Smart Home Hub", "Vault Secure Drive", "Vista Dual Monitor Arm",
      "Phantom Charging Dock", "Stealth Keypad", "Lumina Ring Light", "Sync Multi-Device Dock", "Bolt USB-C Hub"
    ],
    images: [
      "photo-1609091839311-d5368196c0ff", "photo-1590658268037-6bf12165a8df", "photo-1595225476474-87563907a212", "photo-1592477382441-c11603bb97a9", "photo-1583573636246-18cb2246697f",
      "photo-1508057198894-247b23fe5ade", "photo-1608156639585-b3a032ef9689", "photo-1586776977607-310e9c725c37", "photo-1527866959252-deab85ef7d1b", "photo-1516035069371-29a1b244cc32",
      "photo-1586816829380-0081079d86a6", "photo-1544197150-b99a580bb7a8", "photo-1531297484001-80022131f5a1", "photo-1505740420928-5e560c06d30e", "photo-1523275335684-37898b6baf30",
      "photo-1592494812255-27a36b139988", "photo-1590602847861-f357a9332bbc", "photo-1558346490-a72e53ae2d4f", "photo-1587829741301-dc798b83dadc", "photo-1547082299-de196ea013d6",
      "photo-1586776977607-310e9c725c37", "photo-1587829741301-dc798b83dadc", "photo-1494438639946-1ebd1d20bf85", "photo-1511707171634-5f897ff02aa9", "photo-1586776977607-310e9c725c37"
    ],
    priceRange: [30, 600],
    hasSizes: false
  },
  Home: {
    names: [
      "Artisan Ceramic Vase", "Minimalist Desk Lamp", "Matte Black Mug Set", "Weighted Throw Blanket", "Hand-Poured Soy Candle",
      "Modern Abstract Wall Art", "Velvet Accent Pillow", "Floating Oak Shelves", "Sculptural Glass Carafe", "Self-Watering Terrarium",
      "Natural Bamboo Bath Mat", "Woven Seagrass Basket", "Frameless Arch Mirror", "Turkish Cotton Towels", "Mid-Century Planter",
      "Linen Table Runner", "Marble Coaster Set", "Brass Candlestick Set", "Recycled Glass Pitcher", "Nordic Style Clock"
    ],
    images: [
      "photo-1578500494198-246f612d3b3d", "photo-1534073828943-f801091bb18c", "photo-1514228742587-6b1558fcca3d", "photo-1513201099705-a9746e1e201f", "photo-1603006905003-be475563bc59",
      "photo-1513519245088-0e12902e5a38", "photo-1584132967334-10e028bd69f7", "photo-1594420516109-17f18579d1a3", "photo-1513558161293-cdaf765ed2fd", "photo-1446064448059-c2388224fe9a",
      "photo-1562184552-997c461abbe6", "photo-1544457070-4cd773b4d71e", "photo-1618220179428-22790b461013", "photo-1583847268964-b28dc2f51ac9", "photo-1592928302636-c83cf1e1c887",
      "photo-1616489953149-80882ba30310", "photo-1616489953609-02685942475a", "photo-1616489953149-2f77868ecf93", "photo-1616489953149-a2928646f903", "photo-1616489953149-f2f77868ecf93"
    ],
    priceRange: [15, 250],
    hasSizes: false
  },
  Sports: {
    names: [
      "Pro-Grip Yoga Mat", "Adjustable Dumbbell Set", "Insulated Sports Bottle", "High-Tension Power Bands", "Speed-Jump Rope",
      "Aerodynamic Cycling Helmet", "Tactical Hiking Pack", "Graphite Tennis Racket", "Official Size Basketball", "Pro-Match Soccer Ball",
      "Anti-Burst Exercise Ball", "Reversible Swim Cap", "Mirror-Lens Goggles", "Leather Boxing Gloves", "Smart Fitness Tracker",
      "Wall-Mount Pull-up Bar", "Instant Cooling Towel", "Ankle Weight Set", "Tournament Golf Balls", "Collapsible Yoga Block"
    ],
    images: [
      "photo-1592432678016-e910b452f9a2", "photo-1583454110551-21f2fa2aac61", "photo-1523362628745-0c100150b504", "photo-1517836357463-d25dfeac3438", "photo-1554344728-77ad9122c73b",
      "photo-1557685888-2d3d953f4e27", "photo-1551632811-561732d1e306", "photo-1617083266943-fa21443d31ff", "photo-1519861531473-92003ff2486b", "photo-1574629810360-7efbbe195018",
      "photo-1599901860904-17e6ed7083a0", "photo-1600881333168-2ed39b7bfc3f", "photo-1555819224-37ea30144f74", "photo-1549719386-74dfcbf7dbed", "photo-1575311373937-040b8e3fd5b6",
      "photo-1591944033232-a05bc61775f0", "photo-1611095777215-6ac32077f8ec", "photo-1611095777215-6ac32077f8ec", "photo-1535131749006-b7f58c99034b", "photo-1599901860904-17e6ed7083a0"
    ],
    priceRange: [20, 300],
    hasSizes: false
  },
  Toys: {
    names: [
      "Handcrafted Wooden Train", "Electronic Synth Keyboard", "Victorian Doll House", "Titanium Action Figure", "Brain-Teaser Puzzle",
      "Nitro-Drift RC Car", "Convertible Art Easel", "Galactic Science Kit", "Strategy Board Game", "Infinite Marble Run",
      "Whirlwind Bubble Machine", "Glowing Flying Disc", "Desktop Bowling Set", "Explorer's Tricycle", "Dual-Line Power Kite",
      "Giant Plush Dragon", "Mechanical Coding Bot", "Solar Powered Rover", "Storyteller Projection", "Musical Jack-in-the-Box"
    ],
    images: [
      "photo-1559454403-b8fb88521f11", "photo-1586073129102-da7323869273", "photo-1515524738708-327f6b0037a7", "photo-1585155770447-2f66e2a3fd7b", "photo-1566576721346-d4a3b4ea353a",
      "photo-1516627145497-ae6968895b74", "photo-1594787318286-3d835c1d207f", "photo-1513364776144-60967b0f800f", "photo-1530210124550-912dc1381cb8", "photo-1610848012064-844223052061",
      "photo-1587654780291-39c9404d746b", "photo-1515488042361-ee00e0ddd4e4", "photo-1515488042361-ee00e0ddd4e4", "photo-1611606063065-ee7946f0787a", "photo-1594787318286-3d835c1d207f",
      "photo-1515488042361-ee00e0ddd4e4", "photo-1515488042361-ee00e0ddd4e4", "photo-1515488042361-ee00e0ddd4e4", "photo-1515488042361-ee00e0ddd4e4", "photo-1515488042361-ee00e0ddd4e4"
    ],
    priceRange: [15, 150],
    hasSizes: false
  },
  Blocks: {
    names: [
      "Emerald City Set", "Interstellar Base Kit", "Cyberpunk Hub Blocks", "Modular Forest Treehouse", "Spectrum Wood Stacker",
      "Kinetic Magnetic Tiles", "Labyrinth Marble maze", "Classic ABC Blocks", "Jurassic Safari Park", "Abyssal Sub Blocks",
      "Central Station Hub", "Rapid Response Fire Kit", "Botanical Garden Set", "Iron-Works Site", "Legendary Pirate Ship",
      "Treehouse Adventure", "Celestial System Kit", "Temple of Time Blocks", "Zero-Waste City Blocks", "Neon Pixel Art Set"
    ],
    images: [
      "photo-1587654780291-39c9404d746b", "photo-1587654780291-39c9404d746b", "photo-1587654780291-39c9404d746b", "photo-1587654780291-39c9404d746b", "photo-1587654780291-39c9404d746b",
      "photo-1587654780291-39c9404d746b", "photo-1587654780291-39c9404d746b", "photo-1587654780291-39c9404d746b", "photo-1587654780291-39c9404d746b", "photo-1587654780291-39c9404d746b",
      "photo-1587654780291-39c9404d746b", "photo-1587654780291-39c9404d746b", "photo-1587654780291-39c9404d746b", "photo-1587654780291-39c9404d746b", "photo-1587654780291-39c9404d746b",
      "photo-1587654780291-39c9404d746b", "photo-1587654780291-39c9404d746b", "photo-1587654780291-39c9404d746b", "photo-1587654780291-39c9404d746b", "photo-1587654780291-39c9404d746b"
    ],
    priceRange: [30, 250],
    hasSizes: false
  }
};

const sizesList = ['XS', 'S', 'M', 'L', 'XL', '2XL'];

const generateProducts = () => {
  const products: any[] = [];
  const categories = Object.keys(categoryTemplates);
  
  // Total 250 products
  const countPerCategory = Math.floor(250 / categories.length);
  
  categories.forEach((catName, catIndex) => {
    const template = categoryTemplates[catName as keyof typeof categoryTemplates];
    const isLast = catIndex === categories.length - 1;
    const count = isLast ? 250 - products.length : countPerCategory;
    
    for (let i = 0; i < count; i++) {
      const id = (products.length + 1).toString();
      const baseName = template.names[i % template.names.length];
      const name = i >= template.names.length 
        ? `${baseName} ${Math.floor(i / template.names.length) + 1}`
        : baseName;
      
      const price = Math.floor(Math.random() * (template.priceRange[1] - template.priceRange[0])) + template.priceRange[0];
      const discount = (i % 5 === 0) ? [10, 15, 20, 30][(i / 5) % 4] : undefined;
      const discountedPrice = discount ? price - (price * discount / 100) : price;
      
      const imgKey = template.images[i % template.images.length];
      const brand = fakeBrands[(i + catIndex * 3) % fakeBrands.length];
      
      products.push({
        id,
        name,
        price,
        discountedPrice: Number(discountedPrice.toFixed(2)),
        image: `https://images.unsplash.com/${imgKey}?auto=format&fit=crop&q=80&w=800`,
        category: catName,
        brand,
        description: `A meticulously designed ${catName.toLowerCase()} product by ${brand}. Engineered for performance and aesthetic appeal.`,
        rating: Number((4 + Math.random() * 0.9).toFixed(1)),
        reviews: Math.floor(Math.random() * 300) + 20,
        isNew: i % 8 === 0,
        discount,
        sizes: template.hasSizes ? sizesList : undefined
      });
    }
  });
  
  // Calculate brands option to add 2 more products for each
  const allBrands = Array.from(new Set(products.map(p => p.brand).filter(Boolean))).sort();
  const selectedBrands = allBrands.slice(0, Math.ceil(allBrands.length / 2));

  selectedBrands.forEach(brand => {
    for (let i = 0; i < 2; i++) {
      const id = (products.length + 1).toString();
      const imgKey = categoryTemplates.Electronics.images[Math.floor(Math.random() * categoryTemplates.Electronics.images.length)];
      products.push({
        id,
        name: `${brand} Exclusive Item ${i + 1}`,
        price: 150 + i * 50,
        discountedPrice: 150 + i * 50,
        image: `https://images.unsplash.com/${imgKey}?auto=format&fit=crop&q=80&w=800`,
        category: "Electronics",
        brand,
        description: `An exclusive addition to the ${brand} lineup, combining innovation with style.`,
        rating: Number((4.5 + Math.random() * 0.5).toFixed(1)),
        reviews: Math.floor(Math.random() * 100) + 10,
        isNew: true,
      });
    }
  });

  return products;
};

export const products = generateProducts();
