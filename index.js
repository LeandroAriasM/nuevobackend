//ESPRESS
const express = require('express');

//PATH publico 
const path = require('path');



require('dotenv').config();  // configuracion de variables de entorno
// App de Express
const app = express();

// Node Server
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server); //aca antes era const io y lo cambio a module.export para tenerlo en socket.js
require('./sockets/socket');




// Path público
const publicPath = path.resolve( __dirname, 'public' );
app.use( express.static( publicPath ) );


server.listen( process.env.PORT, ( err ) => {

    if ( err ) throw new Error(err);

    console.log('Servidor corriendo en puerto', process.env.PORT );

});