import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Wireless Bluetooth Headphones',
    price: 199.99,
    originalPrice: 249.99,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/205926/pexels-photo-205926.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Premium wireless headphones with noise cancellation and superior sound quality. Perfect for music lovers and professionals.',
    category: 'Electronics',
    rating: 4.8,
    reviews: 1234,
    inStock: true,
    features: ['Active Noise Cancellation', '30-hour Battery Life', 'Quick Charge', 'Bluetooth 5.2'],
    specifications: {
      'Battery Life': '30 hours',
      'Charging Time': '2 hours',
      'Weight': '250g',
      'Connectivity': 'Bluetooth 5.2, 3.5mm jack'
    }
  },
  {
    id: '2',
    name: 'Smartphone Pro Max',
    price: 999.99,
    originalPrice: 1199.99,
    image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Latest flagship smartphone with advanced camera system and lightning-fast performance.',
    category: 'Electronics',
    rating: 4.9,
    reviews: 2567,
    inStock: true,
    features: ['Triple Camera System', '5G Ready', 'Face ID', 'Wireless Charging'],
    specifications: {
      'Display': '6.7" Super Retina XDR',
      'Storage': '256GB',
      'Camera': '48MP + 12MP + 12MP',
      'Battery': '4352 mAh'
    }
  },
  {
    id: '3',
    name: 'Designer Leather Jacket',
    price: 299.99,
    originalPrice: 399.99,
    image: 'https://images.pexels.com/photos/1124724/pexels-photo-1124724.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1124724/pexels-photo-1124724.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/914668/pexels-photo-914668.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Premium genuine leather jacket with modern styling. Perfect for casual and semi-formal occasions.',
    category: 'Fashion',
    rating: 4.7,
    reviews: 892,
    inStock: true,
    features: ['Genuine Leather', 'Multiple Pockets', 'YKK Zippers', 'Tailored Fit'],
    specifications: {
      'Material': '100% Genuine Leather',
      'Lining': 'Polyester',
      'Care': 'Professional Leather Cleaning',
      'Origin': 'Italy'
    }
  },
  {
    id: '4',
    name: 'Running Sneakers',
    price: 129.99,
    originalPrice: 159.99,
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Comfortable and stylish running sneakers with advanced cushioning technology.',
    category: 'Fashion',
    rating: 4.6,
    reviews: 1567,
    inStock: true,
    features: ['Air Cushioning', 'Breathable Mesh', 'Non-slip Sole', 'Lightweight'],
    specifications: {
      'Upper Material': 'Breathable Mesh',
      'Sole': 'Rubber with Air Technology',
      'Weight': '280g (per shoe)',
      'Sizes': 'US 6-13'
    }
  },
  {
    id: '5',
    name: 'Coffee Maker Deluxe',
    price: 179.99,
    originalPrice: 219.99,
    image: 'https://images.pexels.com/photos/4226858/pexels-photo-4226858.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/4226858/pexels-photo-4226858.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6347543/pexels-photo-6347543.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Professional-grade coffee maker with programmable settings and built-in grinder.',
    category: 'Home & Kitchen',
    rating: 4.5,
    reviews: 789,
    inStock: true,
    features: ['Built-in Grinder', 'Programmable Timer', 'Auto Shut-off', '12-Cup Capacity'],
    specifications: {
      'Capacity': '12 cups',
      'Grinder': 'Burr Grinder',
      'Timer': '24-hour programmable',
      'Power': '1200W'
    }
  },
  {
    id: '6',
    name: 'Gaming Laptop Pro',
    price: 1499.99,
    originalPrice: 1799.99,
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/459654/pexels-photo-459654.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'High-performance gaming laptop with advanced graphics and lightning-fast processing power.',
    category: 'Electronics',
    rating: 4.8,
    reviews: 1023,
    inStock: true,
    features: ['RTX 4070 Graphics', '32GB RAM', '1TB SSD', '165Hz Display'],
    specifications: {
      'Processor': 'Intel i7-13700H',
      'Graphics': 'NVIDIA RTX 4070',
      'RAM': '32GB DDR5',
      'Storage': '1TB NVMe SSD',
      'Display': '15.6" 165Hz'
    }
  }
];

export const categories = [
  'All',
  'Electronics',
  'Fashion',
  'Home & Kitchen',
  'Sports',
  'Books',
  'Beauty'
];