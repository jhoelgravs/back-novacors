import { Router } from "express"
import { readdirSync } from "fs"

const PATH_ROUTER = `${__dirname}`
const router = Router()

// Cargar una ruta de forma dinamica
readdirSync(PATH_ROUTER).filter((name) => {
  if (!name.includes("routes")) {
    import(`./${name}/route`).then((module) => {
      router.use(`/${name}`, module.router)
    })
  }
})

export { router }
