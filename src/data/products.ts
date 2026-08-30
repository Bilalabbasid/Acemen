export type ProductCategory =
  | "Bags"
  | "Shoes"
  | "Jackets"
  | "Pilot Collection"
  | "Wallets"
  | "Belts"
  | "Accessories"
  | "Travel";

export type GenderCategory = "all" | "men" | "women" | "unisex";

export interface ProductItem {
  id: string;
  slug: string;
  name: string;
  collection: string;
  category: ProductCategory;
  subType?: string;
  gender: GenderCategory;
  price: number;
  currency: string;
  formattedPrice: string;
  tag?: string;
  isNewArrival?: boolean;
  isIconic?: boolean;
  isBestSeller?: boolean;
  sizes?: string[];
  images: {
    primary: string;
    secondary: string;
    gallery?: string[];
  };
  colors: Array<{
    name: string;
    hex: string;
  }>;
  shortDescription: string;
  story: string;
  materials: string[];
  dimensions: {
    height?: string;
    width?: string;
    depth?: string;
    strapDrop?: string;
    heelHeight?: string;
    soleType?: string;
    chestFit?: string;
  };
  details: string[];
  careInstructions: string[];
  inStock: boolean;
}

const standardShoeSizes = ["39", "40", "41", "42", "43", "44", "45", "46"];
const standardJacketSizes = ["S", "M", "L", "XL", "XXL"];

