const express = require('express')
const router = express.Router()
const mongo = require('mongodb').MongoClient
const assert = require('assert')

var monUrl = 'mongodb://localhost:27017/rutas'

var ERROR_BD = -1
var ERROR_BUSQUEDA = -2
var SUCCESS = 1

router.get('/rutas', (req, res) => {
  if(req.session){
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
    })
  }
})

module.exports = router
