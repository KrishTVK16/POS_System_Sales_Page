
import { Product, Plan } from './types';

export const SAMPLE_PRODUCTS: Product[] = [
  { id: '1', name: 'Artisanal Coffee Beans', category: 'Retail', price: 18.50, stock: 45, image: 'https://picsum.photos/seed/coffee/200/200', tax: 0.08 },
  { id: '2', name: 'Organic Green Tea', category: 'Retail', price: 12.00, stock: 12, image: 'https://picsum.photos/seed/tea/200/200', tax: 0.08 },
  { id: '3', name: 'Camera Tripod Rental', category: 'Events', price: 25.00, stock: 5, image: 'https://picsum.photos/seed/tripod/200/200', tax: 0.10, isRental: true },
  { id: '4', name: 'Wireless Headphones', category: 'Electronics', price: 149.99, stock: 0, image: 'https://picsum.photos/seed/audio/200/200', tax: 0.15 },
  { id: '5', name: 'Smart Watch Pro', category: 'Electronics', price: 299.00, stock: 20, image: 'https://picsum.photos/seed/watch/200/200', tax: 0.15 },
  { id: '6', name: 'Luxury Event Chair', category: 'Events', price: 45.00, stock: 100, image: 'https://picsum.photos/seed/chair/200/200', tax: 0.10, isRental: true },
];

export const PLANS: Plan[] = [
  {
    name: 'Starter',
    price: '$29',
    features: ['1 Terminal', 'Basic Inventory', 'Standard Reports', 'Email Support'],
  },
  {
    name: 'Business Pro',
    price: '$79',
    features: ['3 Terminals', 'Advanced Inventory', 'Sales Analytics', 'Priority Support', 'API Access'],
    isPopular: true,
  },
  {
    name: 'Enterprise',
    price: '$199',
    features: ['Unlimited Terminals', 'Multi-Store Sync', 'Custom Integrations', '24/7 Dedicated Manager'],
  },
];
