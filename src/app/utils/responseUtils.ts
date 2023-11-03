import { Response } from "express";

export function sendSuccessResponse(res: Response, data: any) {
  return res.status(200).json(data);
}

export function sendCreatedResponse(res: Response, data: any) {
  return res.status(201).json(data);
}

export function sendNoContentResponse(res: Response) {
  return res.status(204).send();
}

export function sendErrorResponse(
  res: Response,
  status: number,
  message: string
) {
  return res.status(status).json({ message });
}
