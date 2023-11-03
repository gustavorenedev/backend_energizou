import { Response } from "express";

// Função para enviar uma resposta de sucesso (código 200) com os dados fornecidos
export function sendSuccessResponse(res: Response, data: any) {
  return res.status(200).json(data);
}

// Função para enviar uma resposta de criação bem-sucedida (código 201) com os dados fornecidos
export function sendCreatedResponse(res: Response, data: any) {
  return res.status(201).json(data);
}

// Função para enviar uma resposta sem conteúdo (código 204)
export function sendNoContentResponse(res: Response) {
  return res.status(204).send();
}

// Função para enviar uma resposta de erro com o status e a mensagem fornecidos
export function sendErrorResponse(
  res: Response,
  status: number,
  message: string
) {
  return res.status(status).json({ message });
}
