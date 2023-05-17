import { Router } from "express"
import { createProduct, getProduct, getProducts, removeProduct, updateProduct } from "./handler"

const router = Router()

router.get("/", getProducts)
router.get("/:id", getProduct)
router.post("/", createProduct)
router.put("/:id", updateProduct)
router.delete("/:id", removeProduct)

export { router }
