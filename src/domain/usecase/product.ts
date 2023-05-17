import { BadRequest, ServerError } from "../../utils/message.usecase"
import { Product, ProductModel } from "../model/product"

const getAll = async () => {
  try {
    const data = await ProductModel.find({})
    return data
  } catch (error: any) {
    throw ServerError(error)
  }
}

const getOne = async (id: string) => {
  try {
    const data = await ProductModel.findOne({ _id: id })
    if (!data) throw BadRequest("El producto no existe")
    return data
  } catch (error: any) {
    if (error.name === "CastError") throw BadRequest("El ID es envalido")
    if (error.name === "BadRequest") throw error
    throw ServerError(error)
  }
}

const create = async (product: Product) => {
  try {
    await new ProductModel(product).validate()

    product.title = product.title.toLowerCase()
    product.description = product.description.toLowerCase()

    const data = await ProductModel.create(product)
    return data
  } catch (error: any) {
    if (error.name === "MongoServerError" && error.code === 11000) throw BadRequest("El producto ya existe")
    throw ServerError(error)
  }
}

const update = async (id: string, product: Product) => {
  try {
    product.title = product.title.toLowerCase()
    product.description = product.description.toLowerCase()

    const data = await ProductModel.findOneAndUpdate({ _id: id }, product, { new: true })
    return data
  } catch (error: any) {
    if (error.name === "MongoServerError" && error.code === 11000) throw BadRequest("El producto ya existe")
    if (error.name === "CastError") throw BadRequest("El ID es envalido")
    throw ServerError(error)
  }
}

const remove = async (id: string) => {
  try {
    const data = await ProductModel.findOneAndRemove({ _id: id })
    if (!data) throw BadRequest("El producto no existe")
    return data
  } catch (error: any) {
    if (error.name === "CastError") throw BadRequest("el ID es envalido")
    if (error.name === "BadRequest") throw error
    throw ServerError(error)
  }
}

export { getAll, getOne, create, update, remove }
