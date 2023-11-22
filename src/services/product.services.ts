import Product from '../entities/product.entity';
import { ProductCreate, ProductUpdate } from '../interfaces/product.interfaces';
import { productRepo } from '../repositories/product.repository';
import { productSchema } from '../schemas/product.schema';

const createProduct = async (validated: ProductCreate): Promise<Product> => {
  const product: Product = productRepo.create(validated);

  await productRepo.save(product);

  return product;
};

const readProducts = async (): Promise<Product[]> => {
  return await productRepo.find();
};

const updateProduct = async (foundProduct: Product, payload: ProductUpdate) => {
  const productUpdated = productRepo.create({ ...foundProduct, ...payload });

  await productRepo.save(productUpdated);

  const updatedProduct = await productRepo.findOne({
    where: { id: foundProduct.id },
  });

  const returnedProduct = productSchema.parse(updatedProduct);

  return returnedProduct;
};

const destroyProduct = async (product: Product): Promise<void> => {
  await productRepo.remove(product);
};

const findProduct = async (id: number): Promise<Product | null> => {
  const product = await productRepo.findOne({
    where: { id: id }
  });

  return product;
};

export { createProduct, updateProduct, destroyProduct, findProduct, readProducts };
