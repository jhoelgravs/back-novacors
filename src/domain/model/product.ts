import { Schema, model } from "mongoose"

interface Product {
  title: string
  description: string
  price: number
  features: {
    images: string[]
    video: string
  }
}

const ProductSchema = new Schema<Product>(
  {
    title: {
      type: String,
      unique: true,
      required: true
    },
    description: {
      type: String
    },
    price: {
      type: Number,
      required: true
    },
    features: {
      type: {
        images: {
          type: [String]
        },
        video: {
          type: String
        }
      },
      required: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

const ProductModel = model("products", ProductSchema)

export {
  Product,
  ProductModel
}
