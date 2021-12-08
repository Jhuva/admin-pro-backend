require('dotenv').config();

const express = require('express');
const cors = require('cors');

const { dbConnection } = require('./database/config');

// CREAR EL SERVIDOR DE EXPRESS
const app = express();

// Configurar CORS
app.use( cors() );

// Base de datos
dbConnection();

// RUTAS
app.get( '/', (req, res) => {
    res.json({
        ok: true,
        msg: 'Hola mundo'
    })
} );


app.listen( process.env.PORT , () => {
    console.log('Servidor corriendo en puerto ' + process.env.PORT)
})