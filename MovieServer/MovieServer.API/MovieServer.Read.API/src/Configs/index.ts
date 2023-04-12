import { DbType } from "@Infrastructure/Read/Queries"

export const env = {
    PORT: process.env.PORT,
    AMQP_URL: process.env.AMQP_URL,
}

export const dbConfig: DbType = {
    database: process.env.DB_NAME || "",
    host: process.env.DB_HOST || "",
    username: process.env.DB_USERNAME || "",
    password: process.env.DB_PASSWORD || "",
    port: parseInt(process.env.DB_PORT || "27017"),
}