import { Router } from "express";
import { getProductById, productDelete, productGet, productPatch, productPost } from "../controllers";
import { validateBody } from "../middlewares/validateBody.middlewares";
import { verifyIdExists } from "../middlewares/verifyProductExists.middlewares";
import { productCreate, productUpdateSchema } from "../schemas/product.schema";

const productRoute: Router = Router();
productRoute.post("", validateBody(productCreate), productPost);
productRoute.get("", productGet);
productRoute.patch("/:id", validateBody(productUpdateSchema), verifyIdExists, productPatch);
productRoute.delete("/:id", verifyIdExists, productDelete);
productRoute.get("/:id", verifyIdExists, getProductById);

export { productRoute };
