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
  },
  // New Single Door Refrigerators
  {
    id: 39,
    name: "Samsung 189L 5 Star Single Door Refrigerator",
    category: "Refrigerators",
    subCategory: "Single Door",
    brand: "Samsung",
    description: "A compact and energy-efficient refrigerator designed for small families.",
    longDescription: "A compact and energy-efficient refrigerator designed for small families. It features Samsung’s Digital Inverter Compressor that automatically adjusts cooling based on usage, reducing electricity consumption while maintaining consistent cooling.",
    features: [
      "Digital Inverter Compressor",
      "5-Star Energy Rating",
      "Toughened Glass Shelves",
      "Stabilizer-Free Operation",
      "Anti-Bacterial Gasket"
    ],
    image: "https://picsum.photos/seed/fridge39/800/600",
    price: "Enquire for Price"
  },
  {
    id: 40,
    name: "Samsung 215L Single Door Refrigerator",
    category: "Refrigerators",
    subCategory: "Single Door",
    brand: "Samsung",
    description: "A stylish refrigerator designed with modern floral patterns and energy-saving technology.",
    longDescription: "A stylish refrigerator designed with modern floral patterns and energy-saving technology. It provides efficient cooling and spacious storage for daily groceries.",
    features: [
      "Digital Inverter Technology",
      "Large Vegetable Box",
      "Fast Ice Making",
      "Energy Efficient Cooling",
      "Elegant Door Design"
    ],
    image: "https://picsum.photos/seed/fridge40/800/600",
    price: "Enquire for Price"
  },
  {
    id: 41,
    name: "Samsung RR24 223L Single Door Refrigerator",
    category: "Refrigerators",
    subCategory: "Single Door",
    brand: "Samsung",
    description: "This refrigerator offers larger storage capacity for households needing extra space.",
    longDescription: "This refrigerator offers larger storage capacity for households needing extra space. Its advanced cooling system ensures uniform temperature for longer food freshness.",
    features: [
      "Digital Inverter Compressor",
      "Stabilizer Free Operation",
      "Toughened Glass Shelves",
      "Big Bottle Guard",
      "Energy Efficient Performance"
    ],
    image: "https://picsum.photos/seed/fridge41/800/600",
    price: "Enquire for Price"
  },
  {
    id: 42,
    name: "LG GL-B201APZD 190L Single Door Refrigerator",
    category: "Refrigerators",
    subCategory: "Single Door",
    brand: "LG",
    description: "Designed for modern kitchens, this LG refrigerator ensures quiet operation and excellent cooling.",
    longDescription: "Designed for modern kitchens, this LG refrigerator ensures quiet operation and excellent cooling with Smart Inverter technology.",
    features: [
      "Smart Inverter Compressor",
      "Moist Balance Crisper",
      "Toughened Glass Shelves",
      "Fast Ice Making",
      "Energy Efficient Cooling"
    ],
    image: "https://picsum.photos/seed/fridge42/800/600",
    price: "Enquire for Price"
  },
  {
    id: 43,
    name: "LG GL-D199OBEY 188L Single Door Refrigerator",
    category: "Refrigerators",
    subCategory: "Single Door",
    brand: "LG",
    description: "A compact and durable refrigerator that maintains ideal humidity levels.",
    longDescription: "A compact and durable refrigerator that maintains ideal humidity levels to keep fruits and vegetables fresh for longer.",
    features: [
      "Smart Inverter Compressor",
      "Moist Balance Crisper",
      "Smart Connect (Runs on inverter)",
      "Anti-Bacterial Gasket",
      "Stabilizer Free Operation"
    ],
    image: "https://picsum.photos/seed/fridge43/800/600",
    price: "Enquire for Price"
  },
  {
    id: 44,
    name: "LG GL-B199OBEY 188L Single Door Refrigerator",
    category: "Refrigerators",
    subCategory: "Single Door",
    brand: "LG",
    description: "An efficient refrigerator that combines performance and style with reliable cooling technology.",
    longDescription: "An efficient refrigerator that combines performance and style with reliable cooling technology and energy-saving features.",
    features: [
      "Direct Cool Technology",
      "Toughened Glass Shelves",
      "Moist Balance Crisper",
      "Energy Efficient Compressor",
      "Quiet Operation"
    ],
    image: "https://picsum.photos/seed/fridge44/800/600",
    price: "Enquire for Price"
  },
  {
    id: 45,
    name: "Whirlpool 215 WDE ROY 5S 184L Refrigerator",
    category: "Refrigerators",
    subCategory: "Single Door",
    brand: "Whirlpool",
    description: "A reliable refrigerator designed with IntelliSense Inverter technology.",
    longDescription: "A reliable refrigerator designed with IntelliSense Inverter technology to adapt cooling according to load and temperature.",
    features: [
      "IntelliSense Inverter Technology",
      "Insulated Capillary Technology",
      "Large Vegetable Crisper",
      "Stabilizer Free Operation",
      "Fast Ice Making"
    ],
    image: "https://picsum.photos/seed/fridge45/800/600",
    price: "Enquire for Price"
  },
  {
    id: 46,
    name: "Whirlpool 236L 4 Star Single Door Refrigerator",
    category: "Refrigerators",
    subCategory: "Single Door",
    brand: "Whirlpool",
    description: "A spacious refrigerator ideal for medium families with advanced cooling technology.",
    longDescription: "A spacious refrigerator ideal for medium families with advanced cooling technology that preserves food freshness for longer.",
    features: [
      "4-Star Energy Rating",
      "Large Vegetable Drawer",
      "Toughened Glass Shelves",
      "Fast Cooling Technology",
      "Energy Efficient Compressor"
    ],
    image: "https://picsum.photos/seed/fridge46/800/600",
    price: "Enquire for Price"
  },
  {
    id: 47,
    name: "Godrej 194L 5 Star Direct Cool Refrigerator",
    category: "Refrigerators",
    subCategory: "Single Door",
    brand: "Godrej",
    description: "A highly energy-efficient refrigerator designed for Indian households.",
    longDescription: "A highly energy-efficient refrigerator designed for Indian households with advanced cooling technology and durable build quality.",
    features: [
      "Turbo Cooling Technology",
      "5-Star Energy Efficiency",
      "Anti-Bacterial Door Gasket",
      "Large Vegetable Tray",
      "Eco-Friendly Refrigerant"
    ],
    image: "https://picsum.photos/seed/fridge47/800/600",
    price: "Enquire for Price"
  },
  {
    id: 48,
    name: "Godrej Edge Marvel 184L Refrigerator",
    category: "Refrigerators",
    subCategory: "Single Door",
    brand: "Godrej",
    description: "A stylish refrigerator offering powerful cooling performance and durable storage.",
    longDescription: "A stylish refrigerator offering powerful cooling performance and durable storage for everyday household needs.",
    features: [
      "Direct Cool Technology",
      "Large Vegetable Box",
      "Toughened Glass Shelves",
      "Energy Efficient Cooling",
      "Durable Door Design"
    ],
    image: "https://picsum.photos/seed/fridge48/800/600",
    price: "Enquire for Price"
  },
  // Double Door Refrigerators
  {
    id: 49,
    name: "LG 260L Frost Free Double Door Refrigerator",
    category: "Refrigerators",
    subCategory: "Double Door",
    brand: "LG",
    description: "Designed for medium families, this frost-free refrigerator eliminates manual defrosting.",
    longDescription: "Designed for medium families, this frost-free refrigerator eliminates manual defrosting while ensuring even cooling.",
    features: [
      "Smart Inverter Compressor",
      "Multi Air Flow Cooling",
      "Frost Free Technology",
      "Toughened Glass Shelves",
      "Moist Balance Crisper"
    ],
    image: "https://picsum.photos/seed/fridge49/800/600",
    price: "Enquire for Price"
  },
  {
    id: 50,
    name: "LG 272L Smart Inverter Double Door Refrigerator",
    category: "Refrigerators",
    subCategory: "Double Door",
    brand: "LG",
    description: "A modern refrigerator offering excellent cooling performance and energy efficiency.",
    longDescription: "A modern refrigerator offering excellent cooling performance and energy efficiency for medium-sized households.",
    features: [
      "Smart Inverter Compressor",
      "Express Freeze Technology",
      "Smart Diagnosis",
      "Multi Air Flow Cooling",
      "Stabilizer Free Operation"
    ],
    image: "https://picsum.photos/seed/fridge50/800/600",
    price: "Enquire for Price"
  },
  {
    id: 51,
    name: "Samsung 253L Digital Inverter Double Door Refrigerator",
    category: "Refrigerators",
    subCategory: "Double Door",
    brand: "Samsung",
    description: "A premium refrigerator with frost-free cooling and digital inverter technology.",
    longDescription: "A premium refrigerator with frost-free cooling and digital inverter technology for reliable performance and energy efficiency.",
    features: [
      "Digital Inverter Compressor",
      "Frost Free Cooling",
      "Convertible Freezer",
      "Power Cool Function",
      "Toughened Glass Shelves"
    ],
    image: "https://picsum.photos/seed/fridge51/800/600",
    price: "Enquire for Price"
  },
  {
    id: 52,
    name: "Samsung 275L Convertible Double Door Refrigerator",
    category: "Refrigerators",
    subCategory: "Double Door",
    brand: "Samsung",
    description: "A flexible refrigerator with convertible freezer options allowing users to adjust storage.",
    longDescription: "A flexible refrigerator with convertible freezer options allowing users to adjust storage according to their needs.",
    features: [
      "5-in-1 Convertible Mode",
      "Digital Inverter Compressor",
      "Multi Air Flow Cooling",
      "Deodorizing Filter",
      "Energy Efficient Design"
    ],
    image: "https://picsum.photos/seed/fridge52/800/600",
    price: "Enquire for Price"
  },
  {
    id: 53,
    name: "Whirlpool 265L IntelliFresh Double Door Refrigerator",
    category: "Refrigerators",
    subCategory: "Double Door",
    brand: "Whirlpool",
    description: "This refrigerator features IntelliFresh technology that adapts cooling automatically.",
    longDescription: "This refrigerator features IntelliFresh technology that adapts cooling automatically to preserve food freshness.",
    features: [
      "IntelliFresh Inverter Technology",
      "Adaptive Cooling",
      "FreshFlow Air Tower",
      "Anti-Bacterial Filter",
      "Fast Ice Making"
    ],
    image: "https://picsum.photos/seed/fridge53/800/600",
    price: "Enquire for Price"
  },
  {
    id: 54,
    name: "Whirlpool 292L Neo Fresh Double Door Refrigerator",
    category: "Refrigerators",
    subCategory: "Double Door",
    brand: "Whirlpool",
    description: "A spacious refrigerator designed for families needing extra storage and efficient cooling.",
    longDescription: "A spacious refrigerator designed for families needing extra storage and efficient cooling.",
    features: [
      "Frost Free Technology",
      "Large Vegetable Crisper",
      "Adaptive Cooling Technology",
      "Toughened Glass Shelves",
      "Energy Efficient Operation"
    ],
    image: "https://picsum.photos/seed/fridge54/800/600",
    price: "Enquire for Price"
  },
  {
    id: 55,
    name: "Haier 195L Direct Cool Refrigerator",
    category: "Refrigerators",
    subCategory: "Single Door",
    brand: "Haier",
    description: "A compact refrigerator with powerful cooling and modern design, suitable for small households.",
    longDescription: "A compact refrigerator with powerful cooling and modern design, suitable for small households.",
    features: [
      "1-Hour Icing Technology",
      "Stabilizer Free Operation",
      "Large Vegetable Box",
      "Energy Efficient Compressor",
      "Durable Glass Shelves"
    ],
    image: "https://picsum.photos/seed/fridge55/800/600",
    price: "Enquire for Price"
  },
  {
    id: 56,
    name: "Haier 240L Frost Free Double Door Refrigerator",
    category: "Refrigerators",
    subCategory: "Double Door",
    brand: "Haier",
    description: "A modern refrigerator featuring powerful cooling technology and spacious storage compartments.",
    longDescription: "A modern refrigerator featuring powerful cooling technology and spacious storage compartments.",
    features: [
      "Turbo Icing Technology",
      "Twin Inverter Compressor",
      "Frost Free Cooling",
      "Multi Air Flow Cooling",
      "Large Storage Capacity"
    ],
    image: "https://picsum.photos/seed/fridge56/800/600",
    price: "Enquire for Price"
  },
  {
    id: 57,
    name: "Haier 325L Convertible Double Door Refrigerator",
    category: "Refrigerators",
    subCategory: "Double Door",
    brand: "Haier",
    description: "A premium refrigerator offering multiple cooling modes and flexible storage options.",
    longDescription: "A premium refrigerator offering multiple cooling modes and flexible storage options for large families.",
    features: [
      "14-in-1 Convertible Modes",
      "Bottom Freezer Design",
      "Multi Air Flow Cooling",
      "Turbo Icing Technology",
      "Energy Efficient Inverter"
    ],
    image: "https://picsum.photos/seed/fridge57/800/600",
    price: "Enquire for Price"
  },
  {
    id: 58,
    name: "Godrej 236L Double Door Refrigerator",
    category: "Refrigerators",
    subCategory: "Double Door",
    brand: "Godrej",
    description: "A stylish refrigerator designed with advanced cooling technology and spacious storage.",
    longDescription: "A stylish refrigerator designed with advanced cooling technology and spacious storage compartments.",
    features: [
      "Turbo Cooling Technology",
      "Anti-Bacterial Gasket",
      "Large Vegetable Tray",
      "Frost Free Cooling",
      "Energy Efficient Compressor"
    ],
    image: "https://picsum.photos/seed/fridge58/800/600",
    price: "Enquire for Price"
  },
  {
    id: 59,
    name: "Godrej Edge Pro 281L Double Door Refrigerator",
    category: "Refrigerators",
    subCategory: "Double Door",
    brand: "Godrej",
    description: "A premium refrigerator designed with powerful cooling and elegant design.",
    longDescription: "A premium refrigerator designed with powerful cooling and elegant design.",
    features: [
      "Cool Balance Technology",
      "Nano Shield Technology",
      "Toughened Glass Shelves",
      "Large Vegetable Storage",
      "Frost Free Operation"
    ],
    image: "https://picsum.photos/seed/fridge59/800/600",
    price: "Enquire for Price"
  },
  {
    id: 60,
    name: "Samsung 236L Convertible Refrigerator",
    category: "Refrigerators",
    subCategory: "Double Door",
    brand: "Samsung",
    description: "A modern refrigerator with convertible freezer modes that provide flexibility.",
    longDescription: "A modern refrigerator with convertible freezer modes that provide flexibility and improved food preservation.",
    features: [
      "Convertible Freezer",
      "Digital Inverter Compressor",
      "Multi Air Flow Cooling",
      "Power Freeze Mode",
      "Energy Efficient Design"
    ],
    image: "https://picsum.photos/seed/fridge60/800/600",
    price: "Enquire for Price"
  },
  {
    id: 61,
    name: "LG 308L Convertible Refrigerator",
    category: "Refrigerators",
    subCategory: "Double Door",
    brand: "LG",
    description: "A spacious refrigerator designed for families needing flexible storage options.",
    longDescription: "A spacious refrigerator designed for families needing flexible storage options and efficient cooling.",
    features: [
      "Convertible Freezer",
      "Smart Inverter Compressor",
      "Express Freeze",
      "Multi Air Flow Cooling",
      "Toughened Glass Shelves"
    ],
    image: "https://picsum.photos/seed/fridge61/800/600",
    price: "Enquire for Price"
  },
  {
    id: 62,
    name: "Whirlpool 245L Inverter Refrigerator",
    category: "Refrigerators",
    subCategory: "Double Door",
    brand: "Whirlpool",
    description: "A durable refrigerator with advanced inverter technology that ensures energy-efficient performance.",
    longDescription: "A durable refrigerator with advanced inverter technology that ensures energy-efficient performance.",
    features: [
      "IntelliSense Inverter",
      "Insulated Capillary Technology",
      "Large Vegetable Drawer",
      "Toughened Glass Shelves",
      "Stabilizer Free Operation"
    ],
    image: "https://picsum.photos/seed/fridge62/800/600",
    price: "Enquire for Price"
  },
  {
    id: 63,
    name: "Haier HRF-2674CSS 247L Refrigerator",
    category: "Refrigerators",
    subCategory: "Double Door",
    brand: "Haier",
    description: "A stylish refrigerator designed with expert inverter technology and powerful cooling.",
    longDescription: "A stylish refrigerator designed with expert inverter technology and powerful cooling performance.",
    features: [
      "Expert Inverter Technology",
      "Multi Air Flow Cooling",
      "Large Vegetable Box",
      "Frost Free Cooling",
      "Energy Efficient Compressor"
    ],
    image: "https://picsum.photos/seed/fridge63/800/600",
    price: "Enquire for Price"
  },
  // New Washing Machines
  {
    id: 64,
    name: "Samsung 6.5 Kg Top Load Washing Machine (WA65A4002VS)",
    category: "Washing Machines",
    subCategory: "Top Load",
    brand: "Samsung",
    description: "Designed for small families and offers powerful cleaning performance with advanced washing technology.",
    longDescription: "The Samsung 6.5 Kg Top Load Washing Machine is designed for small families and offers powerful cleaning performance with advanced washing technology. The machine features a durable design with an energy-efficient motor that ensures excellent washing results while consuming less electricity. Its ergonomic design and user-friendly controls make laundry simple and convenient for everyday use.",
    features: [
      "Center Jet Technology",
      "Diamond Drum Design",
      "Magic Filter",
      "Quick Wash Program",
      "Child Lock Safety"
    ],
    image: "https://picsum.photos/seed/wm64/800/600",
    price: "Enquire for Price"
  },
  {
    id: 65,
    name: "Samsung 7 Kg Fully Automatic Top Load Washing Machine",
    category: "Washing Machines",
    subCategory: "Top Load",
    brand: "Samsung",
    description: "Provides powerful washing performance with intelligent wash programs that remove tough stains easily.",
    longDescription: "This washing machine provides powerful washing performance with intelligent wash programs that remove tough stains easily. It offers efficient water usage and faster wash cycles, making it suitable for busy households.",
    features: [
      "Wobble Technology",
      "Digital Inverter Motor",
      "Magic Dispenser",
      "Eco Tub Clean",
      "Soft Closing Door"
    ],
    image: "https://picsum.photos/seed/wm65/800/600",
    price: "Enquire for Price"
  },
  {
    id: 66,
    name: "LG 6.5 Kg Top Load Washing Machine (T65SKSF1Z)",
    category: "Washing Machines",
    subCategory: "Top Load",
    brand: "LG",
    description: "Designed with smart inverter technology that ensures efficient energy consumption and quiet operation.",
    longDescription: "LG’s top load washing machine is designed with smart inverter technology that ensures efficient energy consumption and quiet operation. Its advanced wash programs provide gentle yet effective cleaning for different fabric types.",
    features: [
      "Smart Inverter Motor",
      "Turbo Drum Technology",
      "Smart Diagnosis",
      "Auto Restart",
      "Punch+3 Pulsator"
    ],
    image: "https://picsum.photos/seed/wm66/800/600",
    price: "Enquire for Price"
  },
  {
    id: 67,
    name: "LG 7.5 Kg Top Load Washing Machine",
    category: "Washing Machines",
    subCategory: "Top Load",
    brand: "LG",
    description: "Delivers powerful washing performance with multiple wash programs that adapt to different fabric types.",
    longDescription: "This LG washing machine delivers powerful washing performance with multiple wash programs that adapt to different fabric types. It provides efficient water usage and faster washing cycles.",
    features: [
      "Smart Motion Technology",
      "Turbo Drum",
      "Stainless Steel Drum",
      "Auto Pre Wash",
      "Smart Diagnosis"
    ],
    image: "https://picsum.photos/seed/wm67/800/600",
    price: "Enquire for Price"
  },
  {
    id: 68,
    name: "Whirlpool 7 Kg Fully Automatic Top Load Washing Machine",
    category: "Washing Machines",
    subCategory: "Top Load",
    brand: "Whirlpool",
    description: "Offers advanced stain removal technology that removes tough stains with ease.",
    longDescription: "The Whirlpool top load washing machine offers advanced stain removal technology that removes tough stains with ease. Its intelligent sensors optimize water and detergent usage for efficient washing.",
    features: [
      "6th Sense Technology",
      "Hard Water Wash Program",
      "ZPF Technology",
      "Express Wash",
      "Smart Sensors"
    ],
    image: "https://picsum.photos/seed/wm68/800/600",
    price: "Enquire for Price"
  },
  {
    id: 69,
    name: "Whirlpool 7.5 Kg Top Load Washing Machine",
    category: "Washing Machines",
    subCategory: "Top Load",
    brand: "Whirlpool",
    description: "A reliable washing machine designed for medium-sized families with intelligent washing programs.",
    longDescription: "A reliable washing machine designed for medium-sized families with intelligent washing programs and strong motor performance.",
    features: [
      "12 Wash Programs",
      "Auto Tub Clean",
      "Delay Wash",
      "Smart Sensors",
      "Energy Efficient Motor"
    ],
    image: "https://picsum.photos/seed/wm69/800/600",
    price: "Enquire for Price"
  },
  {
    id: 70,
    name: "IFB 6.5 Kg Top Load Washing Machine",
    category: "Washing Machines",
    subCategory: "Top Load",
    brand: "IFB",
    description: "Provides superior cleaning performance with innovative washing technology and multiple wash programs.",
    longDescription: "This washing machine provides superior cleaning performance with innovative washing technology and multiple wash programs.",
    features: [
      "Aqua Energie Technology",
      "Crescent Moon Drum",
      "Auto Balance System",
      "Child Lock",
      "High Spin Speed"
    ],
    image: "https://picsum.photos/seed/wm70/800/600",
    price: "Enquire for Price"
  },
  {
    id: 71,
    name: "Bosch 7 Kg Top Load Washing Machine",
    category: "Washing Machines",
    subCategory: "Top Load",
    brand: "Bosch",
    description: "Offers German engineering quality and powerful cleaning performance with minimal noise and vibration.",
    longDescription: "The Bosch top load washing machine offers German engineering quality and powerful cleaning performance with minimal noise and vibration.",
    features: [
      "PowerWave Wash System",
      "Soft Closing Lid",
      "Multiple Wash Programs",
      "Stainless Steel Drum",
      "Child Lock"
    ],
    image: "https://picsum.photos/seed/wm71/800/600",
    price: "Enquire for Price"
  },
  {
    id: 72,
    name: "LG 7 Kg Front Load Washing Machine",
    category: "Washing Machines",
    subCategory: "Front Load",
    brand: "LG",
    description: "Provides excellent cleaning performance using advanced drum technology.",
    longDescription: "The LG Front Load washing machine provides excellent cleaning performance using advanced drum technology. It ensures deep cleaning while protecting delicate fabrics.",
    features: [
      "Direct Drive Motor",
      "6 Motion Direct Drive",
      "Steam Wash Technology",
      "Smart Diagnosis",
      "Energy Efficient Design"
    ],
    image: "https://picsum.photos/seed/wm72/800/600",
    price: "Enquire for Price"
  },
  {
    id: 73,
    name: "LG 8 Kg Front Load Washing Machine",
    category: "Washing Machines",
    subCategory: "Front Load",
    brand: "LG",
    description: "A powerful washing machine designed for larger families with advanced cleaning features.",
    longDescription: "A powerful washing machine designed for larger families with advanced cleaning features and modern design.",
    features: [
      "AI Direct Drive Technology",
      "Steam Cleaning",
      "WiFi Smart Control",
      "Stainless Steel Drum",
      "Quick Wash Mode"
    ],
    image: "https://picsum.photos/seed/wm73/800/600",
    price: "Enquire for Price"
  },
  {
    id: 74,
    name: "Samsung 7 Kg Front Load Washing Machine",
    category: "Washing Machines",
    subCategory: "Front Load",
    brand: "Samsung",
    description: "Offers intelligent wash cycles that remove tough stains while maintaining fabric quality.",
    longDescription: "Samsung’s front load washing machine offers intelligent wash cycles that remove tough stains while maintaining fabric quality.",
    features: [
      "Eco Bubble Technology",
      "Digital Inverter Motor",
      "Hygiene Steam",
      "Drum Clean",
      "Quick Wash Program"
    ],
    image: "https://picsum.photos/seed/wm74/800/600",
    price: "Enquire for Price"
  },
  {
    id: 75,
    name: "Samsung 8 Kg Front Load Washing Machine",
    category: "Washing Machines",
    subCategory: "Front Load",
    brand: "Samsung",
    description: "A high-performance washing machine designed to deliver superior cleaning with energy efficiency.",
    longDescription: "A high-performance washing machine designed to deliver superior cleaning with energy efficiency.",
    features: [
      "AI Control Panel",
      "Eco Bubble Wash",
      "Hygiene Steam",
      "SmartThings Connectivity",
      "Digital Inverter Technology"
    ],
    image: "https://picsum.photos/seed/wm75/800/600",
    price: "Enquire for Price"
  },
  {
    id: 76,
    name: "Bosch 7 Kg Front Load Washing Machine",
    category: "Washing Machines",
    subCategory: "Front Load",
    brand: "Bosch",
    description: "Provides superior cleaning performance with German engineering and energy-efficient operation.",
    longDescription: "The Bosch front load washing machine provides superior cleaning performance with German engineering and energy-efficient operation.",
    features: [
      "EcoSilence Drive Motor",
      "Anti-Vibration Design",
      "Speed Perfect Wash",
      "Multiple Wash Programs",
      "Child Lock Safety"
    ],
    image: "https://picsum.photos/seed/wm76/800/600",
    price: "Enquire for Price"
  },
  {
    id: 77,
    name: "Bosch 8 Kg Front Load Washing Machine",
    category: "Washing Machines",
    subCategory: "Front Load",
    brand: "Bosch",
    description: "A premium washing machine designed for powerful washing performance and quiet operation.",
    longDescription: "A premium washing machine designed for powerful washing performance and quiet operation.",
    features: [
      "Active Water Technology",
      "EcoSilence Motor",
      "Drum Clean Program",
      "LED Display",
      "Speed Perfect Mode"
    ],
    image: "https://picsum.photos/seed/wm77/800/600",
    price: "Enquire for Price"
  },
  {
    id: 78,
    name: "IFB 7 Kg Front Load Washing Machine",
    category: "Washing Machines",
    subCategory: "Front Load",
    brand: "IFB",
    description: "Offers advanced cleaning technology and gentle care for delicate fabrics.",
    longDescription: "IFB front load washing machine offers advanced cleaning technology and gentle care for delicate fabrics.",
    features: [
      "Aqua Energie Technology",
      "Crescent Moon Drum",
      "Ball Valve Technology",
      "15 Wash Programs",
      "High Spin Speed"
    ],
    image: "https://picsum.photos/seed/wm78/800/600",
    price: "Enquire for Price"
  },
  {
    id: 79,
    name: "IFB 8 Kg Front Load Washing Machine",
    category: "Washing Machines",
    subCategory: "Front Load",
    brand: "IFB",
    description: "A powerful washing machine designed for large families with efficient water and energy consumption.",
    longDescription: "A powerful washing machine designed for large families with efficient water and energy consumption.",
    features: [
      "3D Wash System",
      "Steam Refresh",
      "Aqua Energie Filter",
      "Child Lock",
      "Stainless Steel Drum"
    ],
    image: "https://picsum.photos/seed/wm79/800/600",
    price: "Enquire for Price"
  },
  {
    id: 80,
    name: "LG 7 Kg Semi Automatic Washing Machine",
    category: "Washing Machines",
    subCategory: "Semi Automatic",
    brand: "LG",
    description: "A durable washing machine designed for efficient washing and low water consumption.",
    longDescription: "A durable washing machine designed for efficient washing and low water consumption.",
    features: [
      "Roller Jet Pulsator",
      "Rat Away Technology",
      "Powerful Motor",
      "Wind Jet Dry",
      "Durable Plastic Body"
    ],
    image: "https://picsum.photos/seed/wm80/800/600",
    price: "Enquire for Price"
  },
  {
    id: 81,
    name: "LG 8 Kg Semi Automatic Washing Machine",
    category: "Washing Machines",
    subCategory: "Semi Automatic",
    brand: "LG",
    description: "A large capacity washing machine suitable for families needing efficient washing and faster drying.",
    longDescription: "A large capacity washing machine suitable for families needing efficient washing and faster drying.",
    features: [
      "Roller Jet Pulsator",
      "Wind Jet Dry",
      "Large Wash Tub",
      "Durable Build",
      "Energy Efficient Motor"
    ],
    image: "https://picsum.photos/seed/wm81/800/600",
    price: "Enquire for Price"
  },
  {
    id: 82,
    name: "Samsung 7 Kg Semi Automatic Washing Machine",
    category: "Washing Machines",
    subCategory: "Semi Automatic",
    brand: "Samsung",
    description: "This washing machine offers powerful cleaning performance with efficient water usage.",
    longDescription: "This washing machine offers powerful cleaning performance with efficient water usage.",
    features: [
      "Double Storm Pulsator",
      "Air Turbo Drying",
      "Rust Proof Body",
      "Powerful Motor",
      "Energy Efficient Design"
    ],
    image: "https://picsum.photos/seed/wm82/800/600",
    price: "Enquire for Price"
  },
  {
    id: 83,
    name: "Whirlpool 7 Kg Semi Automatic Washing Machine",
    category: "Washing Machines",
    subCategory: "Semi Automatic",
    brand: "Whirlpool",
    description: "A budget-friendly washing machine designed for reliable washing performance and durable operation.",
    longDescription: "A budget-friendly washing machine designed for reliable washing performance and durable operation.",
    features: [
      "Large Wash Tub",
      "Powerful Pulsator",
      "High Spin Speed",
      "Rust Proof Body",
      "Energy Efficient Motor"
    ],
    image: "https://picsum.photos/seed/wm83/800/600",
    price: "Enquire for Price"
  },
  {
    id: 84,
    name: "Whirlpool 8 Kg Semi Automatic Washing Machine",
    category: "Washing Machines",
    subCategory: "Semi Automatic",
    brand: "Whirlpool",
    description: "A spacious washing machine with powerful cleaning technology and efficient drying performance.",
    longDescription: "A spacious washing machine with powerful cleaning technology and efficient drying performance.",
    features: [
      "Turbo Scrub Technology",
      "Powerful Motor",
      "Smart Scrub Station",
      "Large Wash Capacity",
      "Durable Build"
    ],
    image: "https://picsum.photos/seed/wm84/800/600",
    price: "Enquire for Price"
  },
  {
    id: 85,
    name: "IFB 6.5 Kg Semi Automatic Washing Machine",
    category: "Washing Machines",
    subCategory: "Semi Automatic",
    brand: "IFB",
    description: "A compact washing machine with powerful washing performance and user-friendly design.",
    longDescription: "A compact washing machine with powerful washing performance and user-friendly design.",
    features: [
      "3D Wash System",
      "Powerful Pulsator",
      "Rust Proof Body",
      "Energy Efficient Motor",
      "High Spin Speed"
    ],
    image: "https://picsum.photos/seed/wm85/800/600",
    price: "Enquire for Price"
  },
  {
    id: 86,
    name: "Bosch 7 Kg Semi Automatic Washing Machine",
    category: "Washing Machines",
    subCategory: "Semi Automatic",
    brand: "Bosch",
    description: "A reliable washing machine designed for efficient washing with minimal power consumption.",
    longDescription: "A reliable washing machine designed for efficient washing with minimal power consumption.",
    features: [
      "Powerful Motor",
      "Durable Wash Tub",
      "Efficient Drying System",
      "Compact Design",
      "Easy Controls"
    ],
    image: "https://picsum.photos/seed/wm86/800/600",
    price: "Enquire for Price"
  },
  {
    id: 87,
    name: "LG 6 Kg Semi Automatic Washing Machine",
    category: "Washing Machines",
    subCategory: "Semi Automatic",
    brand: "LG",
    description: "A compact washing machine designed for small households with powerful cleaning technology.",
    longDescription: "A compact washing machine designed for small households with powerful cleaning technology.",
    features: [
      "Roller Jet Pulsator",
      "Wind Jet Dry",
      "Rust Proof Body",
      "Energy Efficient Motor",
      "Durable Design"
    ],
    image: "https://picsum.photos/seed/wm87/800/600",
    price: "Enquire for Price"
  },
  {
    id: 88,
    name: "Whirlpool 6.5 Kg Semi Automatic Washing Machine",
    category: "Washing Machines",
    subCategory: "Semi Automatic",
    brand: "Whirlpool",
    description: "A reliable washing machine designed for everyday laundry needs with efficient cleaning performance.",
    longDescription: "A reliable washing machine designed for everyday laundry needs with efficient cleaning performance.",
    features: [
      "Turbo Scrub Technology",
      "Large Wash Tub",
      "High Spin Speed",
      "Powerful Motor",
      "Durable Plastic Body"
    ],
    image: "https://picsum.photos/seed/wm88/800/600",
    price: "Enquire for Price"
  },
  // New Microwave Ovens
  {
    id: 89,
    name: "LG 28L Convection Microwave Oven",
    category: "Microwaves",
    subCategory: "Convection",
    brand: "LG",
    description: "Designed for families who enjoy baking, grilling, reheating, and cooking with ease.",
    longDescription: "This LG convection microwave oven is designed for families who enjoy baking, grilling, reheating, and cooking with ease. With a spacious 28-litre capacity, it is suitable for medium to large families. It includes advanced cooking modes and auto-cook menus that allow users to prepare a variety of dishes quickly and efficiently. The convection technology distributes heat evenly for perfectly baked food. Convection microwave ovens like this allow baking, grilling, reheating, and defrosting in a single appliance, making them versatile for modern kitchens.",
    features: [
      "Convection Cooking for baking, grilling, and roasting",
      "28-litre capacity suitable for 4–6 members",
      "Auto Cook Menu for multiple recipes",
      "Stainless Steel Cavity for durability",
      "Child Lock safety feature"
    ],
    image: "https://picsum.photos/seed/micro89/800/600",
    price: "Enquire for Price"
  },
  {
    id: 90,
    name: "LG MC2886BRUM 28L Convection Microwave",
    category: "Microwaves",
    subCategory: "Convection",
    brand: "LG",
    description: "Offers advanced cooking technology with powerful heating elements and intelligent cooking programs.",
    longDescription: "The LG MC2886BRUM microwave oven offers advanced cooking technology with powerful heating elements and intelligent cooking programs. It comes with LG’s special Diet Fry technology, allowing users to cook healthier fried foods with less oil while maintaining crispy texture. The large capacity makes it ideal for families who cook frequently.",
    features: [
      "Diet Fry technology for low-oil cooking",
      "251 Auto Cook Menu options",
      "Motorized Rotisserie for grilling",
      "Multi-stage cooking programs",
      "LED display and touch controls"
    ],
    image: "https://picsum.photos/seed/micro90/800/600",
    price: "Enquire for Price"
  },
  {
    id: 91,
    name: "LG MS2043DB 20L Solo Microwave Oven",
    category: "Microwaves",
    subCategory: "Solo",
    brand: "LG",
    description: "A compact solo microwave oven designed mainly for reheating, defrosting, and simple cooking tasks.",
    longDescription: "The LG MS2043DB is a compact solo microwave oven designed mainly for reheating, defrosting, and simple cooking tasks. Its small size makes it ideal for small kitchens or individuals who need a basic microwave for everyday use.",
    features: [
      "20-litre capacity",
      "Solo microwave function",
      "Quick defrost option",
      "Touch keypad control",
      "Compact and energy-efficient design"
    ],
    image: "https://picsum.photos/seed/micro91/800/600",
    price: "Enquire for Price"
  },
  {
    id: 92,
    name: "LG MH2044DB 20L Grill Microwave Oven",
    category: "Microwaves",
    subCategory: "Grill",
    brand: "LG",
    description: "Designed for users who want both reheating and grilling capabilities.",
    longDescription: "This LG grill microwave oven is designed for users who want both reheating and grilling capabilities. The grill function allows you to cook crispy dishes like grilled vegetables, paneer, or sandwiches.",
    features: [
      "Grill + Microwave cooking",
      "20-litre capacity",
      "Auto cook menus",
      "Quartz heater grill",
      "Child safety lock"
    ],
    image: "https://picsum.photos/seed/micro92/800/600",
    price: "Enquire for Price"
  },
  {
    id: 93,
    name: "Samsung 28L Convection Microwave Oven MC28A5145VK",
    category: "Microwaves",
    subCategory: "Convection",
    brand: "Samsung",
    description: "Combines microwave, grill, and convection functions in one appliance.",
    longDescription: "The Samsung 28-litre convection microwave oven combines microwave, grill, and convection functions in one appliance. It provides powerful heating and advanced cooking programs that allow users to prepare bakery items, grilled dishes, and everyday meals easily.",
    features: [
      "Convection cooking technology",
      "28-litre capacity",
      "Multiple auto cook programs",
      "Ceramic enamel interior",
      "Child lock and quick start"
    ],
    image: "https://picsum.photos/seed/micro93/800/600",
    price: "₹16,909"
  },
  {
    id: 94,
    name: "Samsung MC28A5147VK/TL 28L Microwave",
    category: "Microwaves",
    subCategory: "Convection",
    brand: "Samsung",
    description: "Features modern cooking technology with intelligent temperature control.",
    longDescription: "This Samsung microwave oven features modern cooking technology with intelligent temperature control. It helps cook food evenly and efficiently while maintaining taste and texture.",
    features: [
      "HotBlast cooking technology",
      "Ceramic enamel cavity",
      "Slim Fry healthy cooking",
      "Auto cook programs",
      "Deodorization function"
    ],
    image: "https://picsum.photos/seed/micro94/800/600",
    price: "₹19,150"
  },
  {
    id: 95,
    name: "Samsung MG23A3515AK 23L Grill Microwave",
    category: "Microwaves",
    subCategory: "Grill",
    brand: "Samsung",
    description: "Offers both microwave and grill cooking options, ideal for crispy grilled food.",
    longDescription: "The Samsung MG23A3515AK grill microwave oven offers both microwave and grill cooking options. It is ideal for households that want crispy grilled food along with standard microwave functions.",
    features: [
      "Grill + Microwave cooking",
      "23-litre capacity",
      "Quick Defrost feature",
      "Ceramic inside cavity",
      "Energy efficient design"
    ],
    image: "https://picsum.photos/seed/micro95/800/600",
    price: "₹8,990"
  },
  {
    id: 96,
    name: "Samsung 23L Solo Microwave Oven",
    category: "Microwaves",
    subCategory: "Solo",
    brand: "Samsung",
    description: "Designed for basic kitchen needs such as reheating leftovers and defrosting.",
    longDescription: "This Samsung solo microwave oven is designed for basic kitchen needs such as reheating leftovers, defrosting frozen food, and simple cooking tasks. It is compact and easy to operate.",
    features: [
      "Solo microwave function",
      "23-litre capacity",
      "Quick defrost option",
      "Mechanical control knobs",
      "Compact design"
    ],
    image: "https://picsum.photos/seed/micro96/800/600",
    price: "₹6,490"
  },
  // New Commercial Freezers
  {
    id: 97,
    name: "Voltas 320 Liter Double Door Deep Freezer",
    category: "Commercial Freezers",
    subCategory: "Chest Box",
    brand: "Voltas",
    description: "Designed for commercial establishments such as grocery stores and ice-cream parlors.",
    longDescription: "The Voltas 320L chest freezer is designed for commercial establishments such as grocery stores and ice-cream parlors. It offers reliable cooling performance with strong insulation and energy-efficient operation. The spacious interior allows storage of frozen foods, dairy products, and ice cream in large quantities.",
    features: [
      "320-liter large storage capacity",
      "Double lid chest design",
      "Heavy-duty compressor",
      "Fast cooling technology",
      "Lock and key safety"
    ],
    image: "https://picsum.photos/seed/freezer97/800/600",
    price: "Enquire for Price"
  },
  {
    id: 98,
    name: "Voltas 405 Ltr Double Door Horizontal Chest Freezer",
    category: "Commercial Freezers",
    subCategory: "Chest Box",
    brand: "Voltas",
    description: "High-capacity freezer ideal for commercial food storage, ensuring consistent cooling.",
    longDescription: "This high-capacity freezer is ideal for commercial food storage. It ensures consistent cooling even in high ambient temperatures, making it suitable for Indian retail environments.",
    features: [
      "405-liter storage capacity",
      "Dual door top opening",
      "Manual defrost system",
      "Energy efficient compressor",
      "Durable metal body"
    ],
    image: "https://picsum.photos/seed/freezer98/800/600",
    price: "Enquire for Price"
  },
  {
    id: 99,
    name: "BlueStar GT5‑350NP 315 Liters Glass Top Deep Freezer",
    category: "Commercial Freezers",
    subCategory: "Chest Box",
    brand: "Blue Star",
    description: "Provides excellent cooling performance and long-term reliability for commercial outlets.",
    longDescription: "The Blue Star chest freezer provides excellent cooling performance and long-term reliability. It is widely used in commercial outlets such as supermarkets and dairy shops.",
    features: [
      "315-liter capacity",
      "High-performance compressor",
      "Corrosion-resistant body",
      "Heavy insulation for cooling retention",
      "Basket storage compartments"
    ],
    image: "https://picsum.photos/seed/freezer99/800/600",
    price: "Enquire for Price"
  },
  {
    id: 100,
    name: "Western Chest Freezer D225H",
    category: "Commercial Freezers",
    subCategory: "Chest Box",
    brand: "Western",
    description: "Designed for commercial food storage with powerful cooling and durable construction.",
    longDescription: "The Western chest freezer is designed for commercial food storage with powerful cooling and durable construction. Its compact design makes it suitable for small retail outlets and restaurants.",
    features: [
      "Hard-top lid design",
      "Energy efficient compressor",
      "Strong insulation",
      "Removable storage basket",
      "Low power consumption"
    ],
    image: "https://picsum.photos/seed/freezer100/800/600",
    price: "Enquire for Price"
  },
  {
    id: 101,
    name: "Elanpro EF 455 Double Door Chest Freezer",
    category: "Commercial Freezers",
    subCategory: "Chest Box",
    brand: "Elanpro",
    description: "Designed for heavy-duty commercial use with excellent cooling performance and large capacity.",
    longDescription: "Elanpro chest freezers are designed for heavy-duty commercial use. This model provides excellent cooling performance with large storage capacity, making it ideal for food businesses and supermarkets.",
    features: [
      "410-liter capacity",
      "Double door chest design",
      "High-efficiency compressor",
      "Heavy insulation technology",
      "Durable stainless steel interior"
    ],
    image: "https://picsum.photos/seed/freezer101/800/600",
    price: "Enquire for Price"
  },
  {
    id: 102,
    name: "Elanpro EF 315 Hard Top Chest Freezer Cum Cooler",
    category: "Commercial Freezers",
    subCategory: "Chest Box",
    brand: "Elanpro",
    description: "Convertible freezer that can work as both a freezer and a cooler.",
    longDescription: "This convertible freezer can work as both a freezer and a cooler, making it highly flexible for different commercial storage needs.",
    features: [
      "Convertible freezer/cooler mode",
      "Hard top chest design",
      "Energy efficient cooling",
      "Adjustable thermostat",
      "Large storage capacity"
    ],
    image: "https://picsum.photos/seed/freezer102/800/600",
    price: "Enquire for Price"
  },
  {
    id: 103,
    name: "Blue Star GT5‑590NP 530 Liters Glass Top Deep Freezer",
    category: "Commercial Freezers",
    subCategory: "Glass Door",
    brand: "Blue Star",
    description: "Designed for ice-cream display and retail stores with transparent sliding glass doors.",
    longDescription: "The Blue Star glass top freezer is designed for ice-cream display and retail stores. Its transparent sliding glass doors allow customers to view products easily while maintaining efficient cooling.",
    features: [
      "530-liter storage capacity",
      "Sliding glass top lids",
      "Energy efficient compressor",
      "LED interior lighting",
      "Heavy duty castor wheels"
    ],
    image: "https://picsum.photos/seed/freezer103/800/600",
    price: "Enquire for Price"
  },
  {
    id: 104,
    name: "Rockwell 315L Glass Top Deep Freezer SFR350GTS",
    category: "Commercial Freezers",
    subCategory: "Glass Door",
    brand: "Rockwell",
    description: "Designed for retail display applications, combining strong cooling with an attractive design.",
    longDescription: "Rockwell glass top freezers are designed for retail display applications. They combine strong cooling performance with an attractive design that helps increase product visibility.",
    features: [
      "Glass sliding doors",
      "315-liter storage capacity",
      "High-efficiency compressor",
      "Durable metal body",
      "Low power consumption"
    ],
    image: "https://picsum.photos/seed/freezer104/800/600",
    price: "Enquire for Price"
  },
  {
    id: 105,
    name: "Rockwell SFR550GT Glass Top Deep Freezer",
    category: "Commercial Freezers",
    subCategory: "Glass Door",
    brand: "Rockwell",
    description: "Large-capacity freezer suitable for commercial stores needing maximum frozen storage and display space.",
    longDescription: "This large-capacity freezer is suitable for commercial stores needing maximum frozen storage and display space.",
    features: [
      "550-liter storage capacity",
      "Glass top sliding doors",
      "Fast cooling compressor",
      "Basket storage compartments",
      "Energy efficient operation"
    ],
    image: "https://picsum.photos/seed/freezer105/800/600",
    price: "Enquire for Price"
  },
  {
    id: 106,
    name: "Elanpro Curve Glass Chest Freezer 310L",
    category: "Commercial Freezers",
    subCategory: "Glass Door",
    brand: "Elanpro",
    description: "Designed for ice-cream and frozen product display in supermarkets and convenience stores.",
    longDescription: "Elanpro glass freezers are designed for ice-cream and frozen product display in supermarkets and convenience stores.",
    features: [
      "Curved glass top design",
      "310-liter capacity",
      "LED display lighting",
      "Low energy consumption",
      "Durable heavy-duty compressor"
    ],
    image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAREBUQEBAQFRAPEBAQEBMPEBAXDw4QFREXGRUSFhMYHCggGBolHRUYITEhJSktLi4uGB8zODMsNykuLisBCgoKDQ0NFQ8PFS4ZFRkrKysrLS0rKysrNzctNy0rLSs3KystNysrLSstKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUCAwYHAf/EAD0QAAIBAgMDCAYIBgMAAAAAAAABAgMRBCExBRJBEyIyUWFxgbFCgpGhwdEGFSMzUnKS8BRDYpPC4SRT0v/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABYRAQEBAAAAAAAAAAAAAAAAAAARAf/aAAwDAQACEQMRAD8A9wABUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAqNsbep0Oalv1bZQTyXVvPh5gW5CxO1sPTdp1YJrhvJv2I4TFbTxFa7q1HZvoQuqcV1dveyvnH92eYSvRlt/CXty8PG6+BsjtfDPStT/UebSwzybnTV0mlKpaXVfszXuMlh5cJ0v70PiwV6XHaVB6Vqf64maxlL/sp/rj8zzWNCp+KH96j/6Mo0ql878cox3pS/LGN7ha9LVaD0lHwkjPeXWjzKdKq/5VRLrnCTl320XvNbpy9LfuuvJeywK9SB5am1mnJesboVprSpU8JsJXpgPN1jKq/nVl67MltCsv59W3538wr0YHAYfH4mSuq9Td622r92efefa22q0MlWm33pgrvgU30W2hOvRcp5yhNxvlmrJ5+0uQAAAAAAAAAAAAAAAc39Ltsuio0Yu0qkW5Pio6WXeBjt76QWbo0Gt5ZTqLSHYutnLXtm9W9Xq3xMYV46fEk0KlNO9k3/VmEfcPhp1OirL8T0/2WeE2XCLvLnPt09hhDaP5ff8AM309oL8Kea4v2aFEvEUlkuqKXuzXtuanh4aNX4dCLMXj1+G/bv8A+jVjK7krQTV7bzbWltFb9+0DTUoQqS3acIJK15bkU3n2cPPuLGlgKW5nBNvLebe81dXTfq6dprozpRjZb3Hhm8l8bkzlqeVpxsklm7cNfF+QEZbOp8IyXdVqL/Iyjs9cJ1V3Yip5bxITjbKUXnwnC/bqxSi7q8eq9nFpdejAjxwWf3tfOM7p1Lq24881+8jVHZMYxSjN57zbcKUm1zUldx4WftLKjBu/NaurZrS/nxFna9nxtfgskgK36r/rj44eg7e5FVOjGba5jpRllKNKEHVa7Vnu+ZZ7TxTk+Qg3p9q09I/h73f95lXi6jbVKms3ZJLgv3xINVes5Pk6abbyy7PJdpIw+w1rVk2/wwdl4y1fuJ2BwcaUeuT6UuvsXUiUWCx+j2FhTptQjZOd9W87LrLQg7H6D/M/JE4igAAAAAAAAAAAAAc59KsPQ+9rxi406UpSk1K8YRu27RzfhmdGVG2kt5XSacbNPRrqYNcFgdo7GxFVUKNeMq05OMYRliFKUkm7LeVr2T9hcfUNLhOqvWi/8SfHBUVJSVGipR6MlSpqUXa11JK6JBUU72EvRrTXfGL+KMXsaotKy8YNfFl0AKT6trrSdN+Mvih/DYlejF90o/EuwIKS2IWtKXhZ+RksTUXSp1F6ry9xcgCl+sFxTXej6sfDsLm5hKlF6xi++KEFWsfHg2u5s2Q2j1VJfqZLlgqT1pw/Sl5GuWy6L9D2Sl8xBGq1YRg5XScnftm7tXv7febtlYVxXKS6c88/Ri+HezZT2TS1tLmtNJybWXfwJYAAAW+yOg/zPyROIWyV9n6z+BNIoAAAAAAAAAAAAAFVtnpR7n5lqVe2dY9z8wK4AGkAAQAAAAAAAAAABsp6P99ZrNlPSRrAAAoudlfd+LJhD2V934smGVAAAAAAAAAAAAAAq9s6x7n5otCr2zrH1vgDVcACoAAAAAAAAAAAAAM4aMwNkNGawAAAutlr7Nd78yWQtj1IypJxaavLNO616yaRQAAAAAAAAAAAAAKzbPo+t8CzK3bPo+t8AKwAFQAAAAAAAAAAAAAZw0ZgbKej/wB+SIbnKT3VdNWvCLXKRvG/2s+jh1x4y6rMDOpVSe6k5Ttfdja6Vr3k3zYq3GTRGqS3knKUXBvdTe9/DuV1zYrp159SSUX2nySjuZ7m5x3oyeG3ty+VNc/Fyv6Wl81xRlNvfbfKcok95ucP4lU95Pn1FzMPS483nWzWeQHSbHvySvvXzvvxjGXjGOS7kTiBsOKVCKSilbSG9u68HLNrteupPIoAAAAAAAAAAAAAFbtn0fW+BZHyUU9Un3gc2CVtbCVVJOhThKLWcXJxd78HZpLwN9PZl4ptuMmk2nZ7rtmr5XLUVwJk9mTWln45+8j1KE46xfsy9oGsAAAAAAAAAAZxV4yyT5rycnFPJ5OS6K7eGpATW4uhuQ3fxfw1OW49Vri5X8L55MmvoT6PRfSi5R09KKzkutcdCDB3cLSvO1obqjy7Spu6w9N5YeP9U87a2dmB9518t91HF2s4LEuG4s4y6GGp9mrz4jDQi3FWg6blPcUG40HNNtumunVqcXN5atZmuco7kr8nyab3t67w6qbkfvLc7E1e7LLrRY7LwVSdTlJKUY2knKsouvWtJ2jK2UafFRj2X4oC8wKtBJWyusrW17CQfIRSVkfSKAAAAAAAAAAAAAAAAAAAAANdSjGWsU+9Eeezab0uu5/MmACrqbKfoyXiiNPA1F6N+5pl6BSOblFrVNd6Ph0jRGxGChJOySfBpWsy0ikBUPbsI16eHqUqsateThCyjKCkmlaTums5a2Z0T2bU7PaERZySpzbV0oSbSTbkrO6ss3fqWbImISU3Qp85zd+RUHBSXJX/AORVzc43eSjbVRfWXFHA1Oq2md/kWFDDRi72W9a17Z26r62yArsBsZJqpWe/NLdimrQpQcUnTjHRRuvncuACKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAqcZsaM6inaOVWnWzXO3oSvk+HEtgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/2Q==",
    price: "Enquire for Price"
  },
  {
    id: 107,
    name: "Western 2‑in‑1 Combi Hard Top Deep Freezer WHCF425H",
    category: "Commercial Freezers",
    subCategory: "Glass Door",
    brand: "Western",
    description: "Offers both freezer and chiller modes, widely used in commercial establishments.",
    longDescription: "The Western combi freezer offers both freezer and chiller modes. It is widely used in commercial establishments for storing frozen foods and beverages.",
    features: [
      "Convertible freezer and cooler",
      "Large storage capacity",
      "Hard-top lid design",
      "Energy efficient compressor",
      "Heavy insulation technology"
    ],
    image: "https://picsum.photos/seed/freezer107/800/600",
    price: "Enquire for Price"
  },
  // New Water Dispensers
  {
    id: 108,
    name: "Voltas Minimagic Spring RV Plus Water Dispenser",
    category: "Water Dispensers",
    subCategory: "Floor Standing",
    brand: "Voltas",
    description: "Designed for homes and offices that need instant hot and cold drinking water.",
    longDescription: "The Voltas Minimagic Spring RV Plus water dispenser is designed for homes and offices that need instant hot and cold drinking water. Its compact design fits easily into small spaces while delivering reliable performance with energy-efficient cooling technology.",
    features: [
      "Hot, Cold & Normal water options",
      "Compressor-based cooling system",
      "Compact tabletop design",
      "Child lock for hot water",
      "Energy-efficient operation"
    ],
    image: "https://picsum.photos/seed/water108/800/600",
    price: "Enquire for Price"
  },
  {
    id: 109,
    name: "Voltas Minimagic Pure R Water Dispenser",
    category: "Water Dispensers",
    subCategory: "Floor Standing",
    brand: "Voltas",
    description: "Offers efficient cooling and heating functions, suitable for daily use.",
    longDescription: "This Voltas water dispenser offers efficient cooling and heating functions, making it suitable for daily use in homes and workplaces. The durable body and powerful compressor ensure long-lasting performance.",
    features: [
      "Three water taps (Hot / Cold / Normal)",
      "Fast cooling technology",
      "Durable plastic body",
      "Quiet operation",
      "Compact modern design"
    ],
    image: "https://picsum.photos/seed/water109/800/600",
    price: "Enquire for Price"
  },
  {
    id: 110,
    name: "Blue Star BWD3FMGA Water Dispenser",
    category: "Water Dispensers",
    subCategory: "Floor Standing",
    brand: "Blue Star",
    description: "Floor-standing water dispenser providing instant access to hot and cold water.",
    longDescription: "The Blue Star BWD3FMGA floor-standing water dispenser provides instant access to hot and cold water. It features a sturdy body and reliable compressor cooling technology that ensures consistent water temperature.",
    features: [
      "Floor standing design",
      "Hot, cold, and normal water taps",
      "Stainless steel water tank",
      "Energy-efficient compressor",
      "Child safety lock"
    ],
    image: "https://picsum.photos/seed/water110/800/600",
    price: "Enquire for Price"
  },
  {
    id: 111,
    name: "Blue Star Top Load Water Dispenser with Cooling Cabinet",
    category: "Water Dispensers",
    subCategory: "Floor Standing",
    brand: "Blue Star",
    description: "Includes a small refrigerator cabinet at the bottom for storing beverages or snacks.",
    longDescription: "This Blue Star water dispenser includes a small refrigerator cabinet at the bottom, allowing users to store beverages or snacks along with dispensing hot and cold water.",
    features: [
      "Built-in cooling cabinet",
      "Hot and cold water dispensing",
      "High cooling efficiency",
      "Durable body construction",
      "LED indicator lights"
    ],
    image: "https://picsum.photos/seed/water111/800/600",
    price: "Enquire for Price"
  },
  {
    id: 112,
    name: "Blue Star BL1HPCGA Bottom Load Water Dispenser",
    category: "Water Dispensers",
    subCategory: "Bottom Load",
    brand: "Blue Star",
    description: "Offers a premium design where the water bottle is hidden inside the cabinet.",
    longDescription: "The Blue Star BL1HPCGA bottom-loading dispenser offers a premium design where the water bottle is hidden inside the cabinet. This makes bottle replacement easier and gives the appliance a clean, modern look.",
    features: [
      "Bottom-loading bottle design",
      "Hot / Cold / Normal water options",
      "Stainless steel water tank",
      "Quiet cooling compressor",
      "Elegant modern design"
    ],
    image: "https://picsum.photos/seed/water112/800/600",
    price: "Enquire for Price"
  },
  {
    id: 113,
    name: "Voltas Minimagic Spring TT Top Load Water Dispenser",
    category: "Water Dispensers",
    subCategory: "Table Top",
    brand: "Voltas",
    description: "A compact tabletop water dispenser designed for homes and offices.",
    longDescription: "A compact tabletop water dispenser designed for homes and offices. It offers efficient cooling performance and easy installation.",
    features: [
      "Table-top design",
      "Hot and cold water dispensing",
      "Energy efficient compressor",
      "Lightweight body",
      "Easy maintenance"
    ],
    image: "https://picsum.photos/seed/water113/800/600",
    price: "Enquire for Price"
  },
  {
    id: 114,
    name: "Blue Star Premium Top Load Water Dispenser",
    category: "Water Dispensers",
    subCategory: "Top Load",
    brand: "Blue Star",
    description: "Designed with strong build quality and efficient cooling performance.",
    longDescription: "This premium Blue Star dispenser is designed with strong build quality and efficient cooling performance. It is suitable for homes, offices, clinics, and shops.",
    features: [
      "Compressor-based cooling",
      "Hot and cold water options",
      "Stainless steel cold tank",
      "Child safety lock",
      "Elegant design"
    ],
    image: "https://picsum.photos/seed/water114/800/600",
    price: "Enquire for Price"
  },
  {
    id: 115,
    name: "Voltas Plastic Pearl Water Dispenser",
    category: "Water Dispensers",
    subCategory: "Floor Standing",
    brand: "Voltas",
    description: "Offers modern design and reliable cooling technology for everyday use.",
    longDescription: "The Voltas Plastic Pearl dispenser offers modern design and reliable cooling technology for everyday use. It is ideal for households and small offices needing quick access to chilled or hot water.",
    features: [
      "Hot and cold water dispensing",
      "20-liter bottle compatible",
      "Compact and stylish design",
      "Energy efficient compressor",
      "Easy operation"
    ],
    image: "https://picsum.photos/seed/water115/800/600",
    price: "Enquire for Price"
  },
  // New Stabilizers
  {
    id: 116,
    name: "V-Guard VG 400 Voltage Stabilizer",
    category: "Stabilizers",
    subCategory: "Mainline",
    brand: "V-Guard",
    description: "Designed to protect refrigerators and small appliances from voltage fluctuations.",
    longDescription: "The V-Guard VG 400 stabilizer is designed to protect refrigerators and small appliances from voltage fluctuations. It ensures a stable voltage supply, improving appliance performance and preventing electrical damage. Its compact wall-mountable design makes it suitable for modern homes.",
    features: [
      "Suitable for refrigerators up to 300L",
      "Wide input voltage range",
      "Thermal overload protection",
      "Time delay system for safety",
      "Compact wall-mount design"
    ],
    image: "https://picsum.photos/seed/stab116/800/600",
    price: "Enquire for Price"
  },
  {
    id: 117,
    name: "Microtek EM4160 Digital Voltage Stabilizer",
    category: "Stabilizers",
    subCategory: "Mainline",
    brand: "Microtek",
    description: "Specially designed for air conditioners up to 1.5 ton capacity.",
    longDescription: "The Microtek EM4160 stabilizer is specially designed for air conditioners up to 1.5 ton capacity. It maintains stable voltage levels and protects expensive appliances from sudden power fluctuations.",
    features: [
      "Suitable for AC up to 1.5 Ton",
      "Digital display for voltage monitoring",
      "Automatic voltage regulation",
      "Wall-mountable metal body",
      "Built-in thermal overload protection"
    ],
    image: "https://picsum.photos/seed/stab117/800/600",
    price: "Enquire for Price"
  },
  {
    id: 118,
    name: "Everest EW 500 Voltage Stabilizer",
    category: "Stabilizers",
    subCategory: "Mainline",
    brand: "Everest",
    description: "Ideal for air conditioners and heavy appliances, offering wide voltage protection.",
    longDescription: "The Everest EW 500 stabilizer is ideal for air conditioners and heavy appliances. It offers wide voltage protection and advanced circuitry to maintain consistent power supply even during major fluctuations.",
    features: [
      "Supports AC up to 2 Ton",
      "Wide input voltage range",
      "Digital voltage display",
      "High-performance transformer",
      "Heavy-duty build quality"
    ],
    image: "https://picsum.photos/seed/stab118/800/600",
    price: "Enquire for Price"
  },
  {
    id: 119,
    name: "Voltas AC Voltage Stabilizer",
    category: "Stabilizers",
    subCategory: "Mainline",
    brand: "Voltas",
    description: "Provides reliable voltage protection for air conditioners and other heavy appliances.",
    longDescription: "The Voltas stabilizer is designed to provide reliable voltage protection for air conditioners and other heavy appliances. It features advanced safety protection systems and durable construction for long-term use.",
    features: [
      "Suitable for AC units",
      "Automatic voltage regulation",
      "High and low voltage protection",
      "Overload protection",
      "Durable metal cabinet"
    ],
    image: "https://picsum.photos/seed/stab119/800/600",
    price: "Enquire for Price"
  },
  {
    id: 120,
    name: "V-Guard VG 100 Voltage Stabilizer",
    category: "Stabilizers",
    subCategory: "Mainline",
    brand: "V-Guard",
    description: "Suitable for smaller appliances like televisions and entertainment systems.",
    longDescription: "This stabilizer is suitable for smaller appliances like televisions and entertainment systems. It offers reliable voltage control and protects sensitive electronic circuits from sudden voltage spikes.",
    features: [
      "Ideal for LED TVs and small appliances",
      "Compact and lightweight design",
      "Intelligent voltage correction",
      "Built-in surge protection",
      "Energy-efficient operation"
    ],
    image: "https://picsum.photos/seed/stab120/800/600",
    price: "Enquire for Price"
  },
  {
    id: 121,
    name: "Microtek Pearl EM 4160+ Stabilizer",
    category: "Stabilizers",
    subCategory: "Mainline",
    brand: "Microtek",
    description: "A digital stabilizer designed for modern air conditioners.",
    longDescription: "A digital stabilizer designed for modern air conditioners. It offers advanced protection against voltage fluctuations and ensures consistent cooling performance.",
    features: [
      "Digital display",
      "Automatic cut-off protection",
      "Suitable for AC up to 1.5 Ton",
      "Time delay system",
      "Wall mountable design"
    ],
    image: "https://picsum.photos/seed/stab121/800/600",
    price: "Enquire for Price"
  },
  {
    id: 122,
    name: "Everest EWD 500 Digital Stabilizer",
    category: "Stabilizers",
    subCategory: "Mainline",
    brand: "Everest",
    description: "Features double booster technology for reliable voltage correction.",
    longDescription: "This stabilizer features double booster technology for reliable voltage correction in areas with extreme fluctuations.",
    features: [
      "Digital voltage indicator",
      "Double booster technology",
      "Wide voltage range",
      "Thermal overload protection",
      "Heavy-duty copper transformer"
    ],
    image: "https://picsum.photos/seed/stab122/800/600",
    price: "Enquire for Price"
  },
  {
    id: 123,
    name: "V-Guard Crystal Plus TV Stabilizer",
    category: "Stabilizers",
    subCategory: "Mainline",
    brand: "V-Guard",
    description: "Specially designed for LED and LCD televisions to protect them from voltage surges.",
    longDescription: "The Crystal Plus stabilizer is specially designed for LED and LCD televisions to protect them from voltage surges and fluctuations.",
    features: [
      "Designed for TVs up to 65 inches",
      "Intelligent time delay system",
      "Surge protection",
      "Compact stylish design",
      "Energy efficient"
    ],
    image: "https://picsum.photos/seed/stab123/800/600",
    price: "Enquire for Price"
  },
  // New Air Conditioners
  {
    id: 124,
    name: "LG US‑H19VNXE 1.5 Ton 3 Star Split AC",
    category: "Air Conditioners",
    subCategory: "Split AC",
    brand: "LG",
    description: "LG inverter split AC designed for medium-sized rooms with reliable cooling and energy-efficient performance.",
    longDescription: "LG inverter split AC designed for medium-sized rooms with reliable cooling and energy-efficient performance.",
    features: [
      "Dual Inverter Compressor",
      "HD Dust / Anti-virus Filter",
      "Stabilizer-free operation",
      "Low noise cooling",
      "4-way swing airflow"
    ],
    image: "https://picsum.photos/seed/ac124/800/600",
    price: "Enquire for Price"
  },
  {
    id: 125,
    name: "LG 1.5 Ton 3 Star Dual Inverter Split AC",
    category: "Air Conditioners",
    subCategory: "Split AC",
    brand: "LG",
    description: "AI-enabled inverter AC that automatically adjusts cooling capacity for improved comfort and energy savings.",
    longDescription: "AI-enabled inverter AC that automatically adjusts cooling capacity for improved comfort and energy savings.",
    features: [
      "AI Convertible 6-in-1 cooling",
      "Dual rotary inverter compressor",
      "Auto clean function",
      "Copper condenser coil",
      "Smart diagnosis system"
    ],
    image: "https://picsum.photos/seed/ac125/800/600",
    price: "Enquire for Price"
  },
  {
    id: 126,
    name: "LG 1.5 Ton 4 Star Inverter Split AC",
    category: "Air Conditioners",
    subCategory: "Split AC",
    brand: "LG",
    description: "Energy-efficient AC designed to deliver powerful cooling while reducing electricity usage.",
    longDescription: "Energy-efficient AC designed to deliver powerful cooling while reducing electricity usage.",
    features: [
      "4-in-1 convertible cooling",
      "Stabilizer free plus",
      "Ocean black anti-corrosion protection",
      "Low gas detection",
      "Magic display"
    ],
    image: "https://picsum.photos/seed/ac126/800/600",
    price: "Enquire for Price"
  },
  {
    id: 127,
    name: "LG LS-Q18MNZA 1.5 Ton 5 Star Inverter Split AC",
    category: "Air Conditioners",
    subCategory: "Split AC",
    brand: "LG",
    description: "High-efficiency split AC suitable for medium rooms with strong cooling performance and reduced power consumption.",
    longDescription: "High-efficiency split AC suitable for medium rooms with strong cooling performance and reduced power consumption.",
    features: [
      "Dual rotary inverter compressor",
      "4-way air swing",
      "R32 eco refrigerant",
      "Copper condenser coil",
      "Energy-efficient 5-star rating"
    ],
    image: "https://picsum.photos/seed/ac127/800/600",
    price: "Enquire for Price"
  },
  {
    id: 128,
    name: "Daikin MTKM50U 1.5 Ton 5 Star Inverter Split AC",
    category: "Air Conditioners",
    subCategory: "Split AC",
    brand: "Daikin",
    description: "Premium inverter AC with advanced cooling technology and durable copper components.",
    longDescription: "Premium inverter AC with advanced cooling technology and durable copper components.",
    features: [
      "Coanda airflow technology",
      "PM2.5 air purification filter",
      "Dew Clean technology",
      "Silent operation",
      "High ambient cooling"
    ],
    image: "https://picsum.photos/seed/ac128/800/600",
    price: "Enquire for Price"
  },
  {
    id: 129,
    name: "Daikin ATL50TV 1.5 Ton 3 Star Split AC",
    category: "Air Conditioners",
    subCategory: "Split AC",
    brand: "Daikin",
    description: "Efficient split AC designed for Indian summers with consistent cooling performance.",
    longDescription: "Efficient split AC designed for Indian summers with consistent cooling performance.",
    features: [
      "Copper condenser coil",
      "Econo power saving mode",
      "Stabilizer free operation",
      "Powerful cooling",
      "Sleep mode"
    ],
    image: "https://picsum.photos/seed/ac129/800/600",
    price: "Enquire for Price"
  },
  {
    id: 130,
    name: "Daikin FTKF50TV 1.5 Ton 5 Star Inverter Split AC",
    category: "Air Conditioners",
    subCategory: "Split AC",
    brand: "Daikin",
    description: "1.5 Ton 5 Star Inverter Split AC with power chill operation and PM2.5 filter.",
    longDescription: "1.5 Ton 5 Star Inverter Split AC with power chill operation and PM2.5 filter.",
    features: [
      "Inverter swing compressor",
      "Power chill operation",
      "PM2.5 filter",
      "Auto restart",
      "Self diagnosis"
    ],
    image: "https://picsum.photos/seed/ac130/800/600",
    price: "Enquire for Price"
  },
  {
    id: 131,
    name: "Daikin JTKJ50U Streamer Series 1.5 Ton AC",
    category: "Air Conditioners",
    subCategory: "Split AC",
    brand: "Daikin",
    description: "Streamer Series 1.5 Ton AC with streamer air purification and intelligent eye sensor.",
    longDescription: "Streamer Series 1.5 Ton AC with streamer air purification and intelligent eye sensor.",
    features: [
      "Streamer air purification",
      "Intelligent eye sensor",
      "Powerful airflow system",
      "Energy saving inverter compressor",
      "Silent cooling mode"
    ],
    image: "https://picsum.photos/seed/ac131/800/600",
    price: "Enquire for Price"
  },
  {
    id: 132,
    name: "Voltas 1.5 Ton 3 Star Split AC",
    category: "Air Conditioners",
    subCategory: "Split AC",
    brand: "Voltas",
    description: "1.5 Ton 3 Star Split AC with turbo cooling and anti-dust filter.",
    longDescription: "1.5 Ton 3 Star Split AC with turbo cooling and anti-dust filter.",
    features: [
      "Turbo cooling",
      "Copper condenser coil",
      "Anti-dust filter",
      "Sleep mode",
      "Auto restart"
    ],
    image: "https://picsum.photos/seed/ac132/800/600",
    price: "Enquire for Price"
  },
  {
    id: 133,
    name: "Voltas 1.5 Ton 3 Star Inverter Split AC",
    category: "Air Conditioners",
    subCategory: "Split AC",
    brand: "Voltas",
    description: "1.5 Ton 3 Star Inverter Split AC with adjustable inverter compressor.",
    longDescription: "1.5 Ton 3 Star Inverter Split AC with adjustable inverter compressor.",
    features: [
      "Adjustable inverter compressor",
      "Energy efficient operation",
      "Turbo cooling",
      "Stabilizer free",
      "Copper condenser"
    ],
    image: "https://picsum.photos/seed/ac133/800/600",
    price: "Enquire for Price"
  },
  {
    id: 134,
    name: "Voltas 1.5 Ton Adjustable Split AC",
    category: "Air Conditioners",
    subCategory: "Split AC",
    brand: "Voltas",
    description: "1.5 Ton Adjustable Split AC with convertible cooling modes.",
    longDescription: "1.5 Ton Adjustable Split AC with convertible cooling modes.",
    features: [
      "Convertible cooling modes",
      "High ambient cooling",
      "Multi stage filtration",
      "Low noise design",
      "Sleep mode"
    ],
    image: "https://picsum.photos/seed/ac134/800/600",
    price: "Enquire for Price"
  },
  {
    id: 135,
    name: "Voltas 183V Vectra Elite 1.5 Ton Inverter AC",
    category: "Air Conditioners",
    subCategory: "Split AC",
    brand: "Voltas",
    description: "183V Vectra Elite 1.5 Ton Inverter AC with active dehumidifier.",
    longDescription: "183V Vectra Elite 1.5 Ton Inverter AC with active dehumidifier.",
    features: [
      "Active dehumidifier",
      "Turbo cooling mode",
      "Eco mode",
      "Anti bacterial filter",
      "Auto swing"
    ],
    image: "https://picsum.photos/seed/ac135/800/600",
    price: "Enquire for Price"
  },
  {
    id: 136,
    name: "Haier HSU18C‑NMW3B 1.5 Ton Inverter Split AC",
    category: "Air Conditioners",
    subCategory: "Split AC",
    brand: "Haier",
    description: "1.5 Ton Inverter Split AC with self clean technology and turbo cooling.",
    longDescription: "1.5 Ton Inverter Split AC with self clean technology and turbo cooling.",
    features: [
      "Self clean technology",
      "Turbo cooling",
      "Anti bacterial filter",
      "Low noise operation",
      "Copper condenser"
    ],
    image: "https://picsum.photos/seed/ac136/800/600",
    price: "Enquire for Price"
  },
  {
    id: 137,
    name: "Haier 1.5 Ton 3 Star Split Inverter AC",
    category: "Air Conditioners",
    subCategory: "Split AC",
    brand: "Haier",
    description: "1.5 Ton 3 Star Split Inverter AC with hexa inverter compressor.",
    longDescription: "1.5 Ton 3 Star Split Inverter AC with hexa inverter compressor.",
    features: [
      "Hexa inverter compressor",
      "Stabilizer free operation",
      "Turbo cooling",
      "Copper condenser",
      "Sleep mode"
    ],
    image: "https://picsum.photos/seed/ac137/800/600",
    price: "Enquire for Price"
  },
  {
    id: 138,
    name: "Haier Gravity Series 1.5 Ton 5 Star Inverter AC",
    category: "Air Conditioners",
    subCategory: "Split AC",
    brand: "Haier",
    description: "Gravity Series 1.5 Ton 5 Star Inverter AC with 7-in-1 convertible cooling.",
    longDescription: "Gravity Series 1.5 Ton 5 Star Inverter AC with 7-in-1 convertible cooling.",
    features: [
      "7-in-1 convertible cooling",
      "Self clean technology",
      "AI climate control",
      "4-way airflow",
      "Anti corrosion coating"
    ],
    image: "https://picsum.photos/seed/ac138/800/600",
    price: "Enquire for Price"
  },
  {
    id: 139,
    name: "Haier CleanCool 1.5 Ton Split AC",
    category: "Air Conditioners",
    subCategory: "Split AC",
    brand: "Haier",
    description: "CleanCool 1.5 Ton Split AC with self clean technology and turbo cooling.",
    longDescription: "CleanCool 1.5 Ton Split AC with self clean technology and turbo cooling.",
    features: [
      "Self clean technology",
      "Turbo cooling",
      "Hyper PCB protection",
      "Stabilizer free",
      "Low noise design"
    ],
    image: "https://picsum.photos/seed/ac139/800/600",
    price: "Enquire for Price"
  },
  {
    id: 140,
    name: "Hitachi 3400SXL 1.5 Ton Xpandable+ Inverter Split AC",
    category: "Air Conditioners",
    subCategory: "Split AC",
    brand: "Hitachi",
    description: "1.5 Ton Xpandable+ Inverter Split AC with ice clean self cleaning.",
    longDescription: "1.5 Ton Xpandable+ Inverter Split AC with ice clean self cleaning.",
    features: [
      "Xpandable inverter technology",
      "Ice clean self cleaning",
      "4-way air swing",
      "Eco mode",
      "Copper condenser"
    ],
    image: "https://picsum.photos/seed/ac140/800/600",
    price: "Enquire for Price"
  },
  {
    id: 141,
    name: "Hitachi Yoshi 5700XXL 1.5 Ton 5 Star Inverter Split AC",
    category: "Air Conditioners",
    subCategory: "Split AC",
    brand: "Hitachi",
    description: "Yoshi 5700XXL 1.5 Ton 5 Star Inverter Split AC with super silent operation.",
    longDescription: "Yoshi 5700XXL 1.5 Ton 5 Star Inverter Split AC with super silent operation.",
    features: [
      "Super silent operation",
      "Smart climate technology",
      "Energy efficient compressor",
      "Copper condenser",
      "Auto restart"
    ],
    image: "https://picsum.photos/seed/ac141/800/600",
    price: "Enquire for Price"
  },
  {
    id: 142,
    name: "Hitachi 1.5 Ton 3 Star Split Inverter AC",
    category: "Air Conditioners",
    subCategory: "Split AC",
    brand: "Hitachi",
    description: "1.5 Ton 3 Star Split Inverter AC with expandable inverter and powerful cooling.",
    longDescription: "1.5 Ton 3 Star Split Inverter AC with expandable inverter and powerful cooling.",
    features: [
      "Expandable inverter",
      "Powerful cooling",
      "Dust filter",
      "Stabilizer free operation",
      "Sleep mode"
    ],
    image: "https://picsum.photos/seed/ac142/800/600",
    price: "Enquire for Price"
  },
  {
    id: 143,
    name: "Hitachi Kashikoi 5100X 1.5 Ton AC",
    category: "Air Conditioners",
    subCategory: "Split AC",
    brand: "Hitachi",
    description: "Kashikoi 5100X 1.5 Ton AC with tropical compressor and eco friendly refrigerant.",
    longDescription: "Kashikoi 5100X 1.5 Ton AC with tropical compressor and eco friendly refrigerant.",
    features: [
      "Tropical compressor",
      "Eco friendly refrigerant",
      "Auto fan speed",
      "Silent cooling",
      "Copper coil"
    ],
    image: "https://picsum.photos/seed/ac143/800/600",
    price: "Enquire for Price"
  },
  // New Toshiba Air Conditioners
  {
    id: 144,
    name: "Toshiba 1.5 Ton 3 Star Inverter Split AC",
    category: "Air Conditioners",
    subCategory: "Split AC",
    brand: "Toshiba",
    description: "1.5 Ton 3 Star Inverter Split AC with high efficiency inverter compressor.",
    longDescription: "1.5 Ton 3 Star Inverter Split AC with high efficiency inverter compressor and turbo cooling.",
    features: [
      "High efficiency inverter compressor",
      "Copper condenser",
      "Turbo cooling",
      "Sleep mode",
      "Low noise operation"
    ],
    image: "https://picsum.photos/seed/ac144/800/600",
    price: "Enquire for Price"
  },
  {
    id: 145,
    name: "Toshiba RAS‑13SKCV3SG 1 Ton Split AC",
    category: "Air Conditioners",
    subCategory: "Split AC",
    brand: "Toshiba",
    description: "RAS‑13SKCV3SG 1 Ton Split AC with powerful cooling and energy saving mode.",
    longDescription: "RAS‑13SKCV3SG 1 Ton Split AC with powerful cooling and energy saving mode.",
    features: [
      "Powerful cooling",
      "Energy saving mode",
      "Copper condenser",
      "Eco friendly refrigerant",
      "Silent operation"
    ],
    image: "https://picsum.photos/seed/ac145/800/600",
    price: "Enquire for Price"
  },
  {
    id: 146,
    name: "Toshiba Seiya Series 1.5 Ton AC",
    category: "Air Conditioners",
    subCategory: "Split AC",
    brand: "Toshiba",
    description: "Seiya Series 1.5 Ton AC with inverter compressor and energy efficient cooling.",
    longDescription: "Seiya Series 1.5 Ton AC with inverter compressor and energy efficient cooling.",
    features: [
      "Inverter compressor",
      "Energy efficient cooling",
      "Quiet operation",
      "Air purification filter",
      "Copper coil"
    ],
    image: "https://picsum.photos/seed/ac146/800/600",
    price: "Enquire for Price"
  },
  {
    id: 147,
    name: "Toshiba Haori Series Inverter AC",
    category: "Air Conditioners",
    subCategory: "Split AC",
    brand: "Toshiba",
    description: "Haori Series Inverter AC with Wi-Fi smart control and stylish fabric cover design.",
    longDescription: "Haori Series Inverter AC with Wi-Fi smart control and stylish fabric cover design.",
    features: [
      "Wi-Fi smart control",
      "Stylish fabric cover design",
      "Silent cooling technology",
      "Energy efficient inverter",
      "Smart airflow control"
    ],
    image: "https://picsum.photos/seed/ac147/800/600",
    price: "Enquire for Price"
  },
  // New Godrej Air Conditioners
  {
    id: 148,
    name: "Godrej 1.5 Ton 3 Star Inverter Split Air Conditioner (SIC 18TTC3-WYQ)",
    category: "Air Conditioners",
    subCategory: "Split AC",
    brand: "Godrej",
    description: "1.5 Ton 3 Star Inverter Split AC with 5-in-1 convertible cooling and I-Sense technology.",
    longDescription: "The Godrej 1.5 Ton 3 Star Inverter Split Air Conditioner is designed to deliver powerful cooling with energy efficiency. It features 5-in-1 convertible inverter technology, allowing users to adjust cooling capacity from 40% to 110% depending on the room temperature and heat load. This helps save electricity while maintaining optimal comfort.\n\nThe AC comes with 100% copper condenser and evaporator coils with Blue Fin Anti-Corrosion coating, ensuring durability and long-lasting performance. The I-Sense technology uses a sensor in the remote control to detect the temperature around the user and adjust cooling accordingly for maximum comfort.\n\nWith silent operation, self-cleaning technology, and eco-friendly R32 refrigerant, this air conditioner is suitable for modern homes looking for efficient and reliable cooling solutions.",
    features: [
      "5-in-1 Convertible Cooling Technology",
      "Inverter Compressor with Variable Speed Operation",
      "I-Sense Smart Temperature Sensor",
      "Silent Operation with Acoustic Jacket Compressor",
      "Self-Clean / Hygiene+ Mode",
      "Anti-Freeze Thermostat Protection",
      "Blue Fin Anti-Corrosion Coating",
      "Eco-friendly R32 Refrigerant Gas",
      "4-Way Air Swing",
      "Active Carbon & Anti-Bacterial Filters"
    ],
    warranty: [
      "5 Years Comprehensive Warranty",
      "10 Years Warranty on Compressor"
    ],
    inTheBox: [
      "1 Indoor Unit",
      "1 Outdoor Unit",
      "1 Remote Control",
      "User Manual",
      "Warranty Card",
      "3m Copper Wire / Interconnecting Pipe"
    ],
    technicalSpecifications: {
      "Brand": "Godrej",
      "Model": "SIC 18TTC3-WYQ",
      "Installation Type": "Split System",
      "Form Factor": "Mini-Split",
      "Capacity": "1.5 Ton",
      "Annual Energy Consumption": "980.37 kWh/year",
      "ISEER Rating": "3.85",
      "Noise Level": "38 dB",
      "Voltage": "230 Volts",
      "Wattage": "5000 Watts",
      "Colour": "White",
      "Material": "Plastic",
      "Item Weight": "37.5 kg",
      "Dimensions": "23.5 × 97 × 30 cm",
      "Country of Origin": "India",
      "Manufacturer": "Godrej & Boyce MFG Co. Ltd."
    },
    image: "https://picsum.photos/seed/ac148/800/600",
    price: "Enquire for Price"
  },
  {
    id: 149,
    name: "Godrej 1.5 Ton 3 Star Fixed Speed Window Air Conditioner (WFC 18UTC3)",
    category: "Air Conditioners",
    subCategory: "Window AC",
    brand: "Godrej",
    description: "Economical and easy-to-install window air conditioner designed for medium-sized rooms.",
    longDescription: "Economical and easy-to-install window air conditioner designed for medium-sized rooms. It provides efficient cooling even in high ambient temperatures while ensuring durability with copper condenser technology.",
    features: [
      "Capacity: 1.5 Ton – suitable for rooms 111 to 150 sq.ft",
      "Air Flow: 530 CFM",
      "Works in ambient temperature up to 48°C",
      "3 Star energy rating",
      "R32 eco-friendly refrigerant",
      "100% copper condenser with anti-corrosive Blue Fin coating",
      "Hydrophilic Blue Fin evaporator",
      "Anti-dust filter",
      "Anti-freeze protection",
      "Self diagnosis with error codes"
    ],
    warranty: [
      "1 Year on Product",
      "5 Years on Compressor"
    ],
    inTheBox: [
      "Indoor Unit",
      "Remote",
      "User Manual",
      "Warranty Card"
    ],
    technicalSpecifications: {
      "Capacity": "1.5 Tons",
      "Annual Energy Consumption": "1203.74 kWh",
      "Noise Level": "48 dB",
      "Installation Type": "Window",
      "Colour": "White",
      "Voltage": "230V",
      "Wattage": "1555W",
      "Item Dimensions": "43 × 66 × 66 cm",
      "Item Weight": "51.5 kg"
    },
    image: "https://picsum.photos/seed/ac149/800/600",
    price: "Enquire for Price"
  },
  {
    id: 150,
    name: "Godrej 2.0 Ton 3 Star Inverter Split Air Conditioner (SIC 24ITC3-WWR)",
    category: "Air Conditioners",
    subCategory: "Split AC",
    brand: "Godrej",
    description: "A powerful inverter split AC designed for large rooms with advanced convertible cooling.",
    longDescription: "A powerful inverter split AC designed for large rooms with advanced convertible cooling and energy-efficient inverter compressor technology.",
    features: [
      "2 Ton capacity",
      "5-in-1 Convertible cooling technology",
      "100% copper condenser and connecting pipes",
      "Designed for Indian summers – operates up to 52°C",
      "Rotary inverter compressor",
      "Eco-friendly R32 refrigerant",
      "Anti-bacterial air filtration",
      "Dehumidification mode prevents microbial growth"
    ],
    warranty: [
      "5 Years Comprehensive Warranty",
      "10 Years on Compressor"
    ],
    inTheBox: [
      "Indoor Unit",
      "Outdoor Unit",
      "Remote Control",
      "User Manual",
      "Warranty Card",
      "Installation Pipe & Wire"
    ],
    technicalSpecifications: {
      "Energy Rating": "3 Star",
      "Capacity": "2 Tons",
      "Annual Energy Consumption": "840.2 kWh",
      "Noise Level": "50 dB",
      "Installation Type": "Split System",
      "Voltage": "230V",
      "Wattage": "6050W",
      "Colour": "White",
      "Item Dimensions": "21 × 85 × 28.9 cm",
      "Item Weight": "90 kg"
    },
    image: "https://picsum.photos/seed/ac150/800/600",
    price: "Enquire for Price"
  },
  {
    id: 151,
    name: "Godrej 1.5 Ton 5 Star Inverter Split Air Conditioner (SIC 18ITC5-WWD)",
    category: "Air Conditioners",
    subCategory: "Split AC",
    brand: "Godrej",
    description: "Energy-efficient inverter AC with convertible cooling and heavy-duty performance.",
    longDescription: "Energy-efficient inverter AC with convertible cooling and heavy-duty performance designed to deliver powerful cooling even in extreme Indian summers.",
    features: [
      "1.5 Ton capacity – suitable for rooms 111-150 sq.ft",
      "5-in-1 Convertible inverter compressor",
      "Cooling capacity adjustable 40% to 110%",
      "100% copper condenser & evaporator",
      "Blue Fin anti-corrosion coating",
      "5 Star energy rating",
      "Operates efficiently up to 52°C",
      "Eco-friendly R32 refrigerant",
      "Multiple modes: Cool, Auto, Dry, Fan, Sleep, Eco, Turbo, Silent"
    ],
    warranty: [
      "5 Years Comprehensive Warranty",
      "10 Years on Compressor"
    ],
    inTheBox: [
      "Indoor Unit",
      "Outdoor Unit",
      "User Manual",
      "Warranty Card",
      "Connecting Pipes"
    ],
    technicalSpecifications: {
      "Capacity": "1.5 Tons",
      "Installation Type": "Split System",
      "Item Dimensions": "24.5 × 107 × 32.5 cm",
      "Item Weight": "37 kg",
      "Country of Origin": "India"
    },
    image: "https://picsum.photos/seed/ac151/800/600",
    price: "Enquire for Price"
  },
  {
    id: 152,
    name: "Godrej 1.0 Ton 3 Star Inverter Split Air Conditioner (SIC 12PTC3-WYQ)",
    category: "Air Conditioners",
    subCategory: "Split AC",
    brand: "Godrej",
    description: "Compact inverter split AC ideal for small rooms with efficient cooling.",
    longDescription: "Compact inverter split AC ideal for small rooms with efficient cooling and energy-saving technology.",
    features: [
      "1 Ton capacity",
      "5-in-1 Convertible cooling",
      "Power saving inverter technology",
      "100% copper condenser",
      "Anti-corrosive coating on condenser & evaporator",
      "R32 eco-friendly refrigerant",
      "Anti-bacterial filtration"
    ],
    warranty: [
      "5 Years Comprehensive Warranty",
      "10 Years on Compressor"
    ],
    inTheBox: [
      "Indoor Unit",
      "Outdoor Unit",
      "Manual",
      "Connecting Pipe"
    ],
    technicalSpecifications: {
      "Annual Energy Consumption": "694 kWh",
      "Noise Level": "37 dB",
      "Installation Type": "Split System",
      "Voltage": "230V",
      "Wattage": "3500W",
      "Colour": "White",
      "Item Weight": "30 kg",
      "Item Dimensions": "54.5 × 85 × 21 cm"
    },
    image: "https://picsum.photos/seed/ac152/800/600",
    price: "Enquire for Price"
  },
  {
    id: 153,
    name: "Godrej 1.5 Ton 5 Star Inverter Split Air Conditioner (SIC 18ITC5-WYS)",
    category: "Air Conditioners",
    subCategory: "Split AC",
    brand: "Godrej",
    description: "High-efficiency inverter AC with advanced air purification and heavy-duty cooling.",
    longDescription: "High-efficiency inverter AC with advanced air purification and heavy-duty cooling performance suitable for Indian climate conditions.",
    features: [
      "1.5 Ton capacity",
      "5 Star energy rating",
      "5-in-1 cooling system",
      "100% copper condenser with Blue Fin coating",
      "Advanced air purification filters",
      "Operates efficiently up to 52°C",
      "R32 eco-friendly refrigerant"
    ],
    warranty: [
      "5 Years Comprehensive Warranty",
      "10 Years on Compressor"
    ],
    technicalSpecifications: {
      "Annual Energy Consumption": "765.85 kWh",
      "Noise Level": "43 dB",
      "Installation Type": "Split System",
      "Voltage": "230V",
      "Item Weight": "37 kg",
      "Item Dimensions": "23 × 100 × 29.5 cm"
    },
    image: "https://picsum.photos/seed/ac153/800/600",
    price: "Enquire for Price"
  },
  {
    id: 154,
    name: "Godrej 1.5 Ton 3 Star Fixed Speed Split Air Conditioner (18LTC3-WWR)",
    category: "Air Conditioners",
    subCategory: "Split AC",
    brand: "Godrej",
    description: "Affordable non-inverter split AC delivering powerful cooling with low noise operation.",
    longDescription: "Affordable non-inverter split AC delivering powerful cooling with low noise operation and durable copper condenser technology.",
    features: [
      "1.5 Ton capacity – suitable for rooms 111-150 sq.ft",
      "3 Star energy rating",
      "4-way air swing",
      "100% copper condenser",
      "Blue Fin anti-corrosion coating",
      "Heavy duty cooling up to 52°C",
      "Anti-dust filter",
      "Smart diagnosis",
      "Silent operation"
    ],
    warranty: [
      "1 Year on Product",
      "10 Years on Compressor"
    ],
    technicalSpecifications: {
      "Annual Energy Consumption": "1025.69 kWh",
      "Noise Level": "46 dB",
      "Cooling Power": "5.1 kW",
      "Voltage": "230V",
      "Wattage": "1325W",
      "Item Dimensions": "23 × 100 × 29.5 cm"
    },
    image: "https://picsum.photos/seed/ac154/800/600",
    price: "Enquire for Price"
  },
  {
    id: 155,
    name: "Godrej 1.5 Ton 3 Star Fixed Speed Split Air Conditioner (SFC 18PTC3-WWP)",
    category: "Air Conditioners",
    subCategory: "Split AC",
    brand: "Godrej",
    description: "1.5 Ton 3 Star Fixed Speed Split Air Conditioner with high performance cooling.",
    longDescription: "1.5 Ton 3 Star Fixed Speed Split Air Conditioner with high performance cooling.",
    features: [
      "1.5 Ton capacity",
      "3 Star energy rating",
      "4-way air swing",
      "100% copper condenser",
      "Blue Fin anti-corrosion coating",
      "R32 eco-friendly refrigerant",
      "Silent operation",
      "Anti-microbial self clean technology"
    ],
    warranty: [
      "1 Year on Product",
      "10 Years on Compressor"
    ],
    technicalSpecifications: {
      "Annual Energy Consumption": "1045.04 kWh",
      "Noise Level": "34 dB",
      "Voltage": "230V",
      "Wattage": "1350W",
      "Item Dimensions": "24 × 92 × 32 cm",
      "Item Weight": "10.7 kg"
    },
    image: "https://picsum.photos/seed/ac155/800/600",
    price: "Enquire for Price"
  },
  {
    id: 156,
    name: "Godrej 1.5 Ton 3 Star Inverter Split Air Conditioner (SIC 18DTC3 VYQ IOT)",
    category: "Air Conditioners",
    subCategory: "Split AC",
    brand: "Godrej",
    description: "Smart inverter split AC with convertible cooling and intelligent temperature sensing.",
    longDescription: "Smart inverter split AC with convertible cooling, intelligent temperature sensing, and energy-efficient performance.",
    features: [
      "1.5 Ton capacity",
      "5-in-1 Convertible inverter compressor",
      "Cooling capacity range 40% to 110%",
      "100% copper condenser",
      "Blue Fin anti-corrosion coating",
      "i-Sense technology for precise temperature control",
      "Anti-leak technology",
      "R32 eco-friendly refrigerant",
      "Anti-microbial self clean technology"
    ],
    warranty: [
      "5 Years on Product",
      "5 Years on PCB",
      "10 Years on Compressor"
    ],
    inTheBox: [
      "Indoor Unit",
      "Outdoor Unit",
      "Remote",
      "Interconnecting Cable",
      "Copper Pipe",
      "User Manual",
      "Warranty Card"
    ],
    technicalSpecifications: {
      "Annual Energy Consumption": "980.37 kWh",
      "Noise Level": "40 dB",
      "Voltage": "230V",
      "Wattage": "1650W",
      "Item Dimensions": "23.5 × 97 × 30 cm",
      "Item Weight": "12.2 kg"
    },
    image: "https://picsum.photos/seed/ac156/800/600",
    price: "Enquire for Price"
  },
  {
    id: 157,
    name: "Samsung 1.5 Ton 5 Star Inverter Split Air Conditioner (AR50F19D1ZH)",
    category: "Air Conditioners",
    subCategory: "Split AC",
    brand: "Samsung",
    description: "1.5 Ton 5 Star inverter split air conditioner with powerful cooling, energy efficient compressor, copper condenser coil and fast cooling technology.",
    longDescription: "Samsung 1.5 Ton 5 Star Inverter Split Air Conditioner (AR50F19D1ZH) with powerful cooling, energy efficient compressor, copper condenser coil and fast cooling technology.",
    features: [
      "1.5 Ton capacity",
      "5 Star energy rating",
      "Inverter compressor",
      "Copper condenser coil",
      "Fast cooling technology"
    ],
    image: "https://picsum.photos/seed/ac157/800/600",
    price: "₹39,499",
    regularPrice: "₹45,490"
  },
  {
    id: 158,
    name: "Samsung 1.5 Ton 3 Star Inverter Split Air Conditioner (AR50F19D1XH THAAR)",
    category: "Air Conditioners",
    subCategory: "Split AC",
    brand: "Samsung",
    description: "Energy efficient inverter split AC with durable copper condenser, turbo cooling mode and low noise operation.",
    longDescription: "Samsung 1.5 Ton 3 Star Inverter Split Air Conditioner (AR50F19D1XH THAAR) with durable copper condenser, turbo cooling mode and low noise operation.",
    features: [
      "1.5 Ton capacity",
      "3 Star energy rating",
      "Inverter compressor",
      "Durable copper condenser",
      "Turbo cooling mode",
      "Low noise operation"
    ],
    image: "https://picsum.photos/seed/ac158/800/600",
    price: "₹32,999",
    regularPrice: "₹38,490"
  },
  {
    id: 159,
    name: "Samsung 1.5 Ton 3 Star Inverter Split Air Conditioner (AR50F18D13H)",
    category: "Air Conditioners",
    subCategory: "Split AC",
    brand: "Samsung",
    description: "3 Star inverter AC designed for efficient cooling with smart energy control and powerful airflow.",
    longDescription: "Samsung 1.5 Ton 3 Star Inverter Split Air Conditioner (AR50F18D13H) designed for efficient cooling with smart energy control and powerful airflow.",
    features: [
      "1.5 Ton capacity",
      "3 Star energy rating",
      "Inverter compressor",
      "Smart energy control",
      "Powerful airflow"
    ],
    image: "https://picsum.photos/seed/ac159/800/600",
    price: "₹32,499",
    regularPrice: "₹56,990"
  },
  {
    id: 160,
    name: "Samsung 2 Ton 3 Star Inverter Split Air Conditioner (AR50F24D1XH)",
    category: "Air Conditioners",
    subCategory: "Split AC",
    brand: "Samsung",
    description: "2 Ton inverter split air conditioner with fast cooling, energy efficient performance and copper condenser coil.",
    longDescription: "Samsung 2 Ton 3 Star Inverter Split Air Conditioner (AR50F24D1XH) with fast cooling, energy efficient performance and copper condenser coil.",
    features: [
      "2 Ton capacity",
      "3 Star energy rating",
      "Inverter compressor",
      "Fast cooling",
      "Energy efficient performance",
      "Copper condenser coil"
    ],
    image: "https://picsum.photos/seed/ac160/800/600",
    price: "₹44,999",
    regularPrice: "₹68,900"
  },
  {
    id: 161,
    name: "Samsung 1.5 Ton 3 Star Inverter Split Air Conditioner (AR50F19D13HNNA)",
    category: "Air Conditioners",
    subCategory: "Split AC",
    brand: "Samsung",
    description: "Inverter split AC with powerful cooling, stabilizer free operation and efficient compressor technology.",
    longDescription: "Samsung 1.5 Ton 3 Star Inverter Split Air Conditioner (AR50F19D13HNNA) with powerful cooling, stabilizer free operation and efficient compressor technology.",
    features: [
      "1.5 Ton capacity",
      "3 Star energy rating",
      "Inverter compressor",
      "Powerful cooling",
      "Stabilizer free operation",
      "Efficient compressor technology"
    ],
    image: "https://picsum.photos/seed/ac161/800/600",
    price: "₹32,999",
    regularPrice: "₹81,990"
  },
  {
    id: 162,
    name: "Samsung 1.5 Ton 3 Star Inverter Split Air Conditioner (AR50F19D1LHNNA)",
    category: "Air Conditioners",
    subCategory: "Split AC",
    brand: "Samsung",
    description: "Energy efficient inverter split air conditioner with turbo cooling, copper condenser and low power consumption.",
    longDescription: "Samsung 1.5 Ton 3 Star Inverter Split Air Conditioner (AR50F19D1LHNNA) with turbo cooling, copper condenser and low power consumption.",
    features: [
      "1.5 Ton capacity",
      "3 Star energy rating",
      "Inverter compressor",
      "Turbo cooling",
      "Copper condenser",
      "Low power consumption"
    ],
    image: "https://picsum.photos/seed/ac162/800/600",
    price: "₹32,999",
    regularPrice: "₹68,000"
  },
  {
    id: 163,
    name: "Panasonic 4.0 Ton 2 Star Inverter Cassette Air Conditioner (S-48PUB5H59B)",
    category: "Air Conditioners",
    subCategory: "Cassette AC",
    brand: "Panasonic",
    description: "Commercial inverter cassette air conditioner designed for large spaces with uniform air distribution and powerful cooling.",
    longDescription: "Panasonic 4.0 Ton 2 Star Inverter Cassette Air Conditioner (S-48PUB5H59B) designed for large spaces with uniform air distribution and powerful cooling.",
    features: [
      "4.0 Ton capacity",
      "2 Star energy rating",
      "Inverter compressor",
      "Cassette design",
      "Uniform air distribution",
      "Powerful cooling"
    ],
    image: "https://picsum.photos/seed/ac163/800/600",
    price: "Enquire for Price"
  },
  {
    id: 164,
    name: "Panasonic 2.0 Ton 5 Star Inverter Split Air Conditioner (CS/CU-EU24BKY5FM)",
    category: "Air Conditioners",
    subCategory: "Split AC",
    brand: "Panasonic",
    description: "Energy efficient inverter split AC with powerful compressor, copper condenser and intelligent cooling technology.",
    longDescription: "Panasonic 2.0 Ton 5 Star Inverter Split Air Conditioner (CS/CU-EU24BKY5FM) with powerful compressor, copper condenser and intelligent cooling technology.",
    features: [
      "2.0 Ton capacity",
      "5 Star energy rating",
      "Inverter compressor",
      "Copper condenser",
      "Intelligent cooling technology"
    ],
    image: "https://picsum.photos/seed/ac164/800/600",
    price: "₹58,499",
    regularPrice: "₹87,900"
  },
  {
    id: 165,
    name: "Panasonic 1.0 Ton 5 Star Inverter Split Air Conditioner (CS/CU-EU12BKY5FM)",
    category: "Air Conditioners",
    subCategory: "Split AC",
    brand: "Panasonic",
    description: "5 Star inverter split AC designed for small rooms with efficient cooling, low power consumption and durable copper condenser.",
    longDescription: "Panasonic 1.0 Ton 5 Star Inverter Split Air Conditioner (CS/CU-EU12BKY5FM) designed for small rooms with efficient cooling, low power consumption and durable copper condenser.",
    features: [
      "1.0 Ton capacity",
      "5 Star energy rating",
      "Inverter compressor",
      "Low power consumption",
      "Durable copper condenser"
    ],
    image: "https://picsum.photos/seed/ac165/800/600",
    price: "₹36,999",
    regularPrice: "₹60,900"
  },
  {
    id: 166,
    name: "Panasonic 2.0 Ton 5 Star Inverter Split Air Conditioner (CU-EU24AKY5F)",
    category: "Air Conditioners",
    subCategory: "Split AC",
    brand: "Panasonic",
    description: "High efficiency inverter split AC with powerful airflow, stabilizer free operation and energy saving compressor.",
    longDescription: "Panasonic 2.0 Ton 5 Star Inverter Split Air Conditioner (CU-EU24AKY5F) with powerful airflow, stabilizer free operation and energy saving compressor.",
    features: [
      "2.0 Ton capacity",
      "5 Star energy rating",
      "Inverter compressor",
      "Powerful airflow",
      "Stabilizer free operation",
      "Energy saving compressor"
    ],
    image: "https://picsum.photos/seed/ac166/800/600",
    price: "₹52,799",
    regularPrice: "₹61,999"
  },
  {
    id: 167,
    name: "Panasonic 1.5 Ton 5 Star Inverter Split Air Conditioner (CS/CU-EU18BKY5XF)",
    category: "Air Conditioners",
    subCategory: "Split AC",
    brand: "Panasonic",
    description: "Premium inverter split AC with efficient cooling, durable copper condenser coil and smart cooling features.",
    longDescription: "Panasonic 1.5 Ton 5 Star Inverter Split Air Conditioner (CS/CU-EU18BKY5XF) with efficient cooling, durable copper condenser coil and smart cooling features.",
    features: [
      "1.5 Ton capacity",
      "5 Star energy rating",
      "Inverter compressor",
      "Durable copper condenser coil",
      "Smart cooling features"
    ],
    image: "https://picsum.photos/seed/ac167/800/600",
    price: "₹45,499",
    regularPrice: "₹52,900"
  },
  {
    id: 168,
    name: "Panasonic 2.0 Ton 3 Star Inverter Split Air Conditioner (CU-AU24BKYF)",
    category: "Air Conditioners",
    subCategory: "Split AC",
    brand: "Panasonic",
    description: "Inverter AC designed for efficient cooling with eco friendly refrigerant and powerful compressor.",
    longDescription: "Panasonic 2.0 Ton 3 Star Inverter Split Air Conditioner (CU-AU24BKYF) designed for efficient cooling with eco friendly refrigerant and powerful compressor.",
    features: [
      "2.0 Ton capacity",
      "3 Star energy rating",
      "Inverter compressor",
      "Eco friendly refrigerant",
      "Powerful compressor"
    ],
    image: "https://picsum.photos/seed/ac168/800/600",
    price: "₹54,999",
    regularPrice: "₹77,900"
  },
  {
    id: 169,
    name: "O-General 1.5 Ton 5 Star Inverter Window Air Conditioner (AXGB18CHAA-B)",
    category: "Air Conditioners",
    subCategory: "Window AC",
    brand: "O General",
    description: "Energy efficient inverter window AC with powerful compressor, copper condenser coil and fast cooling performance.",
    longDescription: "O-General 1.5 Ton 5 Star Inverter Window Air Conditioner (AXGB18CHAA-B) with powerful compressor, copper condenser coil and fast cooling performance.",
    features: [
      "1.5 Ton capacity",
      "5 Star energy rating",
      "Inverter compressor",
      "Copper condenser coil",
      "Fast cooling performance"
    ],
    image: "https://picsum.photos/seed/ac169/800/600",
    price: "₹39,999",
    regularPrice: "₹44,630"
  },
  {
    id: 170,
    name: "O-General 1.8 Ton 5 Star Inverter Window Air Conditioner (AXGB22CHAA-B)",
    category: "Air Conditioners",
    subCategory: "Window AC",
    brand: "O General",
    description: "High capacity inverter window air conditioner with efficient cooling and durable compressor technology.",
    longDescription: "O-General 1.8 Ton 5 Star Inverter Window Air Conditioner (AXGB22CHAA-B) with efficient cooling and durable compressor technology.",
    features: [
      "1.8 Ton capacity",
      "5 Star energy rating",
      "Inverter compressor",
      "Efficient cooling",
      "Durable compressor technology"
    ],
    image: "https://picsum.photos/seed/ac170/800/600",
    price: "₹45,999",
    regularPrice: "₹50,460"
  },
  {
    id: 171,
    name: "O-General 2.5 Ton 3 Star Inverter Split Air Conditioner (ASGG30KJTA H&C)",
    category: "Air Conditioners",
    subCategory: "Split AC",
    brand: "O General",
    description: "Hot and cold inverter split AC designed for large rooms with powerful airflow and energy efficient operation.",
    longDescription: "O-General 2.5 Ton 3 Star Inverter Split Air Conditioner (ASGG30KJTA H&C) designed for large rooms with powerful airflow and energy efficient operation.",
    features: [
      "2.5 Ton capacity",
      "3 Star energy rating",
      "Inverter compressor",
      "Hot and cold operation",
      "Powerful airflow",
      "Energy efficient operation"
    ],
    image: "https://picsum.photos/seed/ac171/800/600",
    price: "₹97,499",
    regularPrice: "₹110,620"
  },
  {
    id: 172,
    name: "O-General 1.5 Ton 4 Star Inverter Split Air Conditioner (ASGG18KJTA H&C)",
    category: "Air Conditioners",
    subCategory: "Split AC",
    brand: "O General",
    description: "Hot and cold inverter split AC with high efficiency compressor and consistent cooling performance.",
    longDescription: "O-General 1.5 Ton 4 Star Inverter Split Air Conditioner (ASGG18KJTA H&C) with high efficiency compressor and consistent cooling performance.",
    features: [
      "1.5 Ton capacity",
      "4 Star energy rating",
      "Inverter compressor",
      "Hot and cold operation",
      "High efficiency compressor",
      "Consistent cooling performance"
    ],
    image: "https://picsum.photos/seed/ac172/800/600",
    price: "₹66,999",
    regularPrice: "₹75,700"
  },
  {
    id: 173,
    name: "O-General 1.2 Ton 4 Star Inverter Window Air Conditioner (AFGB14CHWA)",
    category: "Air Conditioners",
    subCategory: "Window AC",
    brand: "O General",
    description: "Compact inverter window AC suitable for medium rooms with efficient cooling and low energy consumption.",
    longDescription: "O-General 1.2 Ton 4 Star Inverter Window Air Conditioner (AFGB14CHWA) suitable for medium rooms with efficient cooling and low energy consumption.",
    features: [
      "1.2 Ton capacity",
      "4 Star energy rating",
      "Inverter compressor",
      "Compact design",
      "Efficient cooling",
      "Low energy consumption"
    ],
    image: "https://picsum.photos/seed/ac173/800/600",
    price: "₹31,499",
    regularPrice: "₹34,450"
  },
  {
    id: 174,
    name: "O-General 1.5 Ton 2 Star Inverter Split Air Conditioner (ASGG18CNAA)",
    category: "Air Conditioners",
    subCategory: "Split AC",
    brand: "O General",
    description: "Inverter split AC designed for reliable cooling performance with durable components.",
    longDescription: "O-General 1.5 Ton 2 Star Inverter Split Air Conditioner (ASGG18CNAA) designed for reliable cooling performance with durable components.",
    features: [
      "1.5 Ton capacity",
      "2 Star energy rating",
      "Inverter compressor",
      "Reliable cooling performance",
      "Durable components"
    ],
    image: "https://picsum.photos/seed/ac174/800/600",
    price: "₹42,499",
    regularPrice: "₹48,520"
  },
  {
    id: 175,
    name: "O-General 2.0 Ton 2 Star Inverter Split Air Conditioner (ASGG24CPAB)",
    category: "Air Conditioners",
    subCategory: "Split AC",
    brand: "O General",
    description: "Powerful inverter split air conditioner designed for large rooms and efficient cooling.",
    longDescription: "O-General 2.0 Ton 2 Star Inverter Split Air Conditioner (ASGG24CPAB) designed for large rooms and efficient cooling.",
    features: [
      "2.0 Ton capacity",
      "2 Star energy rating",
      "Inverter compressor",
      "Powerful cooling",
      "Efficient cooling"
    ],
    image: "https://picsum.photos/seed/ac175/800/600",
    price: "₹57,499",
    regularPrice: "₹65,990"
  },
  {
    id: 176,
    name: "O-General 1.5 Ton 2 Star Inverter Split Air Conditioner (ASGG18CPAB)",
    category: "Air Conditioners",
    subCategory: "Split AC",
    brand: "O General",
    description: "Energy efficient inverter split AC with stable cooling and durable compressor.",
    longDescription: "O-General 1.5 Ton 2 Star Inverter Split Air Conditioner (ASGG18CPAB) with stable cooling and durable compressor.",
    features: [
      "1.5 Ton capacity",
      "2 Star energy rating",
      "Inverter compressor",
      "Stable cooling",
      "Durable compressor"
    ],
    image: "https://picsum.photos/seed/ac176/800/600",
    price: "₹44,999",
    regularPrice: "₹51,430"
  },
  {
    id: 177,
    name: "O-General 1.0 Ton 2 Star Inverter Split Air Conditioner (ASGG12CPAB)",
    category: "Air Conditioners",
    subCategory: "Split AC",
    brand: "O General",
    description: "Compact inverter split AC designed for small rooms with efficient cooling.",
    longDescription: "O-General 1.0 Ton 2 Star Inverter Split Air Conditioner (ASGG12CPAB) designed for small rooms with efficient cooling.",
    features: [
      "1.0 Ton capacity",
      "2 Star energy rating",
      "Inverter compressor",
      "Compact design",
      "Efficient cooling"
    ],
    image: "https://picsum.photos/seed/ac177/800/600",
    price: "₹35,499",
    regularPrice: "₹40,760"
  },
  {
    id: 178,
    name: "Carrier 1.5 Ton 3 Star Window Air Conditioner (19K/18K Estrella Fx 3s)",
    category: "Air Conditioners",
    subCategory: "Window AC",
    brand: "Carrier",
    description: "1.5 Ton 3 Star window AC with powerful cooling, durable compressor and efficient performance.",
    longDescription: "Carrier 1.5 Ton 3 Star Window Air Conditioner (19K/18K Estrella Fx 3s) with powerful cooling, durable compressor and efficient performance.",
    features: [
      "1.5 Ton capacity",
      "3 Star energy rating",
      "Window AC",
      "Powerful cooling",
      "Durable compressor"
    ],
    image: "https://picsum.photos/seed/ac178/800/600",
    price: "₹28,499",
    regularPrice: "₹45,090"
  },
  {
    id: 179,
    name: "Carrier 1.5 Ton 5 Star Inverter Split Air Conditioner (18K 5S XCEL LUMO FXI)",
    category: "Air Conditioners",
    subCategory: "Split AC",
    brand: "Carrier",
    description: "Energy efficient 5 Star inverter split AC with advanced cooling technology and copper condenser.",
    longDescription: "Carrier 1.5 Ton 5 Star Inverter Split Air Conditioner (18K 5S XCEL LUMO FXI) with advanced cooling technology and copper condenser.",
    features: [
      "1.5 Ton capacity",
      "5 Star energy rating",
      "Inverter compressor",
      "Advanced cooling technology",
      "Copper condenser"
    ],
    image: "https://picsum.photos/seed/ac179/800/600",
    price: "₹46,099",
    regularPrice: "₹81,490"
  },
  {
    id: 180,
    name: "Carrier 1.5 Ton 5 Star Inverter Split Air Conditioner (18K 5S XCEL EDGE FXI)",
    category: "Air Conditioners",
    subCategory: "Split AC",
    brand: "Carrier",
    description: "High efficiency inverter split air conditioner with powerful airflow and energy saving technology.",
    longDescription: "Carrier 1.5 Ton 5 Star Inverter Split Air Conditioner (18K 5S XCEL EDGE FXI) with powerful airflow and energy saving technology.",
    features: [
      "1.5 Ton capacity",
      "5 Star energy rating",
      "Inverter compressor",
      "Powerful airflow",
      "Energy saving technology"
    ],
    image: "https://picsum.photos/seed/ac180/800/600",
    price: "₹45,099",
    regularPrice: "₹78,490"
  },
  {
    id: 181,
    name: "Carrier 1.5 Ton 3 Star Inverter Split Air Conditioner (18K 3S XCEL LUMO FXI)",
    category: "Air Conditioners",
    subCategory: "Split AC",
    brand: "Carrier",
    description: "1.5 ton inverter AC designed for efficient cooling and reduced power consumption.",
    longDescription: "Carrier 1.5 Ton 3 Star Inverter Split Air Conditioner (18K 3S XCEL LUMO FXI) designed for efficient cooling and reduced power consumption.",
    features: [
      "1.5 Ton capacity",
      "3 Star energy rating",
      "Inverter compressor",
      "Efficient cooling",
      "Reduced power consumption"
    ],
    image: "https://picsum.photos/seed/ac181/800/600",
    price: "₹38,799",
    regularPrice: "₹72,490"
  },
  {
    id: 182,
    name: "Carrier 1.5 Ton 3 Star Inverter Split Air Conditioner (18K 3S XCEL EDGE FXI)",
    category: "Air Conditioners",
    subCategory: "Split AC",
    brand: "Carrier",
    description: "3 star inverter split AC with fast cooling performance and durable compressor.",
    longDescription: "Carrier 1.5 Ton 3 Star Inverter Split Air Conditioner (18K 3S XCEL EDGE FXI) with fast cooling performance and durable compressor.",
    features: [
      "1.5 Ton capacity",
      "3 Star energy rating",
      "Inverter compressor",
      "Fast cooling performance",
      "Durable compressor"
    ],
    image: "https://picsum.photos/seed/ac182/800/600",
    price: "₹37,999",
    regularPrice: "₹69,490"
  },
  {
    id: 183,
    name: "Carrier 1.5 Ton 3 Star Inverter Split Air Conditioner (18K 3S XCEL EDGE FXI Variant)",
    category: "Air Conditioners",
    subCategory: "Split AC",
    brand: "Carrier",
    description: "Energy efficient inverter split air conditioner with stable cooling performance.",
    longDescription: "Carrier 1.5 Ton 3 Star Inverter Split Air Conditioner (18K 3S XCEL EDGE FXI Variant) with stable cooling performance.",
    features: [
      "1.5 Ton capacity",
      "3 Star energy rating",
      "Inverter compressor",
      "Stable cooling performance"
    ],
    image: "https://picsum.photos/seed/ac183/800/600",
    price: "₹36,999",
    regularPrice: "₹78,490"
  },
  {
    id: 184,
    name: "Carrier 1.5 Ton 3 Star Inverter Window Air Conditioner (18K 3S Estrella FXI WRAC)",
    category: "Air Conditioners",
    subCategory: "Window AC",
    brand: "Carrier",
    description: "Inverter window AC designed for energy efficient cooling and easy installation.",
    longDescription: "Carrier 1.5 Ton 3 Star Inverter Window Air Conditioner (18K 3S Estrella FXI WRAC) designed for energy efficient cooling and easy installation.",
    features: [
      "1.5 Ton capacity",
      "3 Star energy rating",
      "Inverter compressor",
      "Window AC",
      "Easy installation"
    ],
    image: "https://picsum.photos/seed/ac184/800/600",
    price: "₹30,999",
    regularPrice: "₹47,590"
  },
  {
    id: 185,
    name: "Carrier 1 Ton 3 Star Fixed Speed Window Air Conditioner (12K 3s ESTRELLA FX WRAC)",
    category: "Air Conditioners",
    subCategory: "Window AC",
    brand: "Carrier",
    description: "Compact 1 ton window air conditioner suitable for small rooms with efficient cooling.",
    longDescription: "Carrier 1 Ton 3 Star Fixed Speed Window Air Conditioner (12K 3s ESTRELLA FX WRAC) suitable for small rooms with efficient cooling.",
    features: [
      "1.0 Ton capacity",
      "3 Star energy rating",
      "Fixed Speed compressor",
      "Window AC",
      "Compact design"
    ],
    image: "https://picsum.photos/seed/ac185/800/600",
    price: "₹26,499",
    regularPrice: "₹39,090"
  },
  {
    id: 186,
    name: "Blue Star 1.0 Ton 3 Star Fixed Speed Window Air Conditioner (WFE312L)",
    category: "Air Conditioners",
    subCategory: "Window AC",
    brand: "Bluestar",
    description: "1 Ton fixed speed window air conditioner with reliable cooling and durable compressor.",
    longDescription: "Blue Star 1.0 Ton 3 Star Fixed Speed Window Air Conditioner (WFE312L) with reliable cooling and durable compressor.",
    features: [
      "1.0 Ton capacity",
      "3 Star energy rating",
      "Fixed Speed compressor",
      "Window AC",
      "Reliable cooling"
    ],
    image: "https://picsum.photos/seed/ac186/800/600",
    price: "₹23,999",
    regularPrice: "₹33,000"
  },
  {
    id: 187,
    name: "Blue Star 1.5 Ton 3 Star Fixed Speed Window Air Conditioner (WFE318L)",
    category: "Air Conditioners",
    subCategory: "Window AC",
    brand: "Bluestar",
    description: "1.5 ton fixed speed window AC designed for efficient cooling and easy installation.",
    longDescription: "Blue Star 1.5 Ton 3 Star Fixed Speed Window Air Conditioner (WFE318L) designed for efficient cooling and easy installation.",
    features: [
      "1.5 Ton capacity",
      "3 Star energy rating",
      "Fixed Speed compressor",
      "Window AC",
      "Efficient cooling"
    ],
    image: "https://picsum.photos/seed/ac187/800/600",
    price: "₹29,499",
    regularPrice: "₹39,500"
  },
  {
    id: 188,
    name: "Blue Star 1.5 Ton 5 Star Window Inverter Air Conditioner (WIE518L/WID518L)",
    category: "Air Conditioners",
    subCategory: "Window AC",
    brand: "Bluestar",
    description: "Energy efficient 5 star inverter window air conditioner with powerful cooling.",
    longDescription: "Blue Star 1.5 Ton 5 Star Window Inverter Air Conditioner (WIE518L/WID518L) with powerful cooling.",
    features: [
      "1.5 Ton capacity",
      "5 Star energy rating",
      "Inverter compressor",
      "Window AC",
      "Powerful cooling"
    ],
    image: "https://picsum.photos/seed/ac188/800/600",
    price: "₹32,999",
    regularPrice: "₹50,000"
  },
  {
    id: 189,
    name: "Blue Star 2.0 Ton 3 Star Inverter Window Air Conditioner (WID324L)",
    category: "Air Conditioners",
    subCategory: "Window AC",
    brand: "Bluestar",
    description: "2 ton inverter window AC with strong airflow and efficient cooling performance.",
    longDescription: "Blue Star 2.0 Ton 3 Star Inverter Window Air Conditioner (WID324L) with strong airflow and efficient cooling performance.",
    features: [
      "2.0 Ton capacity",
      "3 Star energy rating",
      "Inverter compressor",
      "Window AC",
      "Strong airflow"
    ],
    image: "https://picsum.photos/seed/ac189/800/600",
    price: "₹36,999",
    regularPrice: "₹55,000"
  },
  {
    id: 190,
    name: "Blue Star 1.5 Ton 3 Star Inverter Split Air Conditioner (IA318VNU)",
    category: "Air Conditioners",
    subCategory: "Split AC",
    brand: "Bluestar",
    description: "Energy efficient inverter split air conditioner with fast cooling and copper condenser.",
    longDescription: "Blue Star 1.5 Ton 3 Star Inverter Split Air Conditioner (IA318VNU) with fast cooling and copper condenser.",
    features: [
      "1.5 Ton capacity",
      "3 Star energy rating",
      "Inverter compressor",
      "Fast cooling",
      "Copper condenser"
    ],
    image: "https://picsum.photos/seed/ac190/800/600",
    price: "₹33,999",
    regularPrice: "₹63,500"
  },
  {
    id: 191,
    name: "Blue Star 2.0 Ton 3 Star Inverter Split Air Conditioner (IA324YKU)",
    category: "Air Conditioners",
    subCategory: "Split AC",
    brand: "Bluestar",
    description: "2 ton inverter split AC suitable for large rooms with powerful cooling.",
    longDescription: "Blue Star 2.0 Ton 3 Star Inverter Split Air Conditioner (IA324YKU) suitable for large rooms with powerful cooling.",
    features: [
      "2.0 Ton capacity",
      "3 Star energy rating",
      "Inverter compressor",
      "Powerful cooling"
    ],
    image: "https://picsum.photos/seed/ac191/800/600",
    price: "₹42,999",
    regularPrice: "₹84,990"
  },
  {
    id: 192,
    name: "Blue Star 2.0 Ton 3 Star Inverter Split Air Conditioner (IC324VKU)",
    category: "Air Conditioners",
    subCategory: "Split AC",
    brand: "Bluestar",
    description: "High performance inverter split air conditioner with efficient cooling.",
    longDescription: "Blue Star 2.0 Ton 3 Star Inverter Split Air Conditioner (IC324VKU) with efficient cooling.",
    features: [
      "2.0 Ton capacity",
      "3 Star energy rating",
      "Inverter compressor",
      "Efficient cooling"
    ],
    image: "https://picsum.photos/seed/ac192/800/600",
    price: "₹42,999",
    regularPrice: "₹68,000"
  },
  {
    id: 193,
    name: "Lloyd 1.0 Ton 2 Star Fixed Speed Window Air Conditioner (GLW12C2YWSEW)",
    category: "Air Conditioners",
    subCategory: "Window AC",
    brand: "Lloyd",
    description: "1 ton fixed speed window AC designed for small rooms with reliable cooling.",
    longDescription: "Lloyd 1.0 Ton 2 Star Fixed Speed Window Air Conditioner (GLW12C2YWSEW) designed for small rooms with reliable cooling.",
    features: [
      "1.0 Ton capacity",
      "2 Star energy rating",
      "Fixed Speed compressor",
      "Window AC",
      "Reliable cooling"
    ],
    image: "https://picsum.photos/seed/ac193/800/600",
    price: "₹23,499",
    regularPrice: "₹39,990"
  },
  {
    id: 194,
    name: "Lloyd 1.5 Ton 5 Star Fixed Speed Window Air Conditioner (GLW18C5XWSEA)",
    category: "Air Conditioners",
    subCategory: "Window AC",
    brand: "Lloyd",
    description: "Energy efficient 1.5 ton window air conditioner with powerful cooling.",
    longDescription: "Lloyd 1.5 Ton 5 Star Fixed Speed Window Air Conditioner (GLW18C5XWSEA) with powerful cooling.",
    features: [
      "1.5 Ton capacity",
      "5 Star energy rating",
      "Fixed Speed compressor",
      "Window AC",
      "Powerful cooling"
    ],
    image: "https://picsum.photos/seed/ac194/800/600",
    price: "₹30,999",
    regularPrice: "₹54,990"
  },
  {
    id: 195,
    name: "Lloyd 1.5 Ton 5 Star Inverter Split Air Conditioner (GLS18I5FWGEW WIFI+ 5 in 1 Convertible)",
    category: "Air Conditioners",
    subCategory: "Split AC",
    brand: "Lloyd",
    description: "5 star inverter split AC with WiFi connectivity and convertible cooling modes.",
    longDescription: "Lloyd 1.5 Ton 5 Star Inverter Split Air Conditioner (GLS18I5FWGEW WIFI+ 5 in 1 Convertible) with WiFi connectivity and convertible cooling modes.",
    features: [
      "1.5 Ton capacity",
      "5 Star energy rating",
      "Inverter compressor",
      "WiFi connectivity",
      "Convertible cooling modes"
    ],
    image: "https://picsum.photos/seed/ac195/800/600",
    price: "₹36,999",
    regularPrice: "₹63,990"
  },
  {
    id: 196,
    name: "Lloyd 1.5 Ton Inverter Split Air Conditioner (GLS18I3FWSPC)",
    category: "Air Conditioners",
    subCategory: "Split AC",
    brand: "Lloyd",
    description: "Energy efficient inverter split air conditioner with fast cooling performance.",
    longDescription: "Lloyd 1.5 Ton Inverter Split Air Conditioner (GLS18I3FWSPC) with fast cooling performance.",
    features: [
      "1.5 Ton capacity",
      "Inverter compressor",
      "Split AC",
      "Fast cooling performance"
    ],
    image: "https://picsum.photos/seed/ac196/800/600",
    price: "₹30,499",
    regularPrice: "₹58,990"
  },
  {
    id: 197,
    name: "Lloyd 1.5 Ton 5 Star Inverter Window Air Conditioner (GLW18I5FWCEV)",
    category: "Air Conditioners",
    subCategory: "Window AC",
    brand: "Lloyd",
    description: "Inverter window AC designed for efficient cooling and lower power consumption.",
    longDescription: "Lloyd 1.5 Ton 5 Star Inverter Window Air Conditioner (GLW18I5FWCEV) designed for efficient cooling and lower power consumption.",
    features: [
      "1.5 Ton capacity",
      "5 Star energy rating",
      "Inverter compressor",
      "Window AC",
      "Efficient cooling"
    ],
    image: "https://picsum.photos/seed/ac197/800/600",
    price: "₹32,499",
    regularPrice: "₹59,990"
  },
  {
    id: 198,
    name: "Lloyd 1.5 Ton 5 Star Inverter Split Air Conditioner (GLS18V5FWSSL)",
    category: "Air Conditioners",
    subCategory: "Split AC",
    brand: "Lloyd",
    description: "Premium inverter split air conditioner with powerful cooling.",
    longDescription: "Lloyd 1.5 Ton 5 Star Inverter Split Air Conditioner (GLS18V5FWSSL) with powerful cooling.",
    features: [
      "1.5 Ton capacity",
      "5 Star energy rating",
      "Inverter compressor",
      "Premium design",
      "Powerful cooling"
    ],
    image: "https://picsum.photos/seed/ac198/800/600",
    price: "₹45,499",
    regularPrice: "₹81,990"
  },
  {
    id: 199,
    name: "Lloyd 1.5 Ton 3 Star Fixed Speed Window Air Conditioner (GLW18C3YWSEW)",
    category: "Air Conditioners",
    subCategory: "Window AC",
    brand: "Lloyd",
    description: "Durable window AC designed for efficient cooling in medium rooms.",
    longDescription: "Lloyd 1.5 Ton 3 Star Fixed Speed Window Air Conditioner (GLW18C3YWSEW) designed for efficient cooling in medium rooms.",
    features: [
      "1.5 Ton capacity",
      "3 Star energy rating",
      "Fixed Speed compressor",
      "Window AC",
      "Efficient cooling"
    ],
    image: "https://picsum.photos/seed/ac199/800/600",
    price: "₹26,499",
    regularPrice: "₹47,990"
  },
  {
    id: 200,
    name: "Hitachi 1.5 Ton 3 Star Inverter Split AC (RAS.G318PCCISS/2SS)",
    category: "Air Conditioners",
    subCategory: "Split AC",
    brand: "Hitachi",
    description: "1.5 Ton 3 Star Inverter Split AC with efficient cooling.",
    longDescription: "Hitachi 1.5 Ton 3 Star Inverter Split AC (RAS.G318PCCISS/2SS) with efficient cooling.",
    features: [
      "1.5 Ton capacity",
      "3 Star energy rating",
      "Inverter compressor",
      "Split AC"
    ],
    image: "https://picsum.photos/seed/ac200/800/600",
    price: "₹34,499",
    regularPrice: "₹63,850",
    inStock: true
  },
  {
    id: 201,
    name: "Hitachi 1.0 Ton 3 Star Inverter Split Air Conditioner (RAS.G312PCBISS)",
    category: "Air Conditioners",
    subCategory: "Split AC",
    brand: "Hitachi",
    description: "1.0 Ton 3 Star Inverter Split Air Conditioner with reliable cooling.",
    longDescription: "Hitachi 1.0 Ton 3 Star Inverter Split Air Conditioner (RAS.G312PCBISS) with reliable cooling.",
    features: [
      "1.0 Ton capacity",
      "3 Star energy rating",
      "Inverter compressor",
      "Split AC"
    ],
    image: "https://picsum.photos/seed/ac201/800/600",
    price: "₹30,499",
    regularPrice: "₹55,050",
    inStock: true
  },
  {
    id: 202,
    name: "Hitachi 1.0 Ton 2 Star Fixed Speed Window Air Conditioner (RAW312HEDO)",
    category: "Air Conditioners",
    subCategory: "Window AC",
    brand: "Hitachi",
    description: "1.0 Ton 2 Star Fixed Speed Window Air Conditioner for small rooms.",
    longDescription: "Hitachi 1.0 Ton 2 Star Fixed Speed Window Air Conditioner (RAW312HEDO) for small rooms.",
    features: [
      "1.0 Ton capacity",
      "2 Star energy rating",
      "Fixed Speed compressor",
      "Window AC"
    ],
    image: "https://picsum.photos/seed/ac202/800/600",
    price: "₹24,999",
    regularPrice: "₹28,900",
    inStock: true
  },
  {
    id: 203,
    name: "Hitachi 1 Ton 5 Star Inverter Split Air Conditioner (RASV512PCBISH1)",
    category: "Air Conditioners",
    subCategory: "Split AC",
    brand: "Hitachi",
    description: "1 Ton 5 Star Inverter Split Air Conditioner with energy savings.",
    longDescription: "Hitachi 1 Ton 5 Star Inverter Split Air Conditioner (RASV512PCBISH1) with energy savings.",
    features: [
      "1.0 Ton capacity",
      "5 Star energy rating",
      "Inverter compressor",
      "Split AC"
    ],
    image: "https://picsum.photos/seed/ac203/800/600",
    price: "₹35,499",
    regularPrice: "₹64,350",
    inStock: false
  },
  {
    id: 204,
    name: "Hitachi 1.5 Ton 5 Star Inverter Split Air Conditioner (RASV518PCBISH1)",
    category: "Air Conditioners",
    subCategory: "Split AC",
    brand: "Hitachi",
    description: "1.5 Ton 5 Star Inverter Split Air Conditioner with powerful cooling.",
    longDescription: "Hitachi 1.5 Ton 5 Star Inverter Split Air Conditioner (RASV518PCBISH1) with powerful cooling.",
    features: [
      "1.5 Ton capacity",
      "5 Star energy rating",
      "Inverter compressor",
      "Split AC"
    ],
    image: "https://picsum.photos/seed/ac204/800/600",
    price: "₹40,499",
    regularPrice: "₹75,350",
    inStock: false
  },
  {
    id: 205,
    name: "Hitachi 1.8 Ton 2 Star Fixed Speed Split Air Conditioner (RAS.B222PCAIBA)",
    category: "Air Conditioners",
    subCategory: "Split AC",
    brand: "Hitachi",
    description: "1.8 Ton 2 Star Fixed Speed Split Air Conditioner for large rooms.",
    longDescription: "Hitachi 1.8 Ton 2 Star Fixed Speed Split Air Conditioner (RAS.B222PCAIBA) for large rooms.",
    features: [
      "1.8 Ton capacity",
      "2 Star energy rating",
      "Fixed Speed compressor",
      "Split AC"
    ],
    image: "https://picsum.photos/seed/ac205/800/600",
    price: "₹42,999",
    regularPrice: "₹73,050",
    inStock: true
  },
  {
    id: 206,
    name: "Hitachi 1.5 Ton 3 Star Fixed Speed Split AC (RAS.B318PCAIBA)",
    category: "Air Conditioners",
    subCategory: "Split AC",
    brand: "Hitachi",
    description: "1.5 Ton 3 Star Fixed Speed Split AC with durable performance.",
    longDescription: "Hitachi 1.5 Ton 3 Star Fixed Speed Split AC (RAS.B318PCAIBA) with durable performance.",
    features: [
      "1.5 Ton capacity",
      "3 Star energy rating",
      "Fixed Speed compressor",
      "Split AC"
    ],
    image: "https://picsum.photos/seed/ac206/800/600",
    price: "₹35,999",
    regularPrice: "₹63,850",
    inStock: true
  }
];
