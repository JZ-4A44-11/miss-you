import { getDatabaseConfig } from '../persistence/configuration'

export const configuration = (): any => ({
  port: Number(process.env.PORT),
  database: getDatabaseConfig(),
})
