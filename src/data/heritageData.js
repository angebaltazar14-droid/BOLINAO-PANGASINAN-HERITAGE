export const heritageSites = [
  {
    id: 1,
    name: 'Bolinao Falls',
    location: 'Bolinao, Pangasinan',
    category: 'beach',
    image: '/bolinaofalls.png',
    rating: 4.8,
    reviews: 234,
    description: 'A stunning national park featuring majestic waterfalls surrounded by lush greenery. Perfect for adventure seekers and nature lovers.',
    coordinates: { lat: 16.2000, lng: 120.0333 },
    featured: true
  },
  {
    id: 2,
    name: 'Bolinao Lighthouse',
    location: 'Bolinao, Pangasinan',
    category: 'historical',
    image: '/lighthouse.png',
    rating: 4.6,
    reviews: 189,
    description: 'A historic Spanish-era lighthouse offering panoramic views of the West Philippine Sea. Built in 1905, it\'s one of the oldest lighthouses in the Philippines.',
    coordinates: { lat: 16.3889, lng: 119.9000 },
    featured: true
  },
  {
    id: 3,
    name: 'Balungao Hot Spring',
    location: 'Balungao, Pangasinan',
    category: 'hotspring',
    image: '/bolinao.jpg',
    rating: 4.4,
    reviews: 156,
    description: 'Natural hot springs nestled at the foot of Mount Balungao. Known for its therapeutic mineral waters and beautiful mountain views.',
    coordinates: { lat: 15.8833, lng: 120.6833 },
    featured: false
  },
  {
    id: 4,
    name: 'Patar Beach',
    location: 'Bolinao, Pangasinan',
    category: 'beach',
    image: '/patar.png',
    rating: 4.7,
    reviews: 312,
    description: 'A pristine white sand beach with crystal clear waters and stunning rock formations. One of the most beautiful beaches in the Philippines.',
    coordinates: { lat: 16.3889, lng: 119.9000 },
    featured: true
  },
  {
    id: 5,
    name: 'Enchanted Cave',
    location: 'Bolinao, Pangasinan',
    category: 'historical',
    image: '/enchantedcave.png',
    rating: 4.3,
    reviews: 98,
    description: 'A mystical cave system with crystal-clear underground pools and spectacular rock formations. A must-visit for adventure seekers.',
    coordinates: { lat: 16.3889, lng: 119.9000 },
    featured: false
  },
  {
    id: 6,
    name: 'Lingayen Gulf',
    location: 'Lingayen, Pangasinan',
    category: 'beach',
    image: '/bolinao.jpg',
    rating: 4.2,
    reviews: 145,
    description: 'A historic gulf known for its role in World War II. Now a beautiful coastal area with stunning sunsets and rich marine life.',
    coordinates: { lat: 16.0667, lng: 120.0667 },
    featured: false
  }
];

export const categories = [
  { value: '', label: 'All Categories' },
  { value: 'beach', label: 'Beach' },
  { value: 'historical', label: 'Historical' },
  { value: 'hotspring', label: 'Hot Spring' },
  { value: 'mountain', label: 'Mountain' }
];

export const locations = [
  { value: '', label: 'All Locations' },
  { value: 'Alaminos City', label: 'Alaminos City' },
  { value: 'Bolinao', label: 'Bolinao' },
  { value: 'Balungao', label: 'Balungao' },
  { value: 'Lingayen', label: 'Lingayen' }
];