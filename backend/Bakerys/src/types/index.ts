export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

export interface BakeryInfo {
  name: string;
  tagline: string;
  phone: string;
  instagram: string;
  address: string;
  operatingHours: {
    weekdays: string;
    sunday: string;
  };
}
