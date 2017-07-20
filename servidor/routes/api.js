const express = require('express')
const router = express.Router()
const mongo = require('mongodb').MongoClient
const assert = require('assert')

var monUrl = 'mongodb://localhost:27017/usuarios'

var ERROR_BD = -1
var ERROR_BUSQUEDA = -2
var SUCCESS = 1

router.post('/authenticate', (req, res) => {

    let usualogin = req.body.usualogin
    let usuapass = req.body.usuapass

  mongo.connect(monUrl, (err, db) => {
    if(err){
      console.error(`Ha ocurrido un error ${err}`)
      res.status(404).send({
          estatus: ERROR_BD,
          mensaje: 'Un error en la base de datos ' +err
        })
    }

    db.collection('usuarios').find({usualogin: usualogin, usuapass: usuapass}, {usuapass: false}).toArray((error, usuarios) => {
      if(error){
        res.status(404).send({
            estatus: ERROR_BUSQUEDA,
            mensaje: 'No se encuentra el usuario'
        })
      }

      req.session.usualogin = usuarios.usualogin
      req.session.usuamail = usuarios.usuamail

      res.status(200).send(usuarios[0])
    })

  })
})

router.get('/logout', (req, res) => {
  console.log("Me llamaron para matar a medio MUNDO")
})

router.get('/check', (req, res) => {
  console.log("Me llamaron para chequear a medio MUNDO")
})

module.exports = router
