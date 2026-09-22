import { Product, BakeryInfo } from '../types';
import productsData from '../data/products.json';
import bakeryInfoData from '../data/bakeryInfo.json';

const products: Product[] = productsData as Product[];
const bakeryInfo: BakeryInfo = bakeryInfoData as BakeryInfo;

export function getAllProducts(): Product[] {
  return products;
}

export function getBakeryInfo(): BakeryInfo {
  return bakeryInfo;
}
