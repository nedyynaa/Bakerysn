import { Response } from 'express';

export interface ApiResponse<T = any> {
    success: boolean;
    msg: string;
    error?: any;
    data?: T;
}

export function sendResponse<T = any>(
    res: Response,
    payload: ApiResponse<T>,
    statusCode: number = 200
): Response {
    return res.status(statusCode).json(payload);
}
