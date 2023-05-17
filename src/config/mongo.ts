import { connect } from "mongoose"
import { envDB } from "../utils/environment"

async function connectMongo(): Promise<void> {
  await connect(`mongodb://${envDB.db_host}:${envDB.db_port}/${envDB.db_name}`)
}

export default connectMongo
