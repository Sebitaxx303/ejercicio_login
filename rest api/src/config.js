import { config } from 'dotenv'
config();
export default{
    port: process.env.PORT || 3002
}
export const TOKEN_SECRET = "secret123"