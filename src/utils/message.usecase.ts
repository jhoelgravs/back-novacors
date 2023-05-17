interface ErrorExt extends Error {
  code?: number
}

const ServerError = (message: string) => {
  const error: ErrorExt = new Error()
  error.code = 500
  error.name = "ServerError"
  error.message = message

  return error
}

const BadRequest = (message: string) => {
  const error: ErrorExt = new Error()
  error.code = 400
  error.name = "BadRequest"
  error.message = message

  return error
}

export { BadRequest, ServerError }