export const luxuryProducts: ProductItem[] = [
  // ── 1. FOOTWEAR: THE JERMYN CLASSIC OXFORD ──
  {
    id: "acemen-jermyn-classic-oxford",
    slug: "jermyn-classic-oxford-shoe",
    name: "The Jermyn Hand-Lasted Oxford",
    collection: "The Footwear Atelier",
    category: "Shoes",
    subType: "Oxford",
    gender: "men",
    price: 680,
    currency: "GBP",
    formattedPrice: "£680",
    tag: "Artisan Benchmark",
    isIconic: true,
    isBestSeller: true,
    sizes: standardShoeSizes,
    images: {
      primary: "/images/luxury/prod-oxford-1.webp",
      secondary: "/images/luxury/prod-oxford-2.webp",
      gallery: [
        "/images/luxury/prod-oxford-1.webp",
        "/images/luxury/prod-oxford-2.webp",
        "/images/luxury/footwear-campaign.webp",
        "/images/luxury/craftsmanship.webp",
      ],
    },
    colors: [
      { name: "Obsidian Black", hex: "#111111" },
      { name: "Burnished Mahogany", hex: "#4A281E" },
    ],
    shortDescription:
      "A classic five-eyelet closed-lacing Oxford shoe, sculpted from mirror-gloss French box calf leather with hand-sewn Goodyear welted construction.",
    story:
      "Cut and shaped on our signature London chisel last, The Jermyn Oxford embodies the apex of British bespoke shoemaking. Every pair undergoes over two hundred individual hand operations in our atelier, including channeled oak-bark leather soles, hand-beveled waists, and a hand-applied mirror toe burnish.",
    materials: [
      "100% Full-grain French box calfskin upper",
      "Oak bark-tanned English leather sole with brass nail reinforcement",
      "Full glove-calfskin lining and vegetable-tanned leather insole",
      "Traditional Goodyear welted channeled construction",
    ],
    dimensions: {
      heelHeight: "25 mm stacked leather heel with rubber dovetail",
      soleType: "Goodyear welted oak bark leather sole with concealed channeled stitching",
    },
    details: [
      "Hand-lasted closed five-eyelet lacing structure",
      "Channeled sole stitching concealed beneath a skived leather flap",
      "Debossed ACEMEN hallmark on natural leather insole",
      "Hand-burnished toe box with mirror glaze finish",
      "Includes solid cedar shoe trees and cotton flannel travel bags",
    ],
    careInstructions: [
      "Insert cedar shoe trees immediately following every wear",
      "Clean with soft horsehair brush and polish with ACEMEN high-wax cream",
      "Allow 24 hours between wearings for leather to breathe",
    ],
    inStock: true,
  },

  // ── 2. FOOTWEAR: THE AVIATOR SOVEREIGN PILOT SHOE ──
  {
    id: "acemen-aviator-sovereign-pilot-shoe",
    slug: "aviator-sovereign-pilot-shoe",
    name: "The Aviator Sovereign Pilot Shoe",
    collection: "The Pilot Collection",
    category: "Pilot Collection",
    subType: "Pilot",
    gender: "men",
    price: 640,
    currency: "GBP",
    formattedPrice: "£640",
    tag: "Aviation Standard",
    isIconic: true,
    isNewArrival: true,
    sizes: standardShoeSizes,
    images: {
      primary: "/images/luxury/prod-pilot-1.webp",
      secondary: "/images/luxury/prod-pilot-2.webp",
      gallery: [
        "/images/luxury/prod-pilot-1.webp",
        "/images/luxury/prod-pilot-2.webp",
        "/images/luxury/pilot-campaign.webp",
        "/images/luxury/travel-campaign.webp",
      ],
    },
    colors: [
      { name: "Mirror Gloss Black", hex: "#080808" },
      { name: "Deep Midnight Black", hex: "#141414" },
    ],
    shortDescription:
      "Engineered specifically for pilots and flight deck professionals — ultra-polished black calfskin pairing immaculate formal uniform aesthetic with all-day ergonomic arch support.",
    story:
      "Born from confidential briefings with senior captains and private aviation crew, The Aviator Sovereign Pilot Shoe unites uncompromising formal elegance with specialized flight deck demands. Featuring airport security-friendly composite shanks, anti-fatigue memory cushioning, and non-marking anti-static rubber outsoles, it maintains a razor-sharp mirror shine through international long-haul itineraries.",
    materials: [
      "Water-resistant full-grain black calfskin with high-shine temper",
      "Orthotic memory foam insole lined in breathable perforated calf leather",
      "Anti-static, oil-resistant flight deck rubber traction sole",
      "Metal-free composite shank for airport scanner clearance",
    ],
    dimensions: {
      heelHeight: "22 mm low-profile ergonomic heel",
      soleType: "Non-marking, oil-resistant flight deck rubber sole with 360° storm welt",
    },
    details: [
      "Airport scanner compliant (non-metallic composite shank)",
      "Reinforced padded heel collar for multi-hour cockpit comfort",
      "Subtle blind eyelets with waxed flat laces",
      "Treated with moisture-barrier stain seal for tarmac endurance",
      "Supplied with ACEMEN aviation shoe horn and velvet carry pouches",
    ],
    careInstructions: [
      "Wipe tarmac dust with damp microfiber cloth and buff dry",
      "Re-polish with ACEMEN black gloss cream for high-reflectivity uniform standard",
    ],
    inStock: true,
  },

  // ── 3. FOOTWEAR: THE SAVILE DOUBLE MONK STRAP ──
  {
    id: "acemen-savile-double-monk",
    slug: "savile-double-monk-strap",
    name: "The Savile Double Monk Strap",
    collection: "The Footwear Atelier",
    category: "Shoes",
    subType: "Monk Strap",
    gender: "men",
    price: 710,
    currency: "GBP",
    formattedPrice: "£710",
    tag: "Atelier Signature",
    isBestSeller: true,
    sizes: standardShoeSizes,
    images: {
      primary: "/images/luxury/prod-monk-1.webp",
      secondary: "/images/luxury/prod-monk-2.webp",
      gallery: [
        "/images/luxury/prod-monk-1.webp",
        "/images/luxury/prod-monk-2.webp",
        "/images/luxury/men-campaign.webp",
      ],
    },
    colors: [
      { name: "Dark Cognac Patina", hex: "#6B3B1E" },
      { name: "Espresso Brown", hex: "#2B1E16" },
    ],
    shortDescription:
      "A commanding double monk strap dress shoe with solid brass hardware, hand-painted crust calfskin, and Goodyear welted sole.",
    story:
      "The Savile Double Monk is hand-dyed in small batches using layered pigment washes to create an organic, deep tortoiseshell patina. Fastened with solid forged brass buckles anchored on elasticated gussets for effortless slip-on entrance.",
    materials: [
      "Italian hand-patinated full-grain crust calfskin",
      "Solid milled brass buckle closures with satin gold plating",
      "Goodyear welted channeled leather sole with rubber heel insert",
      "Soft calfskin interior lining",
    ],
    dimensions: {
      heelHeight: "26 mm stacked leather heel with rubber dovetail",
      soleType: "Goodyear welted Italian leather sole with blind waist stitching",
    },
    details: [
      "Adjustable dual strap closure with concealed elastic release",
      "Hand-painted antique edge burnishing",
      "Subtle toe cap broguing line",
      "Gold foil debossed insole crest",
    ],
    careInstructions: [
      "Polish with tinted cognac wax polish to preserve color depth",
      "Condition leather twice yearly with nourishing milk",
    ],
    inStock: true,
  },

  // ── 4. FOOTWEAR: THE MAYFAIR CHELSEA BOOT ──
  {
    id: "acemen-mayfair-chelsea-boot",
    slug: "mayfair-leather-chelsea-boot",
    name: "The Mayfair Leather Chelsea Boot",
    collection: "The Footwear Atelier",
    category: "Shoes",
    subType: "Chelsea",
    gender: "unisex",
    price: 750,
    currency: "GBP",
    formattedPrice: "£750",
    tag: "Iconic Silhouette",
    isNewArrival: true,
    sizes: standardShoeSizes,
    images: {
      primary: "/images/luxury/prod-chelsea-1.webp",
      secondary: "/images/luxury/prod-chelsea-2.webp",
      gallery: [
        "/images/luxury/prod-chelsea-1.webp",
        "/images/luxury/prod-chelsea-2.webp",
        "/images/luxury/footwear-campaign.webp",
      ],
    },
    colors: [
      { name: "Obsidian Black", hex: "#111111" },
    ],
    shortDescription:
      "An immaculate full-grain leather Chelsea boot featuring a sleek British toe silhouette, durable elastic side gussets, and storm-welted sole.",
    story:
      "Sculpted from a single seamless cut of French calf leather to eliminate unnecessary outer seams. The Mayfair Chelsea effortlessly transitions from London tailoring to relaxed weekend attire, reinforced with a low-profile Dainite rubber sole for wet city pavements.",
    materials: [
      "Single-piece full-grain calfskin leather upper",
      "Durable British Dainite rubber stud sole",
      "Heavy-duty elasticated side gores with grosgrain pull tabs",
      "Full glove-leather lining",
    ],
    dimensions: {
      heelHeight: "28 mm stacked leather heel",
      soleType: "Goodyear storm-welted all-weather Dainite studded rubber sole",
    },
    details: [
      "Seamless wholecut-inspired side profile",
      "Reinforced woven ACEMEN rear pull-tab for easy entry",
      "Weatherproof 360° storm welt",
      "Hand-finished and wax-sealed edges",
    ],
    careInstructions: [
      "Wipe clean after rain and apply neutral waterproofing leather cream",
      "Store upright with boot trees to maintain ankle shape",
    ],
    inStock: true,
  },

  // ── 5. FOOTWEAR: THE PICCADILLY BLUCHER DERBY ──
  {
    id: "acemen-piccadilly-blucher-derby",
    slug: "piccadilly-blucher-derby",
    name: "The Piccadilly Blucher Derby",
    collection: "The Footwear Atelier",
    category: "Shoes",
    subType: "Derby",
    gender: "men",
    price: 660,
    currency: "GBP",
    formattedPrice: "£660",
    tag: "Modern Classic",
    sizes: standardShoeSizes,
    images: {
      primary: "/images/luxury/prod-derby-1.webp",
      secondary: "/images/luxury/prod-derby-1.webp",
      gallery: [
        "/images/luxury/prod-derby-1.webp",
        "/images/luxury/footwear-campaign.webp",
        "/images/luxury/craftsmanship.webp",
      ],
    },
    colors: [
      { name: "Mahogany Calfskin", hex: "#4A2B20" },
    ],
    shortDescription:
      "An open-lacing Derby shoe cut from supple full-grain Bavarian calfskin with a softly rounded toe profile and cushioned arch support.",
    story:
      "The open-throat lacing design of The Piccadilly provides a generous, adaptable fit across the instep while maintaining refined bespoke proportions. Finished with discreet hand-stitched bar tacks on the facings and a durable Goodyear welted sole.",
    materials: [
      "Full-grain Bavarian calfskin leather upper with natural pebble grain",
      "Vegetable-tanned leather midsole and arch-support insole",
      "Goodyear welted channeled sole with protective half-rubber tread",
    ],
    dimensions: {
      heelHeight: "24 mm stacked leather heel",
      soleType: "Goodyear welted leather sole with half-rubber protective tread",
    },
    details: [
      "Open four-eyelet lacing structure for flexible instep comfort",
      "Hand-stitched facing bar-tacks for structural resilience",
      "Anatomical arch support insert",
      "Subtle hot-stamped gold foil ACEMEN hallmark",
    ],
    careInstructions: ["Condition with neutral leather cream and polish periodically"],
    inStock: true,
  },

  // ── 6. LEATHER JACKETS: THE SOVEREIGN CLASSIC ──
  {
    id: "acemen-sovereign-classic-jacket",
    slug: "sovereign-classic-leather-jacket",
    name: "The Sovereign Classic Leather Jacket",
    collection: "Sartorial Outerwear",
    category: "Jackets",
    subType: "Classic Jacket",
    gender: "men",
    price: 1850,
    currency: "GBP",
    formattedPrice: "£1,850",
    tag: "Masterpiece",
    isIconic: true,
    isNewArrival: true,
    sizes: standardJacketSizes,
    images: {
      primary: "/images/luxury/prod-jacket-classic-1.webp",
      secondary: "/images/luxury/prod-jacket-classic-1.webp",
      gallery: [
        "/images/luxury/prod-jacket-classic-1.webp",
        "/images/luxury/men-campaign.webp",
        "/images/luxury/craftsmanship.webp",
      ],
    },
    colors: [
      { name: "Obsidian Black", hex: "#111111" },
    ],
    shortDescription:
      "A tailored minimalist leather jacket in full-grain French box calfskin with clean spread collar, dual chest zip pockets, and cupro lining.",
    story:
      "Sculpted with razor-sharp British tailoring principles, The Sovereign Classic Jacket strikes the ideal balance between casual presence and formal sophistication. Cut from 1.1 mm full-grain calfskin selected for buttery hand-feel and natural drape, finished with Swiss Riri hardware and breathable cupro lining.",
    materials: [
      "100% Full-grain French calfskin leather (1.1 mm weight)",
      "100% Japanese breathable cupro interior lining",
      "Custom gunmetal Swiss Riri zips with leather pullers",
    ],
    dimensions: {
      chestFit: "Tailored slim luxury fit — runs true to size",
    },
    details: [
      "Clean spread collar with hidden under-collar snap",
      "Dual zip chest pockets and concealed internal passport pocket",
      "Subtle embossed ACEMEN leather label inside collar",
      "Double-stitched stress seams for lifetime durability",
    ],
    careInstructions: [
      "Professional leather specialist cleaning only",
      "Store on broad wooden coat hanger in breathable garment bag",
    ],
    inStock: true,
  },

  // ── 7. LEATHER JACKETS: THE SIGNATURE BOMBER ──
  {
    id: "acemen-signature-leather-bomber",
    slug: "signature-leather-bomber-jacket",
    name: "The Signature Leather Bomber",
    collection: "Sartorial Outerwear",
    category: "Jackets",
    subType: "Bomber",
    gender: "men",
    price: 1750,
    currency: "GBP",
    formattedPrice: "£1,750",
    tag: "Atelier Favorite",
    isBestSeller: true,
    sizes: standardJacketSizes,
    images: {
      primary: "/images/luxury/prod-jacket-bomber-1.webp",
      secondary: "/images/luxury/prod-jacket-bomber-1.webp",
      gallery: [
        "/images/luxury/prod-jacket-bomber-1.webp",
        "/images/luxury/craftsmanship.webp",
        "/images/luxury/men-campaign.webp",
      ],
    },
    colors: [
      { name: "Espresso Dark Brown", hex: "#2B1E16" },
    ],
    shortDescription:
      "A refined leather bomber cut from rich espresso full-grain hide with wool-ribbed trim and antique brass hardware.",
    story:
      "Reinterpreting the iconic flight silhouette with understated luxury. Finished with custom 100% merino wool knit ribbing and rich espresso brown calfskin that develops an authentic patina over years of wear.",
    materials: [
      "Full-grain Bavarian calfskin with rich oily temper",
      "100% Extra-fine merino wool rib-knit collar, cuffs and hem",
      "Heavyweight cotton twill body lining with satin sleeve lining",
    ],
    dimensions: {
      chestFit: "Regular tailored bomber fit",
    },
    details: [
      "Two-way central antique brass zip",
      "Dual angled welt hand-warmer pockets with magnetic closure",
      "Twin interior security pockets for travel documents",
    ],
    careInstructions: ["Specialist leather care only"],
    inStock: true,
  },

  // ── 8. FINE LEATHER BAGS ──
  {
    id: "acemen-grand-sovereign-weekender",
    slug: "grand-sovereign-weekender",
    name: "The Grand Sovereign Weekender",
    collection: "The Sovereign Atelier",
    category: "Bags",
    subType: "Weekender",
    gender: "unisex",
    price: 1450,
    currency: "GBP",
    formattedPrice: "£1,450",
    tag: "Iconic Masterpiece",
    isIconic: true,
    isNewArrival: true,
    images: {
      primary: "/images/luxury/prod-weekender-1.webp",
      secondary: "/images/luxury/prod-weekender-2.webp",
      gallery: [
        "/images/luxury/prod-weekender-1.webp",
        "/images/luxury/prod-weekender-2.webp",
        "/images/luxury/hero-campaign.webp",
        "/images/luxury/craftsmanship.webp",
      ],
    },
    colors: [
      { name: "Espresso Brown", hex: "#2B1E16" },
      { name: "Saddle Cognac", hex: "#8C5835" },
      { name: "Obsidian Black", hex: "#111111" },
    ],
    shortDescription:
      "Our flagship holdall, hand-sculpted from full-grain French calfskin with solid brushed brass hardware, padlock clochette, and herringbone wool lining.",
    story:
      "Engineered for the discerning voyager, The Grand Sovereign Weekender represents the pinnacle of British leather craftsmanship. Each piece requires forty-two hours of meticulous hand assembly in our London atelier, featuring double-rolled load-bearing handles, reinforced corners, and a structured base designed to age with an unmatched patina.",
    materials: [
      "100% Full-grain French vegetable-tanned calfskin",
      "Solid milled brass hardware with 24k gold galvanic finish",
      "Heavyweight herringbone weave interior lining",
      "Beeswax-coated linen saddle stitching",
    ],
    dimensions: {
      height: "32 cm (12.6 in)",
      width: "52 cm (20.5 in)",
      depth: "24 cm (9.4 in)",
      strapDrop: "45 – 58 cm adjustable",
    },
    details: [
      "Signature ACEMEN gold foil hot-stamping",
      "Detachable, padded leather shoulder strap",
      "Dual internal zip security pockets and laptop divider",
      "Brass protective feet on reinforced base",
      "Complimentary custom initial monogramming on clochette tag",
    ],
    careInstructions: [
      "Avoid prolonged exposure to direct sunlight and high humidity",
      "Clean gently using a soft, dry microfiber cloth",
      "Nourish annually with ACEMEN beeswax leather balm",
      "Store in provided heavy cotton dust bag with interior stuffing",
    ],
    inStock: true,
  },
  {
    id: "acemen-audley-leather-briefcase",
    slug: "audley-leather-briefcase",
    name: "The Audley Leather Briefcase",
    collection: "Men's Sartorial Line",
    category: "Bags",
    subType: "Briefcase",
    gender: "men",
    price: 1280,
    currency: "GBP",
    formattedPrice: "£1,280",
    tag: "Signature Atelier",
    isIconic: true,
    isBestSeller: true,
    images: {
      primary: "/images/luxury/prod-briefcase-1.webp",
      secondary: "/images/luxury/prod-briefcase-2.webp",
      gallery: [
        "/images/luxury/prod-briefcase-1.webp",
        "/images/luxury/prod-briefcase-2.webp",
        "/images/luxury/men-campaign.webp",
      ],
    },
    colors: [
      { name: "Obsidian Black", hex: "#111111" },
      { name: "Cognac Tan", hex: "#8C5835" },
    ],
    shortDescription:
      "A structured executive briefcase cut from obsidian full-grain calfskin, fitted with custom dual brass buckles and burgundy velvet organizer.",
    story:
      "Designed for leaders and visionaries, The Audley Briefcase combines commanding architectural lines with effortless utility. The burgundy velvet-lined interior houses dedicated compartments for a 16-inch laptop, writing instruments, and travel documents.",
    materials: [
      "Full-grain Bavarian calfskin with natural pebble grain",
      "Italian velvet and microfiber suede lining",
      "Brushed solid brass buckle hardware",
      "Hand-painted and heat-sealed edges",
    ],
    dimensions: {
      height: "30 cm (11.8 in)",
      width: "41 cm (16.1 in)",
      depth: "10 cm (3.9 in)",
    },
    details: [
      "Padded compartment accommodating up to 16\" MacBook Pro",
      "Dedicated pen holsters and passport slip pocket",
      "Trolley pass-through sleeve on back for travel ease",
      "Hand-finished rolled leather carry handle",
    ],
    careInstructions: [
      "Wipe clean with a soft dry cloth",
      "Store in cool, dry climate inside provided dust bag",
    ],
    inStock: true,
  },
  {
    id: "acemen-kensington-structured-tote",
    slug: "kensington-structured-tote",
    name: "The Kensington Structured Tote",
    collection: "Women's Leather Essentials",
    category: "Bags",
    subType: "Tote",
    gender: "women",
    price: 1150,
    currency: "GBP",
    formattedPrice: "£1,150",
    tag: "New Arrival",
    isNewArrival: true,
    images: {
      primary: "/images/luxury/prod-tote-1.webp",
      secondary: "/images/luxury/prod-tote-2.webp",
      gallery: [
        "/images/luxury/prod-tote-1.webp",
        "/images/luxury/prod-tote-2.webp",
        "/images/luxury/women-campaign.webp",
      ],
    },
    colors: [
      { name: "Camel Saddle", hex: "#A06A3B" },
      { name: "Midnight Noir", hex: "#111111" },
    ],
    shortDescription:
      "Sculpted from warm saddle-tan calfskin with gold hardware, generous interior volume, and zip security closure.",
    story:
      "The Kensington Tote embodies effortless day-to-night luxury. With its clean trapezoidal silhouette, reinforced base, and ultra-plush caramel microfiber lining, it effortlessly balances sophisticated form and day-to-day utility.",
    materials: [
      "Full-grain French box calf leather",
      "Caramel microfiber suede lining",
      "24k gold-plated brass zip and studs",
      "Hand-edge sealed in deep mahogany paint",
    ],
    dimensions: {
      height: "28 cm (11.0 in)",
      width: "38 cm (15.0 in)",
      depth: "15 cm (5.9 in)",
    },
    details: [
      "Top zip closure with leather pull tab",
      "Central zip partition and dual smartphone slots",
      "Protective base studs",
      "Gold debossed ACEMEN hallmark",
    ],
    careInstructions: [
      "Protect from rain and grease",
      "Condition every six months with neutral leather cream",
    ],
    inStock: true,
  },

  // ── 9. WALLETS & POCKET LEATHER GOODS ──
  {
    id: "acemen-sovereign-bifold-wallet",
    slug: "sovereign-bifold-wallet",
    name: "The Sovereign Bifold Wallet",
    collection: "Small Leather Goods",
    category: "Wallets",
    subType: "Bifold",
    gender: "unisex",
    price: 340,
    currency: "GBP",
    formattedPrice: "£340",
    tag: "Essential",
    isBestSeller: true,
    images: {
      primary: "/images/luxury/prod-wallet-1.webp",
      secondary: "/images/luxury/prod-wallet-1.webp",
      gallery: [
        "/images/luxury/prod-wallet-1.webp",
        "/images/luxury/craftsmanship.webp",
      ],
    },
    colors: [
      { name: "Cognac Tan", hex: "#8C5835" },
      { name: "Obsidian Noir", hex: "#111111" },
    ],
    shortDescription:
      "An eight-card bifold wallet sculpted from vegetable-tanned full-grain leather with gold foil debossed ACEMEN signature.",
    story:
      "Ultra-slim yet accommodating, The Sovereign Bifold is cut from the densest cut of Tuscan full-grain leather. Finished with wafer-thin turned edges and eight precision card slots that mold to your daily cards over time.",
    materials: [
      "100% Full-grain Tuscan vegetable-tanned leather",
      "Silk moiré internal note lining",
      "Gold foil debossed signature",
    ],
    dimensions: {
      height: "9.5 cm",
      width: "11.5 cm",
      depth: "1.2 cm",
    },
    details: [
      "8 credit card slots",
      "2 hidden slip pockets for receipts",
      "Full-length currency compartment",
      "Hand-beveled and burnished edges",
    ],
    careInstructions: ["Store in dry conditions and nourish periodically"],
    inStock: true,
  },
  {
    id: "acemen-cavendish-slim-cardholder",
    slug: "cavendish-slim-cardholder",
    name: "The Cavendish Slim Cardholder",
    collection: "Small Leather Goods",
    category: "Wallets",
    subType: "Cardholder",
    gender: "unisex",
    price: 195,
    currency: "GBP",
    formattedPrice: "£195",
    tag: "Atelier Favorite",
    isNewArrival: true,
    images: {
      primary: "/images/luxury/prod-wallet-2.webp",
      secondary: "/images/luxury/prod-wallet-2.webp",
      gallery: [
        "/images/luxury/prod-wallet-2.webp",
        "/images/luxury/women-campaign.webp",
      ],
    },
    colors: [
      { name: "Two-Tone Cognac & Noir", hex: "#8C5835" },
      { name: "Monochrome Noir", hex: "#111111" },
    ],
    shortDescription:
      "Two-tone cognac and noir leather slim cardholder with central bill slot and hand-stitched edges.",
    story:
      "Minimalism perfected. The Cavendish slides imperceptibly into tailored trousers or suit jacket pockets while keeping four essential cards and folded bills impeccably organized.",
    materials: [
      "French box calf leather",
      "Contrast saddle stitching",
      "Gold leaf logo stamping",
    ],
    dimensions: {
      height: "7.5 cm",
      width: "10 cm",
      depth: "0.4 cm",
    },
    details: [
      "4 card slots (2 per side)",
      "1 central slip compartment for banknotes",
      "Ultra-thin profile",
    ],
    careInstructions: ["Avoid overloading slots to preserve leather memory"],
    inStock: true,
  },

  // ── 10. TRUNKS & TRAVEL ──
  {
    id: "acemen-sovereign-cabin-trolley",
    slug: "sovereign-cabin-trolley",
    name: "The Sovereign Cabin Trolley Case",
    collection: "Trunks & Travel",
    category: "Travel",
    subType: "Travel",
    gender: "unisex",
    price: 2100,
    currency: "GBP",
    formattedPrice: "£2,100",
    tag: "Masterpiece",
    isIconic: true,
    images: {
      primary: "/images/luxury/travel-campaign.webp",
      secondary: "/images/luxury/travel-campaign.webp",
      gallery: [
        "/images/luxury/travel-campaign.webp",
        "/images/luxury/hero-campaign.webp",
      ],
    },
    colors: [{ name: "Saddle Tan", hex: "#A06A3B" }],
    shortDescription:
      "Hand-crafted wheeled cabin case with reinforced leather corners, 360-degree silent multi-wheels, and TSA lock.",
    story:
      "Constructed around an aerospace-grade lightweight aluminum frame and wrapped entirely in top-grade saddle leather. Featuring custom Japanese silent wheels and solid brass latch locks for international travel elegance.",
    materials: [
      "Full-grain saddle hide exterior",
      "Aluminum-magnesium lightweight chassis",
      "Japanese Hinomoto 360° silent ball-bearing wheels",
      "Solid brass TSA-integrated locks",
    ],
    dimensions: {
      height: "55 cm (21.6 in)",
      width: "39 cm (15.3 in)",
      depth: "23 cm (9.0 in)",
    },
    details: [
      "Approved IATA international cabin baggage dimensions",
      "Multi-stage retractable telescopic handle",
      "Dual interior compression straps and garment divider",
      "Individual serial number engraved on brass plaque",
    ],
    careInstructions: ["Store in specialized protective travel cover when checked"],
    inStock: true,
  },
];
