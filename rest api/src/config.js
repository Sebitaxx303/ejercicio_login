import { config } from 'dotenv'
config();
export default{
    port: process.env.PORT || 3002,
    // secret: process.env.TOKEN_SECRET,
}
export const TOKEN_SECRET= 'secret123'