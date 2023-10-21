import sql from 'mssql'

const dbconfig = {
    user: 'sebas',
    password: '1234',
    server:  'localhost',
    database: 'PruebaLog',
    options: {    
        encrypt: true,
        trustServerCertificate: true,
    },
};
export async function getConnection(){
    try {
        const pool = await sql.connect(dbconfig)
        console.log('Base de datos conectada')
        return pool;
    } catch (error) {
        console.error(error)
    }
};
export { sql }
