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

    db.collection('usuarios').find({usualogin: usualogin, usuapass: usuapass}, {usuapass: false})
    .toArray((error, usuarios) => {
      if(error){
        res.status(404).send({
            estatus: ERROR_BUSQUEDA,
            mensaje: 'No se encuentra el usuario'
        })
      }
      if(usuarios){
        let user = usuarios[0]
        req.session.usualogin = user.usualogin
        req.session.usuamail = user.usuamail

        console.log(req.session.usualogin)
        res.status(200).send(usuarios[0])
      }else {
        res.status(404).send({
            estatus: ERROR_BUSQUEDA,
            mensaje: 'No se encuentra el usuario'
        })
      }

    })

  })
})

router.get('/logout', (req, res) => {
  if(req.session){
    req.session.destroy(error => {
      if(error){
        console.log(error)
      }else{
        res.status(200).send({
          tipo: SUCCESS,
          mensaje: "Sesion destruida satisfacttoriamente"
        })
      }
    })
  }
})

router.get('/check', (req, res) => {
  if(req.session.usualogin){
    res.status(200).send({
      estatus: SUCCESS,
      mensaje: "El usuario ya se encuentra logueado"
    })
  }else {
    res.status(404).send({
      estatus: ERROR_BUSQUEDA,
      mensaje: "El usuario no se encuentra logueado"
    })
  }
})

module.exports = router
