const express = require('express')
const router = express.Router()
const mysql = require('mysql')

var conn = mysql.createConnection({
    host: 'rdsqa.cfg37zfw51jp.us-west-2.rds.amazonaws.com',
    user: 'root',
    pass: 'moisesqa',
    database: 'ruteo'
})

var ERROR_BD = -1
var ERROR_BUSQUEDA = -2
var SUCCESS = 1

router.get('/rutas', (req, res) => {
  if(req.session){
    conn.connect()
    conn.query('SELECT * FROM mv_traking_movil WHERE fecha_track >= "2017-07-05"', (err, rows, fields) => {
      if(!err){
        console.log(fields)
        res.status(200).send(rows)

      }else{
        res.status(500).send({
          tipo: ERROR_BD,
          mensaje: `Error en la base de datos ${err}`
        })
      }
    })
  }else{
    res.status(200).send({
      tipo: SUCCESS,
      mensaje: "Lo sentimos el usuario no se encuentra logueado"
    })
  }
})

module.exports = router
