const express = require('express')
const router = express.Router()
const mongo = require('mongodb')
//Conexion con la base de datos
var monUrl = 'mongodb://localhost:27017/usuarios'

var ERROR_BD = -1
var ERROR_BUSQUEDA = -2
var SUCCESS = 1

router.get('/listado', (req, res) => {
  if(req.session){
    mongo.connect(monUrl, (err, db) => {
      if(err) throw err

      db.collection('usuarios').find({}).toArray((e, usuarios) => {
        if(e) throw e

        if(usuarios.length > 0){
          res.send(200).send(usuarios)
        }else {
          res.send(404).send({
            tipo: ERROR_BUSQUEDA,
            mensaje: 'No existen usuarios para la peticion'
          })
        }
      })
    })
  }
})

router.get('/listado/:id', (req, res) => {
  if(req.session){

  }
})
