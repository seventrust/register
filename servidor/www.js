// Get dependencies
const express = require('express');
const redis = require('redis');
const session = require('express-session');
const redisStore = require('connect-redis')(session);
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const client = redis.createClient();

// Obtener las rutas de la APP
const api = require('./routes/api');
const monitor = require('./routes/monitor')

const app = express();
// Convertidor de las peticiones en POST
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Manejador de sessiones de express
app.use(session({
  secret: 'secret_key_string',
  store: new redisStore({host: 'localhost', port: 6379,
  client: client, ttl: 260}),
  saveUninitialized: false,
  resave: false
}))

// Apuntar al directorio estatico para la app angular
app.use(express.static(path.join(__dirname, '../dist')));

// setear las rutas de la API
app.use('/api', api);
app.use('/monitor', monitor)

// Redirecccionar todas
app.get('**', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

//se declara el puerto por el cual pasar
const port = process.env.PORT || '3000';
app.set('port', port);

//Crear el servidor
const server = http.createServer(app);
server.listen(port, () => console.log(`API running on localhost:${port}`));
