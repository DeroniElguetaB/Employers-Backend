import { Router } from "express";
import mysql2 from "mysql2";

//VARIABLE ROUTER
const indexRouter = Router();

//DECLARACION DE VARIABLE DE BASE DE DATOS 
const db = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Deroaeb',
    database: 'empleados_crud'
})

//DESIGNACION DE ENDPOINTS//
indexRouter.post('/', (req, res) => {
    const nombre = req.body.nombre;
    const edad = req.body.edad;
    const pais = req.body.pais;
    const cargo = req.body.cargo;
    const anios = req.body.anios;

    db.query('INSERT INTO empleados(nombre, edad, pais, cargo, anios) VALUES(?,?,?,?,?)', [nombre, edad, pais, cargo, anios],
    (err, result) => {
    if (err) {
        console.log(err);
    }else{
        res.send('Empleado registrado con exito')
        console.log('Empleado registrado con exito');
    }
    })
})

export default indexRouter;