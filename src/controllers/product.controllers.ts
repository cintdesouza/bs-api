import { Response, Request } from "express";
import Product from "../entities/product.entity";
import { ProductCreate } from "../interfaces/product.interfaces";
import { createProduct, destroyProduct, findProduct, readProducts, updateProduct } from "../services";

const productPost = async (req: Request, res: Response): Promise<Response> => {
  const validated: ProductCreate = req.body;
  const product: Product = await createProduct(validated);
  return res.status(201).json(product);
};

const productGet = async (req: Request, res: Response): Promise<Response> => {
  const products: Product[] = await readProducts();
  return res.status(200).json(products);
};

const productPatch = async (req: Request, res: Response): Promise<Response> => {
  const product: Product | null = await updateProduct(
    res.locals.foundProduct,
    req.body
  );
  return res.status(200).json(product);
};

const productDelete = async (
  req: Request,
  res: Response
): Promise<Response> => {
  await destroyProduct(res.locals.foundProduct);
  return res.status(204).json();
};

const getProductById = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id: number = Number(res.locals.foundProduct.id);
  const product = await findProduct(id);

  return res.status(200).json(product);
};

export { productPost, productGet, productPatch, productDelete, getProductById };
