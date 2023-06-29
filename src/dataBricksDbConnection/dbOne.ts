// import configEnv from "../config/config.js";
import { DBSQLClient } from '@databricks/sql';

const env = process.env.NODE_ENV || "local";
// config = configEnv[ env ];

// const token          = config.token //'dapi9ce3e9192dce6f77b9e9860dd8c96ab2-3';
// const serverHostname = config.serverHostname //'adb-2896065817779202.2.azuredatabricks.net';
// const httpPath       = config.httpPath //'/sql/protocolv1/o/2896065817779202/0113-063228-croci270';
const token          =  "";//'dapi9ce3e9192dce6f77b9e9860dd8c96ab2-3';
const serverHostname =  "";//'adb-2896065817779202.2.azuredatabricks.net';
const httpPath          = "";//'/sql/1.0/warehouses/27070366155e1ba0';

const client = new DBSQLClient();



class dbConnection {
    constructor() {
     // ...
    }
  
    async connect() {
      return await client.connect({
              token: token,
              host:  serverHostname,
              path:  httpPath
            })
    }
  }
  
  const dbConnectionInstance = new dbConnection();
  
  Object.freeze(dbConnectionInstance);


export default dbConnection