import express from 'express';
import cors from 'cors';
import indexRouter from './routes/index.Routes.js';
import employerRouter from './routes/employers.Routes.js';

//DECLARACION APP EXPRESS
const app = express()

//IMPORT CORS
app.use(cors())

//LECTURA CORRECTA PARA DATOS COMPLEJOS
app.use(express.json())

//CALL ROUTES
app.use('/create' , indexRouter)
app.use('/employers' , employerRouter)

//PUERTO 8001 FUNCIONANDO
app.listen(8001, () => {
    console.log('Escuchando en el puerto 8001');
})