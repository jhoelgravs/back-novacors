import express from "express"
import cors from "cors"
import connectMongo from "./config/mongo"
import { router } from "./infrastructure/handler/routes"
import { envHTTP } from "./utils/environment"

const app = express()
app.use(cors())
app.use(express.json())
app.use(router)

// Conectar con la base de datos
connectMongo()
  .then(() => console.log("Starting database"))
  .catch(() => console.log("Connection failure"))

// Iniciar el servidor
app.listen(envHTTP.server_port, () => {
  console.log(`Initial server on port ${envHTTP.server_port}`)
})
