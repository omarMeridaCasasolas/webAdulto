const path = require('path');
const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/crud-mongo', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(db => console.log('Base de datos connectada'))
    .catch(err => console.log(err));

//import routes
const indexRoutes = require('./routes/index');

//setting - configuraciones
app.set('port',process.env.PORT || 3000);
app.set('views',path.join(__dirname, 'views'));
app.set('view engine','ejs');
//middlewares
app.use(morgan('dev'));

//routes
app.use('/',indexRoutes);
app.use(express.urlencoded({extended: false})); //enviardatos del navegador

app.listen(app.get('port'),()=>{
    console.log('Server en el puerto '+app.get('port'));
    // console.log(app);
});