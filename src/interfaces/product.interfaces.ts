import { DeepPartial } from "typeorm";
import { z } from "zod";
import Product from "../entities/product.entity";
import { productCreate } from "../schemas/product.schema";

type ProductCreate = z.infer<typeof productCreate>;
type ProductUpdate = DeepPartial<Product>

export {
    ProductCreate,
    ProductUpdate,
};
