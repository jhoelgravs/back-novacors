import "dotenv/config"

const envHTTP = {
  is_http: process.env.IS_HTTP,
  server_port: process.env.SERVER_PORT,
  allowed_origins: process.env.ALLOWED_ORIGINS,
  allowed_methods: process.env.ALLOWED_METHODS,
  jwt_secret_key: process.env.JWT_SECRET_KEY
}

const envDB = {
  db_username: process.env.DB_USERNAME,
  db_password: process.env.DB_PASSWORD,
  db_host: process.env.DB_HOST,
  db_port: process.env.DB_PORT,
  db_name: process.env.DB_NAME
}

export {
  envHTTP,
  envDB
}
