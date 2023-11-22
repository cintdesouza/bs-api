import { Request, Response, NextFunction } from "express";
import Product from "../entities/product.entity";
import { AppError } from "../errors/error";
import { productRepo } from "../repositories/product.repository";

const verifyIdExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const productId: number = Number(req.params.id);
  const foundProduct: Product | null = await productRepo.findOneBy({
    id: productId,
  });

  if (!foundProduct) {
    throw new AppError("Product not found", 404);
  }

  res.locals = { ...res.locals, foundProduct };

  return next();
};

export { verifyIdExists };
