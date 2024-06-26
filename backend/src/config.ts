import dotenv from "dotenv";
dotenv.config();
export const environment = process.env.NODE_ENV;
export const port = process.env.PORT;
export const timezone = process.env.TIMEZONE;
export const corsURL= process.env.CORS_URL
export const db = {
    name: process.env.DB_NAME || '',
    host: process.env.DB_HOST || '',
    port: process.env.DB_PORT || '',
    user: process.env.DB_USER || '',
    password: process.env.DB_PASSWORD || '',
    minPoolSize: parseInt(process.env.DB_MIN_POOL_SIZE || '2'),
    maxPoolSize: parseInt(process.env.DB_MAX_POOL_SIZE || '5')
}