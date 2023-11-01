import { DataSource } from 'typeorm';
import {typeOrmConfigs} from './typeorm.config';

const AppDataSource = new DataSource(typeOrmConfigs);

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    });

export default AppDataSource;