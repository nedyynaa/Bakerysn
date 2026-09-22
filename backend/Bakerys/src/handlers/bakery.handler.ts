import { Request, Response } from 'express';
import { getAllProducts, getBakeryInfo } from '../services/bakery.service';

export function getProducts(req: Request, res: Response): void {
  res.json({
    success: true,
    data: getAllProducts()
  });
}

export function getInfo(req: Request, res: Response): void {
  res.json({
    success: true,
    data: getBakeryInfo()
  });
}

export function getStatus(req: Request, res: Response): void {
  res.send('Server Bakery Backend Aktif!');
}
