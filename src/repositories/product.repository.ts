import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import Product from "../entities/product.entity";

const productRepo: Repository<Product> = AppDataSource.getRepository(Product);

export { productRepo };
