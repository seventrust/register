const express = require('express')
const router = express.Router()
const mysql = require('mysql')

var conn = mysql.createConnection({
    host: 'localhost',
    port: '13307',
    user: 'root',
    password: 'moisesqa',
    database: 'ruteo'
})

var ERROR_BD = -1
var ERROR_BUSQUEDA = -2
var SUCCESS = 1

router.get('/rutas', (req, res) => {
  if(req.session){

    var SQL = `SELECT id_movil, latitud_track, longitud_track, imei
    FROM mv_tracking_movil WHERE fecha_track >= "2017-07-05"`;

    conn.query(SQL,
    (err, rows, fields) => {
      if(!err){
        res.status(200).send(rows)

      }else{
        res.status(500).send({
          tipo: ERROR_BD,
          mensaje: `Error en la base de datos ${err}`
        })

      }
    })
  }
})

module.exports = router
