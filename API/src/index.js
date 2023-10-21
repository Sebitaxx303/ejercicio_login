import { getConnection } from "./db/db.js"
import app from "./app.js"
getConnection();
app.listen(app.get('port'))
console.log('servidor en el puerto', app.get('port'))