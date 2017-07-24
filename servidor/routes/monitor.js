const express = require('express')
const router = express.Router()
<<<<<<< HEAD
const mysql = require('mysql')

var conn = mysql.createConnection({
    host: 'localhost',
    port: '13307',
    user: 'root',
    password: 'moisesqa',
    database: 'ruteo'
})
=======
const mongo = require('mongodb').MongoClient
const assert = require('assert')

var monUrl = 'mongodb://localhost:27017/rutas'

>>>>>>> f85662e1fd5c361f54b942a11cf901df02e941e8
var ERROR_BD = -1
var ERROR_BUSQUEDA = -2
var SUCCESS = 1

router.get('/rutas', (req, res) => {
  if(req.session){
<<<<<<< HEAD
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
=======
    mongo.connect(monUrl, (err, db) => {
      if(err) throw err

      db.collection('mv_tracking_movil')
        .find({}).toArray((e, rutas) => {
        if(e) throw e

        if(rutas.length > 0){
          console.log(rutas);
          res.status(200).send(rutas)
        }else {
          res.status(400).send({
            estatus: ERROR_BUSQUEDA,
            mensaje: 'No se encontraron resultados'
          })
        }
      })
    })
  }else{
    res.status(200).send({
      tipo: SUCCESS,
      mensaje: "Lo sentimos el usuario no se encuentra logueado"
>>>>>>> f85662e1fd5c361f54b942a11cf901df02e941e8
    })
  }
})

module.exports = router
