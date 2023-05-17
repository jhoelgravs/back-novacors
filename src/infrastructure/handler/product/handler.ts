import { Request, Response } from "express"
import { create, getAll, getOne, remove, update } from "../../../domain/usecase/product"
import { failure, success } from "../../../utils/message.handler"

const getProducts = async (req: Request, res: Response) => {
  try {
    const data = await getAll()
    success(res, 200, data, "List of products")
  } catch (error: any) {
    failure(res, error.code, error.message, error)
  }
}

const getProduct = async (req: Request, res: Response) => {
  try {
    const data = await getOne(req.params.id)
    success(res, 200, data, "A single product")
  } catch (error: any) {
    failure(res, error.code, error.message, error)
  }
}

const createProduct = async (req: Request, res: Response) => {
  try {
    const data = await create(req.body)
    success(res, 201, data, "Product created")
  } catch (error: any) {
    failure(res, error.code, error.message, error)
  }
}

const updateProduct = async (req: Request, res: Response) => {
  try {
    const data = await update(req.params.id, req.body)
    success(res, 200, data, "Product updated")
  } catch (error: any) {
    failure(res, error.code, error.message, error)
  }
}

const removeProduct = async (req: Request, res: Response) => {
  try {
    const data = await remove(req.params.id)
    success(res, 200, data, "Product removed")
  } catch (error: any) {
    failure(res, error.code, error.message, error)
  }
}

export { getProducts, getProduct, createProduct, updateProduct, removeProduct }
