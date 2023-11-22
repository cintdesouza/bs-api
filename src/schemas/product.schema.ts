import { z } from "zod";
import { ModelType } from "../entities/product.entity";

const productSchema = z.object({
  id: z.number().positive(),
  operation: z.string(),
  movement: z.string(),
  situation: z.string(),
  model: z.nativeEnum(ModelType),
  series: z.number().nonnegative(),
  number: z.number().nonnegative(),
  supplier: z.string(),
  issueDate: z.string().or(z.date()),
  genDate: z.string().or(z.date()),
  employee: z.string(),
  freight: z.number().nonnegative(),
  totalValue: z.number().nonnegative(),
  product: z.string(),
  quantity: z.number().nonnegative(),
  unit: z.number().nonnegative(),
  unitaryValue: z.number().nonnegative(),
  total: z.number().nonnegative(),
  discount: z.number().nonnegative(),
  productFreight: z.number().nonnegative(),
  expenses: z.number().nonnegative(),
  insurance: z.number().nonnegative(),
  icms: z.number().nonnegative(),
  icmsST: z.number().nonnegative(),
  ipi: z.number().nonnegative(),
  pis: z.number().nonnegative(),
  cofins: z.number().nonnegative(),
  reweighing: z.string(),
  weight: z.number().nonnegative(),
  reweighingValue: z.number().nonnegative(),
  method: z.string(),
  finalTotal: z.number().nonnegative(),
  account: z.string(),
  condition: z.string(),
});

const productCreate = productSchema.omit({
  id: true,
});

const productUpdateSchema = productCreate.partial();

export { productSchema, productCreate, productUpdateSchema };
