import { connect } from "mongoose"
import { envDB } from "../utils/environment"

async function connectMongo(): Promise<void> {
  await connect(`mongodb+srv://${envDB.db_username}:${envDB.db_password}@${envDB.db_host}/${envDB.db_name}?retryWrites=true&w=majority`)
}

export default connectMongo
