import { Request, Response, NextFunction } from "express";
import { z } from "zod";

const validateBody =
  (schema: z.AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction): void => {
    const validated = schema.parse(req.body);
    req.body = validated;

    return next();
  };

export { validateBody };
