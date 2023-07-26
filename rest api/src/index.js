import app from "./app.js"
import { getConnection } from "./db/db.js"

getConnection();
app.listen(app.get('port'))
console.log('servidor en el puerto', app.get('port'))