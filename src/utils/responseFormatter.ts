// src/utils/responseFormatter.ts

 

import { Response } from 'express';

 

// Success response format
export function sendSuccessResponse(res: Response, data: any, message = 'Success', statusCode = 200) {
  res.status(statusCode).json({ success: true, message, data });
}

 

// Error response format
export function sendErrorResponse(res: Response, error: any, message = 'Error', statusCode = 500) {
  res.status(statusCode).json({ success: false, message, error });
}