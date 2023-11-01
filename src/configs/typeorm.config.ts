
require('dotenv').config();
import { DataSourceOptions } from 'typeorm';

export const typeOrmConfigs: DataSourceOptions = {
    type: 'mysql',
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    synchronize: false,
    logging: false,
    entities: [
        "dist/**/entities/*.entity.{ts,js}"
    ],
    migrations: [
        "dist/migration/**/*.{js,ts}"
    ],
    subscribers: [
        "src/subscriber/**/*.{js,ts}"
    ],
    
    migrationsRun: false
}