import { Request, Response, NextFunction } from "express";
import { z } from "zod";
import { AppError } from "./error";

const handleError = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
): Response => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({ message: error.message });
  }

  if (error instanceof z.ZodError) {
    return res.status(400).json({ message: error.flatten().fieldErrors });
  }

  return res.status(500).json({ message: "Internal Server Error." });
};

export { handleError };
