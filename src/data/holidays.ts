export interface Room {
  name: string;
  pricePerNight: number;
  maxGuests: number;
  amenities: string[];
}

export interface HolidayPackage {
  id: string;
  name: string;
  location: string;
  stars: 3 | 4 | 5;
  rating: number;
  reviewCount: number;
  pricePerPerson: number;
  originalPrice?: number;
  duration: string;
  boardType: 'All Inclusive' | 'Half Board' | 'Bed & Breakfast' | 'Room Only';
  departureAirport: string;
  images: string[];
  badge?: 'SALE' | 'POPULAR' | 'LUXURY';
  description: string;
  rooms: Room[];
}

export const departureAirports = [
  'London Heathrow',
  'London Gatwick',
  'Manchester',
  'Birmingham',
  'Edinburgh',
  'Bristol',
];

export const holidays: HolidayPackage[] = [
  {
    id: 'tenerife-ritz',
    name: 'The Ritz-Carlton, Abama',
    location: 'Tenerife, Canary Islands',
    stars: 5,
    rating: 9.4,
    reviewCount: 2847,
    pricePerPerson: 899,
    originalPrice: 1249,
    duration: '7 nights',
    boardType: 'Half Board',
    departureAirport: 'London Heathrow',
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80',
    ],
    badge: 'SALE',
    description:
      'Perched on the sun-drenched cliffs of Tenerife, The Ritz-Carlton Abama offers an oasis of refined luxury with panoramic Atlantic views. Two Michelin-starred dining, an award-winning spa, and pristine private beaches create an unmatched retreat. Every suite is a sanctuary of understated elegance, designed for guests who expect nothing less than perfection.',
    rooms: [
      { name: 'Citadel Deluxe Room', pricePerNight: 220, maxGuests: 2, amenities: ['Sea View', 'King Bed', 'Minibar', 'Balcony'] },
      { name: 'Tagor Villa Suite', pricePerNight: 480, maxGuests: 4, amenities: ['Private Pool', 'Ocean Panorama', 'Butler Service', 'Living Area'] },
      { name: 'Royal Suite', pricePerNight: 850, maxGuests: 4, amenities: ['Private Terrace', 'Jacuzzi', 'Dining Room', 'Personal Chef'] },
    ],
  },
  {
    id: 'maldives-soneva',
    name: 'Soneva Fushi',
    location: 'Baa Atoll, Maldives',
    stars: 5,
    rating: 9.8,
    reviewCount: 1563,
    pricePerPerson: 2450,
    duration: '10 nights',
    boardType: 'All Inclusive',
    departureAirport: 'London Heathrow',
    images: [
      'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800&q=80',
      'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80',
      'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&q=80',
      'https://images.unsplash.com/photo-1540202404-a2f29016b523?w=800&q=80',
    ],
    badge: 'LUXURY',
    description:
      'Soneva Fushi is the original desert-island luxury — barefoot, unhurried, and utterly extraordinary. Set within a UNESCO Biosphere Reserve in the Baa Atoll, this iconic resort redefines sustainable opulence with overwater villas, an open-air cinema, an observatory, and some of the most pristine coral reefs on earth.',
    rooms: [
      { name: 'Sunrise Retreat', pricePerNight: 620, maxGuests: 2, amenities: ['Overwater Deck', 'Outdoor Shower', 'Reef Access', 'King Bed'] },
      { name: 'Water Reserve', pricePerNight: 1100, maxGuests: 4, amenities: ['Private Pool', 'Slide to Ocean', 'Butler', 'Open-Air Bathroom'] },
      { name: 'Private Island Villa', pricePerNight: 2800, maxGuests: 8, amenities: ['Private Island', 'Full Staff', 'Speedboat', 'Wine Cellar'] },
    ],
  },
  {
    id: 'santorini-canaves',
    name: 'Canaves Oia Epitome',
    location: 'Santorini, Greece',
    stars: 5,
    rating: 9.6,
    reviewCount: 982,
    pricePerPerson: 1350,
    originalPrice: 1680,
    duration: '5 nights',
    boardType: 'Bed & Breakfast',
    departureAirport: 'London Gatwick',
    images: [
      'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80',
      'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&q=80',
      'https://images.unsplash.com/photo-1580502304784-8985b7eb7260?w=800&q=80',
      'https://images.unsplash.com/photo-1504512485720-7d83a16ee930?w=800&q=80',
    ],
    badge: 'SALE',
    description:
      'Suspended above the volcanic caldera of Oia, Canaves Epitome is a masterclass in Cycladic minimalism meets contemporary luxury. Infinity pools seem to dissolve into the Aegean, while interiors of polished marble and linen evoke a timeless serenity. Sunset from your private terrace is not a view — it is a daily spectacle of nature.',
    rooms: [
      { name: 'Epitome Superior Suite', pricePerNight: 380, maxGuests: 2, amenities: ['Caldera View', 'Infinity Pool', 'Rain Shower', 'King Bed'] },
      { name: 'Grand Epitome Suite', pricePerNight: 590, maxGuests: 3, amenities: ['Heated Pool', 'Sunset View', 'Living Room', 'Champagne Welcome'] },
      { name: 'Honeymoon Retreat', pricePerNight: 720, maxGuests: 2, amenities: ['Couples Spa', 'Private Dining', 'Panoramic Terrace', 'Jacuzzi'] },
    ],
  },
  {
    id: 'dubai-atlantis',
    name: 'Atlantis The Royal',
    location: 'Dubai, UAE',
    stars: 5,
    rating: 9.2,
    reviewCount: 4210,
    pricePerPerson: 1100,
    duration: '7 nights',
    boardType: 'Half Board',
    departureAirport: 'Manchester',
    images: [
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
      'https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=800&q=80',
      'https://images.unsplash.com/photo-1597659840241-37e2b9c2f55f?w=800&q=80',
      'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&q=80',
    ],
    badge: 'POPULAR',
    description:
      'Rising from the Palm Jumeirah like a mirage of the future, Atlantis The Royal is Dubai at its most audacious. Designed by world-renowned architects, it features sky-pool penthouses, 17 concept restaurants helmed by Michelin-starred chefs, and an ultra-premium spa sanctuary. This is not just a hotel — it is a destination within a destination.',
    rooms: [
      { name: 'Sea View Terrace Room', pricePerNight: 310, maxGuests: 2, amenities: ['Palm View', 'Smart Suite', 'Minibar', 'Rain Shower'] },
      { name: 'Swim-Up King Room', pricePerNight: 560, maxGuests: 3, amenities: ['Private Pool Access', 'Balcony', 'Club Lounge', 'King Bed'] },
      { name: 'Skybridge Penthouse', pricePerNight: 1400, maxGuests: 6, amenities: ['Infinity Pool', 'City Panorama', 'Private Butler', 'Dining Room'] },
    ],
  },
  {
    id: 'bali-mulia',
    name: 'The Mulia Bali',
    location: 'Nusa Dua, Bali',
    stars: 5,
    rating: 9.3,
    reviewCount: 1895,
    pricePerPerson: 980,
    originalPrice: 1320,
    duration: '10 nights',
    boardType: 'All Inclusive',
    departureAirport: 'London Heathrow',
    images: [
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80',
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80',
      'https://images.unsplash.com/photo-1559628233-100c798642d4?w=800&q=80',
    ],
    badge: 'SALE',
    description:
      "Stretching along the pristine white sands of Nusa Dua, The Mulia is Bali's most celebrated beachfront resort. A grand lobby adorned with museum-quality art, nine diverse restaurants, and a world-class Mulia Spa create an experience of extraordinary depth. The villas — each with a private infinity pool — offer the ultimate island sanctuary.",
    rooms: [
      { name: 'The Earl Suite', pricePerNight: 240, maxGuests: 2, amenities: ['Ocean View', 'Living Room', 'Soaking Tub', 'Terrace'] },
      { name: 'The Mulia Villa', pricePerNight: 520, maxGuests: 4, amenities: ['Private Pool', 'Garden', 'Butler Service', 'Outdoor Shower'] },
      { name: 'The Baron Suite', pricePerNight: 780, maxGuests: 4, amenities: ['Panoramic Ocean', 'Private Pool', 'Spa Room', 'Sunset Terrace'] },
    ],
  },
  {
    id: 'amalfi-belmond',
    name: 'Belmond Hotel Caruso',
    location: 'Ravello, Amalfi Coast',
    stars: 5,
    rating: 9.5,
    reviewCount: 1124,
    pricePerPerson: 1580,
    duration: '5 nights',
    boardType: 'Bed & Breakfast',
    departureAirport: 'London Gatwick',
    images: [
      'https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=800&q=80',
      'https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?w=800&q=80',
      'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800&q=80',
      'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=800&q=80',
    ],
    badge: 'LUXURY',
    description:
      'An 11th-century palazzo perched 1,000 feet above the Amalfi Coast, Belmond Hotel Caruso is a love letter to Italian grandeur. Its fabled infinity pool appears to float above the Mediterranean, while frescoed ceilings, terraced gardens, and Campanian cuisine create an atmosphere of effortless, centuries-old elegance.',
    rooms: [
      { name: 'Junior Suite', pricePerNight: 420, maxGuests: 2, amenities: ['Sea View', 'Historic Decor', 'Marble Bath', 'Terrace'] },
      { name: 'Belmond Suite', pricePerNight: 710, maxGuests: 3, amenities: ['Panoramic Terrace', 'Living Room', 'Antique Furnishings', 'Minibar'] },
      { name: 'Caruso Suite', pricePerNight: 1200, maxGuests: 4, amenities: ['Private Garden', 'Plunge Pool', 'Grand Salon', 'Butler'] },
    ],
  },
  {
    id: 'marrakech-mamounia',
    name: 'La Mamounia',
    location: 'Marrakech, Morocco',
    stars: 5,
    rating: 9.1,
    reviewCount: 3456,
    pricePerPerson: 720,
    originalPrice: 950,
    duration: '7 nights',
    boardType: 'Half Board',
    departureAirport: 'Birmingham',
    images: [
      'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=800&q=80',
      'https://images.unsplash.com/photo-1548018560-c7196e4f5bbc?w=800&q=80',
      'https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?w=800&q=80',
      'https://images.unsplash.com/photo-1517821099606-cef63a9bcda6?w=800&q=80',
    ],
    badge: 'POPULAR',
    description:
      `La Mamounia has been Marrakech's legendary palace hotel since 1929 — a jewel of Art Deco splendour set within eight acres of century-old gardens. Winston Churchill called it "the most beautiful place in the world." A three-year restoration has elevated every detail to perfection: Moorish architecture, world-class dining, and a spa of extraordinary grandeur.`,
    rooms: [
      { name: 'Superior Room', pricePerNight: 190, maxGuests: 2, amenities: ['Garden View', 'Moroccan Decor', 'King Bed', 'Minibar'] },
      { name: 'Prestige Suite', pricePerNight: 440, maxGuests: 3, amenities: ['Atlas Mountain View', 'Sitting Area', 'Marble Hammam', 'Balcony'] },
      { name: 'Churchill Suite', pricePerNight: 920, maxGuests: 4, amenities: ['Historic Wing', 'Private Terrace', 'Grand Piano', 'Butler Service'] },
    ],
  },
  {
    id: 'barbados-sandy',
    name: 'Sandy Lane',
    location: 'St. James, Barbados',
    stars: 5,
    rating: 9.7,
    reviewCount: 876,
    pricePerPerson: 1980,
    duration: '10 nights',
    boardType: 'All Inclusive',
    departureAirport: 'London Gatwick',
    images: [
      'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=800&q=80',
      'https://images.unsplash.com/photo-1596436889106-be35e843f974?w=800&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    ],
    badge: 'LUXURY',
    description:
      "Set along the platinum coast of Barbados, Sandy Lane is the Caribbean's most exclusive address. Three championship golf courses, a 47,000 sq ft spa, and a crescent of powdery white sand define a resort where discretion and excellence are the standard. A favourite of royalty, heads of state, and those for whom only the finest will suffice.",
    rooms: [
      { name: 'Orchid Room', pricePerNight: 390, maxGuests: 2, amenities: ['Ocean View', 'Marble Bath', 'Private Balcony', 'King Bed'] },
      { name: 'Luxury Ocean Suite', pricePerNight: 680, maxGuests: 4, amenities: ['Beachfront', 'Living Room', 'Dining Area', 'Butler Service'] },
      { name: 'Penthouse Suite', pricePerNight: 1500, maxGuests: 6, amenities: ['Rooftop Terrace', 'Plunge Pool', 'Private Chef', 'Panoramic Views'] },
    ],
  },
];
