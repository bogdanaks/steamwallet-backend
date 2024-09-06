interface DatabaseConfig {
  host: string
  port: number
  username: string
  password: string
  database: string
}

interface EnvironmentVariables {
  port: number
  database: DatabaseConfig
}
