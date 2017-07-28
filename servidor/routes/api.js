const express = require('express')
const router = express.Router()
const mysql = require('mysql')

var conn = mysql.createConnection({
  host: 'localhost',
  port: '13307',
  user: 'root',
  password: 'moisesqa',
  database: 'web_ctacte_tbc_amz'
})


var ERROR_BD = -1
var ERROR_BUSQUEDA = -2
var SUCCESS = 1

router.post('/authenticate', (req, res) => {

  let usuario = req.body.usualogin
  let password = req.body.usuapass
  console.log(`Los datos ${usuario}, ${password}`)

  var SQL = `SELECT usualogin, usuanombre, usuapaterno, usuaemail
  FROM ma_usuario_web WHERE usualogin = '${usuario}' AND usuapass = '${password}'`

  conn.query(SQL, (error, rows, fields) => {
    if (error) {
      let mensaje = {
        tipo: ERROR_BD,
        mensaje: `Error de conexion a la base de datos -> ${error}`
      }
      res.status(500).send(mensaje)
    } else {
      if(rows.length > 0) {
        req.session.usualogin = rows[0].usualogin
        req.session.usuamail = rows[0].usuaemail

        console.log(req.session)
        res.status(200).send(rows[0])
      } else {
        res.status(404).send(`Usuario o contraseña incorrecta por favor vuelva intentar`)
      }
    }
  })
})

router.get('/logout', (req, res) => {
  if(req.session){
    req.session.destroy(error => {
      if(error){
        console.log(error)
      }else{
        console.log(req.session)
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
