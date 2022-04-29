import { DataSourceOptions } from 'typeorm'

export function getDatabaseConfig(): DataSourceOptions {
  return {
    port: 5432,
    type: 'postgres',
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    synchronize: process.env.NODE_ENV !== 'production',
    logging: false,
    entities: ['dist/**/*.entity.js'],
    migrations: ['src/modules/core/persistence/migrations/*.ts'],
  }
}

export default getDatabaseConfig()
