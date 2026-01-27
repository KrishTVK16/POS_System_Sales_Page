
export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  image: string;
  tax: number;
  isRental?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export type Theme = 'light' | 'dark';
export type Direction = 'ltr' | 'rtl';

export interface Plan {
  name: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}
