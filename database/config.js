const mongoose = require('mongoose');
require('dotenv').config();

const dbConnection = async() => {

    mongoose.connection.openUri(process.env.DB_CNN, { 
        useUnifiedTopology: true,
        useNewUrlParser: true 
        })
            .then(() => {
                console.log('Base de Datos: \x1b[32m%s\x1b[0,', 'online');
            })
            .catch((err) => {
                console.error(err);
            });

}

module.exports = {
    dbConnection
}