import { Router } from "express";
import mysql2 from "mysql2";

//VARIABLE ROUTER
const employerRouter = Router();

//DECLARACION DE VARIABLE DE BASE DE DATOS 
const db = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Deroaeb',
    database: 'empleados_crud'
})

//DESIGNACION DE ENDPOINTS//
employerRouter.get('/', (req, res) => {
    db.query('SELECT * FROM empleados',
    (err, result) => {
    if (err) {
        console.log(err);
    }else{
        res.send(result)
    }
    })
})

export default employerRouter;