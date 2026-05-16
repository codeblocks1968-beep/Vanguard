const fakeBrands = ["Luma", "Velo", "Aether", "Zenith", "Nova", "Artisan", "EcoWear", "FitTech", "Sonic", "Lumina", "Aura", "Shades", "KeyTech", "Orion", "Pulse", "Terra", "Glaze", "Swift", "Peak", "Haven"];

const productData = [
  // 100 Clothing
  ...Array.from({ length: 100 }).map((_, i) => ({
    name: [
      "Essential Cotton Tee", "Linen Button-Up", "Merino Wool Sweater", "Denim Jacket", "Canvas Slip-Ons",
      "Slim Fit Chinos", "Waterproof Rain Shell", "Organic Socks Set", "Jersey Lounge Pants", "Fleece Hoodie",
      "Tailored Blazer", "Silk Scarf", "Knitted Beanie", "Cargo Shorts", "Oxford Shirt",
      "Knit Midi Dress", "Pleated Trousers", "Quilted Vest", "Leather Jacket", "Windbreaker"
    ][i % 20] + (i > 19 ? ` ${Math.floor(i/20) + 1}` : ""),
    price: Math.floor((((i * 7) % 31) + 15)), // $15 - $45
    category: "Clothing",
    brand: fakeBrands[i % fakeBrands.length],
    img: [
      "photo-1521572163474-6864f9cf17ab", "photo-1593030761757-71fae45fa0e7", "photo-1434389677669-e08b4cac3105",
      "photo-1523381210434-271e8be1f52b", "photo-1560769629-975ec94e6a86", "photo-1473966968600-fa804b86d30b",
      "photo-1544022613-e87ca75a784a", "photo-1582967788600-1bd72540a1e9", "photo-1506629082955-511b1aa562c8",
      "photo-1556821840-3a63f95609a7", "photo-1591047139829-d91aecb6caea", "photo-1520975954732-35dd2229969e",
      "photo-1576871337622-98d48d7ca536", "photo-1591195853828-11db59a44f6b", "photo-1596755094514-f87e34085b2c",
      "photo-1515886657613-9f3515b0c78f", "photo-1594633312681-425c7b97ccd1", "photo-1608231387042-66d1773070a5",
      "photo-1551028719-00167b16eac5", "photo-1504198453319-5ce911bafcde"
    ][i % 20],
    desc: "A premium clothing item crafted for comfort and style using sustainable materials.",
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL']
  })),

  // 100 House Appliances
  ...Array.from({ length: 100 }).map((_, i) => ({
    name: [
      "Electric Gooseneck Kettle", "Cast Iron Skillet", "Smart Air Purifier", "Compact Humidifier", "Digital Kitchen Scale",
      "Handheld Milk Frother", "Personal Blender", "Slow Cooker", "Convection Toaster Oven", "Quiet Table Fan",
      "Robotic Vacuum", "Steam Iron", "Electric Coffee Grinder", "Rice Cooker", "Air Fryer",
      "Induction Cooktop", "Electric Wine Opener", "Portable Dehumidifier", "Egg Cooker", "Toaster"
    ][i % 20] + (i > 19 ? ` ${Math.floor(i/20) + 1}` : ""),
    price: Math.floor((((i * 13) % 141) + 40)), // $40 - $180
    category: "Appliances",
    brand: fakeBrands[(i + 5) % fakeBrands.length],
    img: [
      "photo-1584622650111-993a426fbf0a", "photo-1556910103-1c02745aae4d", "photo-158583750cc23-7364fcc6f4bb",
      "photo-1523275335684-37898b6baf30", "photo-1591461762261-0731f8f3074d", "photo-1584269600464-37b1b58a9fe7",
      "photo-1517817748493-49ec54a32465", "photo-1547394765-185e1e68f34e", "photo-1584917865442-de89df76afd3",
      "photo-1622394096677-b314a973346d", "photo-1518640467707-6811f4a6ab73", "photo-1563245332-692e8965f75a",
      "photo-1559056199-641a0ac8b55e", "photo-1544145945-f904253db0ad", "photo-1626074353765-517a681e40be",
      "photo-1556910103-1c02745aae4d", "photo-1510127034890-ba27508e9f1c", "photo-158583750cc23-7364fcc6f4bb",
      "photo-1581404917879-53e19259fdda", "photo-1584269600464-37b1b58a9fe7"
    ][i % 20],
    desc: "A high-performance appliance designed to make your daily home life easier and more efficient."
  })),

  // 100 Electronics
  ...Array.from({ length: 100 }).map((_, i) => ({
    name: [
      "Acoustic Headphones", "Digital Watch", "Bluetooth Keyboard", "Power Bank", "Noise-Canceling Earbuds",
      "Smart LED Clock", "Compact Speaker", "USB-C Hub", "Wireless Charger", "HD Webcam",
      "Wireless Mouse", "Monitor Arm", "Tablet Stand", "Mechanical Keyboard", "Graphics Tablet",
      "VR Headset", "Smart Home Hub", "External SSD", "Microphone", "Gaming Controller"
    ][i % 20] + (i > 19 ? ` ${Math.floor(i/20) + 1}` : ""),
    price: Math.floor((((i * 17) % 231) + 20)), // $20 - $250
    category: "Electronics",
    brand: fakeBrands[(i + 10) % fakeBrands.length],
    img: [
      "photo-1505740420928-5e560c06d30e", "photo-1523275335684-37898b6baf30", "photo-1587829741301-dc798b83dadc",
      "photo-1609091839311-d5368196c0ff", "photo-1590658268037-6bf12165a8df", "photo-1508057198894-247b23fe5ade",
      "photo-1608156639585-b3a032ef9689", "photo-1586776977607-310e9c725c37", "photo-1586816829380-0081079d86a6",
      "photo-1583573636246-18cb2246697f", "photo-1527866959252-deab85ef7d1b", "photo-1547082299-de196ea013d6",
      "photo-1511707171634-5f897ff02aa9", "photo-1595225476474-87563907a212", "photo-1516035069371-29a1b244cc32",
      "photo-1592477382441-c11603bb97a9", "photo-1558346490-a72e53ae2d4f", "photo-1531297484001-80022131f5a1",
      "photo-1590602847861-f357a9332bbc", "photo-1592494812255-27a36b139988"
    ][i % 20],
    desc: "Cutting-edge technology combined with sleek design for the ultimate digital experience."
  })),

  // 100 Mixed (Home, Accessories, Office)
  ...Array.from({ length: 100 }).map((_, i) => ({
    name: [
      "Ceramic Vase", "Desk Lamp", "Coffee Mug Set", "Throw Blanket", "Soy Candle",
      "Wall Art", "Accent Pillow", "Wall Shelves", "Glass Carafe", "Terrarium Kit",
      "Canvas Messenger Bag", "Polarized Sunglasses", "Leather Wallet", "Passport Holder", "Knitted Beanie",
      "Silver Necklace", "Weekend Duffel", "Steel Watch", "Key Organizer", "Parasol"
    ][i % 20] + (i > 19 ? ` ${Math.floor(i/20) + 1}` : ""),
    price: Math.floor((((i * 3) % 51) + 10)), // $10 - $60
    category: ["Home", "Home", "Home", "Home", "Home", "Home", "Home", "Home", "Home", "Home", "Accessories", "Accessories", "Accessories", "Accessories", "Accessories", "Accessories", "Accessories", "Accessories", "Accessories", "Accessories"][i % 20],
    brand: fakeBrands[(i + 15) % fakeBrands.length],
    img: [
      "photo-1578500494198-246f612d3b3d", "photo-1534073828943-f801091bb18c", "photo-1514228742587-6b1558fcca3d",
      "photo-1513201099705-a9746e1e201f", "photo-1603006905003-be475563bc59", "photo-1513519245088-0e12902e5a38",
      "photo-1584132967334-10e028bd69f7", "photo-1594420516109-17f18579d1a3", "photo-1513558161293-cdaf765ed2fd",
      "photo-1446064448059-c2388224fe9a", "photo-1548036328-c9fa89d128fa", "photo-1511499767150-a48a237f0083",
      "photo-1627123424574-724758594e93", "photo-1544333303-5775af6bb602", "photo-1576871337622-98d48d7ca536",
      "photo-1535632066927-ab7c9ab60908", "photo-1553062407-98eeb64c6a62", "photo-1524592094714-0f0654e20314",
      "photo-1584917865442-de89df76afd3", "photo-1521193089946-7aa29d1fe73f"
    ][i % 20],
    desc: "A thoughtfully designed lifestyle item that brings both beauty and utility to your day."
  }))
];

export const products = productData.map((p, index) => {
  const discounts = [10, 25, 33, 50];
  const discount = index % 4 === 0 ? discounts[Math.floor((index / 4) % discounts.length)] : undefined;
  
  return {
    id: (index + 1).toString(),
    name: p.name,
    price: p.price,
    image: `https://images.unsplash.com/${p.img}?auto=format&fit=crop&q=80&w=800`,
    category: p.category,
    brand: p.brand,
    description: p.desc,
    rating: Number((4 + (index % 10) / 10).toFixed(1)),
    reviews: Math.floor((index * 47) % 500) + 10,
    isNew: index % 7 === 0,
    discount: discount,
    sizes: p.sizes
  };
});
