import { Response } from "express"

const success = (res: Response, code: number, data: any, message: string) => {
  res.status(code).send({
    data,
    success: { message }
  })
}

const failure = (res: Response, code: number, message: string, error?: any) => {
  console.log(error)
  res.status(code).send({
    data: {},
    failure: { message }
  })
}

export { success, failure }
