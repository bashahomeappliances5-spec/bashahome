export const PRODUCTS = [
  // Air Conditioners
  {
    id: 1,
    name: "CoolMaster Split AC 1.5 Ton",
    category: "Air Conditioners",
    subCategory: "Split AC",
    brand: "Voltas",
    description: "5 Star energy rating, copper condenser, fast cooling technology.",
    longDescription: "Experience ultimate cooling with the CoolMaster Split AC 1.5 Ton. Designed for efficiency and performance, this AC features a 5-star energy rating to save on electricity bills. The 100% copper condenser ensures durability and efficient cooling even in extreme temperatures. With its fast cooling technology, your room cools down in minutes.",
    features: [
      "1.5 Ton Capacity",
      "5 Star Energy Rating",
      "100% Copper Condenser",
      "Fast Cooling Mode",
      "Low Noise Operation",
      "10 Year Compressor Warranty"
    ],
    image: "https://picsum.photos/seed/ac1/800/600",
    price: "₹35,999"
  },
  {
    id: 6,
    name: "Inverter Split AC 2 Ton",
    category: "Air Conditioners",
    subCategory: "Split AC",
    brand: "LG",
    description: "Wi-Fi enabled, PM 2.5 filter, 4-way swing.",
    longDescription: "Smart cooling for large rooms. This 2 Ton Inverter Split AC is Wi-Fi enabled, allowing you to control it from your smartphone. It comes with a PM 2.5 filter to ensure the air you breathe is clean. The 4-way swing ensures uniform cooling across the room.",
    features: [
      "2 Ton Capacity",
      "Wi-Fi Control",
      "PM 2.5 Air Filter",
      "4-Way Air Swing",
      "Voice Control Compatible",
      "Anti-Corrosion Coating"
    ],
    image: "https://picsum.photos/seed/ac2/800/600",
    price: "₹48,990"
  },
  {
    id: 10,
    name: "Daikin 1.5 Ton Split AC",
    category: "Air Conditioners",
    subCategory: "Split AC",
    brand: "Daikin",
    description: "Neo Swing Inverter Compressor, Econo Mode.",
    longDescription: "Daikin's Neo Swing Inverter Compressor decreases friction and vibration. It also prevents leakage of refrigerant gas during compression. The Econo mode enables efficient operation by limiting the maximum power consumption.",
    features: ["1.5 Ton", "Neo Swing Compressor", "Econo Mode", "Coanda Airflow"],
    image: "https://picsum.photos/seed/ac3/800/600",
    price: "₹39,500"
  },
  {
    id: 11,
    name: "Mitsubishi Heavy Duty 1.5 Ton",
    category: "Air Conditioners",
    subCategory: "Split AC",
    brand: "Mitsubishi Heavy Duty",
    description: "Hyper Inverter, 3D Auto Airflow, Jet Flow Technology.",
    longDescription: "Heavy duty cooling for extreme summers. Features Jet Flow technology used in aircraft engines to deliver long reach airflow.",
    features: ["1.5 Ton", "Hyper Inverter", "Jet Flow", "3D Auto Airflow"],
    image: "https://aaravelectronics.com/cdn/shop/files/31IoLCpHF4L._SL1000_be045dfb-0e60-4b8f-9a56-b0128b39a400.jpg?v=1766863802",
    price: "₹52,000"
  },

  // Refrigerators
  {
    id: 2,
    name: "FrostFree Double Door Fridge",
    category: "Refrigerators",
    subCategory: "Double Door",
    brand: "Samsung",
    description: "265L capacity, convertible modes, digital inverter compressor.",
    longDescription: "Keep your food fresh for longer with the FrostFree Double Door Fridge. With a spacious 265L capacity, it's perfect for medium-sized families. The digital inverter compressor adjusts speed according to cooling demand, ensuring quiet operation and energy efficiency. Convertible modes allow you to turn the freezer into a fridge when you need more space.",
    features: [
      "265 Litres Capacity",
      "Frost Free Technology",
      "Digital Inverter Compressor",
      "Convertible 5-in-1 Modes",
      "Toughened Glass Shelves",
      "Stabilizer Free Operation"
    ],
    image: "https://picsum.photos/seed/fridge1/800/600",
    price: "₹28,499"
  },
  {
    id: 12,
    name: "LG Single Door Refrigerator",
    category: "Refrigerators",
    subCategory: "Single Door",
    brand: "LG",
    description: "190L, Smart Inverter Compressor, Direct Cool.",
    longDescription: "Economical and stylish single door refrigerator with smart inverter compressor for energy savings.",
    features: ["190 Litres", "Direct Cool", "Smart Inverter", "Base Stand with Drawer"],
    image: "https://picsum.photos/seed/fridge2/800/600",
    price: "₹16,500"
  },
  {
    id: 13,
    name: "Whirlpool Double Door",
    category: "Refrigerators",
    subCategory: "Double Door",
    brand: "Whirlpool",
    description: "Intellifresh Technology, 265L, 3 Star.",
    longDescription: "Experience long-lasting freshness with Whirlpool's Intellifresh technology.",
    features: ["265 Litres", "Intellifresh", "Microblock Technology", "Freshflow Air Tower"],
    image: "https://picsum.photos/seed/fridge3/800/600",
    price: "₹26,900"
  },

  // Washing Machines
  {
    id: 3,
    name: "Front Load Washing Machine",
    category: "Washing Machines",
    subCategory: "Front Load",
    brand: "Bosch",
    description: "7kg capacity, steam wash, 1200 RPM spin speed.",
    longDescription: "Give your clothes the care they deserve with our Front Load Washing Machine. The 7kg capacity is ideal for daily laundry. It comes with a steam wash feature that removes up to 99.9% of bacteria and allergens. The high 1200 RPM spin speed ensures faster drying.",
    features: [
      "7kg Load Capacity",
      "Fully Automatic Front Load",
      "Steam Wash Technology",
      "1200 RPM Spin Speed",
      "Inverter Motor",
      "Child Lock Safety"
    ],
    image: "https://picsum.photos/seed/wash1/800/600",
    price: "₹32,990"
  },
  {
    id: 9,
    name: "Top Load Washing Machine",
    category: "Washing Machines",
    subCategory: "Top Load",
    brand: "Samsung",
    description: "6.5kg fully automatic, diamond drum, magic filter.",
    longDescription: "Efficient and easy to use, this 6.5kg Top Load Washing Machine is perfect for small families. The diamond drum design is gentle on clothes while ensuring a thorough wash. The magic filter effectively gathers lint and fluff.",
    features: [
      "6.5kg Capacity",
      "Fully Automatic Top Load",
      "Diamond Drum Technology",
      "Magic Lint Filter",
      "Eco Tub Clean",
      "Quick Wash Cycle"
    ],
    image: "https://picsum.photos/seed/wash2/800/600",
    price: "₹16,490"
  },
  {
    id: 14,
    name: "LG Semi Automatic",
    category: "Washing Machines",
    subCategory: "Semi Automatic",
    brand: "LG",
    description: "8kg, Roller Jet Pulsator, Rat Away Technology.",
    longDescription: "Powerful washing with Roller Jet Pulsator and durable plastic body.",
    features: ["8kg Capacity", "Semi Automatic", "Roller Jet Pulsator", "Wind Jet Dry"],
    image: "https://picsum.photos/seed/wash3/800/600",
    price: "₹14,500"
  },

  // Microwaves
  {
    id: 4,
    name: "Solo Microwave Oven",
    category: "Microwaves",
    subCategory: "Solo",
    brand: "Samsung",
    description: "20L capacity, ceramic enamel cavity, rapid defrost.",
    longDescription: "Cook, reheat, and defrost with ease using the Solo Microwave Oven. Its 20L capacity is compact yet sufficient for standard cooking needs. The ceramic enamel cavity is scratch-resistant and easy to clean. Rapid defrost lets you thaw frozen foods quickly and evenly.",
    features: [
      "20 Litres Capacity",
      "Solo Microwave",
      "Ceramic Enamel Cavity",
      "Rapid Defrost",
      "Touch Key Pad",
      "Child Safety Lock"
    ],
    image: "https://picsum.photos/seed/micro1/800/600",
    price: "₹6,999"
  },
  {
    id: 15,
    name: "LG Convection Microwave",
    category: "Microwaves",
    subCategory: "Convection",
    brand: "LG",
    description: "28L, Charcoal Lighting Heater, Diet Fry.",
    longDescription: "All-in-one microwave for baking, grilling, and heating. Features Diet Fry for healthier cooking.",
    features: ["28 Litres", "Convection", "Charcoal Lighting Heater", "Stainless Steel Cavity"],
    image: "https://picsum.photos/seed/micro2/800/600",
    price: "₹12,990"
  },

  // Commercial Freezers
  {
    id: 7,
    name: "Commercial Deep Freezer",
    category: "Commercial Freezers",
    subCategory: "Chest Box",
    brand: "Voltas",
    description: "400L hard top, heavy duty compressor, lock & key.",
    longDescription: "Ideal for businesses, this 400L Commercial Deep Freezer offers massive storage for frozen goods. The hard top door is durable and doubles as a workspace if needed. Powered by a heavy-duty compressor for reliable freezing even in high ambient temperatures.",
    features: [
      "400 Litres Capacity",
      "Hard Top Single Door",
      "Heavy Duty Compressor",
      "Lock & Key Mechanism",
      "High Density PUF Insulation",
      "Castor Wheels for Mobility"
    ],
    image: "https://picsum.photos/seed/commfridge1/800/600",
    price: "₹22,000"
  },
  {
    id: 16,
    name: "Bluestar Glass Top Freezer",
    category: "Commercial Freezers",
    subCategory: "Glass Door",
    brand: "Bluestar",
    description: "300L, Curved Glass, LED Lighting.",
    longDescription: "Perfect for display and storage of frozen items like ice creams.",
    features: ["300 Litres", "Curved Glass Top", "LED Lighting", "Tropicalized Compressor"],
    image: "https://picsum.photos/seed/commfridge2/800/600",
    price: "₹28,500"
  },

  // Water Dispensers & Stabilizers (Keeping existing ones)
  {
    id: 5,
    name: "Hot & Cold Water Dispenser",
    category: "Water Dispensers",
    subCategory: "Floor Standing",
    brand: "Voltas",
    description: "Floor standing, cooling cabinet, child lock safety.",
    longDescription: "Enjoy instant access to hot, cold, and normal water with this Floor Standing Water Dispenser. It features a built-in cooling cabinet at the bottom for storing small beverages. The hot water faucet comes with a child lock to prevent accidental burns.",
    features: [
      "Hot, Cold & Normal Water",
      "Floor Standing Design",
      "14L Cooling Cabinet",
      "Child Lock for Hot Water",
      "High Efficiency Compressor",
      "Stainless Steel Tank"
    ],
    image: "https://picsum.photos/seed/water1/800/600",
    price: "₹8,500"
  },
  {
    id: 8,
    name: "Voltage Stabilizer 4KVA",
    category: "Stabilizers",
    subCategory: "Mainline",
    brand: "V-Guard",
    description: "Digital display, time delay, high voltage cut-off.",
    longDescription: "Protect your expensive appliances with this 4KVA Voltage Stabilizer. Suitable for ACs up to 1.5 Ton. It features a digital display for input/output voltage monitoring. The time delay system protects the compressor from frequent restarts.",
    features: [
      "4 KVA Capacity",
      "Working Range: 130V - 300V",
      "Digital Display",
      "High/Low Voltage Cut-off",
      "Intelligent Time Delay",
      "Wall Mountable"
    ],
    image: "https://picsum.photos/seed/stab1/800/600",
    price: "₹2,499"
  },
  // Mitsubishi Heavy Duty Split ACs
  {
    id: 17,
    name: "Mitsubishi Heavy Duty 1.6 Ton WiFi",
    category: "Air Conditioners",
    subCategory: "Split AC",
    brand: "Mitsubishi Heavy Duty",
    description: "Hyper Inverter, High Airflow, WiFi Enabled.",
    longDescription: "Model SRK18YYS-W6. 1.6 Ton Hyper Inverter Hi-Wall AC with WiFi. Features High Airflow series for efficient cooling.",
    features: ["1.6 Ton", "Hyper Inverter", "WiFi Enabled", "High Airflow", "R32 Refrigerant"],
    image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ4i6O1kUOEfjOBghsR2zJHj2pPt3zXYJyU9NweDykYcZXNiYEvkLehT0Gsn0ObRaL6WdNsSf6-FLZM1iYFZaOyyNupyOWbpmUSlKrrBjlG1-qTmqoIssU0v_w&usqp=CAc",
    price: "Enquire for Price"
  },
  {
    id: 18,
    name: "Mitsubishi Heavy Duty 2.2 Ton WiFi",
    category: "Air Conditioners",
    subCategory: "Split AC",
    brand: "Mitsubishi Heavy Duty",
    description: "Hyper Inverter, Turbojet Flow, WiFi Enabled.",
    longDescription: "Model SRK24YYS-W6. 2.2 Ton Hyper Inverter Hi-Wall AC with WiFi. Features Turbojet Flow for long reach airflow.",
    features: ["2.2 Ton", "Hyper Inverter", "WiFi Enabled", "Turbojet Flow", "R32 Refrigerant"],
    image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ4i6O1kUOEfjOBghsR2zJHj2pPt3zXYJyU9NweDykYcZXNiYEvkLehT0Gsn0ObRaL6WdNsSf6-FLZM1iYFZaOyyNupyOWbpmUSlKrrBjlG1-qTmqoIssU0v_w&usqp=CAc",
    price: "Enquire for Price"
  },
  {
    id: 19,
    name: "Mitsubishi Heavy Duty 3.0 Ton",
    category: "Air Conditioners",
    subCategory: "Split AC",
    brand: "Mitsubishi Heavy Duty",
    description: "Hyper Inverter, Turbojet Flow, Powerful Cooling.",
    longDescription: "Model SRK100YA-W6. 3.0 Ton Hyper Inverter Hi-Wall AC. Designed for large spaces with Turbojet Flow technology.",
    features: ["3.0 Ton", "Hyper Inverter", "Turbojet Flow", "R32 Refrigerant"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO5l_VFmfCY-BA87Pm3wQ2E6CaVyg51FdTHA&s",
    price: "Enquire for Price"
  },
  {
    id: 20,
    name: "Mitsubishi Heavy Duty 1.0 Ton New Series",
    category: "Air Conditioners",
    subCategory: "Split AC",
    brand: "Mitsubishi Heavy Duty",
    description: "Hyper Inverter, High Airflow, New Series.",
    longDescription: "Model SRK13YYM-W6. 1.0 Ton Hyper Inverter Hi-Wall AC. Part of the New Series with High Airflow design.",
    features: ["1.0 Ton", "Hyper Inverter", "High Airflow", "R32 Refrigerant"],
    image: "https://picsum.photos/seed/mitsu4/800/600",
    price: "Enquire for Price"
  },
  {
    id: 21,
    name: "Mitsubishi Heavy Duty 1.6 Ton New Series",
    category: "Air Conditioners",
    subCategory: "Split AC",
    brand: "Mitsubishi Heavy Duty",
    description: "Hyper Inverter, High Airflow, Efficient Cooling.",
    longDescription: "Model SRK18YYM-W6. 1.6 Ton Hyper Inverter Hi-Wall AC. High efficiency cooling with R32 refrigerant.",
    features: ["1.6 Ton", "Hyper Inverter", "High Airflow", "R32 Refrigerant"],
    image: "https://picsum.photos/seed/mitsu5/800/600",
    price: "Enquire for Price"
  },
  {
    id: 22,
    name: "Mitsubishi Heavy Duty 1.8 Ton New Series",
    category: "Air Conditioners",
    subCategory: "Split AC",
    brand: "Mitsubishi Heavy Duty",
    description: "Hyper Inverter, Turbojet Flow, Powerful.",
    longDescription: "Model SRK20YYM-W6. 1.8 Ton Hyper Inverter Hi-Wall AC. Features Turbojet Flow for rapid cooling.",
    features: ["1.8 Ton", "Hyper Inverter", "Turbojet Flow", "R32 Refrigerant"],
    image: "https://picsum.photos/seed/mitsu6/800/600",
    price: "Enquire for Price"
  },
  {
    id: 23,
    name: "Mitsubishi Heavy Duty 2.1 Ton New Series",
    category: "Air Conditioners",
    subCategory: "Split AC",
    brand: "Mitsubishi Heavy Duty",
    description: "Hyper Inverter, Turbojet Flow, Large Capacity.",
    longDescription: "Model SRK24YYM-W6. 2.1 Ton Hyper Inverter Hi-Wall AC. Ideal for larger rooms.",
    features: ["2.1 Ton", "Hyper Inverter", "Turbojet Flow", "R32 Refrigerant"],
    image: "https://picsum.photos/seed/mitsu7/800/600",
    price: "Enquire for Price"
  },
  {
    id: 24,
    name: "Mitsubishi Heavy Duty 1.0 Ton Standard",
    category: "Air Conditioners",
    subCategory: "Split AC",
    brand: "Mitsubishi Heavy Duty",
    description: "Hyper Inverter, High Airflow, Standard Series.",
    longDescription: "Model SRK13YXP-W6. 1.0 Ton Hyper Inverter Hi-Wall AC. Standard series with reliable performance.",
    features: ["1.0 Ton", "Hyper Inverter", "High Airflow", "R32 Refrigerant"],
    image: "https://picsum.photos/seed/mitsu8/800/600",
    price: "Enquire for Price"
  },
  {
    id: 25,
    name: "Mitsubishi Heavy Duty 1.5 Ton Standard",
    category: "Air Conditioners",
    subCategory: "Split AC",
    brand: "Mitsubishi Heavy Duty",
    description: "Hyper Inverter, High Airflow, Standard Series.",
    longDescription: "Model SRK18YXP-W6. 1.5 Ton Hyper Inverter Hi-Wall AC. Efficient and durable.",
    features: ["1.5 Ton", "Hyper Inverter", "High Airflow", "R32 Refrigerant"],
    image: "https://aaravelectronics.com/cdn/shop/files/31IoLCpHF4L._SL1000_be045dfb-0e60-4b8f-9a56-b0128b39a400.jpg?v=1766863802",
    price: "Enquire for Price"
  },
  {
    id: 26,
    name: "Mitsubishi Heavy Duty 1.1 Ton Standard",
    category: "Air Conditioners",
    subCategory: "Split AC",
    brand: "Mitsubishi Heavy Duty",
    description: "Hyper Inverter, High Airflow, Compact.",
    longDescription: "Model SRK13YXS-W6. 1.1 Ton Hyper Inverter Hi-Wall AC. Compact design with high airflow.",
    features: ["1.1 Ton", "Hyper Inverter", "High Airflow", "R32 Refrigerant"],
    image: "https://picsum.photos/seed/mitsu10/800/600",
    price: "Enquire for Price"
  },
  {
    id: 27,
    name: "Mitsubishi Heavy Duty 1.65 Ton Standard",
    category: "Air Conditioners",
    subCategory: "Split AC",
    brand: "Mitsubishi Heavy Duty",
    description: "Hyper Inverter, Turbojet Flow, Enhanced Cooling.",
    longDescription: "Model SRK18YXS2-W6. 1.65 Ton Hyper Inverter Hi-Wall AC. Features Turbojet Flow for better air distribution.",
    features: ["1.65 Ton", "Hyper Inverter", "Turbojet Flow", "R32 Refrigerant"],
    image: "https://picsum.photos/seed/mitsu11/800/600",
    price: "Enquire for Price"
  },
  {
    id: 28,
    name: "Mitsubishi Heavy Duty 2.2 Ton Standard",
    category: "Air Conditioners",
    subCategory: "Split AC",
    brand: "Mitsubishi Heavy Duty",
    description: "Hyper Inverter, Turbojet Flow, High Capacity.",
    longDescription: "Model SRK24YVS-W6. 2.2 Ton Hyper Inverter Hi-Wall AC. Powerful cooling for large areas.",
    features: ["2.2 Ton", "Hyper Inverter", "Turbojet Flow", "R32 Refrigerant"],
    image: "https://picsum.photos/seed/mitsu12/800/600",
    price: "Enquire for Price"
  },
  {
    id: 29,
    name: "Mitsubishi Heavy Duty 1.1 Ton Heavy Duty",
    category: "Air Conditioners",
    subCategory: "Split AC",
    brand: "Mitsubishi Heavy Duty",
    description: "Heavy Duty AC, High Airflow, R410A.",
    longDescription: "Model SRK13CRS-S6. 1.1 Ton Heavy Duty AC. Robust performance with R410A refrigerant.",
    features: ["1.1 Ton", "Heavy Duty AC", "High Airflow", "R410A Refrigerant"],
    image: "https://picsum.photos/seed/mitsu13/800/600",
    price: "Enquire for Price"
  },
  {
    id: 30,
    name: "Mitsubishi Heavy Duty 1.3 Ton Hybrid",
    category: "Air Conditioners",
    subCategory: "Split AC",
    brand: "Mitsubishi Heavy Duty",
    description: "Hybrid Heavy Duty, High Airflow, R32.",
    longDescription: "Model SRK15CXS-W6. 1.3 Ton Hybrid Heavy Duty AC. Combines efficiency with power.",
    features: ["1.3 Ton", "Hybrid Heavy Duty", "High Airflow", "R32 Refrigerant"],
    image: "https://picsum.photos/seed/mitsu14/800/600",
    price: "Enquire for Price"
  },
  {
    id: 31,
    name: "Mitsubishi Heavy Duty 1.6 Ton Hybrid",
    category: "Air Conditioners",
    subCategory: "Split AC",
    brand: "Mitsubishi Heavy Duty",
    description: "Hybrid Heavy Duty, Turbojet Flow, R32.",
    longDescription: "Model SRK20CXS-W6. 1.6 Ton Hybrid Heavy Duty AC. Features Turbojet Flow.",
    features: ["1.6 Ton", "Hybrid Heavy Duty", "Turbojet Flow", "R32 Refrigerant"],
    image: "https://picsum.photos/seed/mitsu15/800/600",
    price: "Enquire for Price"
  },
  {
    id: 32,
    name: "Mitsubishi Heavy Duty 1.6 Ton Hybrid R410A",
    category: "Air Conditioners",
    subCategory: "Split AC",
    brand: "Mitsubishi Heavy Duty",
    description: "Hybrid Heavy Duty, Turbojet Flow, R410A.",
    longDescription: "Model SRK20CSS-S6/A. 1.6 Ton Hybrid Heavy Duty AC with R410A refrigerant.",
    features: ["1.6 Ton", "Hybrid Heavy Duty", "Turbojet Flow", "R410A Refrigerant"],
    image: "https://picsum.photos/seed/mitsu16/800/600",
    price: "Enquire for Price"
  },
  {
    id: 33,
    name: "Mitsubishi Heavy Duty 1.95 Ton Hybrid",
    category: "Air Conditioners",
    subCategory: "Split AC",
    brand: "Mitsubishi Heavy Duty",
    description: "Hybrid Heavy Duty, Turbojet Flow, R410A.",
    longDescription: "Model SRK24CW-S6. 1.95 Ton Hybrid Heavy Duty AC. Powerful cooling.",
    features: ["1.95 Ton", "Hybrid Heavy Duty", "Turbojet Flow", "R410A Refrigerant"],
    image: "https://picsum.photos/seed/mitsu17/800/600",
    price: "Enquire for Price"
  },
  {
    id: 34,
    name: "Mitsubishi Heavy Duty 1.95 Ton Hybrid CWX",
    category: "Air Conditioners",
    subCategory: "Split AC",
    brand: "Mitsubishi Heavy Duty",
    description: "Hybrid Heavy Duty, Turbojet Flow, R410A.",
    longDescription: "Model SRK25CWX-S6. 1.95 Ton Hybrid Heavy Duty AC.",
    features: ["1.95 Ton", "Hybrid Heavy Duty", "Turbojet Flow", "R410A Refrigerant"],
    image: "https://picsum.photos/seed/mitsu18/800/600",
    price: "Enquire for Price"
  },
  {
    id: 35,
    name: "Mitsubishi Heavy Duty 2.2 Ton Hybrid",
    category: "Air Conditioners",
    subCategory: "Split AC",
    brand: "Mitsubishi Heavy Duty",
    description: "Hybrid Heavy Duty, Turbojet Flow, R410A.",
    longDescription: "Model SRK25CSS-S6/A. 2.2 Ton Hybrid Heavy Duty AC.",
    features: ["2.2 Ton", "Hybrid Heavy Duty", "Turbojet Flow", "R410A Refrigerant"],
    image: "https://picsum.photos/seed/mitsu19/800/600",
    price: "Enquire for Price"
  },
  {
    id: 36,
    name: "Mitsubishi Heavy Duty 1.5 Ton Cooling+Heating",
    category: "Air Conditioners",
    subCategory: "Split AC",
    brand: "Mitsubishi Heavy Duty",
    description: "Hyper Inverter, High Airflow, Cooling + Heating.",
    longDescription: "Model SRK50ZS-S6. 1.5 Ton Hyper Inverter Hi-Wall AC. Provides both cooling and heating. (Coming Soon)",
    features: ["1.5 Ton", "Hyper Inverter", "Cooling + Heating", "Coming Soon"],
    image: "https://aaravelectronics.com/cdn/shop/files/31IoLCpHF4L._SL1000_be045dfb-0e60-4b8f-9a56-b0128b39a400.jpg?v=1766863802",
    price: "Coming Soon"
  },
  {
    id: 37,
    name: "Mitsubishi Heavy Duty 2.1 Ton Cooling+Heating",
    category: "Air Conditioners",
    subCategory: "Split AC",
    brand: "Mitsubishi Heavy Duty",
    description: "Hyper Inverter, Turbojet Flow, Cooling + Heating.",
    longDescription: "Model SRK71ZR. 2.1 Ton Hyper Inverter Hi-Wall AC. Provides both cooling and heating. (Coming Soon)",
    features: ["2.1 Ton", "Hyper Inverter", "Cooling + Heating", "Coming Soon"],
    image: "https://picsum.photos/seed/mitsu21/800/600",
    price: "Coming Soon"
  },
  {
    id: 38,
    name: "Mitsubishi Heavy Duty 3.1 Ton Cooling+Heating",
    category: "Air Conditioners",
    subCategory: "Split AC",
    brand: "Mitsubishi Heavy Duty",
    description: "Hyper Inverter, Turbojet Flow, Cooling + Heating.",
    longDescription: "Model SRK100ZR. 3.1 Ton Hyper Inverter Hi-Wall AC. Provides both cooling and heating. (Coming Soon)",
    features: ["3.1 Ton", "Hyper Inverter", "Cooling + Heating", "Coming Soon"],
    image: "https://picsum.photos/seed/mitsu22/800/600",
    price: "Coming Soon"
  }
];
