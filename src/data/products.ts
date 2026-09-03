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
  // B2B MODE — D2C pricing temporarily disabled for front-end visitors; preserved for backend/quote baselines
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

  // B2B & Wholesale Manufacturing Attributes
  modelNumber?: string;
  upperLeather?: string;
  finishOptions?: string[];
  soleOptions?: string[];
  customBranding?: string;
  customizationAvailable?: boolean;
}

export function getProductModelNumber(product: ProductItem): string {
  if (product.modelNumber) return product.modelNumber;
  const prefixMap: Record<string, string> = {
    "Shoes": "ACE-SH",
    "Pilot Collection": "ACE-PLT",
    "Jackets": "ACE-JKT",
    "Bags": "ACE-BAG",
    "Wallets": "ACE-WLT",
    "Belts": "ACE-BLT",
    "Travel": "ACE-TRV",
    "Accessories": "ACE-ACC",
  };
  const prefix = prefixMap[product.category] || "ACE-MD";
  const num = Math.abs(product.id.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0) % 89) + 10;
  return `${prefix}-${num}`;
}

const standardShoeSizes = ["39", "40", "41", "42", "43", "44", "45", "46"];
const standardJacketSizes = ["S", "M", "L", "XL", "XXL"];

export const luxuryProducts: ProductItem[] = [
  // ─────────────────────────────────────────────────────────────
  // ── THE 10 DIVERSE FOOTWEAR MODELS (EACH A COMPLETE PAIR) ──
  // ─────────────────────────────────────────────────────────────

  // 1. CLASSIC OXFORD
  {
    id: "acemen-regent-oxford",
    slug: "regent-cap-toe-oxford",
    name: "The Regent Classic Oxford",
    modelNumber: "ACE-OXF-01",
    collection: "The Footwear Atelier",
    category: "Shoes",
    subType: "Classic Oxford",
    gender: "men",
    price: 720,
    currency: "GBP",
    formattedPrice: "£720",
    tag: "Formal Benchmark",
    isIconic: true,
    isBestSeller: true,
    sizes: standardShoeSizes,
    images: {
      primary: "/images/luxury/prod-shoe-oxford-pair.webp",
      secondary: "/images/luxury/prod-shoe-oxford-pair.webp",
      gallery: [
        "/images/luxury/prod-shoe-oxford-pair.webp",
        "/images/luxury/footwear-campaign.webp",
        "/images/luxury/craftsmanship.webp",
      ],
    },
    colors: [
      { name: "Jet Black", hex: "#0A0A0A" },
      { name: "Espresso Brown", hex: "#2C1B14" },
    ],
    shortDescription:
      "Crafted in smooth polished black French box calfskin, the Regent Classic Oxford combines a refined cap-toe silhouette with understated five-eyelet closed lacing. Designed for formal occasions and polished executive attire.",
    story:
      "Sculpted on our signature London chisel Last, the Regent Classic Oxford represents the quintessential British dress shoe. Every pair undergoes over two hundred hand operations in our atelier, featuring channeled oak-bark leather soles, hand-beveled waists, and a mirror-like high-friction cap burnish.",
    materials: [
      "100% Full-grain French box calfskin upper",
      "Oak bark-tanned leather sole with brass nail reinforcement",
      "Full glove-calfskin lining and vegetable-tanned insole",
      "Goodyear-welted closed-channel sole construction",
    ],
    dimensions: {
      heelHeight: "25 mm stacked leather heel with rubber dovetail",
      soleType: "Goodyear-welted closed-channel leather sole",
    },
    details: [
      "Mirror-polished cap-toe with delicate punch perforations",
      "Closed five-eyelet lacing structure",
      "Concealed channeled sole stitching",
      "Includes solid cedar shoe trees and cotton travel bags",
    ],
    careInstructions: [
      "Insert cedar shoe trees immediately following every wear",
      "Clean with soft horsehair brush and polish with ACEMEN high-wax black cream",
    ],
    inStock: true,
    upperLeather: "French Box Calfskin (1.2mm)",
    finishOptions: ["Mirror Glaze", "Hand-Burnished", "Semi-Matte"],
    soleOptions: ["Closed-Channel Leather", "Dainite Rubber", "Half-Rubber Tread"],
    customBranding: "Gold leaf insole stamping, custom laser sole debossing",
    customizationAvailable: true,
  },

  // 2. MONK STRAP
  {
    id: "acemen-savile-monk",
    slug: "savile-double-monk-strap",
    name: "The Savile Double Monk Strap",
    modelNumber: "ACE-MNK-01",
    collection: "The Footwear Atelier",
    category: "Shoes",
    subType: "Monk Strap",
    gender: "men",
    price: 760,
    currency: "GBP",
    formattedPrice: "£760",
    tag: "Atelier Signature",
    isBestSeller: true,
    sizes: standardShoeSizes,
    images: {
      primary: "/images/luxury/prod-shoe-monk-pair.webp",
      secondary: "/images/luxury/prod-shoe-monk-pair.webp",
      gallery: [
        "/images/luxury/prod-shoe-monk-pair.webp",
        "/images/luxury/men-campaign.webp",
      ],
    },
    colors: [
      { name: "Patinated Cognac", hex: "#8C5835" },
      { name: "Espresso Dark Brown", hex: "#2B1E16" },
    ],
    shortDescription:
      "Defined by its distinctive double-buckle fastening, the Savile Monk Strap brings a contemporary edge to traditional leather craftsmanship. Finished in rich hand-patinated cognac leather with hand-burnished toe and heel shading.",
    story:
      "The Savile is hand-dyed in small batches using layered pigment washes to create an organic, deep cognac patina. Fastened with dual solid forged brass buckles anchored on elasticated gussets for effortless slip-on entrance and enduring architectural form.",
    materials: [
      "100% Full-grain Bavarian crust calfskin upper",
      "Milled solid brass buckle closures with satin gold plating",
      "Goodyear-welted channeled leather sole with rubber dovetail heel",
      "Full glove-calfskin lining",
    ],
    dimensions: {
      heelHeight: "26 mm stacked leather heel",
      soleType: "Goodyear-welted Italian leather sole with blind waist stitching",
    },
    details: [
      "Adjustable dual strap closure with concealed elastic flex release",
      "Hand-painted antique edge burnishing",
      "Subtle hand-finished toe shading",
      "Gold foil debossed ACEMEN insole crest",
    ],
    careInstructions: [
      "Polish with tinted cognac wax polish to preserve color depth",
      "Condition leather twice yearly with nourishing balm",
    ],
    inStock: true,
    upperLeather: "Bavarian Full-Grain Crust Calfskin",
    finishOptions: ["Hand-Applied Museum Patina", "Antique Burnish", "Aniline Dip"],
    soleOptions: ["Full Leather Sole", "Dainite Studded Rubber", "Vibram Half-Sole"],
    customBranding: "Laser-engraved buckle hardware, gold leaf insole crest",
    customizationAvailable: true,
  },

  // 3. CHELSEA BOOT
  {
    id: "acemen-mayfair-chelsea",
    slug: "mayfair-leather-chelsea-boot",
    name: "The Mayfair Leather Chelsea Boot",
    modelNumber: "ACE-BOT-01",
    collection: "The Footwear Atelier",
    category: "Shoes",
    subType: "Chelsea Boot",
    gender: "unisex",
    price: 790,
    currency: "GBP",
    formattedPrice: "£790",
    tag: "Iconic Silhouette",
    isNewArrival: true,
    sizes: standardShoeSizes,
    images: {
      primary: "/images/luxury/prod-shoe-chelsea-pair.webp",
      secondary: "/images/luxury/prod-shoe-chelsea-pair.webp",
      gallery: [
        "/images/luxury/prod-shoe-chelsea-pair.webp",
        "/images/luxury/footwear-campaign.webp",
      ],
    },
    colors: [
      { name: "Espresso Dark Brown", hex: "#2A1D17" },
      { name: "Obsidian Black", hex: "#0F0F0F" },
    ],
    shortDescription:
      "Cut from seamless full-grain French calfskin, the Mayfair Chelsea Boot features a sleek tapered ankle silhouette with tone-on-tone elastic side gussets and woven pull tabs. Goodyear-welted to a British Dainite studded sole for all-weather grip.",
    story:
      "Sculpted from a single seamless cut of French calf leather to eliminate unnecessary outer seams. The Mayfair Chelsea effortlessly transitions from London tailoring to relaxed outerwear, reinforced with a low-profile Dainite rubber sole engineered for wet city pavements.",
    materials: [
      "Single-piece full-grain French calfskin leather upper",
      "Durable British Dainite studded rubber sole",
      "Heavy-duty elasticated side gores with woven grosgrain pull tabs",
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
    upperLeather: "French Box Calfskin / Waterproof Treated Hides",
    finishOptions: ["Sleek Smooth Aniline", "Weatherproof Waxed", "Matte Pebble"],
    soleOptions: ["Dainite Studded Rubber", "Vibram Lug Sole", "Leather Sole"],
    customBranding: "Custom woven pull-tab ribbon, embossed insole logo",
    customizationAvailable: true,
  },

  // 4. LEATHER DRESS BOOT
  {
    id: "acemen-belgravia-dress-boot",
    slug: "belgravia-leather-dress-boot",
    name: "The Belgravia Leather Dress Boot",
    modelNumber: "ACE-BOT-02",
    collection: "The Footwear Atelier",
    category: "Shoes",
    subType: "Dress Boot",
    gender: "men",
    price: 850,
    currency: "GBP",
    formattedPrice: "£850",
    tag: "Artisan Benchmade",
    isNewArrival: true,
    sizes: standardShoeSizes,
    images: {
      primary: "/images/luxury/prod-shoe-dressboot-pair.webp",
      secondary: "/images/luxury/prod-shoe-dressboot-pair.webp",
      gallery: [
        "/images/luxury/prod-shoe-dressboot-pair.webp",
        "/images/luxury/craftsmanship.webp",
      ],
    },
    colors: [
      { name: "Burnished Walnut", hex: "#633C24" },
      { name: "Dark Chocolate", hex: "#2C1B14" },
    ],
    shortDescription:
      "A sophisticated formal lace-up ankle boot tailored for bespoke suiting and tailored outerwear. Featuring delicate cap-toe brogue perforations, blind eyelets transitioning into solid brass speed hooks, and a hand-burnished walnut patina.",
    story:
      "The Belgravia Dress Boot marries the structural grandeur of British military dress boots with refined Edwardian formal lines. Built with high-shaft ankle support, a double leather Goodyear welted sole, and solid milled brass speed hooks.",
    materials: [
      "100% Full-grain hand-burnished calfskin upper",
      "Double-thickness oak bark-tanned leather sole",
      "Solid milled brass speed hooks and eyelets",
      "Full glove-calfskin lining and leather counter",
    ],
    dimensions: {
      heelHeight: "28 mm stacked leather heel",
      soleType: "Goodyear-welted double leather sole with rubber top-piece",
    },
    details: [
      "Balmoral cap-toe design with fine brogue punching",
      "Blind lower eyelets with top brass speed hooks for fast lacing",
      "Hand-burnished toe box and heel counter",
      "Includes solid cedar boot trees and flannel travel bags",
    ],
    careInstructions: [
      "Store with cedar boot trees to preserve ankle alignment",
      "Condition with walnut leather cream and horsehair brush buff",
    ],
    inStock: true,
    upperLeather: "Full-Grain French Calfskin",
    finishOptions: ["Antique Burnished Walnut", "Black High-Wax", "Museum Patina"],
    soleOptions: ["Double Leather Sole", "Commando Rubber", "Dainite Studded"],
    customBranding: "Embossed ankle crest, custom brass hardware finish",
    customizationAvailable: true,
  },

  // 5. CHUKKA / DESERT-INSPIRED BOOT
  {
    id: "acemen-kensington-chukka",
    slug: "kensington-suede-desert-chukka",
    name: "The Kensington Suede Desert Chukka",
    modelNumber: "ACE-CHK-01",
    collection: "The Footwear Atelier",
    category: "Shoes",
    subType: "Chukka Boot",
    gender: "men",
    price: 680,
    currency: "GBP",
    formattedPrice: "£680",
    tag: "Casual Luxury",
    sizes: standardShoeSizes,
    images: {
      primary: "/images/luxury/prod-shoe-chukka-pair.webp",
      secondary: "/images/luxury/prod-shoe-chukka-pair.webp",
      gallery: [
        "/images/luxury/prod-shoe-chukka-pair.webp",
        "/images/luxury/footwear-campaign.webp",
      ],
    },
    colors: [
      { name: "Snuff Tan Suede", hex: "#B58348" },
      { name: "Dark Espresso Suede", hex: "#3A261D" },
    ],
    shortDescription:
      "Sculpted from supple snuff tan Italian calf suede, the Kensington Chukka delivers effortless casual luxury. Designed with a two-eyelet minimal lace-up silhouette, leather storm welt, and natural crepe rubber outsole for supreme walking comfort.",
    story:
      "The quintessential off-duty companion, the Kensington Desert Chukka pairs velvety Italian suede with an ultra-flexible natural crepe sole. Pre-treated with a Scotchgard water-repellent barrier, it provides relaxed sophistication that effortlessly transitions between city and countryside.",
    materials: [
      "100% Italian velvety calf suede with water-repellent treatment",
      "Natural plantation crepe rubber sole with leather storm welt",
      "Supple unlined forefoot with calfskin heel counter",
      "Waxed tonal cotton laces",
    ],
    dimensions: {
      heelHeight: "22 mm integrated crepe rubber heel",
      soleType: "Natural plantation crepe rubber sole with leather welt",
    },
    details: [
      "Minimal two-eyelet ankle lacing profile",
      "Water-repellent Scotchgard pre-treatment",
      "Cushioned leather arch-support insole",
      "Includes ACEMEN suede brush and dust covers",
    ],
    careInstructions: [
      "Brush regularly with brass/crepe suede brush to maintain nap",
      "Spray with suede protector every season",
    ],
    inStock: true,
    upperLeather: "Italian Calf Suede / Waxy Pull-Up Leather",
    finishOptions: ["Snuff Tan Suede", "Chocolate Suede", "Oiled Pull-Up Hide"],
    soleOptions: ["Natural Crepe Rubber", "Vibram Morflex", "Dainite Studded"],
    customBranding: "Heat-embossed suede tongue stamp, custom insole deboss",
    customizationAvailable: true,
  },

  // 6. PREMIUM LEATHER LOAFER
  {
    id: "acemen-stjames-loafer",
    slug: "st-james-leather-penny-loafer",
    name: "The St. James Leather Penny Loafer",
    modelNumber: "ACE-LOF-01",
    collection: "The Footwear Atelier",
    category: "Shoes",
    subType: "Loafer",
    gender: "men",
    price: 690,
    currency: "GBP",
    formattedPrice: "£690",
    tag: "Smart Casual Essential",
    isBestSeller: true,
    sizes: standardShoeSizes,
    images: {
      primary: "/images/luxury/prod-shoe-loafer-pair.webp",
      secondary: "/images/luxury/prod-shoe-loafer-pair.webp",
      gallery: [
        "/images/luxury/prod-shoe-loafer-pair.webp",
        "/images/luxury/men-campaign.webp",
      ],
    },
    colors: [
      { name: "Deep Espresso Brown", hex: "#1F1612" },
      { name: "Saddle Cognac", hex: "#7B4624" },
    ],
    shortDescription:
      "An icon of smart-casual refinement, the St. James Penny Loafer showcases a hand-stitched raised apron seam and classic cutout bridge saddle. Goodyear welted on a slender closed-channel leather sole with beveled waist.",
    story:
      "Crafted in deep espresso Tuscan calfskin, the St. James Penny Loafer delivers an impeccable slip-on silhouette for both formal suiting and linen tailoring. Every apron is sewn by hand using waxed cord for authentic dimensional character.",
    materials: [
      "100% Full-grain Tuscan box calfskin upper",
      "Closed-channel oak bark-tanned leather sole",
      "Full glove-calfskin lining with padded heel cup",
      "Hand-stitched apron seam with waxed thread",
    ],
    dimensions: {
      heelHeight: "22 mm stacked leather heel",
      soleType: "Goodyear-welted closed-channel leather sole with beveled waist",
    },
    details: [
      "Hand-sewn apron seam with raised ridge",
      "Classic penny cutout saddle strap across bridge",
      "Glove-soft calf lining for sockless or tailored wear",
      "Gold debossed ACEMEN insole insignia",
    ],
    careInstructions: [
      "Insert cedar shoe trees immediately after wear",
      "Polish with espresso cream and buff to soft sheen",
    ],
    inStock: true,
    upperLeather: "Tuscan Full-Grain Box Calf",
    finishOptions: ["Espresso Polished", "Cognac Burnished", "Dark Brown Suede"],
    soleOptions: ["Closed-Channel Leather", "Half-Rubber Tread", "Flexible Flex-Welt"],
    customBranding: "Gold foil insole crest, custom saddle strap embroidery",
    customizationAvailable: true,
  },

  // 7. AVIATION / PILOT SHOE
  {
    id: "acemen-aviator-pilot",
    slug: "aviator-sovereign-pilot-shoe",
    name: "The Aviator Sovereign Pilot Shoe",
    modelNumber: "ACE-PLT-01",
    collection: "The Pilot Collection",
    category: "Pilot Collection",
    subType: "Aviation Shoe",
    gender: "men",
    price: 740,
    currency: "GBP",
    formattedPrice: "£740",
    tag: "Aviation Standard",
    isIconic: true,
    isNewArrival: true,
    sizes: standardShoeSizes,
    images: {
      primary: "/images/luxury/prod-shoe-pilot-pair.webp",
      secondary: "/images/luxury/prod-shoe-pilot-pair.webp",
      gallery: [
        "/images/luxury/prod-shoe-pilot-pair.webp",
        "/images/luxury/pilot-campaign.webp",
        "/images/luxury/travel-campaign.webp",
      ],
    },
    colors: [
      { name: "Mirror Gloss Black", hex: "#050505" },
    ],
    shortDescription:
      "Engineered specifically for airline flight decks, corporate aviation crews, and formal cockpit attire. Constructed from mirror-polish black calfskin with non-metallic composite shanks for seamless airport security clearance and anti-static flight traction.",
    story:
      "Born from direct collaboration with commercial airline pilots and corporate flight crew, The Aviator Sovereign unites immaculate uniform aesthetic with all-day flight deck ergonomics. Features airport scanner-compliant composite shanks, orthotic memory cushioning, and oil-resistant anti-static outsoles that maintain a mirror shine across global routes.",
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
    upperLeather: "High-Gloss Uniform Box Calfskin",
    finishOptions: ["Mirror Gloss Black", "Semi-Matte Black"],
    soleOptions: ["Anti-Static Flight Deck Rubber", "Dainite Studded"],
    customBranding: "Airline corporate crest debossing, custom crew serial numbers",
    customizationAvailable: true,
  },

  // 8. CASUAL LUXURY LEATHER SHOE
  {
    id: "acemen-piccadilly-derby",
    slug: "piccadilly-casual-luxury-derby",
    name: "The Piccadilly Casual Luxury Derby",
    modelNumber: "ACE-DRB-01",
    collection: "The Footwear Atelier",
    category: "Shoes",
    subType: "Casual Derby",
    gender: "men",
    price: 710,
    currency: "GBP",
    formattedPrice: "£710",
    tag: "Everyday Luxury",
    sizes: standardShoeSizes,
    images: {
      primary: "/images/luxury/prod-shoe-casualderby-pair.webp",
      secondary: "/images/luxury/prod-shoe-casualderby-pair.webp",
      gallery: [
        "/images/luxury/prod-shoe-casualderby-pair.webp",
        "/images/luxury/footwear-campaign.webp",
      ],
    },
    colors: [
      { name: "Chestnut Walnut Pebble Grain", hex: "#7B4728" },
      { name: "Dark Chocolate", hex: "#2C1B14" },
    ],
    shortDescription:
      "Designed for refined everyday luxury, the Piccadilly Derby combines textured Bavarian pebble-grain leather with open four-eyelet blucher lacing. Built on a lightweight Vibram rubber commando sole for exceptional grip and enduring comfort.",
    story:
      "The Piccadilly Blucher Derby balances rugged material resilience with sophisticated British Last tailoring. The open-throat lacing accommodates varying instep heights with ease, while the tactile pebble-grain leather resists scuffs during everyday travel and urban movement.",
    materials: [
      "Full-grain Bavarian pebble-grain cowhide leather upper",
      "Lightweight Vibram rubber commando sole with leather midsole",
      "Anatomical arch support insole lined in glove calfskin",
      "Hand-stitched facing bar-tacks for structural reinforcement",
    ],
    dimensions: {
      heelHeight: "26 mm rugged stacked rubber heel",
      soleType: "Goodyear storm-welted Vibram commando lug sole",
    },
    details: [
      "Open four-eyelet lacing structure for flexible instep comfort",
      "Rich tactile pebble-grain texture",
      "Antiqued brass eyelets with heavy-gauge waxed laces",
      "Full 360° storm welt for moisture protection",
    ],
    careInstructions: [
      "Condition periodically with nourishing leather balm",
      "Brush out pebble grain crevices with horsehair brush",
    ],
    inStock: true,
    upperLeather: "Bavarian Pebble-Grain Cowhide / Suede",
    finishOptions: ["Chestnut Walnut Grain", "Espresso Pebble", "Antique Aniline"],
    soleOptions: ["Vibram Commando Lug", "Dainite Rubber", "Flex Leather"],
    customBranding: "Custom insole hot-stamp, bespoke brass eyelet finish",
    customizationAvailable: true,
  },

  // 9. LUXURY LEATHER SNEAKER
  {
    id: "acemen-sovereign-court-sneaker",
    slug: "sovereign-court-leather-sneaker",
    name: "The Sovereign Court Leather Sneaker",
    modelNumber: "ACE-SNK-01",
    collection: "The Footwear Atelier",
    category: "Shoes",
    subType: "Luxury Sneaker",
    gender: "unisex",
    price: 590,
    currency: "GBP",
    formattedPrice: "£590",
    tag: "Minimalist Icon",
    isNewArrival: true,
    sizes: standardShoeSizes,
    images: {
      primary: "/images/luxury/prod-shoe-sneaker-pair.webp",
      secondary: "/images/luxury/prod-shoe-sneaker-pair.webp",
      gallery: [
        "/images/luxury/prod-shoe-sneaker-pair.webp",
        "/images/luxury/footwear-campaign.webp",
      ],
    },
    colors: [
      { name: "Chalk White & Cream", hex: "#F7F5F0" },
      { name: "Obsidian Black", hex: "#111111" },
    ],
    shortDescription:
      "A minimalist luxury low-top court sneaker handcrafted from ultra-supple chalk white Italian calfskin. Features tonal cotton laces, glove-calfskin lining, and an authentic stitched Margom rubber cupsole for understated elegance without overt logos.",
    story:
      "Engineered with clean architectural lines and unadorned leather purity. The Sovereign Court Sneaker is hand-stitched in small batches in our atelier using full-grain Italian Nappa calf that shapes to the wearer's foot, anchored by an authentic Italian Margom rubber cupsole.",
    materials: [
      "100% Full-grain Italian Nappa calfskin upper",
      "Authentic Italian Margom rubber cupsole with 360° perimeter stitch",
      "Removable ergonomic leather-lined memory foam footbed",
      "Full glove-calfskin interior lining",
    ],
    dimensions: {
      heelHeight: "28 mm integrated Margom rubber cupsole",
      soleType: "Stitched Margom Italian rubber cupsole",
    },
    details: [
      "Clean low-top court silhouette without exterior branding",
      "Tonal waxed cotton laces with reinforced eyelet facings",
      "Padded collar and tongue for friction-free comfort",
      "Includes spare tonal laces and custom dust bags",
    ],
    careInstructions: [
      "Wipe clean with damp cloth and leather cleaning foam",
      "Condition white leather with neutral sneaker balm",
    ],
    inStock: true,
    upperLeather: "Italian Nappa Calfskin (1.2mm)",
    finishOptions: ["Chalk White Nappa", "Cream Suede Trim", "Monochrome Black"],
    soleOptions: ["Stitched Margom Cupsole", "Recycled Rubber Outsole"],
    customBranding: "Blind heel deboss, custom gold foil insole stamping",
    customizationAvailable: true,
  },

  // 10. PREMIUM LEATHER / PATINA SHOE
  {
    id: "acemen-grand-sovereign-patina",
    slug: "grand-sovereign-museum-patina-shoe",
    name: "The Grand Sovereign Museum Patina Shoe",
    modelNumber: "ACE-PAT-01",
    collection: "The Footwear Atelier",
    category: "Shoes",
    subType: "Patina Wholecut",
    gender: "men",
    price: 890,
    currency: "GBP",
    formattedPrice: "£890",
    tag: "Atelier Masterwork",
    isIconic: true,
    isNewArrival: true,
    sizes: standardShoeSizes,
    images: {
      primary: "/images/luxury/prod-shoe-patina-pair.webp",
      secondary: "/images/luxury/prod-shoe-patina-pair.webp",
      gallery: [
        "/images/luxury/prod-shoe-patina-pair.webp",
        "/images/luxury/craftsmanship.webp",
        "/images/luxury/men-campaign.webp",
      ],
    },
    colors: [
      { name: "Deep Oxblood & Cherry Marble", hex: "#521B21" },
      { name: "Antique Cognac Marble", hex: "#784120" },
    ],
    shortDescription:
      "A masterpiece of artisanal finishing, the Grand Sovereign is cut from a single flawless hide of French calfskin and hand-dyed with multi-layered oxblood and dark cherry museum patina. Finished with high-wax toe burnishing and a fiddleback waist leather sole.",
    story:
      "The pinnacle of ACEMEN shoemaking virtuosity. The Grand Sovereign Wholecut is hand-patinated by our master colorists over multiple days using delicate sponges and artisanal dye washes, creating a stone-marbled depth of oxblood and blackened cherry that is completely unique to every pair.",
    materials: [
      "Single-piece seamless French crust calfskin upper",
      "Hand-applied multi-layered artisanal museum patina dye",
      "Oak bark-tanned leather sole with sculpted fiddleback waist",
      "Full glove-calfskin lining and brass-nailed heel",
    ],
    dimensions: {
      heelHeight: "26 mm stacked leather heel with brass nail pattern",
      soleType: "Hand-sculpted fiddleback waist closed-channel leather sole",
    },
    details: [
      "Seamless single-piece wholecut construction",
      "Unique hand-applied museum marble patina finish",
      "High-friction mirror gloss burnished toe cap and heel",
      "Includes solid cedar shoe trees and velvet presentation pouch",
    ],
    careInstructions: [
      "Nourish exclusively with delicate leather cream and tinted burgundy wax",
      "Buff gently with horsehair brush to maintain marbled patina luster",
    ],
    inStock: true,
    upperLeather: "French Crust Calfskin (Unfinished Base for Custom Dyeing)",
    finishOptions: ["Oxblood Museum Marble", "Emerald Green Patina", "Cobalt Navy Patina", "Tobacco Marble"],
    soleOptions: ["Fiddleback Waist Leather Sole", "Closed-Channel Leather"],
    customBranding: "Bespoke initials monogramming on waist, 24k gold leaf insole deboss",
    customizationAvailable: true,
  },

  // ─────────────────────────────────────────────────────────────
  // ── SARTORIAL LEATHER OUTERWEAR ──
  // ─────────────────────────────────────────────────────────────
  {
    id: "acemen-sovereign-classic-jacket",
    slug: "sovereign-classic-leather-jacket",
    name: "The Sovereign Classic Leather Jacket",
    modelNumber: "ACE-JKT-01",
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
    upperLeather: "French Box Calfskin (1.1mm)",
    finishOptions: ["Obsidian Black", "Espresso Brown", "Cognac Saddle"],
    customBranding: "Custom engraved Swiss Riri zips, woven label",
    customizationAvailable: true,
  },
  {
    id: "acemen-signature-leather-bomber",
    slug: "signature-leather-bomber-jacket",
    name: "The Signature Leather Bomber",
    modelNumber: "ACE-JKT-02",
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
    careInstructions: [
      "Professional leather care only",
      "Store away from direct sunlight",
    ],
    inStock: true,
    upperLeather: "Bavarian Full-Grain Calfskin",
    finishOptions: ["Espresso Brown", "Dark Cognac", "Vintage Black"],
    customBranding: "Solid brass hardware deboss, bespoke jacquard lining",
    customizationAvailable: true,
  },

  // ─────────────────────────────────────────────────────────────
  // ── FINE LEATHER BAGS & HOLDALLS ──
  // ─────────────────────────────────────────────────────────────
  {
    id: "acemen-grand-sovereign-weekender",
    slug: "grand-sovereign-weekender",
    name: "The Grand Sovereign Weekender",
    modelNumber: "ACE-BAG-01",
    collection: "Grand Sovereign",
    category: "Bags",
    subType: "Holdall",
    gender: "unisex",
    price: 1650,
    currency: "GBP",
    formattedPrice: "£1,650",
    tag: "Permanent Collection",
    isIconic: true,
    isBestSeller: true,
    images: {
      primary: "/images/luxury/prod-weekender-1.webp",
      secondary: "/images/luxury/prod-weekender-2.webp",
      gallery: [
        "/images/luxury/prod-weekender-1.webp",
        "/images/luxury/prod-weekender-2.webp",
        "/images/luxury/travel-campaign.webp",
        "/images/luxury/craftsmanship.webp",
      ],
    },
    colors: [
      { name: "Cognac Saddle", hex: "#8C5835" },
      { name: "Noir Black", hex: "#0F0F0F" },
    ],
    shortDescription:
      "A flagship luxury travel holdall hand saddle-stitched in London from certified full-grain French box calf hide with Swiss Riri hardware.",
    story:
      "Engineered for the discerning transatlantic traveler. Hand-sculpted over twenty-eight hours, the Grand Sovereign Weekender balances generous volume with architectural proportion.",
    materials: [
      "100% Certified French box calfskin (1.8 mm hide)",
      "Solid forged brass hardware with champagne satin electroplating",
      "Custom woven herringbone cotton-linen lining",
      "Reinforced 5-ply bonded nylon saddle stitching",
    ],
    dimensions: {
      height: "32 cm (12.6 in)",
      width: "52 cm (20.5 in)",
      depth: "26 cm (10.2 in)",
      strapDrop: "45 – 58 cm adjustable",
    },
    details: [
      "Cabin luggage compliant across major international airlines",
      "Two-way Swiss Riri padlockable zip closure with key fob",
      "Dual interior zipped accessory compartments and padded 16\" laptop sleeve",
      "Protective solid brass base studs",
      "Detachable ergonomic leather shoulder strap with sliding pad",
    ],
    careInstructions: [
      "Wipe clean with a soft dry cloth",
      "Apply ACEMEN organic leather balm twice annually",
      "Store in the provided heavy-weight unbleached cotton dust bag with tissue stuffing",
    ],
    inStock: true,
    upperLeather: "French Box Calfskin (1.8mm)",
    finishOptions: ["Cognac Saddle", "Noir Black", "Espresso Dark Brown"],
    customBranding: "Hot-stamped insole badge, custom brass lock monogram",
    customizationAvailable: true,
  },
  {
    id: "acemen-audley-leather-briefcase",
    slug: "audley-leather-briefcase",
    name: "The Audley Leather Briefcase",
    modelNumber: "ACE-BAG-02",
    collection: "Mayfair Sartorial",
    category: "Bags",
    subType: "Briefcase",
    gender: "men",
    price: 1350,
    currency: "GBP",
    formattedPrice: "£1,350",
    tag: "Executive Benchmark",
    isIconic: true,
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
      { name: "Espresso Dark Brown", hex: "#2B1E16" },
      { name: "Noir Black", hex: "#0F0F0F" },
    ],
    shortDescription:
      "A structured executive briefcase in vegetable-tanned Bavarian hide, crafted with bevelled hand-painted edges and bespoke brass lock closure.",
    story:
      "Tailored for the modern boardroom. The Audley features dual gusseted chambers, rigid perimeter reinforcement, and an integrated trolley sleeve for seamless travel pairing.",
    materials: [
      "Full-grain Bavarian vegetable-tanned cowhide",
      "Bespoke push-lock mechanism in milled solid brass",
      "Micro-suede lining with protective leather binding",
    ],
    dimensions: {
      height: "29 cm (11.4 in)",
      width: "40 cm (15.7 in)",
      depth: "10 cm (3.9 in)",
      strapDrop: "42 – 55 cm adjustable",
    },
    details: [
      "Accommodates up to 15-inch MacBook Pro in dedicated padded sleeve",
      "Interior organizer panel for writing instruments, passport, and business cards",
      "Concealed rear magnetic pocket for boarding pass and newspaper",
      "Hand-finished wax-burnished edges",
    ],
    careInstructions: [
      "Avoid prolonged exposure to direct sunlight and heavy moisture",
      "Condition annually with neutral wax-based leather cream",
    ],
    inStock: true,
    upperLeather: "Bavarian Veg-Tan Cowhide",
    finishOptions: ["Espresso Brown", "Noir Black", "Antique Saddle"],
    customBranding: "Private label debossing, bespoke brass lock clasp",
    customizationAvailable: true,
  },
  {
    id: "acemen-kensington-tote",
    slug: "kensington-structured-tote",
    name: "The Kensington Structured Tote",
    modelNumber: "ACE-BAG-03",
    collection: "Kensington Atelier",
    category: "Bags",
    subType: "Tote",
    gender: "women",
    price: 1250,
    currency: "GBP",
    formattedPrice: "£1,250",
    tag: "Maison Icon",
    isBestSeller: true,
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
      { name: "Cognac Saddle", hex: "#8C5835" },
      { name: "Ivory Cream", hex: "#EDE8DC" },
    ],
    shortDescription:
      "An architectural everyday leather tote with dual rolled handles, magnetic bridge closure, and removable zip pouch in soft calf leather.",
    story:
      "Defined by clean sculptural lines and generous capacity, the Kensington Tote bridges daytime elegance and evening poise with effortless restraint.",
    materials: [
      "Full-grain Tuscan calfskin with semi-matte smooth finish",
      "Solid brass foot studs and clip ring hardware",
      "Unlined interior exposing natural suede flesh",
    ],
    dimensions: {
      height: "33 cm (13.0 in)",
      width: "44 cm (17.3 in)",
      depth: "16 cm (6.3 in)",
      strapDrop: "24 cm shoulder drop",
    },
    details: [
      "Removable zipped internal clutch pouch included",
      "Reinforced base with 5 protective solid brass studs",
      "Magnetic bridge closure across top aperture",
    ],
    careInstructions: [
      "Clean with a soft slightly damp microfiber cloth",
      "Store upright in dust bag to maintain structured silhouette",
    ],
    inStock: true,
    upperLeather: "Tuscan Calfskin Hide",
    finishOptions: ["Cognac Saddle", "Ivory Cream", "Black Onyx"],
    customBranding: "Hot-stamped foil logo, custom color matching",
    customizationAvailable: true,
  },

  // ─────────────────────────────────────────────────────────────
  // ── WALLETS & POCKET LEATHER GOODS ──
  // ─────────────────────────────────────────────────────────────
  {
    id: "acemen-sovereign-bifold-wallet",
    slug: "sovereign-bifold-wallet",
    name: "The Sovereign Bifold Wallet",
    modelNumber: "ACE-WLT-01",
    collection: "Pocket Sartorial",
    category: "Wallets",
    subType: "Bifold",
    gender: "unisex",
    price: 295,
    currency: "GBP",
    formattedPrice: "£295",
    tag: "Essential",
    isBestSeller: true,
    images: {
      primary: "/images/luxury/prod-wallet-1.webp",
      secondary: "/images/luxury/prod-wallet-2.webp",
      gallery: [
        "/images/luxury/prod-wallet-1.webp",
        "/images/luxury/prod-wallet-2.webp",
      ],
    },
    colors: [
      { name: "Noir Black", hex: "#0F0F0F" },
      { name: "Cognac Saddle", hex: "#8C5835" },
    ],
    shortDescription:
      "An ultra-slim 8-card bifold wallet sculpted from French box calf with hand-creased card edges and RFID security lining.",
    story:
      "Engineered to maintain an impossibly slim silhouette even at full capacity. Every pocket edge is skived by hand to 0.4 mm and heat-creased with traditional London bone tools.",
    materials: [
      "Full-grain French box calfskin (exterior and interior pockets)",
      "RFID electromagnetic protective blocking membrane",
      "Silk-rayon banknote compartment lining",
    ],
    dimensions: {
      height: "9.5 cm (3.7 in)",
      width: "11.2 cm (4.4 in)",
      depth: "1.0 cm (0.4 in)",
    },
    details: [
      "8 credit card slots with precision curved access notches",
      "2 hidden slip pockets for additional cards or receipts",
      "Full-length currency compartment sized for GBP, EUR, and USD",
      "Gold foil debossed hallmark",
    ],
    careInstructions: ["Avoid overloading pockets to preserve leather tension"],
    inStock: true,
    upperLeather: "French Box Calf (0.4mm Skived)",
    finishOptions: ["Noir Black", "Cognac Saddle", "Burgundy Cherry"],
    customBranding: "Gold foil deboss, custom gift box packaging",
    customizationAvailable: true,
  },
  {
    id: "acemen-cavendish-slim-cardholder",
    slug: "cavendish-slim-cardholder",
    name: "The Cavendish Slim Cardholder",
    modelNumber: "ACE-WLT-02",
    collection: "Pocket Sartorial",
    category: "Wallets",
    subType: "Cardholder",
    gender: "unisex",
    price: 195,
    currency: "GBP",
    formattedPrice: "£195",
    tag: "Minimalist",
    images: {
      primary: "/images/luxury/prod-cardholder-1.webp",
      secondary: "/images/luxury/prod-cardholder-2.webp",
      gallery: [
        "/images/luxury/prod-cardholder-1.webp",
        "/images/luxury/prod-cardholder-2.webp",
      ],
    },
    colors: [
      { name: "Cognac Saddle", hex: "#8C5835" },
      { name: "Noir Black", hex: "#0F0F0F" },
    ],
    shortDescription:
      "A 5-slot minimalist cardholder with central cash pocket, bevelled edge paint, and hand-creased card dividers.",
    story:
      "The pinnacle of pocket minimalism. Designed for effortless pocket carriage without disrupting the clean line of tailored trousers.",
    materials: [
      "Full-grain Bavarian calfskin",
      "Wax-sealed and heat-ironed edge finishing",
    ],
    dimensions: {
      height: "7.5 cm (3.0 in)",
      width: "10.2 cm (4.0 in)",
      depth: "0.4 cm (0.15 in)",
    },
    details: [
      "4 card slots (2 per side)",
      "1 central slip compartment for folded banknotes",
      "Hand-burnished edge sealing",
    ],
    careInstructions: ["Store in velvet pouch when not in daily use"],
    inStock: true,
    upperLeather: "Bavarian Calfskin",
    finishOptions: ["Cognac Saddle", "Noir Black", "Forest Green"],
    customBranding: "Blind deboss stamping, custom packaging",
    customizationAvailable: true,
  },

  // ─────────────────────────────────────────────────────────────
  // ── SARTORIAL BELTS ──
  // ─────────────────────────────────────────────────────────────
  {
    id: "acemen-sovereign-reversible-belt",
    slug: "sovereign-reversible-saddle-belt",
    name: "The Sovereign Reversible Saddle Belt",
    modelNumber: "ACE-BLT-01",
    collection: "Mayfair Sartorial",
    category: "Belts",
    subType: "Reversible Belt",
    gender: "men",
    price: 340,
    currency: "GBP",
    formattedPrice: "£340",
    tag: "Dual Tone",
    sizes: ["85", "90", "95", "100", "105", "110"],
    images: {
      primary: "/images/luxury/prod-belt-1.webp",
      secondary: "/images/luxury/prod-belt-2.webp",
      gallery: [
        "/images/luxury/prod-belt-1.webp",
        "/images/luxury/prod-belt-2.webp",
      ],
    },
    colors: [
      { name: "Noir / Cognac Reversible", hex: "#0F0F0F" },
    ],
    shortDescription:
      "A 35 mm reversible bridle leather belt featuring solid brass twist buckle mechanism, transitioning from obsidian black to cognac saddle.",
    story:
      "Two essential belts in one exquisite piece. Crafted from full-thickness English bridle leather that resists stretching and distortion.",
    materials: [
      "Full-thickness English bridle leather (reversible dual face)",
      "Solid forged brass reversible swivel buckle in satin champagne gold",
    ],
    dimensions: {
      width: "35 mm (1.38 in) standard belt width",
    },
    details: [
      "Patented smooth swivel buckle mechanism",
      "Bevelled, hand-dyed, and wax-burnished edges",
      "5 teardrop sizing holes with 1-inch spacing",
    ],
    careInstructions: ["Condition bridle leather with equestrian saddle soap"],
    inStock: true,
    upperLeather: "English Bridle Leather (3.5mm)",
    finishOptions: ["Black / Cognac Dual Tone", "Espresso / Tan"],
    customBranding: "Laser-engraved buckle, custom sizing emboss",
    customizationAvailable: true,
  },
  {
    id: "acemen-heritage-brass-buckle-belt",
    slug: "heritage-brass-buckle-belt",
    name: "The Heritage Brass Buckle Belt",
    modelNumber: "ACE-BLT-02",
    collection: "Mayfair Sartorial",
    category: "Belts",
    subType: "Formal Belt",
    gender: "men",
    price: 310,
    currency: "GBP",
    formattedPrice: "£310",
    tag: "Timeless",
    sizes: ["85", "90", "95", "100", "105", "110"],
    images: {
      primary: "/images/luxury/prod-belt-2.webp",
      secondary: "/images/luxury/prod-belt-1.webp",
      gallery: [
        "/images/luxury/prod-belt-2.webp",
        "/images/luxury/prod-belt-1.webp",
      ],
    },
    colors: [
      { name: "Espresso Dark Brown", hex: "#2B1E16" },
      { name: "Obsidian Black", hex: "#0F0F0F" },
    ],
    shortDescription:
      "A classic 32 mm formal dress belt in vegetable-tanned full-grain calfskin with milled solid brass buckle.",
    story:
      "The definitive formal companion to tailored suiting and hand-lasted footwear. Subtle feather-edged profile with tone-on-tone perimeter stitching.",
    materials: [
      "Vegetable-tanned French calfskin leather",
      "Milled solid brass buckle with palladium or champagne plating",
    ],
    dimensions: {
      width: "32 mm (1.25 in) formal width",
    },
    details: [
      "Feathered edge profile with hand-painted perimeter",
      "Hand-sewn leather keeper loop",
    ],
    careInstructions: ["Buff with horsehair brush and neutral wax"],
    inStock: true,
    upperLeather: "French Calfskin",
    finishOptions: ["Espresso Brown", "Obsidian Black"],
    customBranding: "Buckle engraving, custom length options",
    customizationAvailable: true,
  },

  // ─────────────────────────────────────────────────────────────
  // ── TRUNKS & TRAVEL ATELIER ──
  // ─────────────────────────────────────────────────────────────
  {
    id: "acemen-sovereign-cabin-trolley",
    slug: "sovereign-cabin-trolley-case",
    name: "The Sovereign Cabin Trolley Case",
    modelNumber: "ACE-TRV-01",
    collection: "Grand Sovereign Travel",
    category: "Travel",
    subType: "Cabin Case",
    gender: "unisex",
    price: 2650,
    currency: "GBP",
    formattedPrice: "£2,650",
    tag: "Jet-Set Benchmark",
    isIconic: true,
    isNewArrival: true,
    images: {
      primary: "/images/luxury/travel-campaign.webp",
      secondary: "/images/luxury/prod-weekender-1.webp",
      gallery: [
        "/images/luxury/travel-campaign.webp",
        "/images/luxury/prod-weekender-1.webp",
        "/images/luxury/craftsmanship.webp",
      ],
    },
    colors: [
      { name: "Cognac Saddle & Brass", hex: "#8C5835" },
      { name: "Noir Black & Palladium", hex: "#0F0F0F" },
    ],
    shortDescription:
      "A luxury 4-wheel wheeled cabin suitcase in molded full-grain calfskin leather, reinforced aluminum frame, and integrated TSA combination locks.",
    story:
      "Crafted for effortless international transit. Combines traditional hand-riveted leather corner guards with aerospace-grade whisper-silent Japanese Hinomoto spinner wheels.",
    materials: [
      "Molded full-grain French box calfskin hide",
      "Anodized aluminum-magnesium perimeter frame",
      "Japanese Hinomoto 360° silent ball-bearing spinner wheels",
      "Quilted microfiber interior lining with compression divider straps",
    ],
    dimensions: {
      height: "55 cm (21.7 in)",
      width: "39 cm (15.4 in)",
      depth: "23 cm (9.0 in)",
    },
    details: [
      "IATA standard international cabin carry-on compliant",
      "Dual integrated TSA-certified combination clasp locks",
      "Telescopic 3-stage ergonomic aluminum handle with leather wrapped grip",
      "Reinforced hand-stitched leather corner bumpers",
    ],
    careInstructions: [
      "Wipe shell clean with soft dry cloth",
      "Condition leather corners annually with ACEMEN leather balm",
    ],
    inStock: true,
    upperLeather: "French Box Calfskin on Molded Frame",
    finishOptions: ["Cognac Saddle", "Noir Black"],
    customBranding: "Bespoke initials monogramming on leather luggage tag",
    customizationAvailable: true,
  },
];
