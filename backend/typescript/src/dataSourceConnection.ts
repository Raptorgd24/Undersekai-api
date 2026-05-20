import "dotenv/config"
import AppDataSource from "./dataSource"

export default AppDataSource.initialize()
console.log("entities:", AppDataSource.options.entities);
console.log("metadatas:", AppDataSource.entityMetadatas.map(e => e.name));