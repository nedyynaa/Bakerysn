import { Request, Response } from 'express';
import { getAllProducts, getBakeryInfo } from '../services/bakery.service';
import { sendResponse } from '../services/response.service';

export function getProducts(req: Request, res: Response): void {
  sendResponse(res, {
    success: true,
    msg: 'Products retrieved successfully',
    data: getAllProducts(),
  });
}

export function getInfo(req: Request, res: Response): void {
  sendResponse(res, {
    success: true,
    msg: 'Bakery info retrieved successfully',
    data: getBakeryInfo(),
  });
}

export function getStatus(req: Request, res: Response): void {
  sendResponse(res, {
    success: true,
    msg: 'Server Bakery Backend Aktif!',
  });
}
