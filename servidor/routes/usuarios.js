const express = require('express')
const router = express.Router()
//Conexion con la base de datos
var conn = mysql.createConnection({
  host: 'rdsqa.cfg37zfw51jp.us-west-2.rds.amazonaws.com',
  user: 'root',
  pass: 'moisesqa',
  database: 'ruteo'
})

var ERROR_BD = -1
var ERROR_BUSQUEDA = -2
var SUCCESS = 1

router.get('/listado', (req, res) => {
  if(req.session){
    
  }
})
