import { Router } from "express";
import mysql2 from "mysql2";

//VARIABLE ROUTER
const updateRouter = Router();

//DECLARACION DE VARIABLE DE BASE DE DATOS 
const db = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Deroaeb',
    database: 'empleados_crud'
})

//DESIGNACION DE ENDPOINTS//
updateRouter.put('/', (req, res) => {
    const id = req.body.id;
    const nombre = req.body.nombre;
    const edad = req.body.edad;
    const pais = req.body.pais;
    const cargo = req.body.cargo;
    const anios = req.body.anios;

    db.query('UPDATE empleados SET nombre=?, edad=?, pais=?, cargo=?, anios=? WHERE id=?', [nombre, edad, pais, cargo, anios, id],
    (err, result) => {
    if (err) {
        console.log(err);
    }else{
        res.send(result)
        console.log('Empleado actualizado con exito');
    }
    })
})

export default updateRouter;