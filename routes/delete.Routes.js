import { Router } from "express";
import mysql2 from "mysql2";

//VARIABLE ROUTER
const deleteRouter = Router();

//DECLARACION DE VARIABLE DE BASE DE DATOS 
const db = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Deroaeb',
    database: 'empleados_crud'
})

//DESIGNACION DE ENDPOINTS//
deleteRouter.delete('/:id', (req, res) => {
    const id = req.params.id;

    db.query('DELETE FROM empleados WHERE id=?', id,
    (err, result) => {
    if (err) {
        console.log(err);
    }else{
        res.send(result)
        console.log('Empleado eliminado con exito');
    }
    })
})

export default deleteRouter;