import { CosmosClient } from '@azure/cosmos';




const { COSMOSDB_ENDPOINT, COSMOSDB_KEY } = process.env;
const client = new CosmosClient({
//   endpoint: "abcd",  //COSMOSDB_ENDPOINT,
//     key: "pqr", //COSMOSDB_KEY,
  endpoint : "https://cosmosdbsie01.documents.azure.com:443/",
  key : "eMPHCK5xTrYeV5OeqLlgJZADi2xGtQ90bymYrhMEMo35N46dMjLhoYy2VDTEAzYCzrwJLD6KSE3CM8nDOl1t6w==",
});
const database = client.database('self_service_analytics');
// const container = database.container('pqr');
export default database;